import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import TimeSelect from '../src/time-select.vue'

const _mount = (template: string, data, otherObj?) => mount({
  components: {
    'el-time-select': TimeSelect,
  },
  template,
  data,
  ...otherObj,
},{
  attachTo: 'body',
})

afterEach(() => {
  document.documentElement.innerHTML = ''
})

describe('TimeSelect', () => {
  it('create', async () => {
    const wrapper = _mount(`<el-time-select
    :style="{color:'red'}"
    class="customClass"
  />`, () => ({
      readonly: true }))
    const outterInput = wrapper.find('.el-select')
    expect(outterInput.classes()).toContain('customClass')
    expect(outterInput.attributes().style).toBeDefined()
  })

  it('set default value', async () => {
    const wrapper = _mount(`<el-time-select
    v-model="value"
  />`, () => ({ value: '14:30' }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(document.querySelector('.selected')).toBeDefined()
    expect(document.querySelector('.selected').textContent).toBe('14:30')
  })

  it('set minTime', async () => {
    const wrapper = _mount(`<el-time-select
    minTime='14:30'
    />`, () => ({}))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const elms = document.querySelectorAll('.is-disabled')
    const elm = elms[elms.length - 1]
    expect(elm.textContent).toBe('14:30')
  })

  it('set maxTime', async () => {
    const wrapper = _mount(`<el-time-select
    maxTime='14:30'
    />`, () => ({}))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const elm = document.querySelector('.is-disabled')
    expect(elm.textContent).toBe('14:30')
  })
})

