import { isRef, ref } from 'vue'

import type { Ref } from 'vue'

const isBool = (val: unknown): val is boolean => {
  return typeof val === 'boolean'
}

export const useToggle = (getToggled?: Ref<boolean>) => {
  const val = isRef(getToggled)
    ? getToggled
    : ref(isBool(getToggled) ? getToggled : false)

  return [
    val,
    (toggle?: boolean) => {
      val.value = isBool(toggle) ? toggle : !val.value
    },
  ] as const
}
