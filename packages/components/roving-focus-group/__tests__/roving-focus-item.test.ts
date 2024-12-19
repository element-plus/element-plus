// @ts-nocheck
import { defineComponent, inject, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { composeRefs } from '@element-plus/utils'
import { EVENT_CODE } from '@element-plus/constants'
import {
  ROVING_FOCUS_COLLECTION_INJECTION_KEY,
  ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY,
} from '../src/roving-focus-group'
import {
  ROVING_FOCUS_GROUP_INJECTION_KEY,
  ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY,
} from '../src/tokens'
import ElRovingFocusItem from '../src/roving-focus-item.vue'
const AXIOM = 'rem is the best girl'
const focusItemKls = 'item-kls'

let counter = 0
const FocusItem = defineComponent({
  setup() {
    const { rovingFocusGroupItemRef, ...itemInjection } = inject(
      ROVING_FOCUS_GROUP_ITEM_INJECTION_KEY,
      undefined
    )
    const collectionItemInjection = inject(
      ROVING_FOCUS_ITEM_COLLECTION_INJECTION_KEY,
      undefined
    )!
    const itemRef = composeRefs(
      rovingFocusGroupItemRef,
      collectionItemInjection.collectionItemRef
    )
    return {
      itemRef,
      ...itemInjection,
      id: ++counter,
    }
  },
  template: `<div
      :ref="itemRef"
      :tabindex="tabIndex"
      class="${focusItemKls}"
      @keydown="handleKeydown"
      @focus="handleFocus"
      @mousedown="handleMousedown"
    >
      ${AXIOM} {{ id }}
    </div>`,
})

describe('<ElRovingFocusItem />', () => {
  const currentTabbedId = ref('test_id')
  const loop = ref(false)
  const onItemFocus = vi.fn()
  const onItemShiftTab = vi.fn()
  const itemMap = new Map()
  const getItems = () => [...itemMap.values()]
  const defaultProvides = {
    [ROVING_FOCUS_GROUP_INJECTION_KEY as symbol]: {
      currentTabbedId,
      loop,
      onItemFocus,
      onItemShiftTab,
    },
    [ROVING_FOCUS_COLLECTION_INJECTION_KEY as symbol]: {
      getItems,
      itemMap,
    },
  }
  const createComponent = (props = {}) =>
    mount(
      {
        template: `<div>
        <el-roving-focus-item v-bind="$attrs">
          <focus-item />
        </el-roving-focus-item>
        <el-roving-focus-item v-bind="$attrs">
          <focus-item />
        </el-roving-focus-item>
        <el-roving-focus-item v-bind="$attrs">
          <focus-item />
        </el-roving-focus-item>
      </div>`,
        components: {
          ElRovingFocusItem,
          FocusItem,
        },
      },
      {
        props,
        global: {
          provide: defaultProvides,
        },
        attachTo: document.body,
      }
    )
  let wrapper: ReturnType<typeof createComponent>
  const findItems = () => wrapper.findAllComponents(ElRovingFocusItem)
  const findDOMItems = () => wrapper.findAll(`.${focusItemKls}`)
  beforeEach(async () => {
    wrapper = createComponent()
    await nextTick()
  })
  afterEach(() => {
    wrapper.unmount()
  })

  describe('rendering test', () => {
    it('should be able to render content', () => {
      expect(wrapper.html()).toContain(AXIOM)
      expect(findItems()).toHaveLength(3)
    })
  })

  describe('roving focus', () => {
    it('should be able to handle mousedown event', async () => {
      const DOMItems = findDOMItems()
      const items = findItems()
      const firstDOMItem = DOMItems.at(0)

      await firstDOMItem.trigger('mousedown')
      await nextTick()

      const firstItem = items.at(0)
      expect(firstItem.emitted()).toHaveProperty('mousedown')
      await wrapper.setProps({
        focusable: false,
      })
      await firstDOMItem.trigger('mousedown')
      // when the item is not focusable, the focus event should be prevented by default
      const emittedEvents = firstItem.emitted().mousedown
      expect(emittedEvents.at(0)[0].defaultPrevented).toBe(false)
      expect(emittedEvents.at(1)[0].defaultPrevented).toBe(true)
    })

    it('should be able to handle focus event', async () => {
      expect(onItemFocus).not.toHaveBeenCalled()
      const DOMItems = findDOMItems()
      const firstDOMItem = DOMItems.at(0)
      await firstDOMItem.trigger('focus')
      expect(onItemFocus).toHaveBeenCalled()
      expect(findItems().at(0).emitted()).toHaveProperty('focus')
    })

    it('should be able to handle keyboard navigation', async () => {
      const DOMItems = findDOMItems()
      const items = findItems()
      const firstDOMItem = DOMItems.at(0)
      expect(onItemShiftTab).not.toHaveBeenCalled()
      await firstDOMItem.trigger('keydown.shift', {
        code: EVENT_CODE.tab,
      })
      expect(items.at(0).emitted()).toHaveProperty('keydown')
      expect(onItemShiftTab).toHaveBeenCalled()
      // navigating clockwise
      expect(document.activeElement).toBe(document.body)
      await DOMItems.at(1).trigger('keydown', {
        code: EVENT_CODE.down,
      })
      await nextTick()
      expect(document.activeElement).toStrictEqual(DOMItems.at(2).element)

      // navigate anticlockwise
      await DOMItems.at(1).trigger('keydown', {
        code: EVENT_CODE.up,
      })
      await nextTick()
      expect(document.activeElement).toStrictEqual(DOMItems.at(0).element)

      // should be able to focus on the last element when press End
      await DOMItems.at(0).trigger('keydown', {
        code: EVENT_CODE.end,
      })
      await nextTick()
      expect(document.activeElement).toStrictEqual(DOMItems.at(2).element)

      await DOMItems.at(0).trigger('keydown', {
        code: EVENT_CODE.home,
      })
      await nextTick()
      expect(document.activeElement).toStrictEqual(DOMItems.at(0).element)
    })
  })
})
