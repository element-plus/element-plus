import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import FormItem from '../form/src/form-item.vue'

FormItem.install = (app: App): void => {
  app.component(FormItem.name, FormItem)
}

const _FormItem: SFCWithInstall<typeof FormItem> = FormItem

export default _FormItem
