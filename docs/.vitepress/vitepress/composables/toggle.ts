import { isRef, ref } from 'vue'
import { isBoolean } from '@vueuse/core'
import type { MaybeRef } from '@vueuse/core'

export const useToggle = (getToggled?: MaybeRef<boolean>) => {
  const val = isRef(getToggled)
    ? getToggled
    : ref(isBoolean(getToggled) ? getToggled : false)

  return [
    val,
    (toggle?: boolean) => {
      val.value = isBoolean(toggle) ? toggle : !val.value
    },
  ] as const
}
