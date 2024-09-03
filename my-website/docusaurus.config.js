// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Dollars MoCap - SunnyViewTech',
  tagline: 'Infuse Life into Characters',
  favicon: 'img/dollars_icon.png',

  // Set the production url of your site here
  url: 'https://docs.dollarsmocap.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SunnyViewTech', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-7F76Y3V6C1',
        anonymizeIP: true,
      },
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Dollars MoCap Documentation',
        logo: {
          alt: 'Dollars Logo',
          src: '/img/dollars_icon.png',
        },
        items: [
          {
            label: 'Dollars MoCap',
            href: 'https://www.dollarsmocap.com',
            position: 'right',
          },
          {
            label: 'Discord',
            href: 'https://discord.gg/JNbb8sKjXH',
            position: 'right',
          },
        ],
      },

    algolia: {
      // The application ID provided by Algolia
      appId: '1NN5UDWXQ6',

      // Public API key: it is safe to commit it
      apiKey: '56542df6875f227ac180301fe04863e2',

      indexName: 'dollarsmocap',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,

      //... other Algolia params
    },

      footer: {
        style: 'dark',
        copyright: `SunnyView Technology Co.Ltd.<br/>www.dollarsmocap.com<br/>All Rights Reserved<br/><br/>Built with Docusaurus`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          } 
        }
      }
    }),
      plugins: [
    require.resolve('docusaurus-plugin-image-zoom')
  ],
};

export default config;
