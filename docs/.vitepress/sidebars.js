const guideLocale = require('./i18n/pages/guide.json')
const { ensureLang } = require('./site-utils')

function getGuideSidebar() {
  const guideSidebars = {}
  Object.entries(guideLocale).forEach(([lang, val]) => {
    guideSidebars[lang] = Object.values(val).map((item) => {
      return mapLangPrefix(item, lang)
    })
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

function mapLangPrefix(item, lang) {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      children: item.children.map((child) => {
        return mapLangPrefix(child, lang)
      }),
    }
  }
  return {
    ...item,
    link: `${ensureLang(lang)}${item.link}`,
  }
}

module.exports = getSidebars()
