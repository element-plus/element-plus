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

type NativeType =
  | null
  | undefined
  | number
  | string
  | boolean
  | symbol
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  | Function

/**
 * Reference from https://github.com/vuejs/core/blob/main/packages/runtime-core/src/apiSetupHelpers.ts#L338-L340
 */
type InferDefaults<T> = {
  [K in keyof T as string extends K ? never : K]?: InferDefault<T[K]>
}

type InferDefault<T> = (() => T & {}) | (T extends NativeType ? T : never)

type ExtractEventNames<T> =
  ComponentEmit<T> extends (event: string, ...args: any[]) => any
    ? never
    : keyof {
        [
          K in keyof ComponentProps<T> as K extends `on${infer Event}`
            ? ComponentEmit<T> extends (
                event: Uncapitalize<Event>,
                ...args: any[]
              ) => any
              ? K
              : never
            : never
        ]: unknown
      }

type ExcludedProps<T> =
  ExtractEventNames<T> | keyof VNodeProps | keyof AllowedComponentProps

export type SFCWithInstall<T> = T & ObjectPlugin & SFCWithPropsDefaultsSetter<T>

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export type SFCWithPropsDefaultsSetter<T> = T extends Component
  ? {
      setPropsDefaults: (
        defaults: InferDefaults<{
          [
            K in keyof ComponentProps<T> as K extends ExcludedProps<T>
              ? never
              : K
          ]?: ComponentProps<T>[K]
        }>
      ) => void
    }
  : unknown

export type EmitFn<E extends EmitsOptions> = SetupContext<E>['emit']
