import { defineUserConfig } from 'vuepress'
import type { DefaultThemeOptions } from 'vuepress'

export default defineUserConfig<DefaultThemeOptions>({
  title: "Template",
  description: 'Template for all projects',

  // head: [
  //   ['link', {
  //     rel: 'stylesheet',
  //     href: 'https://cdn.jsdelivr.net/npm/katex@0.11.1/dist/katex.min.css'
  //   }],
  //   ['link', {
  //     rel: 'stylesheet',
  //     href: 'https://cdn.jsdelivr.net/github-markdown-css/2.2.1/github-markdown.css'
  //   }]
  // ],

  // https://v2.vuepress.vuejs.org/reference/default-theme/config.html
  theme: '@vuepress/theme-default',
  themeConfig: {
    home: '/',

    logo: 'https://img.icons8.com/fluency/64/000000/layers.png',

    navbar: null,

    lastUpdated: true,
    lastUpdatedText: 'Last Update (UTC)',

    editLink: true,
    editLinkText: 'Report an Issue',

    contributors: true,
    contributorsText: 'Contributor(s)',

    docsRepo: 'sagelga/template',
    docsDir: 'docs',
    docsBranch: 'main',
  },

  plugins: [
    ['@vuepress/plugin-google-analytics', {
      id: 'G-JK1C2WK92X'
    }
    ],
    // ['@vuepress/plugin-search', {
    //   locales: {
    //     '/': {
    //       placeholder: 'Search',
    //     },
    //   },
    // },
    // ],
  ],
})
