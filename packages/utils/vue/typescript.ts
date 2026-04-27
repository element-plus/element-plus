import type {
  AllowedComponentProps,
  AppContext,
  Component,
  EmitsOptions,
  ObjectPlugin,
  SetupContext,
  VNodeProps,
} from 'vue'
import type { ComponentEmit, ComponentProps } from 'vue-component-type-helpers'

type ExtractEventNames<T> = keyof {
  [K in keyof ComponentProps<T> as K extends `on${infer Event}`
    ? ComponentEmit<T> extends (event: string, ...args: any[]) => any
      ? never
      : ComponentEmit<T> extends (
            event: Uncapitalize<Event>,
            ...args: any[]
          ) => any
        ? K
        : never
    : never]: unknown
}

type ExcludedProps<T> =
  | ExtractEventNames<T>
  | keyof VNodeProps
  | keyof AllowedComponentProps

export type SFCWithInstall<T> = T & ObjectPlugin & SFCWithPropsDefaultsSetter<T>

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export type SFCWithPropsDefaultsSetter<T> = T extends Component
  ? {
      setPropsDefaults: (defaults: {
        [K in keyof ComponentProps<T> as K extends ExcludedProps<T>
          ? never
          : K]?: ComponentProps<T>[K]
      }) => void
    }
  : unknown

export type EmitFn<E extends EmitsOptions> = SetupContext<E>['emit']
