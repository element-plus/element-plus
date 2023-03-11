import { nextTick, ref, unref } from 'vue'
import { isEqual } from 'lodash-unified'
import { isKorean } from '@element-plus/utils'
import type { useCursor } from '@element-plus/hooks'

import type { Ref, SetupContext } from 'vue'
import type { InputEmits, InputProps } from './input'

type UserCursorReturn = ReturnType<typeof useCursor>

export interface UseInputEventsProps {
  isComposing: Ref<boolean>
  hovering: Ref<boolean>
  focused: Ref<boolean>
  nativeInput: Ref<string>
  recordCursor: UserCursorReturn[0]
  setCursor: UserCursorReturn[1]
  setNativeInputValue: () => void
}

export interface ComposeHandlerOptions {
  useValue?: boolean
}

export type TargetElement = HTMLInputElement | HTMLTextAreaElement

/**
 * @description event handlers that manipulate states
 */
export const useInputEvents = (
  {
    isComposing,
    hovering,
    focused,
    nativeInput,
    recordCursor,
    setCursor,
    setNativeInputValue,
  }: UseInputEventsProps,
  props: InputProps,
  emit: SetupContext<InputEmits>['emit']
) => {
  const parseValue = (value: string) => {
    if (props.formatter || props.parser) {
      value = props.parser?.(value) || props.formatter?.(value)
    }
    return value
  }

  const composeHandler = <T>(
    eventName: keyof Omit<InputEmits, 'update:modelValue'>,
    fn: (e: T) => void | false,
    opts: ComposeHandlerOptions = {}
  ) => {
    return (e: T) => {
      const isValid = fn(e)

      if (isValid === false) return

      if (opts.useValue) {
        let { value } = (e as Event).target as TargetElement

        value = parseValue(value)
        emit(eventName as any, value)
        return
      }

      emit(eventName as any, e as any)
    }
  }
  const handleFocus = composeHandler('focus', () => {
    focused.value = true
  })
  const handleBlur = composeHandler('blur', () => {
    focused.value = false
  })
  const handleCompositionStart = composeHandler('compositionend', () => {
    isComposing.value = true
  })
  const handleCompositionUpdate = composeHandler(
    'compositionupdate',
    (e: CompositionEvent) => {
      const text = (e.target as TargetElement)?.value
      const lastCharacter = text[text.length - 1] || ''
      isComposing.value = !isKorean(lastCharacter)
    }
  )
  const handleCompositionEnd = composeHandler(
    'compositionend',
    (e: CompositionEvent) => {
      if (unref(isComposing)) {
        isComposing.value = false
        handleInput(e)
      }
    }
  )

  const handleInput = composeHandler('input', (e: Event) => {
    recordCursor()
    if (unref(isComposing)) return false
    // Determine if the formatted value is equal to the native input value
    // If true, bail the handler since nothing has changed.
    if (
      isEqual(parseValue((e.target as TargetElement).value), unref(nativeInput))
    ) {
      setNativeInputValue()
      return false
    }

    nextTick(() => {
      setNativeInputValue()
      setCursor()
    })
  })

  const handleMouseEnter = composeHandler('mouseenter', () => {
    hovering.value = true
  })

  const handleMouseLeave = composeHandler('mouseleave', () => {
    hovering.value = false
  })

  const handleKeydown = (e: KeyboardEvent) => {
    emit('keydown', e)
  }

  return {
    handleFocus,
    handleBlur,
    handleCompositionStart,
    handleCompositionUpdate,
    handleCompositionEnd,
    handleInput,
    handleMouseEnter,
    handleMouseLeave,
    handleKeydown,
  }
}
