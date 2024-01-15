import { isNil } from 'lodash-unified'
import type { RadioProps } from './radio'
import type { RadioButtonProps } from './radio-button'

export const getValueOrLabel = (props: RadioProps | RadioButtonProps) => {
  // In version 2.x, if there's no props.value, props.label will act as props.value
  // In version 3.x, remove this computed value, use props.value instead.
  if (!isNil(props.value)) {
    return props.value
  }
  return props.label
}
