/* eslint-disable */
const sidebars = require('./sidebars')
const nav = require('./nav')
const mdPlugin = require('./plugins')

const sponsors = [
  {
    name: 'bit',
    img: '/assets/images/bit.svg',
    url: 'https://bit.dev/?from=element-ui',
  },
  {
    name: 'renren.io',
    img: '/assets/images/renren.png',
    url: 'https://www.renren.io/?from=element-ui',
  },
]

module.exports = {
  title: 'ElementPlus',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico',
      },
    ],

    [
      'link',
      {
        rel: 'stylesheet',
        href: '//fonts.loli.net/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap',
      },
    ],
  ],
  themeConfig: {
    repo: 'element-plus/element-plus',
    docsDir: 'docs',

    editLinks: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdated: 'Last Updated',

    logo: '../assets/images/element-plus-logo.svg',
    logoSmall: '../assets/images/element-plus-logo-small.svg',
    sidebars,
    nav,
    sponsors,
    agolia: {
      apiKey: 'e32c681af38f324039e81d81834e70b8',
      appId: '7DCTSU0WBW',
    },
  },

  markdown: {
    config: (md) => {
      mdPlugin(md)
    },
  },
}
