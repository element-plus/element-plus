import { ref, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Button from '../src/button.vue'
import ButtonGroup from '../src/button-group.vue'

const AXIOM = 'Rem is the best girl'

describe('Button.vue', () => {
  it('create', () => {
    const wrapper = mount(Button, {
      props: { type: 'primary' },
    })
    expect(wrapper.classes()).toContain('el-button--primary')
  })

  it('icon', () => {
    const wrapper = mount(Button, {
      props: { icon: 'el-icon-search' },
    })
    expect(wrapper.find('.el-icon-search').exists()).toBeTruthy()
  })
  it('nativeType', () => {
    const wrapper = mount(Button, {
      props: { nativeType: 'submit' },
    })
    expect(wrapper.attributes('type')).toBe('submit')
  })
  it('loading', () => {
    const wrapper = mount(Button, {
      props: { loading: true },
    })
    expect(wrapper.classes()).toContain('is-loading')
    expect(wrapper.find('.el-icon-loading').exists()).toBeTruthy()
  })
  it('size', () => {
    const wrapper = mount(Button, {
      props: { size: 'medium' },
    })
    expect(wrapper.classes()).toContain('el-button--medium')
  })
  it('plain', () => {
    const wrapper = mount(Button, {
      props: { plain: true },
    })
    expect(wrapper.classes()).toContain('is-plain')
  })
  it('round', () => {
    const wrapper = mount(Button, {
      props: { round: true },
    })
    expect(wrapper.classes()).toContain('is-round')
  })
  it('circle', () => {
    const wrapper = mount(Button, {
      props: { circle: true },
    })
    expect(wrapper.classes()).toContain('is-circle')
  })

  test('render text', () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('handle click', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: AXIOM,
      },
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })

  test('handle click inside', async () => {
    const wrapper = mount(Button, {
      slots: {
        default: '<span class="inner-slot"></span>',
      },
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
    })
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })

  it('disabled', async () => {
    const wrapper = mount(Button, {
      props: { disabled: true },
    })
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toBeUndefined()
  })
})
describe('Button Group', () => {
  it('create', () => {
    const wrapper = mount({
      template: `<el-button-group>
        <el-button type="primary">Prev</el-button>
        <el-button type="primary">Next</el-button>
      </el-button-group>`,
      components: {
        'el-button-group': ButtonGroup,
        'el-button': Button,
      },
    })
    expect(wrapper.classes()).toContain('el-button-group')
    expect(wrapper.findAll('button').length).toBe(2)
  })

  it('button group reactive size', async () => {
    const size = ref('small')
    const wrapper = mount({
      setup() {
        return () =>
          h(ButtonGroup, { size: size.value }, () => [
            h(Button, { type: 'primary' }, () => 'Prev'),
            h(Button, { type: 'primary' }, () => 'Next'),
            h(Button, { type: 'primary', size: 'mini' }, () => 'Mini'),
          ])
      },
    })
    expect(wrapper.classes()).toContain('el-button-group')
    expect(
      wrapper.findAll('.el-button-group button.el-button--small').length
    ).toBe(2)
    expect(
      wrapper.findAll('.el-button-group button.el-button--mini').length
    ).toBe(1)

    size.value = 'medium'
    await nextTick()

    expect(
      wrapper.findAll('.el-button-group button.el-button--medium').length
    ).toBe(2)
    expect(
      wrapper.findAll('.el-button-group button.el-button--mini').length
    ).toBe(1)
  })
})
