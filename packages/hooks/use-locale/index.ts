import { computed, getCurrentInstance, inject, provide, ref, unref } from 'vue'
import English from '@element-plus/locale/lang/en'
import { buildProps, definePropType } from '@element-plus/utils/props'
import type { MaybeRef } from '@vueuse/core'
import type { InjectionKey, Ref } from 'vue'
import type { Language } from '@element-plus/locale'

export const useLocaleProps = buildProps({
  locale: {
    type: definePropType<Language>(Object),
  },
})

export type Translator = (path: string, option?: Record<string, any>) => string
export type LocaleContext = {
  locale: Ref<Language>
  lang: Ref<string>
  t: Translator
}

function template(str: string, option?: Record<string, any>) {
  if (!str || !option) return str
  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return option[key]
  })
}

const defaultTranslator = (
  locale: Language,
  path: string,
  option?: Record<string, any>
) => {
  let value
  const array = path.split('.')
  let current = locale
  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i]
    value = current[property]
    if (i === j - 1) return template(value, option)
    if (!value) return ''
    current = value
  }
}

export const localeContextKey: InjectionKey<LocaleContext> =
  Symbol('localeContextKey')

// this is meant to fix global methods like `ElMessage(opts)`, this way we can inject current locale
// into the component as default injection value.
// refer to: https://github.com/element-plus/element-plus/issues/2610#issuecomment-887965266
let localeContextCache: LocaleContext

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
  localeContextCache = provides
  provide(localeContextKey, provides)
}

export const buildTranslator =
  (locale: MaybeRef<Language>): Translator =>
  (path: string, option?: Record<string, any>) =>
    translate(path, unref(locale), option)

export const translate = (
  path: string,
  locale: Language,
  option?: Record<string, any>
): string => defaultTranslator(locale, path, option)!

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
  return inject(
    localeContextKey,
    localeContextCache || localeProviderMaker(English)
  )
}
