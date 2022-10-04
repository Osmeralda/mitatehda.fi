/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
    
  plugins: [ 
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-plugin-google-adsense`,
      options: {
        publisherId: `ca-pub-4371075580898574`
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ['Montserrat', 'sans-serif']
        }
        }
      },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `yritykset`,
        path: `${__dirname}/src/tekstit`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `yritykset`,
        path: `${__dirname}/static/images`,
      },
    },
    {
      resolve: `gatsby-plugin-gdpr-cookies`,
      options: {
        googleAnalytics: {
          trackingId: 'G-SCCB7814Q9',
          cookieName: "gatsby-gdpr-google-analytics",
          anonymize: true, 
          allowAdFeatures: false,
        },
      },
    },
  ],
  siteMetadata: {
    title: 'MitäTehdä.fi',
    description: 'Kaikki aktiviteetit mitä pohjoisessa voi tehdä',
    copyright: 'Copyright @Oskari Kurtti',
    id: '00212',
    slug: 'metadata'
  }
}
