import { computed } from 'vue'
import navbarLocale from '../../i18n/component/navbar.json'
import { useLang } from './lang'

export function useNavbarLocale() {
  const lang = useLang()

  return computed<Record<string, string>>(() => navbarLocale[lang.value])
}
