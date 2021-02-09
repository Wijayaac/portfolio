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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Roboto",
              variants: ["400", "700"],
              fontDisplay: "swap",
            },
            {
              family: "Open Sans",
              fontDisplay: "swap",
            },
          ],
        },
        useMinify: true,
        usePreload: true,
        usePreconnect: false,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
  ],
}
