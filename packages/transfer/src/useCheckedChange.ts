import { TransferInitData, Key } from './transfer'

import { LEFT_CHECK_CHANGE_EVENT, RIGHT_CHECK_CHANGE_EVENT } from './index.vue'

export const useCheckedChange = (initData: TransferInitData, emit) => {
  const onSourceCheckedChange = (val: Key[], movedKeys: Key[]) => {
    initData.leftChecked = val
    if (movedKeys === undefined) return
    emit(LEFT_CHECK_CHANGE_EVENT, val, movedKeys)
  }

  const onTargetCheckedChange = (val: Key[], movedKeys: Key[]) => {
    initData.rightChecked = val
    if (movedKeys === undefined) return
    emit(RIGHT_CHECK_CHANGE_EVENT, val, movedKeys)
  }

  return {
    onSourceCheckedChange,
    onTargetCheckedChange,
  }
}
