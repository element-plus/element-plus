import { NOOP } from '@vue/shared'
import { isServer } from '../utils'
import { useFeatureFlag } from './feature-flag'

const THEME_KEY = 'preferred_theme'
const PREFER_SYSTEM = 'system'

export const useTheme = () => {
  const themeEnabled = useFeatureFlag('theme')
  if (isServer || !themeEnabled.value) return NOOP

  const cachedPreference = localStorage.getItem(THEME_KEY) || PREFER_SYSTEM
  // refer to https://css-tricks.com/dark-modes-with-css/
  const systemPreference = window.matchMedia('(prefers-color-scheme: dark)')

  const rootElement = document.documentElement

  let preferredDark = cachedPreference
    ? cachedPreference === 'dark'
    : systemPreference.matches

  systemPreference.addEventListener('change', (e: MediaQueryListEvent) => {
    if (localStorage.getItem(THEME_KEY) === PREFER_SYSTEM) {
      updateTheme((preferredDark = e.matches))
    }
  })

  function updateTheme(preferredDark: boolean) {
    rootElement.classList[preferredDark ? 'add' : 'remove']('dark')
  }

  // toggler
  return () => {
    updateTheme((preferredDark = !preferredDark))

    localStorage.setItem(
      THEME_KEY,
      preferredDark
        ? systemPreference.matches
          ? PREFER_SYSTEM
          : 'dark'
        : systemPreference.matches
        ? 'light'
        : PREFER_SYSTEM
    )
  }
}
