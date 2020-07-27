import { mount } from '@vue/test-utils'
import Button from '../src/index.vue'

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
    const instance = mount(Button, {
      props: { type: 'primary' },
      ...COMMON_CONFIG,
    })
    const buttonElm = instance.element
    expect(buttonElm.classList.contains('el-button--primary')).toBeTruthy()
  })

  it('icon', () => {
    const instance = mount(Button, {
      props: { icon: 'el-icon-search' },
      ...COMMON_CONFIG,
    })
    const buttonElm = instance.element
    expect(buttonElm.querySelector('.el-icon-search')).not.toBeUndefined()
  })
  it('nativeType', () => {
    const instance = mount(Button, {
      props: { nativeType: 'submit' },
      ...COMMON_CONFIG,
    })
    const buttonElm = instance.element
    expect(buttonElm.getAttribute('type')).toBe('submit')
  })
  it('loading', () => {
    const instance = mount(Button, {
      props: { loading: true },
      ...COMMON_CONFIG,
    })
    const buttonElm = instance.element
    expect(buttonElm.querySelector('.el-icon-search')).not.toBeUndefined()
    expect(buttonElm.classList.contains('is-loading')).toBeTruthy()
    expect(buttonElm.querySelector('.el-icon-loading')).not.toBeUndefined()
  })
  it('size', () => {
    const instance = mount(Button, {
      props: { size: 'medium' },
      ...COMMON_CONFIG,
    })
    const buttonElm = instance.element
    expect(buttonElm.classList.contains('el-button--medium')).toBeTruthy()
  })
  it('plain', () => {
    const instance = mount(Button, {
      props: { plain: true },
      ...COMMON_CONFIG,
    })
    const buttonElm = instance.element
    expect(buttonElm.classList.contains('is-plain')).toBeTruthy()
  })
  it('round', () => {
    const instance = mount(Button, {
      props: { round: true },
      ...COMMON_CONFIG,
    })
    const buttonElm = instance.element
    expect(buttonElm.classList.contains('is-round')).toBeTruthy()
  })
  it('circle', () => {
    const instance = mount(Button, {
      props: { circle: true },
      ...COMMON_CONFIG,
    })
    const buttonElm = instance.element
    expect(buttonElm.classList.contains('is-circle')).toBeTruthy()
  })

  test('render text', () => {
    const instance = mount(Button, {
      slots: {
        default: AXIOM,
      },
      ...COMMON_CONFIG,
    })
    expect(instance.text()).toEqual(AXIOM)
  })

  test('handle click', async () => {
    const instance = mount(Button, {
      slots: {
        default: AXIOM,
      },
      ...COMMON_CONFIG,
    })
    await instance.trigger('click')
    expect(instance.emitted()).toBeDefined()

  })

  test('handle click inside', async () => {
    const instance = mount(Button, {
      slots: {
        default: '<span class="inner-slot"></span>',
      },
      ...COMMON_CONFIG,
    })
    await (<HTMLElement>instance.element.querySelector('.inner-slot')).click()
    expect(instance.emitted()).toBeDefined()
  })

  test('loading implies disabled', async () => {
    const instance = mount(Button, {
      slots: {
        default: AXIOM,
      },
      props: { loading: true },
      ...COMMON_CONFIG,
    })
    await instance.trigger('click')
    expect(instance.emitted('click')).toBeUndefined()
  })

  it('disabled', async () => {
    const instance = mount(Button, {
      props: { disabled: true },
      ...COMMON_CONFIG,
    })
    const buttonElm = instance.element
    expect(buttonElm.classList.contains('is-disabled')).toBeTruthy()
    await instance.trigger('click')
    expect(instance.emitted('click')).toBeUndefined()
  })

})
