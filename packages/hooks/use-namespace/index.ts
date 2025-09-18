import { computed, getCurrentInstance, inject, ref, unref } from 'vue'

import type { ComputedRef, InjectionKey, Ref } from 'vue'

export const defaultNamespace = 'el'
const statePrefix = 'is-'

type Falsy = '' | 0 | false | null | undefined
type Conditional<T, Then = any, Else = ''> = T extends Falsy ? Else : Then

export type BEM<
  N extends string,
  B extends string,
  BS extends string | undefined,
  E extends string | undefined,
  M extends string | undefined
> = `${N}-${B}${Conditional<BS, `-${BS}`, ''>}${Conditional<
  E,
  `__${E}`,
  ''
>}${Conditional<M, `--${M}`, ''>}`

export interface NamespaceHelpers<N extends string, B extends string> {
  namespace: ComputedRef<N>
  b: <BS extends string | undefined = ''>(
    blockSuffix?: BS
  ) => Conditional<BS, BEM<N, B, BS, '', ''>, BEM<N, B, '', '', ''>>
  e: <E extends string | undefined = ''>(
    element?: E
  ) => Conditional<E, BEM<N, B, '', E, ''>>
  m: <M extends string | undefined = ''>(
    modifier?: M
  ) => Conditional<M, BEM<N, B, '', '', M>>
  be: <BS extends string | undefined = '', E extends string | undefined = ''>(
    blockSuffix?: BS,
    element?: E
  ) => Conditional<BS, Conditional<E, BEM<N, B, BS, E, ''>>>
  em: <E extends string | undefined = '', M extends string | undefined = ''>(
    element?: E,
    modifier?: M
  ) => Conditional<E, Conditional<M, BEM<N, B, '', E, M>>>
  bm: <BS extends string | undefined = '', M extends string | undefined = ''>(
    blockSuffix?: BS,
    modifier?: M
  ) => Conditional<BS, Conditional<M, BEM<N, B, BS, '', M>>>
  bem: <
    BS extends string | undefined = '',
    E extends string | undefined = '',
    M extends string | undefined = ''
  >(
    blockSuffix?: BS,
    element?: E,
    modifier?: M
  ) => Conditional<BS, Conditional<E, Conditional<M, BEM<N, B, BS, E, M>>>>
  is: {
    <T extends string>(name: T): `${typeof statePrefix}${T}`
    <T extends string, S extends boolean | undefined = true>(
      name: T,
      state: S
    ): S extends true ? `${typeof statePrefix}${T}` : ''
  }
  cssVar: <T extends Record<string, string>>(
    object: T
  ) => {
    [K in keyof T as Conditional<T[K], `--${N}-${K & string}`, never>]: T[K]
  }
  cssVarBlock: <T extends Record<string, string>>(
    object: T
  ) => {
    [K in keyof T as Conditional<
      T[K],
      `--${N}-${B}-${K & string}`,
      never
    >]: T[K]
  }
  cssVarName: <T extends string>(name: T) => `--${N}-${T}`
  cssVarBlockName: <T extends string>(name: T) => `--${N}-${B}-${T}`
}

export const _bem = <
  N extends string,
  B extends string,
  BS extends string,
  E extends string,
  M extends string
>(
  namespace: N,
  block: B,
  blockSuffix: BS,
  element: E,
  modifier: M
): BEM<N, B, BS, E, M> => {
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
  return cls as BEM<N, B, BS, E, M>
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

export const useNamespace = <
  B extends string,
  N extends string = typeof defaultNamespace
>(
  block: B,
  namespaceOverrides?: Ref<N | undefined>
): NamespaceHelpers<N, B> => {
  const namespace = useGetDerivedNamespace(namespaceOverrides)
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
  } as NamespaceHelpers<N, B>
}

export type UseNamespaceReturn = ReturnType<typeof useNamespace>
