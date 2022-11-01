import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ts-dax',
  description: 'Data Analysis Expression (DAX) functions implemented in TypeScript',
  themeConfig: {
    siteTitle: 'ts-dax',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Changelog', link: 'https://github.com/lukecarr/ts-dax/blob/main/CHANGELOG.md' },
      { text: 'NPM', link: 'https://www.npmjs.com/package/ts-dax' },
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lukecarr/ts-dax' },
    ],
    footer: {
      message: 'Released under the MIT License. Not affiliated with Microsoft.',
      copyright: 'Copyright © 2022-present Luke Carr',
    },
    sidebar: [
      {
        text: 'Introduction',
        collapsible: true,
        items: [
          {
            text: 'Getting started',
            link: '/guide/getting-started',
          },
        ],
      },
    ],
  },
})
