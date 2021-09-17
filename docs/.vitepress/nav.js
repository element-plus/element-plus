const navLocale = require('./i18n/pages/sidebar.json')
const { ensureLang } = require('./site-utils')

// Mapping the first sub link to the nav link to avoid 404 error.

function getNav() {
  const nav = {}
  Object.entries(navLocale).forEach(([lang, val]) => {
    nav[lang] = Object.values(val).map((item) => {
      return {
        ...item,
        link: `${ensureLang(lang)}${item.link}`,
      }
    })
    nav[lang].push(
      lang === 'zh-CN'
        ? {
            text: '旧版文档',
            link: 'https://doc-archive.element-plus.org/',
          }
        : {
            text: 'Old Doc',
            link: 'https://doc-archive.element-plus.org/',
          }
    )
  })

  return nav
}

module.exports = getNav()
