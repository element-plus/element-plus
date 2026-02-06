import type { AppContext, EmitsOptions, ObjectPlugin, SetupContext } from 'vue'

export type SFCWithInstall<T> = T & ObjectPlugin & SFCWithPropsDefaultsSetter<T>

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export type SFCWithPropsDefaultsSetter<T> = T extends new (...args: any) => any
  ? {
      setPropsDefaults: (defaults: InstanceType<T>['$props']) => void
    }
  : unknown

export type EmitFn<E extends EmitsOptions> = SetupContext<E>['emit']
