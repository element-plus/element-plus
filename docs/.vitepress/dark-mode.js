;(() => {
  const saved = localStorage.getItem('preferred_theme')
  if (
    saved === 'auto'
      ? window.matchMedia(`(prefers-color-scheme: dark)`).matches
      : saved === 'dark'
  ) {
    document.documentElement.classList.add('dark')
  }
})()
