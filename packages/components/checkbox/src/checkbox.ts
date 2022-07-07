import { computed, getCurrentInstance, inject, nextTick, ref, watch } from 'vue'
import { toTypeString } from '@vue/shared'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'
import { formContextKey, formItemContextKey } from '@element-plus/tokens'
import { useFormItemInputId, useSize, useSizeProp } from '@element-plus/hooks'
import {
  debugWarn,
  isArray,
  isBoolean,
  isNumber,
  isString,
} from '@element-plus/utils'
import type { ComponentInternalInstance, ExtractPropTypes, PropType } from 'vue'
import type { FormContext, FormItemContext } from '@element-plus/tokens'
import type { ICheckboxGroupInstance } from './checkbox.type'
import type Checkbox from './checkbox.vue'

export const useCheckboxGroupProps = {
  modelValue: {
    type: Array as PropType<Array<string | number>>,
    default: () => [],
  },
  disabled: Boolean,
  min: {
    type: Number,
    default: undefined,
  },
  max: {
    type: Number,
    default: undefined,
  },
  size: useSizeProp,
  id: {
    type: String,
    default: undefined,
  },
  label: {
    type: String,
    default: undefined,
  },
  fill: {
    type: String,
    default: undefined,
  },
  textColor: {
    type: String,
    default: undefined,
  },
  tag: {
    type: String,
    default: 'div',
  },
  validateEvent: {
    type: Boolean,
    default: true,
  },
}

export type IUseCheckboxGroupProps = ExtractPropTypes<
  typeof useCheckboxGroupProps
>

export const checkboxProps = {
  modelValue: {
    type: [Number, String, Boolean],
    default: () => undefined,
  },
  label: {
    type: [String, Boolean, Number, Object],
  },
  indeterminate: Boolean,
  disabled: Boolean,
  checked: Boolean,
  name: {
    type: String,
    default: undefined,
  },
  trueLabel: {
    type: [String, Number],
    default: undefined,
  },
  falseLabel: {
    type: [String, Number],
    default: undefined,
  },
  id: {
    type: String,
    default: undefined,
  },
  controls: {
    type: String,
    default: undefined,
  },
  border: Boolean,
  size: useSizeProp,
  tabindex: [String, Number],
  validateEvent: {
    type: Boolean,
    default: true,
  },
}

export const useCheckboxGroup = () => {
  const elForm = inject(formContextKey, {} as FormContext)
  const elFormItem = inject(formItemContextKey, {} as FormItemContext)
  const checkboxGroup = inject<ICheckboxGroupInstance>('CheckboxGroup', {})
  const isGroup = computed(
    () => checkboxGroup && checkboxGroup?.name === 'ElCheckboxGroup'
  )
  const elFormItemSize = computed(() => {
    return elFormItem.size
  })
  return {
    isGroup,
    checkboxGroup,
    elForm,
    elFormItemSize,
    elFormItem,
  }
}

export const useCheckboxGroupId = (
  props: IUseCheckboxGroupProps,
  { elFormItem }: Partial<ReturnType<typeof useCheckboxGroup>>
) => {
  const { inputId: groupId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
  })

  return {
    isLabeledByFormItem,
    groupId,
  }
}

const useModel = (props: CheckboxProps) => {
  const selfModel = ref<any>(false)
  const { emit } = getCurrentInstance()!
  const { isGroup, checkboxGroup, elFormItem } = useCheckboxGroup()
  const isLimitExceeded = ref(false)
  const model = computed({
    get() {
      return isGroup.value
        ? checkboxGroup.modelValue?.value
        : props.modelValue ?? selfModel.value
    },

    set(val: unknown) {
      if (isGroup.value && Array.isArray(val)) {
        isLimitExceeded.value =
          checkboxGroup.max !== undefined &&
          val.length > checkboxGroup.max.value
        isLimitExceeded.value === false && checkboxGroup?.changeEvent?.(val)
      } else {
        emit(UPDATE_MODEL_EVENT, val)
        selfModel.value = val
      }
    },
  })

  return {
    model,
    isGroup,
    isLimitExceeded,
    elFormItem,
  }
}

const useCheckboxStatus = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots'],
  { model }: Partial<ReturnType<typeof useModel>>
) => {
  const { isGroup, checkboxGroup } = useCheckboxGroup()
  const focus = ref(false)
  const size = useSize(checkboxGroup?.checkboxGroupSize, { prop: true })
  const isChecked = computed<boolean>(() => {
    const value = model!.value
    if (toTypeString(value) === '[object Boolean]') {
      return value
    } else if (Array.isArray(value)) {
      return value.includes(props.label)
    } else if (value !== null && value !== undefined) {
      return value === props.trueLabel
    } else {
      return !!value
    }
  })

  const checkboxSize = useSize(
    computed(() =>
      isGroup.value ? checkboxGroup?.checkboxGroupSize?.value : undefined
    )
  )

  const hasOwnLabel = computed<boolean>(() => {
    return !!(slots.default || props.label)
  })

  return {
    isChecked,
    focus,
    size,
    checkboxSize,
    hasOwnLabel,
  }
}

const useDisabled = (
  props: CheckboxProps,
  {
    model,
    isChecked,
  }: Partial<ReturnType<typeof useModel>> &
    Partial<ReturnType<typeof useCheckboxStatus>>
) => {
  const { elForm, isGroup, checkboxGroup } = useCheckboxGroup()
  const isLimitDisabled = computed(() => {
    const max = checkboxGroup.max?.value!
    const min = checkboxGroup.min?.value!
    return (
      (!!(max || min) && model!.value.length >= max && !isChecked!.value) ||
      (model!.value.length <= min && isChecked!.value)
    )
  })
  const isDisabled = computed(() => {
    const disabled = props.disabled || elForm?.disabled
    return (
      (isGroup.value
        ? checkboxGroup.disabled?.value || disabled || isLimitDisabled.value
        : disabled) ?? false
    )
  })

  return {
    isDisabled,
    isLimitDisabled,
  }
}

const setStoreValue = (
  props: CheckboxProps,
  { model }: Partial<ReturnType<typeof useModel>>
) => {
  function addToStore() {
    if (Array.isArray(model!.value) && !model!.value.includes(props.label)) {
      model!.value.push(props.label)
    } else {
      model!.value = props.trueLabel || true
    }
  }
  props.checked && addToStore()
}

const useEvent = (
  props: CheckboxProps,
  {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem,
  }: Partial<
    ReturnType<typeof useModel> &
      ReturnType<typeof useCheckboxStatus> &
      ReturnType<typeof useDisabled> &
      ReturnType<typeof useFormItemInputId>
  >
) => {
  const { elFormItem, checkboxGroup } = useCheckboxGroup()
  const { emit } = getCurrentInstance()!

  function getLabeledValue(value: string | number | boolean) {
    return value === props.trueLabel || value === true
      ? props.trueLabel ?? true
      : props.falseLabel ?? false
  }

  function emitChangeEvent(
    checked: string | number | boolean,
    e: InputEvent | MouseEvent
  ) {
    emit('change', getLabeledValue(checked), e)
  }

  function handleChange(e: Event) {
    if (isLimitExceeded!.value) return
    const target = e.target as HTMLInputElement
    emit('change', getLabeledValue(target.checked), e)
  }

  async function onClickRoot(e: MouseEvent) {
    if (isLimitExceeded!.value) return
    if (
      !hasOwnLabel!.value &&
      !isDisabled!.value &&
      isLabeledByFormItem!.value
    ) {
      model!.value = getLabeledValue(
        [false, props.falseLabel].includes(model!.value)
      )
      await nextTick()
      emitChangeEvent(model!.value, e)
    }
  }

  const validateEvent = computed(
    () => checkboxGroup.validateEvent?.value || props.validateEvent
  )

  watch(
    () => props.modelValue,
    () => {
      if (validateEvent.value) {
        elFormItem?.validate?.('change').catch((err) => debugWarn(err))
      }
    }
  )

  return {
    handleChange,
    onClickRoot,
  }
}

export type CheckboxValueType = string | number | boolean

export const checkboxEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
  change: (val: CheckboxValueType) =>
    isString(val) || isNumber(val) || isBoolean(val),
}

export const checkboxGroupEmits = {
  [UPDATE_MODEL_EVENT]: (val: CheckboxValueType[]) => isArray(val),
  change: (val: CheckboxValueType[]) => isArray(val),
}

export const useCheckbox = (
  props: CheckboxProps,
  slots: ComponentInternalInstance['slots']
) => {
  const { model, isGroup, isLimitExceeded, elFormItem } = useModel(props)
  const { focus, size, isChecked, checkboxSize, hasOwnLabel } =
    useCheckboxStatus(props, slots, {
      model,
    })
  const { isDisabled } = useDisabled(props, { model, isChecked })
  const { inputId, isLabeledByFormItem } = useFormItemInputId(props, {
    formItemContext: elFormItem,
    disableIdGeneration: hasOwnLabel,
    disableIdManagement: isGroup,
  })
  const { handleChange, onClickRoot } = useEvent(props, {
    model,
    isLimitExceeded,
    hasOwnLabel,
    isDisabled,
    isLabeledByFormItem,
  })

  setStoreValue(props, { model })

  return {
    elFormItem,
    inputId,
    isLabeledByFormItem,
    isChecked,
    isDisabled,
    isGroup,
    checkboxSize,
    hasOwnLabel,
    model,
    handleChange,
    onClickRoot,
    focus,
    size,
  }
}

export type CheckboxProps = ExtractPropTypes<typeof checkboxProps>
export type CheckboxEmits = typeof checkboxEmits
export type CheckboxInstance = InstanceType<typeof Checkbox>
