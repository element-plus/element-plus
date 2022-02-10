import { nextTick } from 'vue'
import { shallowMount } from '@vue/test-utils'
import { EVENT_CODE } from '@element-plus/utils-v2'
import ElTooltipTrigger from '../src/trigger.vue'
import { genTooltipProvides } from '../test-helper/provides'
import { TOOLTIP_INJECTION_KEY } from '../src/tokens'

const AXIOM = 'rem is the best girl'

describe('<ElTooltipTrigger />', () => {
  const { controlled, id, open, onOpen, onClose, onToggle, onShow, onHide } =
    genTooltipProvides()

  const defaultProvide = {
    [TOOLTIP_INJECTION_KEY as symbol]: {
      controlled,
      id,
      open,
      onOpen,
      onClose,
      onToggle,
      onShow,
      onHide,
    },
  }

  const createComponent = (props = {}) =>
    shallowMount(ElTooltipTrigger, {
      props,
      global: {
        provide: defaultProvide,
      },
      slots: {
        default: () => AXIOM,
      },
      attachTo: document.body,
    })

  let wrapper: ReturnType<typeof createComponent>

  afterEach(() => {
    ;[onOpen, onClose, onToggle, onShow, onHide].forEach((fn) => fn.mockClear())
    open.value = false
    controlled.value = false
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  describe('rendering', () => {
    it('should render correctly', async () => {
      wrapper = createComponent()
    })
  })

  describe('trigger event', () => {
    describe('controlled', () => {
      it('should not trigger anything when tooltip is controlled', async () => {
        wrapper = createComponent()
        controlled.value = true
        await nextTick()

        const { vm } = wrapper
        const blurEvt = new FocusEvent('blur')
        vm.onBlur(blurEvt)
        await nextTick()
        expect(onClose).not.toHaveBeenCalled()
        const focusEvt = new FocusEvent('focus')
        vm.onFocus(focusEvt)
        await nextTick()
        expect(onOpen).not.toHaveBeenCalled()
        const mousedownEvt = new MouseEvent('mousedown')
        vm.onClick(mousedownEvt)
        await nextTick()
        expect(onToggle).not.toHaveBeenCalled()
        const mouseenterEvt = new MouseEvent('mouseenter')
        vm.onMouseenter(mouseenterEvt)
        await nextTick()
        expect(onOpen).not.toHaveBeenCalled()
        const mouseleaveEvt = new MouseEvent('mouseleave')
        vm.onMouseleave(mouseleaveEvt)
        await nextTick()
        expect(onClose).not.toHaveBeenCalled()
        const contextmenuEvt = new MouseEvent('contextmenu')
        vm.onContextMenu(contextmenuEvt)
        await nextTick()
        expect(onToggle).not.toHaveBeenCalled()

        // keyboard evt

        const keyboardEvt = new KeyboardEvent('keydown')
        vm.onKeydown(keyboardEvt)
        await nextTick()
        expect(onToggle).not.toHaveBeenCalled()
      })
    })

    describe('uncontrolled', () => {
      it('should be able to dispatch event when uncontrolled', async () => {
        wrapper = createComponent()
        await nextTick()

        const { vm } = wrapper
        await wrapper.setProps({
          trigger: 'focus',
        })
        const blurEvt = new FocusEvent('blur')
        vm.onBlur(blurEvt)
        await nextTick()
        expect(onClose).toHaveBeenCalledTimes(1)
        const focusEvt = new FocusEvent('focus')
        vm.onFocus(focusEvt)
        await nextTick()
        expect(onOpen).toHaveBeenCalledTimes(1)
        await wrapper.setProps({
          trigger: 'click',
        })
        const mousedownEvt = new MouseEvent('mousedown')
        vm.onClick(mousedownEvt)
        await nextTick()
        await wrapper.setProps({
          trigger: 'hover',
        })
        expect(onToggle).toHaveBeenCalledTimes(1)
        const mouseenterEvt = new MouseEvent('mouseenter')
        vm.onMouseenter(mouseenterEvt)
        await nextTick()
        expect(onOpen).toHaveBeenCalledTimes(2)
        const mouseleaveEvt = new MouseEvent('mouseleave')
        vm.onMouseleave(mouseleaveEvt)
        await nextTick()
        expect(onClose).toHaveBeenCalledTimes(2)
        await wrapper.setProps({
          trigger: 'contextmenu',
        })
        const contextmenuEvt = new MouseEvent('contextmenu')
        vm.onContextMenu(contextmenuEvt)
        await nextTick()
        expect(onToggle).toHaveBeenCalledTimes(2)

        // keyboard evt

        let keyboardEvt = new KeyboardEvent('keydown', {
          code: EVENT_CODE.esc,
        })

        vm.onKeydown(keyboardEvt)
        await nextTick()
        expect(onToggle).toHaveBeenCalledTimes(2)
        keyboardEvt = new KeyboardEvent('keydown', {
          code: EVENT_CODE.enter,
        })
        vm.onKeydown(keyboardEvt)
        await nextTick()
        expect(onToggle).toHaveBeenCalledTimes(3)

        keyboardEvt = new KeyboardEvent('keydown', {
          code: EVENT_CODE.space,
        })
        vm.onKeydown(keyboardEvt)
        await nextTick()
        expect(onToggle).toHaveBeenCalledTimes(4)
      })
    })
  })
})
