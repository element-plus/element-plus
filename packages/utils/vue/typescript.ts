import type {
  AppContext,
  EmitsOptions,
  ObjectPlugin,
  SetupContext,
  VNodeProps,
} from 'vue'

export type SFCWithInstall<T> = T & ObjectPlugin & SFCWithPropsDefaultsSetter<T>

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

type PickProps<T> = {
  [P in keyof T as P extends keyof VNodeProps
    ? never
    : P extends `on${string}`
      ? never
      : P]: T[P]
}

export type SFCWithPropsDefaultsSetter<T> = T extends new (...args: any) => any
  ? {
      setPropsDefaults: (
        defaults: Partial<PickProps<InstanceType<T>['$props']>>
      ) => void
    }
  : unknown

export type EmitFn<E extends EmitsOptions> = SetupContext<E>['emit']
