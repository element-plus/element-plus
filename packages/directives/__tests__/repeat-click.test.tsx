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
  it('click test', async () => {
    const wrapper = _mount()
    const block = wrapper.find('#block')

    block.trigger('mousedown')
    await sleep(630)
    document.dispatchEvent(new MouseEvent('mouseup'))

    expect(handler).toHaveBeenCalledTimes(3)
  })

  it('time interval between mousedown and mouseup is slightly less than 200ms', async () => {
    const wrapper = _mount()
    const block = wrapper.find('#block')

    for (let i = 0; i < 10; i++) {
      block.trigger('mousedown')
      await sleep(199)
      document.dispatchEvent(new MouseEvent('mouseup'))
    }

    expect(handler).toHaveBeenCalledTimes(10)
  })

  it('time interval between mousedown and mouseup is slightly more than 200ms', async () => {
    const wrapper = _mount()
    const block = wrapper.find('#block')

    for (let i = 0; i < 10; i++) {
      block.trigger('mousedown')
      await sleep(201)
      document.dispatchEvent(new MouseEvent('mouseup'))
    }

    expect(handler).toHaveBeenCalledTimes(10)
  })
})
