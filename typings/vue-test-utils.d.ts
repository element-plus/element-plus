import type { CSSProperties, ComponentPublicInstance } from 'vue'

declare module '@vue/test-utils' {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface DOMWrapper<ElementType> {
    style: CSSProperties
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface VueWrapper<T extends ComponentPublicInstance> {
    style: CSSProperties
  }
}
