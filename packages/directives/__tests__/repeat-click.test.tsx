import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import sleep from '@element-plus/test-utils/sleep'
import RepeatClick from '../repeat-click'

let handler: ReturnType<typeof vi.fn>

const _mount = () =>
  mount(
    {
      setup() {
        handler = vi.fn()
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
  it('single click', async () => {
    const wrapper = _mount()
    const block = wrapper.find('#block')

    for (let i = 0; i < 10; i++) {
      block.trigger('mousedown')
      await sleep(400)
      document.dispatchEvent(new MouseEvent('mouseup'))
    }

    expect(handler).toHaveBeenCalledTimes(10)
  })

  it('click and hold on', async () => {
    const wrapper = _mount()
    const block = wrapper.find('#block')

    block.trigger('mousedown')
    await sleep(850)
    document.dispatchEvent(new MouseEvent('mouseup'))

    expect(handler).toHaveBeenCalledTimes(3)
  })
})
