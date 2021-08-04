import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

Form.install = (app: App): void => {
  app.component(Form.name, Form)
  app.component(FormItem.name, FormItem)
}

Form.FormItem = FormItem

const _Form = Form as any as SFCWithInstall<typeof Form> & {
  FormItem: typeof FormItem
}

export default _Form


export * from './src/token'
