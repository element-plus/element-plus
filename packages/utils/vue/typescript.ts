import type {
  AllowedComponentProps,
  AppContext,
  ComponentOptionsBase,
  EmitsOptions,
  ObjectPlugin,
  SetupContext,
  VNodeProps,
} from 'vue'

type ExtractEventNames<T> = T extends new (...args: any[]) => any
  ? T extends ComponentOptionsBase<any, any, any, any, any, any, any, any>
    ? T['emits'] extends
        | (string[] & ThisType<void>)
        | (infer Emits & ThisType<any>)
        | undefined
      ? keyof Emits extends string
        ? `on${Capitalize<keyof Emits>}`
        : Emits extends readonly string[]
          ? `on${Capitalize<Emits[number]>}`
          : never
      : never
    : never
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
            | ExtractEventNames<T>
            | keyof VNodeProps
            | keyof AllowedComponentProps
          >
        >
      ) => void
    }
  : unknown

export type EmitFn<E extends EmitsOptions> = SetupContext<E>['emit']
