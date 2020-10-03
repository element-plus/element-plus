import { App } from 'vue'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'
import LabelWrap from './src/label-wrap'

export default (app: App): void => {
  app.component(Form.name, Form)
  app.component(FormItem.name, FormItem)
  app.component(LabelWrap.name, LabelWrap)
}
