import { mount } from '@vue/test-utils'
import Radio from '../src/radio.vue'

const _mount = (template: string, data) => mount({
  components: {
    'el-radio': Radio,
  },
  template,
  data,
}, {
  global: {
    provide: {
      breadcrumb: {},
    },
  },
})

describe('Radio', () => {
  test('create', async () => {
    const wrapper = _mount(`<el-radio v-model="radio" label="a">
    </el-radio>`, () => ({ radio: '' }))
    expect(wrapper.classes()).toContain('el-radio')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-checked')
  })

  test('disabled', async() => {

    const wrapper = _mount(`<el-radio
    v-model="radio"
    label="3"
    disabled
  >
  </el-radio>`, () => ({ radio: '' }))
    await wrapper.trigger('click')
    expect((wrapper.vm as any).radio).toBe('')
    expect(wrapper.classes()).toContain('is-disabled')
  })

  it('border', () => {
    const wrapper = _mount(`<el-radio
    v-model="radio"
    label="3"
    border
  >
  </el-radio>`, () => ({ radio: '' }))
    expect(wrapper.classes()).toContain('is-bordered')
  })
})
