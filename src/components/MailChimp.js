import React, { useState, Fragment } from 'react'
import { globalHistory } from '@reach/router'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import PropTypes from 'prop-types'
import uniqid from 'uniqid'

// map group names to mailchimp fields
function normalizeGroups(groups) {

  const groupFields = {
    announcements: { label: 'group[50277][1]', value: '1' },
    blogPosts: { label: 'group[50277][2]', value: '2' }
  }
  const defaultField = [ 'announcements' ]
  const groupList = {}
  const validKeys = Object.keys(groupFields)

  // normalize input; should be an array of valid gro up names
  const validGroups = typeof groups === 'undefined' 
                        ? defaultField 
                        : typeof groups === 'string'
                          ? [ groups ]
                          : Array.isArray( groups )
                            ? groups
                            : defaultField

  // match group names to mailchimp values
  validGroups.forEach( item => { 
    if ( validKeys.includes(item) ) {
      const { label, value } = groupFields[item]
      groupList[ label ] = value
    }    
  })

  // if we've found matches, return them, otherwise defaults
  return Object.keys(groupList).length
          ? groupList 
          : { [groupFields[defaultField].label]: groupFields[defaultField].value } 

}


const MailingListForm = ({basename, groups}) => {

  const [formSubmit, onFormSubmit] = useState({ result:'', msg:'' }) 
  const [working, onWorking] = useState(false) 

  const honeypotField = uniqid('hp-')

  const handleSubmit = (e) => {

    e.preventDefault()
    onWorking(true)
    const form = e.target

    if ( form[honeypotField].value && form[honeypotField].value.length ) {
      return null;
    }

    const formFields = { 
      PATHNAME: form.PATHNAME.value, 
      ...normalizeGroups(groups) 
    }
    addToMailchimp( form.EMAIL.value, formFields ) 
      .then( data => {
        onFormSubmit(data)
        onWorking(false)
      })
  }

  const btnClasses = [
    'button',
    'is-ow-red',
    working ? 'is-loading' : ''
  ]
  .filter(item => item)
  .join(' ')

  const btnText = formSubmit.result === 'success' ? 'Success!' : 'Subscribe'

  return ( 
    <Fragment>
      <form 
        id={basename} 
        className='mailinglist' 
        onSubmit={handleSubmit}
      >
        <input type='email' name='EMAIL' required={true} placeholder='Email Address' />
        <input type='hidden' name='PATHNAME' value={globalHistory.location.pathname} />
        <div style={{position: 'absolute', left: '-5000px'}}  aria-hidden="true"> {/* honeypot*/ }
          <input type="text" name={honeypotField} tabIndex="-1" />
        </div>
        <button 
          type='submit' 
          name='subscribe' 
          className={btnClasses} 
          disabled={formSubmit.result === 'success'}
        >{btnText}</button>
      </form>
      <div className={`submit-msg ${formSubmit.result}`}>{formSubmit.msg}</div>
    </Fragment>
  )

}

MailingListForm.propTypes = {
  basename: PropTypes.string,
  groups: PropTypes.array
}


export default MailingListForm