import { computed, ref, shallowRef, watch } from 'vue'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { type EmitFn, debugWarn, isUndefined } from '@element-plus/utils'
import { useComposition, useFocusController } from '@element-plus/hooks'
import {
  type FormItemContext,
  useFormDisabled,
  useFormSize,
} from '@element-plus/components/form'
import type { InputTagEmits, InputTagProps } from '../input-tag'

interface UseInputTagOptions {
  props: InputTagProps
  emit: EmitFn<InputTagEmits>
  formItem?: FormItemContext
}

export function useInputTag({ props, emit, formItem }: UseInputTagOptions) {
  const disabled = useFormDisabled()
  const size = useFormSize()

  const inputRef = shallowRef<HTMLInputElement>()
  const inputValue = ref<string>()

  const tagSize = computed(() => {
    return ['small'].includes(size.value) ? 'small' : 'default'
  })
  const placeholder = computed(() => {
    return props.modelValue?.length ? undefined : props.placeholder
  })
  const closable = computed(() => !(props.readonly || disabled.value))
  const inputLimit = computed(() => {
    return isUndefined(props.max)
      ? false
      : (props.modelValue?.length ?? 0) >= props.max
  })

  const handleInput = (event: Event) => {
    if (inputLimit.value) {
      inputValue.value = undefined
      return
    }

    if (isComposing.value) return
    emit(INPUT_EVENT, (event.target as HTMLInputElement).value)
  }

  const handleKeydown = (event: KeyboardEvent) => {
    if (isComposing.value) return
    switch (event.code) {
      case props.trigger:
        event.preventDefault()
        event.stopPropagation()
        handleAddTag()
        break
      case EVENT_CODE.numpadEnter:
        if (props.trigger === EVENT_CODE.enter) {
          event.preventDefault()
          event.stopPropagation()
          handleAddTag()
        }
        break
      case EVENT_CODE.backspace:
        if (!inputValue.value && props.modelValue?.length) {
          event.preventDefault()
          event.stopPropagation()
          handleRemoveTag(props.modelValue.length - 1)
        }
        break
    }
  }

  const handleAddTag = () => {
    const value = inputValue.value?.trim()
    if (!value || inputLimit.value) return
    const list = [...(props.modelValue ?? []), value]

    emit(UPDATE_MODEL_EVENT, list)
    emit(CHANGE_EVENT, list)
    emit('add-tag', value)
    inputValue.value = undefined
  }

  const handleRemoveTag = (index: number) => {
    const value = (props.modelValue ?? []).slice()
    const [item] = value.splice(index, 1)

    emit(UPDATE_MODEL_EVENT, value)
    emit(CHANGE_EVENT, value)
    emit('remove-tag', item)
  }

  const handleClear = () => {
    inputValue.value = undefined
    emit(UPDATE_MODEL_EVENT, undefined)
    emit(CHANGE_EVENT, undefined)
    emit('clear')
  }

  const handleDragged = (
    draggingIndex: number,
    dropIndex: number,
    type: 'before' | 'after'
  ) => {
    const value = (props.modelValue ?? []).slice()
    const [draggedItem] = value.splice(draggingIndex, 1)
    const step =
      dropIndex > draggingIndex && type === 'before'
        ? -1
        : dropIndex < draggingIndex && type === 'after'
        ? 1
        : 0

    value.splice(dropIndex + step, 0, draggedItem)
    emit(UPDATE_MODEL_EVENT, value)
    emit(CHANGE_EVENT, value)
  }

  const focus = () => {
    inputRef.value?.focus()
  }

  const blur = () => {
    inputRef.value?.blur()
  }

  const { wrapperRef, isFocused } = useFocusController(inputRef, {
    beforeFocus() {
      return disabled.value
    },
    afterBlur() {
      handleAddTag()
      if (props.validateEvent) {
        formItem?.validate?.('blur').catch((err) => debugWarn(err))
      }
    },
  })

  const {
    isComposing,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
  } = useComposition({ afterComposition: handleInput })

  watch(
    () => props.modelValue,
    () => {
      if (props.validateEvent) {
        formItem?.validate?.(CHANGE_EVENT).catch((err) => debugWarn(err))
      }
    }
  )

  return {
    inputRef,
    wrapperRef,
    isFocused,
    isComposing,
    inputValue,
    size,
    tagSize,
    placeholder,
    closable,
    disabled,
    inputLimit,
    handleDragged,
    handleInput,
    handleKeydown,
    handleAddTag,
    handleRemoveTag,
    handleClear,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
    focus,
    blur,
  }
}
