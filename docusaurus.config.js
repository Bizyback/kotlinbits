// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "KotlinBits",
  tagline: "Fun with Kotlin",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://kotlinbits.vercel.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "MamboBryan", // Usually your GitHub org/user name.
  projectName: "kotlinbits", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "KotlinBits",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Bits",
          },
          { to: "/blog", label: "Articles", position: "left" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Kotlin",
            items: [
              {
                label: "Docs",
                href: "https://kotlinlang.org/docs/home.html",
              },
              {
                label: "Idioms",
                href: "https://kotlinlang.org/docs/idioms.html",
              },
              {
                label: "Playground",
                href: "https://pl.kotl.in/TC3KcNUl3",
              },
              {
                label: "What's New",
                href: "https://kotlinlang.org/docs/whatsnew-eap.html",
              },
            ],
          },
          {
            title: "KotlinKenya",
            items: [
              {
                label: "Telegram",
                href: "https://t.me/kotlinKenya",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/kotlinkenya",
              },
              {
                label: "Meetup",
                href: "http://meetup.com/KotlinKenya/",
              },
              {
                label: "Github",
                href: "https://github.com/KotlinKenya",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Maintainer",
                href: "https://justmambo.web.app",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} KotlinBits. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["kotlin", "java", "scala"],
      },
    }),
};

module.exports = config;
