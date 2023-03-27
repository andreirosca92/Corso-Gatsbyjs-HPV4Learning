/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

module.exports = {
  siteMetadata: {
    title: "Introduzione a Gatsby",
    description: "La vera sfida è scrivere giusto",
    author: "@andreirosca",
    type: {
      category: "SSR",
      level: "intermediate",
      score: 8,
    },
    dummyData: ["item 1", "item 2"],
    otherCourses: [
      {
        category: "React",
        level: "junior",
        score: 7,
      },
      {
        category: "Javascript",
        level: "basic",
        score: 7,
      },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        // The unique name for each instance
        name: `images`,
        // Path to the directory
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
