import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import sleep from '@element-plus/test-utils/sleep'
import RepeatClick from '../repeat-click'

const handler = vi.fn()
const _mount = () =>
  mount({
    template: `
  <div id="block" v-repeat-click="onClick">TEST</div>
  `,
    directives: {
      repeatClick: RepeatClick,
    },
    methods: {
      onClick() {
        handler()
      },
    },
  })

describe('Directives.vue', () => {
  test('Click test', async () => {
    const wrapper = _mount()
    const block = wrapper.find('#block')
    block.trigger('mousedown')
    await sleep(50)
    block.trigger('mousedown')
    const testTime = 330
    await sleep(testTime)
    block.trigger('mouseup')
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
