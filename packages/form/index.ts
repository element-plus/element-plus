import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Form from './src/form.vue'

Form.install = (app: App): void => {
  app.component(Form.name, Form)
}

const _Form: SFCWithInstall<typeof Form> = Form

export default _Form


export * from './src/token'
