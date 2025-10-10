import type { AppContext, EmitsOptions, ObjectPlugin, SetupContext } from 'vue'

export type SFCWithInstall<T> = T & ObjectPlugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export type EmitFn<E extends EmitsOptions> = SetupContext<E>['emit']
