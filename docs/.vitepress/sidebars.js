const guideLocale = require('../assets/pages/guide.json')
const { ensureLang } = require('./utils')

function getGuideSidebar() {
  const guideSidebars = {}
  Object.entries(guideLocale).forEach(([lang, val]) => {
    guideSidebars[lang] = Object.entries(val).map(([path, text]) => ({
      link: `${ensureLang(lang)}/guide/${path}`,
      text,
    }))
  })
  return guideSidebars
}

function getComponentsSideBar() {
  return {}
}

// return sidebar with language configs.
// this might create duplicated data but the overhead is ignorable
const getSidebars = () => {
  return {
    '/guide/': getGuideSidebar(),
    '/component/': getComponentsSideBar(),
  }
}

module.exports = getSidebars()
