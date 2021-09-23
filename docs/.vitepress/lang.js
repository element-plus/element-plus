;(() => {
  const supportedLangs = window.supportedLangs

  const userPreferredLang =
    localStorage.getItem('preferred_lang') || navigator.language

  if (
    supportedLangs.includes(userPreferredLang) &&
    !location.pathname.startsWith(`/${userPreferredLang}`)
  ) {
    location.pathname = [`/${userPreferredLang}`]
      .concat(location.pathname.split('/').slice(2))
      .join('/')
  }
})()
