import { watch } from 'vue'
import { on, off } from '@element-plus/utils/dom'

import type { Ref } from 'vue'

export type Event = {
  name: string
  handler: (...args: any[]) => any
}

export default (el: Ref<HTMLElement>, events: Event[]) => {

  watch(el, val => {
    if (val) {
      events.map(({ name, handler }) => {
        on(el.value, name, handler)
      })
    } else {
      events.map(({ name, handler }) => {
        off(el.value, name, handler)
      })
    }
  })
}
