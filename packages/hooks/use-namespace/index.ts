import { unref, computed } from 'vue'
import curry from 'lodash/curry'
import { useGlobalConfig } from '../use-global-config'

const curryBem = curry(
  (
    namespace: string,
    block: string,
    blockSuffix: string,
    element: string,
    modifier: string
  ) => {
    let cls = `${namespace}-${block}`
    if (blockSuffix) {
      cls += `-${blockSuffix}`
    }
    if (element) {
      cls += `__${element}`
    }
    if (modifier) {
      cls += `--${modifier}`
    }
    return cls
  }
)

export const useNamespace = (block: string) => {
  const namespace = computed(() => useGlobalConfig('namespace').value || 'el')
  const b = (blockSuffix = '') =>
    curryBem(unref(namespace), block, blockSuffix, '', '')
  const e = (element?: string) =>
    element ? curryBem(unref(namespace), block, '', element, '') : ''
  const m = (modifier?: string) =>
    modifier ? curryBem(unref(namespace), block, '', '')(modifier) : ''
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? curryBem(unref(namespace), block, blockSuffix, element, '')
      : ''
  const em = (element?: string, modifier?: string) =>
    element && modifier
      ? curryBem(unref(namespace), block, '')(element, modifier)
      : ''
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? curryBem(unref(namespace), block)(blockSuffix, element, modifier)
      : ''
  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bem,
  }
}
