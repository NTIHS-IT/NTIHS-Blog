const { description } = require('../../package')

module.exports = {
  plugins: [
    [
      '@vuepress-reco/vuepress-plugin-rss', 
      {
        site_url: 'https://ntihs-it.github.io/NTIHS-Blog/'
      }
    ]
  ],
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
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { property: 'og:title', content: 'NTIHS-IT Blog' }],
    ['meta', { property: 'og:url', content: 'https://ntihs-it.github.io/NTIHS-Blog/' }],
    ['meta', { property: 'og:image', content: 'https://avatars.githubusercontent.com/u/87763641?s=200&v=4' }],
    ['meta', { property: 'og:description', content: '台南高工網頁社 Blog' }],
    ['meta', { property: 'og:site_name', content: 'NTIHS-IT' }],
    ['link', { rel: 'icon', href: 'https://avatars.githubusercontent.com/u/87763641?s=200&v=4' }],
  ],
  theme: 'reco',
  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  dest: 'build',
  base: '/NTIHS-Blog/',
  themeConfig: {
    repo: '',
    editLinks: false,
    docsDir: '',
    editLinkText: '',
    lastUpdated: false,
    noFoundPageByTencent: false,
    type: 'blog',
    blogConfig: {
      category: {
        location: 7,
        text: 'Category'
      },
      tag: {
        location: 8,
        text: 'Tag'
      }
    },
    nav: [
      {
        text: '主網頁',
        link: 'https://ntihs-it.github.io/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/NTIHS-IT',
        icon: 'reco-github',
      },
      {
        text: 'Facebook',
        link: 'https://www.facebook.com/103730941540184',
        icon: 'reco-facebook',
      },
      {
        text: 'Instergram',
        link: 'https://www.instagram.com/ntihs.web/',
        icon: 'fab fa-instagram'
      },
      {
        text: 'Youtube',
        link: 'https://www.youtube.com/channel/UCex1cjm-Z6WGP1O1CSNTVpw',
        icon: 'fab fa-youtube'
      },
      {
        text: 'Discord',
        link: 'https://discord.gg/QzGSZ3kwgY',
        icon: 'fab fa-discord'
      },
      {
        text: 'TimeLine',
        link: '/timeline/',
        icon: 'reco-date'
      },
    ],
    sidebar: { },
    friendLink: [
      {
        title: 'xiao xigua',
        desc: 'GitHub link',
        email: 'aijdfajodwsdf@gmail.com',
        link: 'https://github.com/xiaoxigua-1',
        logo: 'https://avatars.githubusercontent.com/u/60529600?v=4',
      },
      {
        title: 'Young',
        desc: 'GitHub link',
        emai: 'young20050727@gmail.com',
        link: 'https://github.com/Young-TW',
        logo: 'https://avatars.githubusercontent.com/u/62501690?v=4',
      },
      {
        title: 'zan zan',
        desc: 'GitHub link',
        email: 'Null',
        link: 'https://github.com/zanya945',
        logo: 'https://avatars.githubusercontent.com/u/77784793?v=4',
      },
      {
        title: '匿名提問',
        desc: 'link',
        email: 'Null',
        link: 'https://peing.net/en/ntihs112th',
        logo: 'https://cdn.discordapp.com/attachments/755725610868932678/878616728442138645/2.png'
      }
    ],
    logo: 'https://avatars.githubusercontent.com/u/87763641?s=200&v=4',
    search: true,
    searchMaxSuggestions: 10,
    lastUpdated: 'Last Updated',
    author: 'NTIHS-IT',
    authorAvatar: 'https://avatars.githubusercontent.com/u/87763641?s=200&v=4',
    startYear: '2021',
    vssueConfig: {
      platform: 'github',
      owner: 'ntihs-it',
      repo: 'NTIHS-Blog',
      clientId: '442d96afca01014a729c',
      clientSecret: '7101652f08a969e43d2b3ae8b2d491ec09ed18c0',
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ],
}
