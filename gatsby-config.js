module.exports = {
  siteMetadata: {
    siteUrl: `https://www.reisebuero-bergfelde.de/`,
    author: 'Heike Wieruch',
    title: 'Reisebüro Bergfelde',
    description:
      'Reisebüro Bergfelde - Ihr Reisebüro in Bergfelde, Birkenwerder und Hohen Neuendorf für individuelle Reisen. Für sie vor Ort: Heike Wieruch ...',
    keywords:
      'Reisebüro Bergfelde, Reisen Bergfelde, Reisebüro Birkenwerder, Reisebüro Hohen Neuendorf, Reisebüro Wieruch',
  },
  pathPrefix: '/',
  plugins: [
    // https://svgsilh.com/image/294474.html
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: `${__dirname}/src/assets/favicon/android-chrome-512x512.png`,
        injectHTML: true,
        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: false,
          favicons: true,
          firefox: true,
          twitter: false,
          yandex: false,
          windows: false,
        },
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`librebaskerville`, `open sans`],
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
  ],
};
