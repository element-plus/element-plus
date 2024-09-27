import type { AppContext, EmitsOptions, Plugin, SetupContext } from 'vue'

export type SFCWithInstall<T> = T & Plugin

export type SFCInstallWithContext<T> = SFCWithInstall<T> & {
  _context: AppContext | null
}

export type EmitFn<E extends EmitsOptions> = SetupContext<E>['emit']
