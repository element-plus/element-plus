import type { InjectionKey, Ref } from 'vue'

export type CollectionItem<T = Record<string, any>> = {
  ref: HTMLElement | null
} & T

export type ElCollectionInjectionContext = {
  itemMap: Map<HTMLElement, CollectionItem>
  getItems: <T>() => CollectionItem<T>[]
  collectionRef: Ref<HTMLElement | null>
}

export const COLLECTION_INJECTION_KEY: InjectionKey<ElCollectionInjectionContext> =
  Symbol('elCollection')

export const COLLECTION_ITEM_SIGN = 'data-el-collection-item'
