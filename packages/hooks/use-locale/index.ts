import {
  getCurrentInstance,
  inject,
  provide,
  reactive,
  ref,
  toRefs,
  watch,
} from 'vue'
import English from '@element-plus/locale/lang/en'

import type { InjectionKey, PropType, Ref } from 'vue'
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
  locale: Ref<Language>
  lang: Ref<string>
  t: Translator
}

export const LocaleInjectionKey = 'ElLocaleInjection' as unknown as InjectionKey<LocaleContext>

export const useLocale = () => {
  const vm = getCurrentInstance()
  const props = vm.props as {
    locale: Language
    i18n: Translator
  }

  const _translator = (...args: any[]) => {
    const [path, option] = args
    let value
    const array = path.split('.')
    let current = props.locale
    for (let i = 0, j = array.length; i < j; i++) {
      const property = array[i]
      value = current[property]
      if (i === j - 1) return template(value, option)
      if (!value) return ''
      current = value
    }
  }

  const t = (...args: any[]) => {
    return props.i18n?.(...args) || _translator(...args)
  }

  const localeContext = reactive({
    ...props,
    lang: props.locale.name,
  })

  provide(LocaleInjectionKey, {
    ...toRefs(localeContext),
    t,
  })

  watch(() => props.locale, locale => {
    // dayjs.locale(locale.name)
    localeContext.locale = locale
    localeContext.lang = locale.name
  })
}


function template(str: string, option) {
  if (!str || !option) return str

  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return option[key]
  })
}


export const useLocaleInject = () => {
  return inject(LocaleInjectionKey, {
    lang: ref(English.name),
    locale: ref(English),
    t: (...args) => {
      const defaultTranslator = (...args: any[]) => {
        const [path, option] = args
        let value
        const array = path.split('.')
        let current = English
        for (let i = 0, j = array.length; i < j; i++) {
          const property = array[i]
          value = current[property]
          if (i === j - 1) return template(value, option)
          if (!value) return ''
          current = value
        }
      }
      return defaultTranslator(...args)
    },
  })
}
