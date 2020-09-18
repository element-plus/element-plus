import { TransferCheckedState, Key } from './transfer'

import { LEFT_CHECK_CHANGE_EVENT, RIGHT_CHECK_CHANGE_EVENT } from './index.vue'

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
