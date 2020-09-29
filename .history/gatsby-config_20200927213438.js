module.exports = {
  siteMetadata: {
    title: `Pod.ly`,
    description: `First Gatsby Website built for a fake aesthetic earbud company.`,
    author: `@KeelyRetzloff`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    [`gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/podlylogo.png`, 
      }
    },
      {
        resolve: 'gatsby-plugin-web-font-loader',
        options: {
          Typekit: {
            id: 'snz0vyw',
          }
        }
      },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
