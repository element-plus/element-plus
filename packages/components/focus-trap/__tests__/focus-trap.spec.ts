import { h, nextTick, inject } from 'vue'
import { mount } from '@vue/test-utils'
import { EVENT_CODE } from '@element-plus/utils-v2'
import ElFocusTrap from '../src/focus-trap.vue'
import { FOCUS_TRAP_INJECTION_KEY } from '../src/tokens'

const AXIOM = 'rem is the best girl'

describe('<ElFocusTrap', () => {
  const childKls = 'child-class'
  const TrapChild = {
    props: {
      items: Number,
    },
    setup() {
      const { focusTrapRef, onKeydown } = inject(
        FOCUS_TRAP_INJECTION_KEY,
        undefined
      )!
      return {
        focusTrapRef,
        onKeydown,
      }
    },
    template: `<div ref="focusTrapRef" tabindex="0" class="${childKls}" @keydown="onKeydown">
      <template v-if="!items">${AXIOM}</template>
      <template v-else v-for="i in items">
        <span class="item" tabindex="0">{{ i }}</span>
      </template>
    </div>`,
  }

  const createComponent = (props = {}, items = null) =>
    mount(ElFocusTrap, {
      props: {
        trapped: true,
        ...props,
      },
      slots: {
        default: () => h(TrapChild, { items }),
      },
      attachTo: document.body,
    })

  let wrapper: ReturnType<typeof createComponent>
  const findFocusComponent = () => wrapper.findComponent(TrapChild as any)
  const findDescendants = () => wrapper.findAll('.item')

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  describe('render', () => {
    it('should render correctly', async () => {
      wrapper = createComponent()
      await nextTick()

      const child = findFocusComponent()
      expect(child.exists()).toBe(true)
      expect(child.text()).toBe(AXIOM)
      expect(document.activeElement).toBe(child.element)
    })

    it('should be able to focus on the first descendant item', async () => {
      wrapper = createComponent(undefined, 3)
      await nextTick()

      const descendants = findDescendants()
      expect(descendants).toHaveLength(3)
      expect(document.activeElement).toBe(descendants.at(0).element)
    })
  })

  describe('events', () => {
    it('should be able to dispatch focus on mount event', async () => {
      const focusOnMount = jest.fn()
      wrapper = createComponent({
        onMountOnFocus: focusOnMount,
      })
      await nextTick()

      expect(focusOnMount).toHaveBeenCalled()
    })

    it('should be able to dispatch focus on unmount', async () => {
      const focusOnUnmount = jest.fn()
      wrapper = createComponent({
        onUnmountOnFocus: focusOnUnmount,
      })
      await nextTick()
      const child = findFocusComponent()
      expect(document.activeElement).toBe(child.element)

      wrapper.unmount()
      expect(focusOnUnmount).toHaveBeenCalled()
      expect(document.activeElement).toBe(document.body)
    })
  })

  describe('features', () => {
    it('should be able to navigate via keyboard', async () => {
      wrapper = createComponent(undefined, 3)
      await nextTick()

      const childComponent = findFocusComponent()
      const items = findDescendants()
      expect(document.activeElement).toBe(items.at(0).element)

      /**
       * NOTE:
       * JSDOM does not support keyboard navigation simulation so that
       * dispatching keyboard event with tab key is useless, we cannot test it
       * it here, maybe turn to cypress for robust e2e test would be a better idea
       */
      // when loop is off
      await childComponent.trigger('keydown.shift', {
        key: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(items.at(0).element)
      ;(items.at(2).element as HTMLElement).focus()
      expect(document.activeElement).toBe(items.at(2).element)

      await childComponent.trigger('keydown', {
        key: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(items.at(2).element)

      // set loop to true so that tab can tabbing from last to first and back forth
      await wrapper.setProps({
        loop: true,
      })

      await childComponent.trigger('keydown', {
        key: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(items.at(0).element)

      await childComponent.trigger('keydown.shift', {
        key: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(items.at(2).element)
    })

    it('should not be able to navigate when no focusable element contained', async () => {
      wrapper = createComponent()
      await nextTick()

      const focusComponent = findFocusComponent()
      expect(document.activeElement).toBe(focusComponent.element)

      await focusComponent.trigger('keydown', {
        key: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(focusComponent.element)
    })

    it('should not be able to navigate by keyboard when not trapped', async () => {
      wrapper = createComponent(
        {
          trapped: false,
        },
        3
      )
      await nextTick()

      const focusComponent = findFocusComponent()
      const items = findDescendants()
      expect(document.activeElement).toBe(items.at(0).element)

      await focusComponent.trigger('keydown', {
        key: EVENT_CODE.tab,
      })

      expect(document.activeElement).toBe(items.at(0).element)
    })

    it('should not be able to navigate if the current layer is paused', async () => {
      wrapper = createComponent(
        {
          loop: true,
        },
        3
      )
      await nextTick()

      const focusComponent = findFocusComponent()
      const items = findDescendants()
      expect(document.activeElement).toBe(items.at(0).element)

      await focusComponent.trigger('keydown.shift', {
        key: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(items.at(2).element)

      const newFocusTrap = createComponent()
      await nextTick()
      expect(document.activeElement).toBe(
        newFocusTrap.find(`.${childKls}`).element
      )

      await focusComponent.trigger('keydown', {
        key: EVENT_CODE.tab,
      })
      expect(document.activeElement).not.toBe(items.at(0).element)

      newFocusTrap.unmount()
      expect(document.activeElement).toBe(items.at(2).element)

      await focusComponent.trigger('keydown', {
        key: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(items.at(0).element)
    })
  })
})
