/* eslint-disable */
const sidebars = require('./sidebars')
const nav = require('./nav')

const sponsors = [
  {
    name: 'bit',
    img: '/assets/images/bit.svg',
    url: 'https://bit.dev/?from=element-ui'
  },
  {
    name: 'renren.io',
    img: '/assets/images/renren.png',
    url: 'https://www.renren.io/?from=element-ui'
  }
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
  ],
  themeConfig: {
    logo: '../assets/images/element-plus-logo.svg',
    logoSmall: '../assets/images/element-plus-logo-small.svg',
    sidebars,
    nav,
    sponsors,
  },
}
