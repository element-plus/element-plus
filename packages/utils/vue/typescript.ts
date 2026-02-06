import type { AppContext, EmitsOptions, ObjectPlugin, SetupContext } from 'vue'

export type SFCWithInstall<T> = T & ObjectPlugin & SFCWithPropsDefaultsSetter<T>

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export type SFCWithPropsDefaultsSetter<T> = {
  setPropsDefaults: (
    defaults: T extends new (...args: any) => any
      ? InstanceType<T>['$props']
      : Record<string, any>
  ) => void
}

export type EmitFn<E extends EmitsOptions> = SetupContext<E>['emit']
