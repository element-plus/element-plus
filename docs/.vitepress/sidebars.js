const guideLocale = require('./i18n/pages/guide.json')
const componentLocale = require('./i18n/pages/component.json')
const { ensureLang } = require('./site-utils')

function getGuideSidebar() {
  const guideSidebars = {}
  Object.entries(guideLocale).forEach(([lang, val]) => {
    guideSidebars[lang] = Object.values(val).map((item) => {
      return mapPrefix(item, lang)
    })
  })
  return guideSidebars
}

function getComponentsSideBar() {
  const componentSidebar = {}
  Object.entries(componentLocale).forEach(([lang, val]) => {
    componentSidebar[lang] = Object.values(val).map((item) => {
      return mapPrefix(item, lang, '/component')
    })
  })

  return componentSidebar
}

// return sidebar with language configs.
// this might create duplicated data but the overhead is ignorable
const getSidebars = () => {
  return {
    '/guide/': getGuideSidebar(),
    '/component/': getComponentsSideBar(),
  }
}

function mapPrefix(item, lang, prefix = '') {
  if (item.children && item.children.length > 0) {
    return {
      ...item,
      children: item.children.map((child) => {
        return mapPrefix(child, lang, prefix)
      }),
    }
  }
  return {
    ...item,
    link: `${ensureLang(lang)}${prefix}${item.link}`,
  }
}

module.exports = getSidebars()
