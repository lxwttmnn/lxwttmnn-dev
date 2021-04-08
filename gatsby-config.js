module.exports = {
  siteMetadata: {
    siteUrl: "https://www.awittmann.io",
    title: "Alexander Wittmann",
    jobTitle: "Full-Stack Developer (Angular & Spring)",
    description: `Alexander Wittmann - ${this.jobTitle}`,
    navigationLinks: [
      { url: "/", name: "Home" },
      { url: "/about/", name: "About" },
      { url: "/contact/", name: "Contact" },
    ],
    contacts: [
      {
        name: "Email",
        url: "mailto:awittmann@outlook.com",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/alexander-wittmann-9a9887a9",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/lxwttmnn",
      },
      {
        name: "GitHub",
        url: "https://github.com/lxwttmnn",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    "gatsby-plugin-sass",
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: ["gatsby-remark-prismjs"],
      },
    },
  ],
}
