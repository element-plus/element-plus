import { ref, nextTick, h, inject } from 'vue'
import { mount } from '@vue/test-utils'
import ElTrigger from '../src/trigger.vue'
import { POPPER_INJECTION_KEY } from '../src/tokens'

const AXIOM = 'rem is the best girl'
const popperInjection = {
  triggerRef: ref(null),
  popperInstanceRef: ref(null),
  contentRef: ref(null),
}
const mountTrigger = (props = {}) =>
  mount(ElTrigger, {
    props,
    slots: {
      default: () => AXIOM,
    },
    global: {
      provide: {
        [POPPER_INJECTION_KEY as symbol]: popperInjection,
      },
    },
  })

describe('<ElPopperTrigger />', () => {
  let wrapper: ReturnType<typeof mountTrigger>

  afterEach(() => {
    popperInjection.triggerRef.value = null
  })
  describe('rendering', () => {
    it('should be able to render with children', async () => {
      wrapper = mountTrigger()
      await nextTick()

      expect(popperInjection.triggerRef.value).not.toBeNull()
      expect(wrapper.text()).toEqual(AXIOM)
    })

    it('should be able to render for virtual ref', async () => {
      wrapper = mountTrigger({
        virtualTriggering: true,
      })

      await nextTick()

      expect(wrapper.text()).not.toEqual(AXIOM)

      const virtualRef = document.createElement('div')
      await wrapper.setProps({
        virtualRef,
      })

      expect(popperInjection.triggerRef.value).toStrictEqual
    })
  })

  describe('can attach handlers', () => {
    it('should be able to attach handlers to the trigger', async () => {
      const onMousedown = jest.fn()
      const virtualRef = document.createElement('div')
      wrapper = mountTrigger({
        onMousedown,
        virtualTriggering: true,
        virtualRef,
      })
      await nextTick()
      expect(onMousedown).not.toHaveBeenCalled()
      const evt = new MouseEvent('mousedown')
      virtualRef.dispatchEvent(evt)
      await nextTick()
      expect(onMousedown).toHaveBeenCalled()
    })
  })
})
