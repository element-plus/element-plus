import { hasOwn, isArray } from '@vue/shared'
import { isPlainObject } from 'lodash-unified'
import { NOOP } from '../functions'

import type { App, Directive } from 'vue'
import type { SFCInstallWithContext, SFCWithInstall } from './typescript'

export const withPropsDefaultsSetter = (target: any) => {
  const _p = target.props
  const props = isArray(_p)
    ? Object.fromEntries(_p.map((key) => [key, {}]))
    : _p

  target.setPropsDefaults = (defaults: Record<string, any>) => {
    if (!props) {
      return
    }

    for (const [key, value] of Object.entries(defaults)) {
      const prop = props[key]

      if (!hasOwn(props, key)) {
        continue
      }

      if (isPlainObject(prop)) {
        // e.g. { type: String }
        props[key] = {
          ...prop,
          default: value,
        }
        continue
      }

      props[key] = {
        type: prop,
        default: value,
      }
    }

    target.props = props
  }
}

export const withInstall = <T, E extends Record<string, any>>(
  main: T,
  extra?: E
) => {
  ;(main as SFCWithInstall<T>).install = (app): void => {
    for (const comp of [main, ...Object.values(extra ?? {})]) {
      app.component(comp.name, comp)
    }
  }

  if (extra) {
    for (const [key, comp] of Object.entries(extra)) {
      ;(main as any)[key] = comp
    }
  }
  withPropsDefaultsSetter(main)
  return main as SFCWithInstall<T> & E
}

export const withInstallFunction = <T>(fn: T, name: string) => {
  ;(fn as SFCWithInstall<T>).install = (app: App) => {
    ;(fn as SFCInstallWithContext<T>)._context = app._context
    app.config.globalProperties[name] = fn
  }

  return fn as SFCInstallWithContext<T>
}

export const withInstallDirective = <T extends Directive>(
  directive: T,
  name: string
) => {
  ;(directive as SFCWithInstall<T>).install = (app: App): void => {
    app.directive(name, directive)
  }

  return directive as SFCWithInstall<T>
}

export const withNoopInstall = <T>(component: T) => {
  ;(component as SFCWithInstall<T>).install = NOOP
  withPropsDefaultsSetter(component)
  return component as SFCWithInstall<T>
}
