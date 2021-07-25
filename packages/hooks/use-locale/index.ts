import { getCurrentInstance, provide, reactive, watch } from 'vue'
import English from '@element-plus/locale/lang/en'

import type { InjectionKey, PropType } from 'vue'
import type { Language } from '@element-plus/locale'

export const useLocaleProps = {
  locale: {
    type: Object as PropType<Language>,
  },
  i18n: {
    type: Function as PropType<Translator>,
  },
}

type Translator = (...args: any[]) => string

export type LocaleContext = {
  locale: Language
  lang: string
  t: Translator
}

export const LocaleInjectionKey = 'ElLocaleInjection' as unknown as InjectionKey<LocaleContext>

export const useLocale = () => {
  const vm = getCurrentInstance()
  const props = vm.props as {
    locale: Language
    i18n: Translator
  }
  const localeContext = reactive({
    ...props,
    lang: props.locale.name,
    t: translatorGenerator(props.locale, props.i18n),
  })

  provide(LocaleInjectionKey, localeContext)

  watch(() => props, ({ locale, i18n }) => {
    // dayjs.locale(locale.name)
    localeContext.locale = locale
    localeContext.lang = locale.name
    localeContext.t = translatorGenerator(locale, i18n)
  }, { deep: true })
}


function template(str: string, option) {
  if (!str || !option) return str

  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return option[key]
  })
}

function translatorGenerator(
  locale: Language,
  externalTranslator?: Translator,
): Translator {
  return (...args) => {
    const defaultTranslator = (...args: any[]) => {
      const [path, option] = args
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

    if (externalTranslator) {
      return externalTranslator(...args) || defaultTranslator(...args)
    }
    return defaultTranslator(...args)
  }
}

export const defaultTranslator = translatorGenerator(English)
