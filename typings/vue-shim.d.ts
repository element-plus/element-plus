declare module '*.vue' {
  import { defineComponent } from 'vue'
  const component: ReturnType<typeof defineComponent>
  export default component
}

declare type Nullable<T> = T | null;

declare type CustomizedHTMLElement<T> = HTMLElement & T

declare type Indexable<T> = {
  [key: string]: T
}

declare type Hash<T> = Indexable<T>

declare type TimeoutHandle = ReturnType<typeof global.setTimeout>

declare type ComponentSize = 'large' | 'medium' | 'small' | 'mini'
