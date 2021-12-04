import { computed, getCurrentInstance, inject, provide, ref, unref } from 'vue'
import get from 'lodash/get'
import English from '@element-plus/locale/lang/en'
import { buildProps, definePropType } from '@element-plus/utils/props'
import type { MaybeRef } from '@vueuse/core'
import type { InjectionKey, Ref } from 'vue'
import type { Language } from '@element-plus/locale'

export type TranslatorOption = Record<string, string | number>
export type Translator = (path: string, option?: TranslatorOption) => string
export type LocaleContext = {
  locale: Ref<Language>
  lang: Ref<string>
  t: Translator
}

export const useLocaleProps = buildProps({
  locale: {
    type: definePropType<Language>(Object),
  },
})

export const localeContextKey: InjectionKey<LocaleContext> =
  Symbol('localeContextKey')

// this is meant to fix global methods like `ElMessage(opts)`, this way we can inject current locale
// into the component as default injection value.
// refer to: https://github.com/element-plus/element-plus/issues/2610#issuecomment-887965266
let cache: LocaleContext

export const provideLocale = () => {
  const vm = getCurrentInstance()!
  const props = vm.props as {
    locale: Language
  }
  const locale = computed(() => props.locale || English)
  const lang = computed(() => locale.value.name)

  const t = buildTranslator(locale)
  const provides: LocaleContext = {
    locale,
    lang,
    t,
  }

  // this could be broken if someone tries to do following:

  /**
   * <config-provider :locale="lang1">
   *   <config-provider :locale="lang2">
   *     Something calls modal component.
   *   </config-provider>
   * </config-provider>
   */
  cache = provides
  provide(localeContextKey, provides)
}

export const buildTranslator =
  (locale: MaybeRef<Language>): Translator =>
  (path, option) =>
    translate(path, option, unref(locale))

export const translate = (
  path: string,
  option: undefined | TranslatorOption,
  locale: Language
): string =>
  (get(locale, path, path) as string).replace(
    /\{(\w+)\}/g,
    (_, key) => `${option?.[key] ?? `{${key}}`}`
  )

export const localeProviderMaker = (locale = English) => {
  const lang = ref(locale.name)
  const localeRef = ref(locale)
  return {
    lang,
    locale: localeRef,
    t: buildTranslator(localeRef),
  }
}

export const useLocale = () => {
  return inject(localeContextKey, cache || localeProviderMaker(English))
}
