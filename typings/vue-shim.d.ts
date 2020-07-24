declare module '*.vue' {
  import { Component, ComponentPublicInstance } from 'vue'
  const _default: Component & {
    new (): ComponentPublicInstance
  }
  export default _default
}
