import type { App, DefineComponent } from 'vue'
import type { SFCWithInstall } from './types'

/* istanbul ignore next */
export default <T>(component: T) => {
  (component as any).install = (app: App) => {
    app.component(
      ((component as unknown) as DefineComponent).name,
      component,
    )
  }
  return component as SFCWithInstall<T>
}
