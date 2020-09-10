import { nextTick } from 'vue'

const tick = async (times: number) => {
  while (times--) {
    await nextTick()
  }
}

export default tick
