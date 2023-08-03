import type { InjectionKey, Ref } from 'vue'
import type { Language } from '@element-plus/locale'

export const localeContextKey: InjectionKey<Ref<Language | undefined>> =
  Symbol('localeContextKey')
