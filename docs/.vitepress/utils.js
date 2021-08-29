const ensureLang = (lang) => {
  return lang === 'en-US' ? '' : `/${lang}`
}

exports.ensureLang = ensureLang
