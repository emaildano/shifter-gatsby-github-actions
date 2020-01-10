const activeEnv = process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || "development"
require("dotenv").config({
  path: `.env.${activeEnv}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
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
    {
      resolve: `gatsby-plugin-less`,
      options: {
        javascriptEnabled: true,
        modifyVars: {
          // DEFAULTS FOR ANT DESIGN
          // Full list of variables can be found here:
          // https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less
          // @primary-color: #1890ff;
          "layout-header-background": `#0e2339`,
          // primary color for all components
          "primary-color": `#1890ff`,
          // @link-color: #1890ff;
          "link-color": `#1890ff`,
          // @success-color: #52c41a;
          "success-color": `#52c41a`,
          // @warning-color: #faad14;
          "warning-color": `#faad14`,
          // @error-color: #f5222d;
          "error-color": `#f5222d`,
          // @font-size-base: 14px;
          // major text font size
          "font-size-base": `16px`,
          // @heading-color: rgba(0, 0, 0, .85);
          "heading-color": `rgba(0, 0, 0, .85)`,
          // @text-color: rgba(0, 0, 0, .65);
          "text-color": `rgba(0, 0, 0, .65)`,
          // @text-color-secondary : rgba(0, 0, 0, .45);
          "text-color-secondary": `rgba(0, 0, 0, .45)`,
          // @disabled-color : rgba(0, 0, 0, .25);
          "disabled-color": `rgba(0, 0, 0, .25)`,
          // @border-radius-base: 4px;
          "border-radius-base": `4px`,
          // @border-color-base: #d9d9d9;
          "border-color-base": `#d9d9d9`,
          // @box-shadow-base: 0 2px 8px rgba(0, 0, 0, .15);
          "box-shadow-base": `0 2px 8px rgba(0, 0, 0, .15)`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-antd`,
      options: {
        style: true,
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `WPGraphQL`,
        fieldName: `wpgraphql`,
        // url: process.env.SHIFTER_APP_URL + `/graphql/`,
        // url: `https://63239777-0e4c-473c-a1c7-73498363fcf9.app.getshifter.io:23736/graphql/`,
        url: `REPLACE_SHIFTER_URL/graphql/`,
      },
    },
    `gatsby-transformer-sharp`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
