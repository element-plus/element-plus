import { ComponentPublicInstance } from '@vue/test-utils'

declare module '@vue/test-utils' {
  interface DOMWrapper<ElementType> {
    style: CSSStyleDeclaration
  }

  interface VueWrapper<T extends ComponentPublicInstance> {
    style: CSSStyleDeclaration
  }
}
