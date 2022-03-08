import type { ComponentOptionsBase, Ref } from 'vue'

export type ComponentPropsType<
  T extends ComponentOptionsBase<any, any, any, any, any, any, any, any>
> = Parameters<Exclude<T['setup'], undefined>>[0]

export type RecordRef<T extends { [p: string]: any }> = {
  [P in keyof T]: Ref<T[P]>
}
