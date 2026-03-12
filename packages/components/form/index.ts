import { withInstall, withNoopInstall } from '@element-plus/utils'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const GForm: SFCWithInstall<typeof Form> & {
  FormItem: typeof FormItem
} = withInstall(Form, {
  FormItem,
})
export default GForm
export const GFormItem: SFCWithInstall<typeof FormItem> =
  withNoopInstall(FormItem)

export * from './src/form'
export * from './src/form-item'
export * from './src/types'
export * from './src/constants'
export * from './src/hooks'

export type FormInstance = InstanceType<typeof Form> & unknown
export type FormItemInstance = InstanceType<typeof FormItem> & unknown
