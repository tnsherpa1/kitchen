import type { GatsbyConfig } from "gatsby";
const path = require("path");

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Kitchen`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  trailingSlash: "ignore",
  plugins: [
    "gatsby-plugin-styled-components",
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-netlify-cms",
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 50,
          breakpoints: [750, 1080, 1366, 1920],
          backgroundColor: `transparent`,
          blurredOptions: {},
          jpgOptions: {},
          pngOptions: {},
          webpOptions: {},
          avifOptions: {},
        },
      },
    },
    {
      resolve: "gatsby-plugin-eslint",
      options: {
        test: /\.js$|\.jsx$|\.ts$|\.tsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ["develop"],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    //Setting up absoulte path
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        "@": path.join(__dirname, "src"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "kitchen menu",
        path: `${__dirname}/content`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "image",
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/uploads/`, // Adjust the path to where your Netlify CMS uploads images
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {},
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`,
      },
    },
  ],
};

export default config;
