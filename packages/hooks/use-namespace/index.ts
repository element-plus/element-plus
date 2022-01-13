import { unref, computed } from 'vue'
import { useGlobalConfig } from '../use-global-config'
import type { MaybeRef } from '@vueuse/core'

export const useNamespace = (block?: MaybeRef<string>) => {
  const namespace = computed(() => useGlobalConfig('namespace').value || 'el')
  const b = (_block?: string) => {
    const _b = _block || unref(block)
    return _b ? `${unref(namespace)}-${_b}` : ''
  }
  const e = (element: string, _block?: string) =>
    element ? `${b(_block)}__${element}` : ''
  const m = (modifier: string, element: string, _block?: string) => {
    if (element && modifier) {
      return `${e(element, _block)}--${modifier}`
    }
    if (modifier) {
      return `${b(_block)}--${modifier}`
    }
    return ''
  }
  const a = (anything: string, _block?: string) =>
    anything ? `${b(_block)}${anything}` : ''
  return {
    namespace,
    b,
    e,
    m,
    a,
  }
}
