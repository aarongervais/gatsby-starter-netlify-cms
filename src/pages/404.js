import React, {Fragment} from 'react'
import { Helmet } from 'react-helmet'
import '../style/all.sass'

const NotFoundPage = () => (
  <Fragment>
    <Helmet>
      <html lang="en" />
      <title>Page Not Found</title>
      <link rel="apple-touch-icon" sizes="57x57" href={`/img/favicons/apple-icon-57x57.png`} />
        <link rel="apple-touch-icon" sizes="60x60" href={`/img/favicons/apple-icon-60x60.png`} />
        <link rel="apple-touch-icon" sizes="72x72" href={`/img/favicons/apple-icon-72x72.png`} />
        <link rel="apple-touch-icon" sizes="76x76" href={`/img/favicons/apple-icon-76x76.png`} />
        <link rel="apple-touch-icon" sizes="114x114" href={`/img/favicons/apple-icon-114x114.png`} />
        <link rel="apple-touch-icon" sizes="120x120" href={`/img/favicons/apple-icon-120x120.png`} />
        <link rel="apple-touch-icon" sizes="144x144" href={`/img/favicons/apple-icon-144x144.png`} />
        <link rel="apple-touch-icon" sizes="152x152" href={`/img/favicons/apple-icon-152x152.png`} />
        <link rel="apple-touch-icon" sizes="180x180" href={`/img/favicons/apple-icon-180x180.png`} />
        <link rel="icon" type="image/png" sizes="192x192"  href={`/img/favicons/android-icon-192x192.png`} />
        <link rel="icon" type="image/png" sizes="32x32" href={`/img/favicons/favicon-32x32.png`} />
        <link rel="icon" type="image/png" sizes="96x96" href={`/img/favicons/favicon-96x96.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`/img/favicons/favicon-16x16.png`} />
        <link rel="manifest" href={`/img/favicons/manifest.json`} />
        <meta name="msapplication-TileColor" content="#F1E8E1" />
        <meta name="msapplication-TileImage" content={`/img/favicons/ms-icon-144x144.png`} />
        <meta name="theme-color" content="#F1E8E1" />

    </Helmet>
    <div>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Fragment>
)

export default NotFoundPage
