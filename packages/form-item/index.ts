import { App } from 'vue'
import FormItem from '../form/src/form-item.vue'

FormItem.install = (app: App): void => {
  app.component(FormItem.name, FormItem)
}

export default FormItem
