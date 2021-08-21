const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'NTIHS-IT Blog',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  theme: 'reco',
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
   dest: "build",
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    noFoundPageByTencent: false,
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category"
      },
      tag: {
        location: 3,
        text: "Tag"
      }
    },
    nav: [
      {
        text: 'GitHub',
        link: 'https://github.com/NTIHS-IT/blog',
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date"
      },
    ],
    sidebar: {
      '/guide/': [
        {
          title: 'Guide',
          collapsable: false,
          children: [
            '',
            'using-vue',
          ]
        }
      ],
    },
    friendLink: [
      {
        title: "xiao xigua",
        desc: "GitHub link",
        email: "aijdfajodwsdf@gmail.com",
        link: "https://github.com/xiaoxigua-1",
      },
      {
        title: "Young",
        desc: "GitHub link",
        emai: "young20050727@gmail.com",
        link: "https://github.com/Young-TW",
      },
      {
        title: "zan zan",
        desc: "GitHub link",
        email: "Null",
        link: "https://github.com/zanya945",
      }
    ],
    logo: "https://avatars.githubusercontent.com/u/87763641?s=200&v=4",
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: "Last Updated",
    author: "NTIHS-IT",
    authorAvatar: "https://avatars.githubusercontent.com/u/87763641?s=200&v=4",
    startYear: "2021",
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
}
