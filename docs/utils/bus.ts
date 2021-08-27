import mitt from 'mitt'

import type { Emitter } from 'mitt'

const emitter = mitt() as ReturnType<typeof mitt> & {
  $off: Emitter['off']
  $on: Emitter['on']
  $emit: Emitter['emit']
}

emitter.$off = emitter.off
emitter.$on = emitter.on
emitter.$emit = emitter.emit
export default emitter
