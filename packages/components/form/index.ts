import { withInstall, withNoopInstall } from '@element-plus/utils'
import Form from './src/form.vue'
import FormItem from './src/form-item.vue'
import FormSection from './src/form-section.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElForm: SFCWithInstall<typeof Form> & {
  FormItem: typeof FormItem
  FormSection: typeof FormSection
} = withInstall(Form, {
  FormItem,
  FormSection,
})
export default ElForm
export const ElFormItem: SFCWithInstall<typeof FormItem> =
  withNoopInstall(FormItem)
export const ElFormSection: SFCWithInstall<typeof FormSection> =
  withNoopInstall(FormSection)

export * from './src/form'
export * from './src/form-item'
export * from './src/form-section'
export * from './src/types'
export * from './src/constants'
export * from './src/hooks'

export type FormInstance = InstanceType<typeof Form> & unknown
export type FormItemInstance = InstanceType<typeof FormItem> & unknown
export type FormSectionInstance = InstanceType<typeof FormSection> & unknown
