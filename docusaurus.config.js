module.exports = {
  title: 'Ecstatic',
  tagline: 'A Javascript ECS library worth getting excited about',
  url: 'https://brochington.github.io',
  baseUrl: '/ecstatic-doc-site/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'brochington', // Usually your GitHub org/user name.
  projectName: 'ecstatic-doc-site', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Ecstatic',
      logo: {
        alt: 'Ecstatic Javascript library',
        src: 'img/e.png',
      },
      // These are the Top Nav Items
      items: [
        {
          to: 'docs/getting_started/what-is-ecs',
          activeBasePath: 'getting_started',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://brochington.github.io/ecstatic/',
          label: 'API Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/brochington/ecstatic',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Style Guide',
      //         to: 'docs/',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'Community',
      //     items: [
      //       {
      //         label: 'Stack Overflow',
      //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //       },
      //       {
      //         label: 'Discord',
      //         href: 'https://discordapp.com/invite/docusaurus',
      //       },
      //       {
      //         label: 'Twitter',
      //         href: 'https://twitter.com/docusaurus',
      //       },
      //     ],
      //   },
      //   {
      //     title: 'More',
      //     items: [
      //       {
      //         label: 'Blog',
      //         to: 'blog',
      //       },
      //       {
      //         label: 'GitHub',
      //         href: 'https://github.com/facebook/docusaurus',
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Ecstatic. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
