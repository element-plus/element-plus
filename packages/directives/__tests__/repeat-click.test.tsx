import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import sleep from '@element-plus/test-utils/sleep'
import RepeatClick from '../repeat-click'

const handler = vi.fn()
const _mount = () =>
  mount(
    {
      setup() {
        return () => (
          <div id="block" v-repeat-click={handler}>
            TEST
          </div>
        )
      },
    },
    {
      global: {
        directives: {
          RepeatClick,
        },
      },
    }
  )

describe('Directives.vue', () => {
  test('Click test', async () => {
    const wrapper = _mount()
    const block = wrapper.find('#block')
    block.trigger('mousedown')
    const testTime = 330
    await sleep(testTime)
    block.trigger('mouseup')
    const expectResult = Math.floor(testTime / 100)
    expect(handler).toHaveBeenCalledTimes(expectResult)
  })
})
