import { h, inject, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { EVENT_CODE } from '@element-plus/constants'
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
    template: `
      <span class="before-trap" tabindex="0"></span>
      <div ref="focusTrapRef" tabindex="0" class="focus-container ${childKls}" @keydown="onKeydown">
        <template v-if="!items">${AXIOM}</template>
        <template v-else v-for="i in items">
          <span class="item" tabindex="0">{{ i }}</span>
        </template>
      </div>
      <span class="after-trap" tabindex="0"></span>
    `,
  }

  const createComponent = (props = {}, items = 0) =>
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
  const findFocusContainer = () => wrapper.find('.focus-container')
  const findDescendants = () => wrapper.findAll('.item')
  const findBeforeTrap = () => wrapper.find('.before-trap')
  const findAfterTrap = () => wrapper.find('.after-trap')

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  describe('render', () => {
    it('should render correctly', async () => {
      wrapper = createComponent()
      await nextTick()
      await nextTick()

      const child = findFocusContainer()
      expect(child.exists()).toBe(true)
      expect(child.text()).toBe(AXIOM)
      expect(document.activeElement).toBe(child.element)
    })

    it('should be able to focus on the first descendant item', async () => {
      wrapper = createComponent(undefined, 3)
      await nextTick()
      await nextTick()

      const descendants = findDescendants()
      expect(descendants).toHaveLength(3)
      expect(document.activeElement).toBe(descendants.at(0)?.element)
    })
  })

  describe('events', () => {
    it('should be able to dispatch focus on mount event', async () => {
      const focusOnMount = vi.fn()
      wrapper = createComponent({
        onFocusAfterTrapped: focusOnMount,
      })
      await nextTick()

      expect(focusOnMount).toHaveBeenCalled()
    })

    it('should be able to dispatch focus on unmount', async () => {
      const focusOnUnmount = vi.fn()
      wrapper = createComponent({
        onFocusAfterReleased: focusOnUnmount,
      })
      await nextTick()
      await nextTick()
      const child = findFocusContainer()
      expect(document.activeElement).toBe(child.element)

      wrapper.unmount()
      expect(focusOnUnmount).toHaveBeenCalled()
      expect(document.activeElement).toBe(document.body)
    })

    it('should be able to dispatch `release-requested` if escape key pressed while trapped', async () => {
      wrapper = createComponent(
        {
          trapped: false,
          loop: true,
        },
        1
      )
      await nextTick()

      const focusContainer = findFocusContainer()

      focusContainer?.trigger('keydown', {
        key: EVENT_CODE.esc,
      })

      await nextTick()
      await nextTick()

      expect(wrapper.emitted('release-requested')).toBeFalsy()

      await wrapper.setProps({ trapped: true })

      await nextTick()
      await nextTick()

      const items = findDescendants()
      const firstItem = items.at(0)
      expect(document.activeElement).toBe(firstItem?.element)

      // Expect no emit if esc while not trapped
      expect(wrapper.emitted('release-requested')).toBeFalsy()

      focusContainer?.trigger('keydown', {
        code: EVENT_CODE.esc,
      })

      await nextTick()
      await nextTick()

      // Expect emit if esc while trapped
      expect(wrapper.emitted('release-requested')?.length).toBe(1)

      createComponent({ loop: true }, 3)
      await nextTick()
      await nextTick()

      focusContainer?.trigger('keydown', {
        code: EVENT_CODE.esc,
      })

      // Expect no emit if esc while layer paused
      expect(wrapper.emitted('release-requested')?.length).toBe(1)
    })

    it('should be able to dispatch `focusout-prevented` when trab wraps due to trapped or is blocked', async () => {
      wrapper = createComponent(undefined, 3)
      await nextTick()
      await nextTick()

      const childComponent = findFocusContainer()
      const items = findDescendants()
      expect(document.activeElement).toBe(items.at(0)?.element)

      expect(wrapper.emitted('focusout-prevented')).toBeFalsy()
      await childComponent.trigger('keydown.shift', {
        code: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(items.at(0)?.element)
      expect(wrapper.emitted('focusout-prevented')?.length).toBe(2)
      ;(items.at(2)?.element as HTMLElement).focus()
      await childComponent.trigger('keydown', {
        code: EVENT_CODE.tab,
      })
      expect(wrapper.emitted('focusout-prevented')?.length).toBe(4)
    })
  })

  describe('features', () => {
    it('should be able to navigate via keyboard', async () => {
      wrapper = createComponent(undefined, 3)
      await nextTick()
      await nextTick()

      const childComponent = findFocusContainer()
      const items = findDescendants()
      expect(document.activeElement).toBe(items.at(0)?.element)

      /**
       * NOTE:
       * JSDOM does not support keyboard navigation simulation so that
       * dispatching keyboard event with tab key is useless, we cannot test it
       * it here, maybe turn to cypress for robust e2e test would be a better idea
       */
      // when loop is off
      await childComponent.trigger('keydown.shift', {
        code: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(items.at(0)?.element)
      ;(items.at(2)?.element as HTMLElement).focus()
      expect(document.activeElement).toBe(items.at(2)?.element)

      await childComponent.trigger('keydown', {
        code: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(items.at(2)?.element)

      // set loop to true so that tab can tabbing from last to first and back forth
      await wrapper.setProps({
        loop: true,
      })

      await childComponent.trigger('keydown', {
        code: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(items.at(0)?.element)

      await childComponent.trigger('keydown.shift', {
        code: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(items.at(2)?.element)
    })

    it('should not be able to navigate when no focusable element contained', async () => {
      wrapper = createComponent()
      await nextTick()
      await nextTick()

      const focusComponent = findFocusContainer()
      expect(document.activeElement).toBe(focusComponent.element)

      await focusComponent.trigger('keydown', {
        code: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(focusComponent.element)
    })

    it('should be able to navigate outside by keyboard when not trapped', async () => {
      wrapper = createComponent(
        {
          trapped: false,
        },
        1
      )
      await nextTick()
      await nextTick()

      let isDefaultPrevented = false
      const preventDefault = () => {
        isDefaultPrevented = true
      }

      const focusContainer = findFocusContainer()
      const items = findDescendants()
      const beforeTrap = findBeforeTrap()
      const afterTrap = findAfterTrap()

      ;(beforeTrap.element as HTMLElement).focus()
      expect(document.activeElement).toBe(beforeTrap.element)

      await focusContainer.trigger('keydown', {
        code: EVENT_CODE.tab,
        preventDefault,
      })
      if (!isDefaultPrevented) {
        ;(items.at(0)?.element as HTMLElement).focus()
      }

      expect(document.activeElement).toBe(items.at(0)?.element)

      await focusContainer.trigger('keydown', {
        code: EVENT_CODE.tab,
        preventDefault,
      })
      if (!isDefaultPrevented) {
        ;(afterTrap.element as HTMLElement).focus()
      }

      expect(document.activeElement).toBe(afterTrap.element)
    })

    it('should not be able to navigate if the current layer is paused', async () => {
      wrapper = createComponent(
        {
          loop: true,
        },
        3
      )
      await nextTick()
      await nextTick()

      const focusComponent = findFocusContainer()
      const items = findDescendants()
      expect(document.activeElement).toBe(items.at(0)?.element)

      await focusComponent.trigger('keydown.shift', {
        code: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(items.at(2)?.element)

      const newFocusTrap = createComponent({ loop: true }, 3)
      await nextTick()
      await nextTick()
      expect(document.activeElement).toBe(newFocusTrap.find('.item').element)

      await focusComponent.trigger('keydown', {
        code: EVENT_CODE.tab,
      })
      expect(document.activeElement).not.toBe(items.at(0)?.element)
      newFocusTrap.unmount()
      await nextTick()

      expect(document.activeElement).toBe(items.at(2)?.element)

      await focusComponent.trigger('keydown', {
        code: EVENT_CODE.tab,
      })
      expect(document.activeElement).toBe(items.at(0)?.element)
    })

    it('should steal focus when trapped', async () => {
      wrapper = createComponent(
        {
          trapped: false,
          loop: true,
        },
        1
      )
      await nextTick()

      const beforeTrap = findBeforeTrap()
      ;(beforeTrap.element as HTMLElement).focus()
      expect(document.activeElement).toBe(beforeTrap.element)

      await wrapper.setProps({ trapped: true })

      await nextTick()
      await nextTick()

      const items = findDescendants()
      const firstItem = items.at(0)
      expect(document.activeElement).toBe(firstItem?.element)
    })
  })
})
