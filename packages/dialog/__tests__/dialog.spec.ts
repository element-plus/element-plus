import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Dialog from '../src/index'

const AXIOM = 'Rem is the best girl'

const _mount = ({
  slots,
  ...rest
}: Indexable<any>) => {
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
  test('render test', () => {
    const wrapper = _mount({
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('dialog should have a title when title has been given', () => {
    const HEADER = 'I am header'
    let wrapper = _mount({
      slots: {
        header: HEADER,
      },
    })
    expect(wrapper.find('.el-dialog__header').text()).toBe(HEADER)

    wrapper = _mount({
      props: {
        title: HEADER,
      },
    })

    expect(wrapper.find('.el-dialog__header').text()).toBe(HEADER)
  })

  test('dialog should have a footer when footer has been given', () => {
    const wrapper = _mount({
      slots: {
        footer: AXIOM,
      },
    })

    expect(wrapper.find('.el-dialog__footer').exists()).toBe(true)
    expect(wrapper.find('.el-dialog__footer').text()).toBe(AXIOM)
  })

  test('should append dialog to body when appendToBody is true', () => {
    const wrapper = _mount({
      props: {
        appendToBody: true,
      },
    })
    expect(document.body.firstElementChild.classList.contains('el-overlay')).toBe(true)
    wrapper.unmount()
  })

  test('should center dialog', () => {
    const wrapper = _mount({
      props: {
        center: true,
      },
    })
    expect(wrapper.find('.el-dialog--center').exists()).toBe(true)
  })

  test('should show close button', () => {
    const wrapper = _mount({})
    expect(wrapper.find('.el-dialog__close').exists()).toBe(true)
  })

  test('should close dialog when click on close button', async () => {
    const wrapper = _mount({
      props: {
        modelValue: true,
      },
    })

    await wrapper.find('.el-dialog__headerbtn').trigger('click')
    expect(wrapper.vm.visible).toBe(false)
  })

  describe('mask related', () => {
    test('should not have overlay mask when mask is false', () => {
      const wrapper = _mount({
        props: {
          mask: false,
        },
      })

      expect(wrapper.find('.el-overlay').exists()).toBe(false)
    })

    test('should close the modal when clicking on mask when `closeOnClickModal` is true', async () => {
      const wrapper = _mount({})

      expect(wrapper.find('.el-overlay').exists()).toBe(true)

      await wrapper.find('.el-overlay').trigger('click')
      expect(wrapper.vm.visible).toBe(false)
    })
  })

  describe('life cycles', () => {
    test('should call before close', async () => {
      const beforeClose = jest.fn()
      const wrapper = _mount({
        props: {
          beforeClose,
        },
      })

      wrapper.vm.handleClose()
      expect(beforeClose).toHaveBeenCalled()
    })

    test('should not close dialog when user cancelled', () => {
      const beforeClose = jest.fn().mockImplementation((hide: (cancel: boolean) => void) => hide(true))

      const wrapper = _mount({
        props: {
          beforeClose,
          modelValue: true,
        },
      })

      wrapper.vm.handleClose()
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

      expect(wrapper.vm.visible).toBe(false)

      jest.runOnlyPendingTimers()

      expect(wrapper.vm.visible).toBe(true)
    })

    test('should destroy on close', async () => {
      const wrapper = _mount({
        props: {
          modelValue: true,
          destroyOnClose: true,
        },
      })

      expect(wrapper.vm.visible).toBe(true)

      wrapper.vm.handleClose()
      await wrapper.setProps({
        // manually setting this prop because that Transition is not available in testing,
        // updating model value event was emitted via transition hooks.
        modelValue: false,
      })
      await nextTick()
      expect(wrapper.html()).toBe('<!---->')
    })
  })
})
