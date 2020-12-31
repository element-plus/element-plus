import { ComponentPublicInstance } from 'vue'

declare module '@vue/test-utils' {
  interface DOMWrapper<ElementType> {
    style: CSSStyleDeclaration
  }

  interface VueWrapper<T extends ComponentPublicInstance> {
    style: CSSStyleDeclaration
  }
}
