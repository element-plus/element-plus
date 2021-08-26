import { ComponentPublicInstance ,CSSProperties } from 'vue'

declare module '@vue/test-utils' {
  interface DOMWrapper<ElementType> {
    style: CSSProperties
  }

  interface VueWrapper<T extends ComponentPublicInstance> {
    style: CSSProperties
  }
}
