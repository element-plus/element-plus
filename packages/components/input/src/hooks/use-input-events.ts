import { nextTick, unref } from 'vue'
import { isEqual } from 'lodash-unified'
import { isKorean } from '@element-plus/utils'
import { UPDATE_MODEL_EVENT } from '@element-plus/constants'

import type { SetupContext } from 'vue'
import type { useCursor } from '@element-plus/hooks'
import type { UseInputStateReturn } from './use-input-state'
import type { UseInputDOMReturn } from './use-input-dom'
import type { InputEmits, InputProps } from '../input'

type UserCursorReturn = ReturnType<typeof useCursor>

export type UseInputEventsProps = Pick<
  UseInputStateReturn,
  'isComposing' | 'hovering' | 'focusing' | 'nativeInputValue'
> &
  Pick<UseInputDOMReturn, 'setNativeInputValue'> & {
    recordCursor: UserCursorReturn[0]
    setCursor: UserCursorReturn[1]
  }

export interface ComposeHandlerOptions {
  useValue?: boolean
}

export type TargetElement = HTMLInputElement | HTMLTextAreaElement

/**
 * @description event handlers that manipulate states
 */
export const useInputEvents = (
  props: InputProps,
  emit: SetupContext<InputEmits>['emit'],
  {
    isComposing,
    hovering,
    focusing,
    nativeInputValue,
    recordCursor,
    setCursor,
    setNativeInputValue,
  }: UseInputEventsProps
) => {
  const parseValue = (value: string) => {
    if (props.formatter) {
      value = props.parser ? props.parser(value) : value
      return props.formatter(value)
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
        let { value } = (e as unknown as Event).target as TargetElement

        value = parseValue(value)
        emit(eventName as any, value)
        return
      }
      emit(eventName as any, e as any)
    }
  }
  const handleFocus = composeHandler('focus', () => {
    focusing.value = true
  })
  const handleBlur = composeHandler('blur', () => {
    focusing.value = false
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

  const handleInput = composeHandler(
    'input',
    (e: Event) => {
      recordCursor()
      if (unref(isComposing)) return false
      // Determine if the formatted value is equal to the native input value
      // If true, bail the handler since nothing has changed.
      const parsedValue = parseValue((e.target as TargetElement).value)
      if (isEqual(parsedValue, unref(nativeInputValue))) {
        setNativeInputValue()
        return false
      }

      emit(UPDATE_MODEL_EVENT, parsedValue)

      nextTick(() => {
        setNativeInputValue()
        setCursor()
      })
    },
    {
      useValue: true,
    }
  )

  const handleMouseEnter = composeHandler('mouseenter', () => {
    hovering.value = true
  })

  const handleMouseLeave = composeHandler('mouseleave', () => {
    hovering.value = false
  })

  const handleKeydown = (e: KeyboardEvent) => {
    emit('keydown', e)
  }

  const handleChange = (e: Event) => {
    emit('change', (e.target as TargetElement).value)
  }

  const clear = () => {
    emit(UPDATE_MODEL_EVENT, '')
    emit('change', '')
    emit('clear')
    emit('input', '')
  }

  return {
    clear,
    handleChange,
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

export type UseInputEventsReturn = ReturnType<typeof useInputEvents>
