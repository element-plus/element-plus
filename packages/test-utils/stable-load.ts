import { nextTick } from 'vue'
import { flushPromises } from '@vue/test-utils'

export async function stableLoad(
  condition: () => boolean,
  timeout = 3000,
  interval = 100
) {
  const startTime = Date.now()

  while (Date.now() - startTime < timeout) {
    if (condition()) return
    await nextTick()
    await flushPromises()

    if (condition()) return
    await new Promise((resolve) => setTimeout(resolve, interval))
  }

  if (!condition()) {
    throw new Error(`Condition not met within ${timeout}ms timeout`)
  }
}
