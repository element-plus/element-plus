import { inject } from 'vue'
import { formContextKey, formItemContextKey } from '@element-plus/tokens'

export const useFormItem = () => {
  const form = inject(formContextKey, undefined)
  const formItem = inject(formItemContextKey, undefined)
  return {
    form,
    formItem,
  }
}
