// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/nightOwl');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */


module.exports = {
  title: 'Kwil Docs',
  tagline: 'Relational Databases for Web3',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.kwil.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en"],
        // ```
      }),
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kwilteam/docs/tree/main',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
      },
      // Replace with your project's social card
      image: 'img/kwil-social-card.jpg',
      navbar: {
        title: 'Kwil Docs',
        logo: {
          alt: 'Kwil White Feather Logo',
          src: 'img/kwil_icon_logo_white.png',
        },
        items: [
          { to: 'https://discord.com/invite/HzRPZ59Kay/', label: 'Need Help?', position: 'right' },
          {
            href: 'https://github.com/kwilteam',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Build',
            items: [
              {
                label: 'kwil.com',
                href: 'https://www.kwil.com/',
              },
              {
                label: 'Kwil Admin',
                href: 'https://admin.kwil.com/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/KwilTeam',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/HzRPZ59Kay',
              },
            ],
          },
          {
            title: 'Learn',
            items: [
              {
                label: 'Tutorials',
                href: 'https://www.youtube.com/channel/UC7byhahd6AZ0zPSjFX5NTlQ/featured',
              },
              {
                label: 'Medium',
                href: 'https://medium.com/kwildb',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kwil`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['solidity'],
      },
    }),
};
