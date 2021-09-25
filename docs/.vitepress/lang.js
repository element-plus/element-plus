;(() => {
  const supportedLangs = window.supportedLangs
  let userPreferredLang = localStorage.getItem('preferred_lang')

  if (!userPreferredLang) {
    const systemLang = navigator.language
    localStorage.setItem('preferred_lang', systemLang)
    userPreferredLang = systemLang
  }

  if (
    supportedLangs.includes(userPreferredLang) &&
    !location.pathname.startsWith(`/${userPreferredLang}`)
  ) {
    const toPath = [`/${userPreferredLang}`]
      .concat(location.pathname.split('/').slice(2))
      .join('/')
    location.pathname = toPath.endsWith('.html')
      ? toPath
      : toPath.endsWith('/')
      ? toPath
      : toPath.concat('/')
  }
})()
