import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'ts-dax',
  description: 'Data Analysis Expression (DAX) functions implemented in TypeScript',
  lastUpdated: true,
  appearance: 'dark',
  themeConfig: {
    siteTitle: 'ts-dax',
    nav: [
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Changelog', link: '/changelog' },
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
          {
            text: 'Date objects',
            link: '/guide/date-objects',
          },
          {
            text: 'Working with Set&lt;T&gt;',
            link: '/guide/working-with-sets',
          },
        ],
      },
      {
        text: 'Date and time functions',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'calendar',
            link: '/guide/date-time/calendar',
          },
          {
            text: 'dateDiff',
            link: '/guide/date-time/date-diff',
          },
          {
            text: 'day',
            link: '/guide/date-time/day',
          },
        ],
      },
      {
        text: 'Time intelligence functions',
        collapsible: true,
        collapsed: true,
        items: [
          {
            text: 'datesMTD',
            link: '/guide/time-intelligence/dates-mtd',
          },
          {
            text: 'datesQTD',
            link: '/guide/time-intelligence/dates-qtd',
          },
          {
            text: 'datesYTD',
            link: '/guide/time-intelligence/dates-ytd',
          },
        ],
      },
      {
        text: 'Miscellaneous',
        collapsible: true,
        items: [
          {
            text: 'Interval',
            link: '/guide/misc/interval',
          },
        ],
      },
    ],
    editLink: {
      pattern: 'https://github.com/lukecarr/ts-dax/edit/main/docs/:path',
    },
  },
})
