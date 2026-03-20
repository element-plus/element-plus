import type {
  AppContext,
  ComponentOptionsBase,
  EmitsOptions,
  ObjectPlugin,
  SetupContext,
  VNodeProps,
} from 'vue'

type ExtractEmitNames<E> = E extends readonly any[]
  ? never
  : E extends object
    ? Extract<keyof E, string>
    : never

type ExtractEventNames<T> =
  T extends ComponentOptionsBase<any, any, any, any, any, any, any, any>
    ? `on${Capitalize<ExtractEmitNames<T['emits']>>}`
    : never

export type SFCWithInstall<T> = T & ObjectPlugin & SFCWithPropsDefaultsSetter<T>

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export type SFCWithPropsDefaultsSetter<T> = T extends new (...args: any) => any
  ? {
      setPropsDefaults: (
        defaults: Partial<
          Omit<
            InstanceType<T>['$props'],
            ExtractEventNames<T> | keyof VNodeProps
          >
        >
      ) => void
    }
  : unknown

export type EmitFn<E extends EmitsOptions> = SetupContext<E>['emit']
