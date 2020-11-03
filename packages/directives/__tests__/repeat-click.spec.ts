import { sleep } from '@element-plus/test-utils'
import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import RepeatClick from '../repeat-click'

const mouseup = new Event('mouseup')
const handler = jest.fn()
const _mount = () => mount({
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

beforeEach(() => {
  handler.mockClear()
})

describe('Directives.vue', () => {
  test('Click and hold test', async () => {
    const wrapper = _mount()
    const block = wrapper.find('#block')
    block.trigger('mousedown')
    const testTime = 330
    await sleep(testTime)
    document.dispatchEvent(mouseup)
    await nextTick()
    const expectResult = Math.floor(testTime / 100)
    expect(handler).toHaveBeenCalledTimes(expectResult)
  })
  test('Click test', async () => {
    const wrapper = _mount()
    const block = wrapper.find('#block')
    block.trigger('mousedown')
    document.dispatchEvent(mouseup)
    await nextTick()
    expect(handler).toHaveBeenCalledTimes(1)
  })
})
