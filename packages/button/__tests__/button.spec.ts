import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'
import ButtonGroup from '../src/button-group.vue'

const AXIOM = 'Rem is the best girl'
const COMMON_CONFIG = {
  global: {
    provide: {
      elForm: {},
      elFormItem: {},
    },
  },
}

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' },
      ...COMMON_CONFIG,
    })
    expect(wrapper.classes()).toContain('el-button--primary')
  })

  it('icon', () => {
    const wrapper = mount(Button, {
      props: { icon: 'el-icon-search' },
      ...COMMON_CONFIG,
    })
    expect(wrapper.find('.el-icon-search').exists()).toBeTruthy()
  })
  it('nativeType', () => {
    const wrapper = mount(Button, {
      props: { nativeType: 'submit' },
      ...COMMON_CONFIG,
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })
  it('loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
      ...COMMON_CONFIG,
    })
    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.find('.el-icon-loading').exists()).toBeTruthy()
  })
  it('size', () => {
    const wrapper = mount(Button, {
      props: { size: 'medium' },
      ...COMMON_CONFIG,
    })
    expect(wrapper.classes()).toContain('el-button--medium')
  })
  it('plain', () => {
    const wrapper = mount(Button, {
      props: { plain: true },
      ...COMMON_CONFIG,
    })
    expect(wrapper.classes()).toContain('is-plain')
  })
  it('round', () => {
    const wrapper = mount(Button, {
      props: { round: true },
      ...COMMON_CONFIG,
    })
    expect(wrapper.classes()).toContain('is-round')
  })
  it('circle', () => {
    const wrapper = mount(Button, {
      props: { circle: true },
      ...COMMON_CONFIG,
    })
    expect(wrapper.classes()).toContain('is-circle')
  })

  test('render text', () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM,
      },
      ...COMMON_CONFIG,
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('handle click', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM,
      },
      ...COMMON_CONFIG,
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()

  })

  test('handle click inside', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<span class="inner-slot"></span>',
      },
      ...COMMON_CONFIG,
    })
    await (<HTMLElement>wrapper.element.querySelector('.inner-slot')).click()
    expect(wrapper.emitted()).toBeDefined()
  })

  test('loading implies disabled', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM,
      },
      props: { loading: true },
      ...COMMON_CONFIG,
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
      ...COMMON_CONFIG,
    })
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

})
describe('Button Group', () => {
  const TestComponent = {
    template: `<el-button-group>
      <el-button type="primary">Prev</el-button>
      <el-button type="primary">Next</el-button>
    </el-button-group>`,
    components: {
      'el-button-group': ButtonGroup,
      'el-button': Button,
    },
  }

  it('create', () => {
    const wrapper = mount(TestComponent)
    expect(wrapper.classes()).toContain('el-button-group')
    expect(wrapper.findAll('button').length).toBe(2)
  })
})
