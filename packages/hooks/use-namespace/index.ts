import { computed, getCurrentInstance, inject, ref, unref } from 'vue'

import type { InjectionKey, Ref } from 'vue'

export const defaultNamespace = 'el'
const statePrefix = 'is-'

// 实际创建 BEM 风格的类名的核心函数
const _bem = (
  namespace: string, // 命名空间前缀，通常是 'el'
  block: string, // 块名称，如 'button', 'input' 等
  blockSuffix: string, // 块后缀，用于变体，如 'primary'
  element: string, // 元素名称，如 'icon', 'text' 等
  modifier: string // 修饰符，如 'disabled', 'large' 等
) => {
  // 1、起始基础: 从命名空间和块名开始 ${namespace}-${block}
  let cls = `${namespace}-${block}` // 例如: 'el-button'

  // 2、添加块后缀（如果有）
  if (blockSuffix) {
    cls += `-${blockSuffix}` // 例如: 'el-button-primary'
  }

  // 3、添加元素分隔符和元素名 (如果存在)
  if (element) {
    cls += `__${element}` // 例如: 'el-button__icon'
  }

  // 4、添加修饰符前缀和修饰符名 (如果存在)
  if (modifier) {
    cls += `--${modifier}` // 例如: 'el-button--disabled'
  }

  // 5、返回最终的类名
  // 例如: 'el-button__icon--disabled'
  // 或者 'el-button-primary__icon--large'
  // 或者 'el-button--primary--large'
  // 或者 'el-button--primary__icon--large'
  return cls
}

export const namespaceContextKey: InjectionKey<Ref<string | undefined>> =
  Symbol('namespaceContextKey')

export const useGetDerivedNamespace = (
  namespaceOverrides?: Ref<string | undefined>
) => {
  const derivedNamespace =
    namespaceOverrides ||
    (getCurrentInstance()
      ? inject(namespaceContextKey, ref(defaultNamespace))
      : ref(defaultNamespace))
  const namespace = computed(() => {
    return unref(derivedNamespace) || defaultNamespace
  })
  return namespace
}

// 创建 BEM 风格的类名的方法生成工具函数
// block: the block name, e.g. 'button'
export const useNamespace = (
  block: string,
  namespaceOverrides?: Ref<string | undefined>
) => {
  const namespace = useGetDerivedNamespace(namespaceOverrides) // 获取默认命名空间（如 'el'）

  const b = (blockSuffix = '') =>
    _bem(namespace.value, block, blockSuffix, '', '')
  const e = (element?: string) =>
    element ? _bem(namespace.value, block, '', element, '') : ''
  const m = (modifier?: string) =>
    modifier ? _bem(namespace.value, block, '', '', modifier) : ''
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? _bem(namespace.value, block, blockSuffix, element, '')
      : ''
  const em = (element?: string, modifier?: string) =>
    element && modifier
      ? _bem(namespace.value, block, '', element, modifier)
      : ''
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? _bem(namespace.value, block, blockSuffix, '', modifier)
      : ''
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(namespace.value, block, blockSuffix, element, modifier)
      : ''
  const is: {
    (name: string, state: boolean | undefined): string
    (name: string): string
  } = (name: string, ...args: [boolean | undefined] | []) => {
    const state = args.length >= 1 ? args[0]! : true
    return name && state ? `${statePrefix}${name}` : ''
  }

  // for css var
  // --el-xxx: value;
  const cssVar = (object: Record<string, string>) => {
    const styles: Record<string, string> = {}
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${key}`] = object[key]
      }
    }
    return styles
  }
  // with block
  const cssVarBlock = (object: Record<string, string>) => {
    const styles: Record<string, string> = {}
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace.value}-${block}-${key}`] = object[key]
      }
    }
    return styles
  }

  const cssVarName = (name: string) => `--${namespace.value}-${name}`
  const cssVarBlockName = (name: string) =>
    `--${namespace.value}-${block}-${name}`

  return {
    namespace,
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    // css
    cssVar,
    cssVarName,
    cssVarBlock,
    cssVarBlockName,
  }
}

export type UseNamespaceReturn = ReturnType<typeof useNamespace>
