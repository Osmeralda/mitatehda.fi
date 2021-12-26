/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        },
      },
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `yritykset`,
        path: `${__dirname}/src/tekstit`,
      },
    },
  ],
  siteMetadata: {
    title: 'MitäTehdä.fi',
    description: 'Kaikki aktiviteetit mitä pohjoisessa voi tehdä',
    copyright: 'Copyright @Oskar.IO'
  }
}
