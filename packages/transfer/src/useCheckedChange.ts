export const LEFT_CHECK_CHANGE_EVENT = 'left-check-change'
export const RIGHT_CHECK_CHANGE_EVENT = 'right-check-change'

import type { TransferCheckedState, Key } from './transfer'
export const useCheckedChange = (checkedState: TransferCheckedState, emit) => {
  const onSourceCheckedChange = (val: Key[], movedKeys: Key[]) => {
    checkedState.leftChecked = val
    if (movedKeys === undefined) return
    emit(LEFT_CHECK_CHANGE_EVENT, val, movedKeys)
  }

  const onTargetCheckedChange = (val: Key[], movedKeys: Key[]) => {
    checkedState.rightChecked = val
    if (movedKeys === undefined) return
    emit(RIGHT_CHECK_CHANGE_EVENT, val, movedKeys)
  }

  return {
    onSourceCheckedChange,
    onTargetCheckedChange,
  }
}
