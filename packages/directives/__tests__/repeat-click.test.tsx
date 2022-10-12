import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { REPEAT_DELAY, REPEAT_INTERVAL, vRepeatClick } from '../repeat-click'

const PRESS_TIME = REPEAT_DELAY + REPEAT_INTERVAL
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
          RepeatClick: vRepeatClick,
        },
      },
    }
  )

describe('Directives.vue', () => {
  it('single click', async () => {
    const wrapper = _mount()
    const block = wrapper.find('#block')

    vi.useFakeTimers()
    block.trigger('mousedown')
    vi.advanceTimersByTime(PRESS_TIME - 1)
    document.dispatchEvent(new MouseEvent('mouseup'))
    expect(handler).toHaveBeenCalledTimes(1)
    vi.useRealTimers()
  })

  it('click and hold on', async () => {
    const wrapper = _mount()
    const block = wrapper.find('#block')

    vi.useFakeTimers()
    block.trigger('mousedown')
    vi.advanceTimersByTime(PRESS_TIME)
    document.dispatchEvent(new MouseEvent('mouseup'))

    expect(handler).toHaveBeenCalledTimes(2)
    vi.useRealTimers()
  })
})
