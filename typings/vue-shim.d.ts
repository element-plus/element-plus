declare module '*.vue' {
  import { Component, ComponentPublicInstance } from 'vue'
  const _default: Component & {
    // eslint-disable-next
    new (): ComponentPublicInstance<any>
  }
  export default _default
}
