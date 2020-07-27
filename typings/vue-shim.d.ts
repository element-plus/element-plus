declare module '*.vue' {
  import { Component, ComponentPublicInstance } from 'vue'
  const _default: Component & {
    new (): ComponentPublicInstance<any>
  }
  export default _default
}
