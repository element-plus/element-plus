declare type Nullable<T> = T | null;

declare type CustomizedHTMLElement<T> = HTMLElement & T

declare type Indexable<T> = {
  [key: string]: T
}

declare type Hash<T> = Indexable<T>

declare type TimeoutHandle = ReturnType<typeof global.setTimeout>
