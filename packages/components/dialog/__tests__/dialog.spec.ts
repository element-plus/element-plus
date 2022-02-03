import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { rAF } from '@element-plus/test-utils/tick'
import triggerCompositeClick from '@element-plus/test-utils/composite-click'
import { Delete } from '@element-plus/icons-vue'
import Dialog from '../'

const AXIOM = 'Rem is the best girl'

const _mount = ({ slots, ...rest }: Indexable<any>) => {
  return mount(Dialog, {
    slots: {
      default: AXIOM,
      ...slots,
    },
    ...rest,
  })
}

jest.useFakeTimers()

describe('Dialog.vue', () => {
  test('render test', async () => {
    const wrapper = _mount({
      slots: {
        default: AXIOM,
      },
      props: {
        modelValue: true,
      },
    })

    await nextTick()
    await rAF()
    await nextTick()
    expect(wrapper.find('.el-dialog__body').text()).toEqual(AXIOM)
  })

  test('dialog should have a title when title has been given', async () => {
    const HEADER = 'I am header'
    let wrapper = _mount({
      slots: {
        title: HEADER,
      },
      props: {
        modelValue: true,
      },
    })
    await nextTick()
    expect(wrapper.find('.el-dialog__header').text()).toBe(HEADER)

    wrapper = _mount({
      props: {
        title: HEADER,
        modelValue: true,
      },
    })
    await nextTick()

    expect(wrapper.find('.el-dialog__header').text()).toBe(HEADER)
  })

  test('dialog should have a footer when footer has been given', async () => {
    const wrapper = _mount({
      slots: {
        footer: AXIOM,
      },
      props: {
        modelValue: true,
      },
    })
    await nextTick()
    expect(wrapper.find('.el-dialog__footer').exists()).toBe(true)
    expect(wrapper.find('.el-dialog__footer').text()).toBe(AXIOM)
  })

  test('should append dialog to body when appendToBody is true', async () => {
    const wrapper = _mount({
      props: {
        appendToBody: true,
        modelValue: true,
      },
    })
    await nextTick()
    expect(
      document.body.firstElementChild.classList.contains('el-overlay')
    ).toBe(true)
    wrapper.unmount()
  })

  test('should center dialog', async () => {
    const wrapper = _mount({
      props: {
        center: true,
        modelValue: true,
      },
    })
    await nextTick()
    expect(wrapper.find('.el-dialog--center').exists()).toBe(true)
  })

  test('should show close button', async () => {
    const wrapper = _mount({
      props: {
        modelValue: true,
      },
    })
    await nextTick()
    expect(wrapper.find('.el-dialog__close').exists()).toBe(true)
  })

  test('should hide close button when showClose = false', async () => {
    const wrapper = _mount({
      props: {
        modelValue: true,
        showClose: false,
      },
    })
    await nextTick()
    expect(wrapper.find('.el-dialog__headerbtn').exists()).toBe(false)
  })

  test('should close dialog when click on close button', async () => {
    const wrapper = _mount({
      props: {
        modelValue: true,
      },
    })
    await nextTick()
    await wrapper.find('.el-dialog__headerbtn').trigger('click')
    expect(wrapper.vm.visible).toBe(false)
  })

  describe('mask related', () => {
    test('should not have overlay mask when mask is false', async () => {
      const wrapper = _mount({
        props: {
          modal: false,
          modelValue: true,
        },
      })
      await nextTick()
      expect(wrapper.find('.el-overlay').exists()).toBe(false)
    })

    test('should close the modal when clicking on mask when `closeOnClickModal` is true', async () => {
      const wrapper = _mount({
        props: {
          modelValue: true,
        },
      })
      await nextTick()
      expect(wrapper.find('.el-overlay').exists()).toBe(true)
      expect(wrapper.find('.el-overlay-dialog').exists()).toBe(true)

      await triggerCompositeClick(wrapper.find('.el-overlay-dialog'))
      expect(wrapper.vm.visible).toBe(false)
    })
  })

  describe('life cycles', () => {
    test('should call before close', async () => {
      const beforeClose = jest.fn()
      const wrapper = _mount({
        props: {
          beforeClose,
          modelValue: true,
        },
      })
      await nextTick()
      await wrapper.find('.el-dialog__headerbtn').trigger('click')
      expect(beforeClose).toHaveBeenCalled()
    })

    test('should not close dialog when user cancelled', async () => {
      const beforeClose = jest
        .fn()
        .mockImplementation((hide: (cancel: boolean) => void) => hide(true))

      const wrapper = _mount({
        props: {
          beforeClose,
          modelValue: true,
        },
      })
      await nextTick()
      await wrapper.find('.el-dialog__headerbtn').trigger('click')
      expect(beforeClose).toHaveBeenCalled()
      expect(wrapper.vm.visible).toBe(true)
    })

    test('should open and close with delay', async () => {
      const wrapper = _mount({
        props: {
          openDelay: 200,
          closeDelay: 200,
          modelValue: false,
        },
      })

      expect(wrapper.vm.visible).toBe(false)

      await wrapper.setProps({
        modelValue: true,
      })

      // expect(wrapper.vm.visible).toBe(false)

      // jest.runOnlyPendingTimers()

      // expect(wrapper.vm.visible).toBe(true)
    })

    test('should destroy on close', async () => {
      const wrapper = _mount({
        props: {
          modelValue: true,
          destroyOnClose: true,
        },
      })
      expect(wrapper.vm.visible).toBe(true)
      await nextTick()
      await rAF()
      await nextTick()
      await wrapper.find('.el-dialog__headerbtn').trigger('click')
      await wrapper.setProps({
        // manually setting this prop because that Transition is not available in testing,
        // updating model value event was emitted via transition hooks.
        modelValue: false,
      })
      await nextTick()
      await rAF()
      await nextTick()
      expect(wrapper.find('.el-dialog__body').exists()).toBe(false)
    })

    test('should emit close event', async () => {
      let visible = true
      const onClose = jest.fn()
      const onClosed = jest.fn()
      const wrapper = _mount({
        props: {
          modelValue: visible,
          'onUpdate:modelValue': (val: boolean) => (visible = val),
          onClose,
          onClosed,
        },
      })

      expect(wrapper.vm.visible).toBe(true)
      await nextTick()
      await rAF()
      await nextTick()

      await triggerCompositeClick(wrapper.find('.el-overlay-dialog'))
      await nextTick()
      await rAF()
      await nextTick()
      expect(onClose).toHaveBeenCalled()
      expect(onClosed).toHaveBeenCalled()
      expect(visible).toBe(false)
    })

    test('closeIcon', async () => {
      const wrapper = _mount({
        props: {
          modelValue: true,
          closeIcon: Delete,
        },
      })
      await nextTick()
      await rAF()
      const closeIcon = wrapper.find('svg')
      expect(closeIcon.exists()).toBe(true)
      const svg = mount(Delete).find('svg').element
      expect(closeIcon.element.innerHTML).toBe(svg.innerHTML)
    })

    test('should render draggable prop', async () => {
      const wrapper = _mount({
        slots: {
          default: AXIOM,
        },
        props: {
          modelValue: true,
          draggable: true,
        },
      })

      await nextTick()
      await rAF()
      await nextTick()
      expect(wrapper.find('.is-draggable').exists()).toBe(true)
    })
  })
})
