import type { App, DefineComponent } from 'vue'
import type { SFCWithInstall } from './types'

/* istanbul ignore next */
export default <T extends DefineComponent<any, any, any>>(component: T) => {
  ;(component as any).install = (app: App): void => {
    app.component(component.name, component)
  }
  return component as SFCWithInstall<T>
}
