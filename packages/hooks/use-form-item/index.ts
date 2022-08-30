import {
  computed,
  inject,
  onMounted,
  onUnmounted,
  ref,
  toRef,
  watch,
} from 'vue'
import { formContextKey, formItemContextKey } from '@element-plus/tokens'
import { useId } from '../use-id'
import type { FormItemContext } from '@element-plus/tokens'
import type { ComputedRef, Ref, WatchStopHandle } from 'vue'

export const useFormItem = () => {
  const form = inject(formContextKey, undefined)
  const formItem = inject(formItemContextKey, undefined)
  return {
    form,
    formItem,
  }
}

export type IUseFormItemInputCommonProps = {
  id?: string
  label?: string | number | boolean | Record<string, any>
}

export const useFormItemInputId = (
  props: Partial<IUseFormItemInputCommonProps>,
  {
    formItemContext,
    disableIdGeneration,
    disableIdManagement,
  }: {
    formItemContext?: FormItemContext
    disableIdGeneration?: ComputedRef<boolean> | Ref<boolean>
    disableIdManagement?: ComputedRef<boolean> | Ref<boolean>
  }
) => {
  if (!disableIdGeneration) {
    disableIdGeneration = ref<boolean>(false)
  }
  if (!disableIdManagement) {
    disableIdManagement = ref<boolean>(false)
  }

  const inputId = ref<string>()
  let idUnwatch: WatchStopHandle | undefined = undefined

  const isLabeledByFormItem = computed<boolean>(() => {
    return !!(
      !props.label &&
      formItemContext &&
      formItemContext.inputIds &&
      formItemContext.inputIds?.length <= 1
    )
  })

  // Generate id for ElFormItem label if not provided as prop
  onMounted(() => {
    idUnwatch = watch(
      [toRef(props, 'id'), disableIdGeneration] as any,
      ([id, disableIdGeneration]: [string, boolean]) => {
        const newId = id ?? (!disableIdGeneration ? useId().value : undefined)
        if (newId !== inputId.value) {
          if (formItemContext?.removeInputId) {
            inputId.value && formItemContext.removeInputId(inputId.value)
            if (!disableIdManagement?.value && !disableIdGeneration && newId) {
              formItemContext.addInputId(newId)
            }
          }
          inputId.value = newId
        }
      },
      { immediate: true }
    )
  })

  onUnmounted(() => {
    idUnwatch && idUnwatch()
    if (formItemContext?.removeInputId) {
      inputId.value && formItemContext.removeInputId(inputId.value)
    }
  })

  return {
    isLabeledByFormItem,
    inputId,
  }
}
