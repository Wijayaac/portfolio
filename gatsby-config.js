/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://cryptic-castle-76741.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`projects`],
        //If using single types place them in this array.
        singleTypes: [`home`],
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
