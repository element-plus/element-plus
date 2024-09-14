import { withInstall, withNoopInstall } from '@element-plus/utils'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElForm: SFCWithInstall<typeof Form> & {
  FormItem: typeof FormItem
} = withInstall(Form, {
  FormItem,
})
export default ElForm
export const ElFormItem: SFCWithInstall<typeof FormItem> =
  withNoopInstall(FormItem)

export * from './src/form'
export * from './src/form-item'
export * from './src/types'
export * from './src/constants'
export * from './src/hooks'

export type FormInstance = InstanceType<typeof Form>
export type FormItemInstance = InstanceType<typeof FormItem>
