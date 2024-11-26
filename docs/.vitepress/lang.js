;(() => {
  const supportedLangs = window.supportedLangs
  const cacheKey = 'preferred_lang'
  const defaultLang = 'en-US'
  const handleNavigatorLang = (navLang) => {
    const { language, region } = new Intl.Locale(navLang).maximize()
    return `${language}-${region}`
  }
  let userPreferredLang =
    localStorage.getItem(cacheKey) || handleNavigatorLang(navigator.language)
  const language = supportedLangs.includes(userPreferredLang)
    ? userPreferredLang
    : defaultLang
  localStorage.setItem(cacheKey, language)
  userPreferredLang = language
  if (!location.pathname.startsWith(`/${userPreferredLang}`)) {
    const toPath = [`/${userPreferredLang}`]
      .concat(location.pathname.split('/').slice(2))
      .join('/')
    location.pathname =
      toPath.endsWith('.html') || toPath.endsWith('/')
        ? toPath
        : toPath.concat('/')
  }
  if (navigator && navigator.serviceWorker.controller) {
    navigator.serviceWorker.controller.postMessage({
      type: 'LANG',
      lang: userPreferredLang,
    })
  }
})()
