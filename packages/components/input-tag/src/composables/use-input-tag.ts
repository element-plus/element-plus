import { computed, ref, shallowRef, watch } from 'vue'
import {
  CHANGE_EVENT,
  EVENT_CODE,
  INPUT_EVENT,
  UPDATE_MODEL_EVENT,
} from '@element-plus/constants'
import { debugWarn, ensureArray, isUndefined } from '@element-plus/utils'
import { useComposition, useFocusController } from '@element-plus/hooks'
import { useFormDisabled, useFormSize } from '@element-plus/components/form'

import type { EmitFn } from '@element-plus/utils'
import type { FormItemContext } from '@element-plus/components/form'
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

  const addTagsEmit = (value: string | string[]) => {
    const list = [...(props.modelValue ?? []), ...ensureArray(value)]

    emit(UPDATE_MODEL_EVENT, list)
    emit(CHANGE_EVENT, list)
    emit('add-tag', value)
    inputValue.value = undefined
  }

  const getDelimitedTags = (input: string) => {
    const tags = input
      .split(props.delimiter)
      .filter((val) => val && val !== input)
    if (props.max) {
      const maxInsert = props.max - (props.modelValue?.length ?? 0)
      tags.splice(maxInsert)
    }
    return tags.length === 1 ? tags[0] : tags
  }

  const handleInput = (event: Event) => {
    if (inputLimit.value) {
      inputValue.value = undefined
      return
    }

    if (isComposing.value) return
    if (props.delimiter && inputValue.value) {
      const tags = getDelimitedTags(inputValue.value)
      if (tags.length) {
        addTagsEmit(tags)
      }
    }
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
    addTagsEmit(value)
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
    disabled,
    afterBlur() {
      if (props.saveOnBlur) {
        handleAddTag()
      } else {
        inputValue.value = undefined
      }

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
