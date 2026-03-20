import type { UploadProps } from '@element-plus/components/upload'
import type {
  AppContext,
  EmitsOptions,
  ObjectPlugin,
  SetupContext,
  VNodeProps,
} from 'vue'

// Keep 'on-' prefixed props to avoid conflict with `on${Capitalize<string>}` handlers
type PropsWhiteListUnion<Props> = [keyof UploadProps] extends [keyof Props]
  ? keyof UploadProps
  : never

type PickProps<Props> = {
  [Key in keyof Props as Key extends PropsWhiteListUnion<Props>
    ? Key
    : Key extends keyof VNodeProps
      ? never
      : Key extends `on${Capitalize<string>}`
        ? never
        : Key]: Props[Key]
}

export type SFCWithInstall<T> = T & ObjectPlugin & SFCWithPropsDefaultsSetter<T>

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export type SFCWithPropsDefaultsSetter<T> = T extends new (...args: any) => any
  ? {
      setPropsDefaults: (
        defaults: Partial<PickProps<InstanceType<T>['$props']>>
      ) => void
    }
  : unknown

export type EmitFn<E extends EmitsOptions> = SetupContext<E>['emit']
