declare module '*.vue' {
  import { Component, ComponentPublicInstance } from 'vue'
  const _default: Component & {
    // eslint-disable-next-line
    new (): ComponentPublicInstance<any>
  }
  export default _default
}

declare type Nullable<T> = T | null;

declare type CustomizedHTMLElement<T> = HTMLElement & T;
