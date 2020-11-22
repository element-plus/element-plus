import { App } from 'vue'
import Form from './src/form.vue'

Form.install = (app: App): void => {
  app.component(Form.name, Form)
}

export default Form


export * from './src/token'
