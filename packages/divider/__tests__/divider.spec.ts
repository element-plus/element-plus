import {mount} from '@vue/test-utils'
import Divider from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Divider.vue', () => {
  test('render test', () => {
    const wrapper = mount(Divider, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('direction', () => {
    const { vm } = mount(Divider, {
      props: {
        direction: 'vertical',
      },
    })
    expect(vm.$el.classList.contains('el-divider--vertical')).toEqual(true)
  })

  test('contentPosition', () => {
    const wrapper = mount(Divider, {
      slots: {
        default: AXIOM,
      },
      props: {
        contentPosition: 'right',
      },
    })
    const textDiv = wrapper.find('.el-divider__text')
    expect(textDiv.element.classList.contains('is-right')).toEqual(true)
  })

  test('customClass', () => {
    const { vm } = mount(Divider, {
      props: {
        class: 'customClass',
      },
    })
    expect(vm.$el.classList.contains('customClass')).toEqual(true)
  })
})
