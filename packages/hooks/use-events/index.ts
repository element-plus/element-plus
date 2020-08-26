import { watch } from 'vue'
import { on, off } from '@element-plus/utils/dom'

import type { Ref } from 'vue'

type Events = Array<{
  name: string
  handler: (...args: any[]) => any
}>

export default (el: Ref<HTMLElement>, events: Events) => {
  events.map(({ name, handler }) => {
    on(el.value, name, handler)
  })

  watch(el, (_, __, onCleanup) => {
    onCleanup(() => {
      events.map(({ name, handler }) => {
        off(el.value, name, handler)
      })
    })
  })
}
