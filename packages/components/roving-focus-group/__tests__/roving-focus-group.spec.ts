import { h, inject, nextTick, defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import { COLLECTION_ITEM_SIGN } from '@element-plus/components/collection'
import { composeRefs } from '@element-plus/utils-v2'
import ElRovingFocusGroup from '../src/roving-focus-group.vue'
import { ROVING_FOCUS_GROUP_INJECTION_KEY } from '../src/tokens'
import { ROVING_FOCUS_COLLECTION_INJECTION_KEY } from '../src/roving-focus-group'

const AXIOM = 'rem is the best girl'
const RovingFocusGroupChild = defineComponent({
  setup() {
    const rovingFocusGroupInjection = inject(
      ROVING_FOCUS_GROUP_INJECTION_KEY,
      undefined
    )!

    const { itemMap, collectionRef } = inject(
      ROVING_FOCUS_COLLECTION_INJECTION_KEY,
      undefined
    )!

    Array.from({
      length: 3,
    }).forEach((_, id) => {
      const div = document.createElement('div')
      div.id = id.toString()
      itemMap.set(div, {
        ref: div,
        focusable: true,
        active: false,
        id: id.toString(),
      })
    })
    const composedRef = composeRefs(
      rovingFocusGroupInjection.rovingFocusGroupRef,
      collectionRef
    )
    return {
      ...rovingFocusGroupInjection,
      composedRef,
    }
  },
  template: `<div
    :ref="composedRef"
    :tabindex="tabIndex"
    @blur="onBlur"
    @focus="onFocus"
    @mousedown="onMousedown"
    >
      <template v-for="i in 3">
        <div class="${COLLECTION_ITEM_SIGN}">
          ${AXIOM} {{ i }}
        </div>
      </template>
    </div>`,
})

const onFocus = jest.fn()
const onBlur = jest.fn()
const onMousedown = jest.fn()

describe('<ElRovingFocusGroup />', () => {
  const createComponent = (
    props = {
      onFocus,
      onBlur,
      onMousedown,
    }
  ) =>
    mount(ElRovingFocusGroup, {
      props,
      slots: {
        default: () => h(RovingFocusGroupChild),
      },
    })

  let wrapper: ReturnType<typeof createComponent>

  const findChild = () => wrapper.findComponent(RovingFocusGroupChild)
  beforeEach(async () => {
    wrapper = createComponent()
    await nextTick()
  })
  afterEach(() => {
    ;[onFocus, onBlur, onMousedown].forEach((f) => f.mockClear())
    wrapper.unmount()
  })

  it('should be able to render', () => {
    expect(wrapper.html()).toContain(AXIOM)
    expect(findChild().attributes('tabindex')).toBe('0')
  })

  it('should be able to control current tab', async () => {
    const child = findChild()
    expect(child.vm.currentTabbedId).toBe(null)

    const currentTabId = 'test_id'
    await wrapper.setProps({
      currentTabId,
    })

    expect(child.vm.currentTabbedId).toBe(currentTabId)
  })

  it('should be able to combine style', async () => {
    const style = {
      position: 'absolute',
    }
    await wrapper.setProps({
      style,
    })
    const child = findChild()
    expect(child.vm.rovingFocusGroupRootStyle).toHaveLength(2)
    expect(child.vm.rovingFocusGroupRootStyle[1]).toEqual(style)
  })

  describe('provides', () => {
    it('should provide onFocus and onBlur event for children', async () => {
      expect(onFocus).not.toHaveBeenCalled()
      expect(onBlur).not.toHaveBeenCalled()
      const child = findChild()
      await child.trigger('focus')
      expect(onFocus).toHaveBeenCalled()
      await child.trigger('blur')
      expect(onBlur).toHaveBeenCalled()
    })

    it('should provide onMousedown event for children', async () => {
      expect(onMousedown).not.toHaveBeenCalled()
      const child = findChild()
      await child.trigger('mousedown')
      expect(onMousedown).toHaveBeenCalled()
    })

    it('should be able to provide item tabbing handlers', async () => {
      const onTabChange = jest.fn()
      const tabbedId = 'test_id'
      const child = findChild()
      await wrapper.setProps({
        onCurrentTabIdChange: onTabChange,
      })

      child.vm.onItemFocus(tabbedId)
      await nextTick()
      expect(onTabChange).toHaveBeenCalledWith(tabbedId)
      expect(child.attributes('tabindex')).toBe('0')

      child.vm.onItemShiftTab()
      await nextTick()
      expect(child.attributes('tabindex')).toBe('-1')
    })
  })
})
