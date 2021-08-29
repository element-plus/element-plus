const navLocale = require('../assets/pages/nav.json')
const { ensureLang } = require('./utils')

// Mapping the first sub link to the nav link to avoid 404 error.

const firstUrlMap = {
  guide: 'design',
  component: 'layout',
  resource: ''
}

function getNav() {
  const nav = {}
  Object.entries(navLocale).forEach(([lang, val]) => {
    nav[lang] = Object.entries(val).map(([path, text]) => ({
      link: `${ensureLang(lang)}/${path}/${firstUrlMap[path]}`,
      text,
    }))
  })
  return nav
}

module.exports = getNav()
