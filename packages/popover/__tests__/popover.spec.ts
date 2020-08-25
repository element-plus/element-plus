import { mount } from '@vue/test-utils'
import Popover from '../src/index.vue'
import * as popper from '@popperjs/core'
import { h, ref } from 'vue'
import { triggerEvent } from '@element-plus/utils/aria'
import directive from '../src/directive'

const AXIOM = 'Rem is the best girl'

const popperMock = jest.spyOn(popper, 'createPopper').mockImplementation(() => ({
  update: jest.fn(),
  forceUpdate: jest.fn(),
  setOptions: jest.fn(),
  destroy: jest.fn(),
  state: null,
}))

describe('Popover.vue', () => {
  afterAll(() => {
    popperMock.mockReset()
  })

  beforeEach(() => {
    popperMock.mockClear()
    jest.useFakeTimers()
  })

  test('render', () => {
    const wrapper = mount(Popover, {
      props: {
        trigger: 'click',
      },
      slots: {
        reference: h('div', AXIOM),
      },
    })

    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('trigger hover', () => {
    const wrapper = mount(Popover, {
      props: {
        trigger: 'hover',
      },
      slots: {
        reference: h('div'),
      },
    })

    const popover = wrapper.vm
    const triggerRef = wrapper.vm.reference

    triggerEvent(triggerRef, 'mouseenter')
    expect(popover.visible).toBe(true)
    triggerEvent(triggerRef, 'mouseleave')
    jest.runAllTimers()
    expect(popover.visible).toBe(false)
  })

  test('trigger click', () => {
    const wrapper = mount(Popover, {
      props: {
        trigger: 'click',
      },
      slots: {
        reference: h('button'),
      },
    })

    const popover = wrapper.vm
    const triggerRef = wrapper.vm.reference

    triggerEvent(triggerRef, 'click')
    expect(popover.visible).toBe(true)
    document.body.click()
    expect(popover.visible).toBe(false)
  })

  test('trigger focus', () => {
    const wrapper = mount(Popover, {
      props: {
        trigger: 'focus',
      },
      slots: {
        reference: h('input'),
      },
    })

    const popover = wrapper.vm
    const triggerRef = wrapper.vm.reference

    triggerEvent(triggerRef, 'focusin')
    expect(popover.visible).toBe(true)
    triggerEvent(triggerRef, 'focusout')
    expect(popover.visible).toBe(false)
  })

  test('trigger manual', () => {
    const wrapper = mount({
      components: {
        'el-popover': Popover,
      },
      setup() {
        const visible = ref(false)

        return { visible }
      },
      template: `
        <div>
          <el-popover
            ref="popover"
            trigger="manual"
            content="content">
            <template #reference>
              <button @click="visible = !visible">手动激活</button>
            </template>
          </el-popover>
        </div>
      `,
    })

    const popover = wrapper.vm
    const button = wrapper.find('button').element

    triggerEvent(button, 'click')
    expect(popover.visible).toBe(true)
    triggerEvent(button, 'click')
    expect(popover.visible).toBe(false)
  })

  test('trigger click', () => {
    const wrapper = mount(Popover, {
      props: {
        trigger: 'click',
      },
      slots: {
        reference: h('button'),
      },
    })

    const popover = wrapper.vm
    const triggerRef = wrapper.vm.reference

    triggerEvent(triggerRef, 'click')
    expect(popover.visible).toBe(true)
    document.body.click()
    expect(popover.visible).toBe(false)
  })

  test('open delay', () => {
    const wrapper = mount(Popover, {
      props: {
        trigger: 'hover',
        openDelay: 500,
      },
      slots: {
        reference: h('button'),
      },
    })

    const popover = wrapper.vm
    const triggerRef = wrapper.vm.reference

    triggerEvent(triggerRef, 'mouseenter')
    expect(popover.visible).toBe(false)
    jest.advanceTimersByTime(500)
    expect(popover.visible).toBe(true)
    triggerEvent(triggerRef, 'mouseleave')
    jest.runAllTimers()
    expect(popover.visible).toBe(false)
  })

  test('close delay', () => {
    const wrapper = mount(Popover, {
      props: {
        trigger: 'hover',
        closeDelay: 500,
      },
      slots: {
        reference: h('button'),
      },
    })

    const popover = wrapper.vm
    const triggerRef = wrapper.vm.reference

    triggerEvent(triggerRef, 'mouseenter')
    expect(popover.visible).toBe(true)
    triggerEvent(triggerRef, 'mouseleave')
    expect(popover.visible).toBe(true)
    jest.advanceTimersByTime(500)
    expect(popover.visible).toBe(false)
  })

  test('create by directive', () => {
    const wrapper = mount({
      components: {
        'el-popover': Popover,
      },
      setup() {
        const visible = ref(false)

        return { visible }
      },
      template: `
        <div>
          <el-popover
            ref="popover1"
            trigger="click"
            content="content">
          </el-popover>
          <button v-popover:popover1>create by directive</button>
        </div>
      `,
      directives: {
        Popover: directive,
      },
    })

    expect(wrapper.text()).toEqual('create by directive')

    const popover = wrapper.vm.$refs['popover1'] as any
    const button = wrapper.find('button').element

    triggerEvent(button, 'click')
    expect(popover.visible).toBe(true)
    document.body.click()
    expect(popover.visible).toBe(false)
  })
})
