/* eslint-disable */
const sidebars = require('./sidebars')
const nav = require('./nav')

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
  },
}
