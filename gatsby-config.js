module.exports = {
  siteMetadata: {
    title: `# дешеві меблі`,
    description: `Меблі недорогі в м.Стрий, різні, спальні, вітальні, прихожі, системи`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-mdx`,
  ],
}
