import { LEFT_CHECK_CHANGE_EVENT, RIGHT_CHECK_CHANGE_EVENT } from '../transfer'

import type { SetupContext } from 'vue'
import type {
  TransferCheckedState,
  TransferEmits,
  TransferKey,
} from '../transfer'

export const useCheckedChange = (
  checkedState: TransferCheckedState,
  emit: SetupContext<TransferEmits>['emit']
) => {
  const onSourceCheckedChange = (
    val: TransferKey[],
    movedKeys?: TransferKey[]
  ) => {
    checkedState.leftChecked = val
    if (!movedKeys) return
    emit(LEFT_CHECK_CHANGE_EVENT, val, movedKeys)
  }

  const onTargetCheckedChange = (
    val: TransferKey[],
    movedKeys?: TransferKey[]
  ) => {
    checkedState.rightChecked = val
    if (!movedKeys) return
    emit(RIGHT_CHECK_CHANGE_EVENT, val, movedKeys)
  }

  return {
    onSourceCheckedChange,
    onTargetCheckedChange,
  }
}
