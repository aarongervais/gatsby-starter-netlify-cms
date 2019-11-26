module.exports = {
  siteMetadata: {
    title: 'Otherwise Brewing',
    description: 'Beer beyond barley. San Francisco\'s first gluten-free brewery.',
    imageDimensions: {
      mobile: {width: 828, height: 1472},
      desktop: {width: 2880, height: 1516}
    },
    nav: [
      { label: 'Home', link: '/', options: 'hide-top-desktop'},
      { label: 'Our Beers', link: '/beers', options: ''},
      { label: 'Where to Find', link: '/where', options: ''},
      { label: 'More', link: '', options: 'subnav-toggle'},
      { label: 'Our Story', link: '/about', options: 'subnav-item'},
      { label: 'FAQs', link: '/faq', options: 'subnav-item'},
      { label: 'Blog', link: '/blog', options: 'subnav-item'},
      { label: 'Sell our Beer', link: '/vendors', options: 'subnav-item'},
      { label: 'Contact Us', link: '/contact', options: 'subnav-item'},
    ]
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
      //  postCssPlugins: [ cssNano() ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/style/typography`,
      },
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/img`,
        name: 'images',
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2048,
            },
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
            options: {
              destinationDir: 'static',
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /social/
        }
      }
    },
    {
      resolve: 'gatsby-plugin-netlify-cms',
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://otherwisebrewing.us4.list-manage.com/subscribe/post?u=634ba71feb622dd3b355a4411&id=d02328221c',
      }
    },
    {
      resolve: 'gatsby-plugin-purgecss', // purges all unused/unreferenced css rules
      options: {
        develop: false, // Activates purging in npm run develop
        purgeOnly: ['/style/all.sass'], // applies purging only on the bulma css file
        whitelistPatterns: [
          /^beer-summary-card/,
        ],
        whitelistPatternsChildren: [
          /is-reversed-mobile$/
        ]
      },
    }, // must be after other CSS plugins
    'gatsby-plugin-netlify', // make sure to keep it last in the array
  ],
}
