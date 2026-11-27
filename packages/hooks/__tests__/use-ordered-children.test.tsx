import {
  defineComponent,
  getCurrentInstance,
  inject,
  nextTick,
  onBeforeUnmount,
  provide,
  ref,
} from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { useOrderedChildren } from '../use-ordered-children'

import type { InjectionKey, ShallowRef, VNode } from 'vue'

const CHILD_NAME = 'OrderedChild'

interface ChildItem {
  uid: number
  name: string
  getVnode: () => VNode
}

interface OrderedContext {
  addChild: (child: ChildItem) => void
  removeChild: (child: ChildItem) => void
}

const ORDERED_CTX_KEY: InjectionKey<OrderedContext> = Symbol('orderedCtx')

const OrderedChild = defineComponent({
  name: CHILD_NAME,
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const instance = getCurrentInstance()!
    const ctx = inject(ORDERED_CTX_KEY)!
    const child: ChildItem = {
      uid: instance.uid,
      name: props.name,
      getVnode: () => instance.vnode,
    }

    ctx.addChild(child)
    onBeforeUnmount(() => {
      ctx.removeChild(child)
    })

    return () => <div class="ordered-child">{props.name}</div>
  },
})

const createHarness = () => {
  let orderedChildren: ShallowRef<ChildItem[]>

  const OrderedParent = defineComponent({
    setup(_, { slots }) {
      const { children, addChild, removeChild, ChildrenSorter } =
        useOrderedChildren<ChildItem>(getCurrentInstance()!, CHILD_NAME)
      orderedChildren = children
      provide(ORDERED_CTX_KEY, { addChild, removeChild })

      return () => (
        <div class="ordered-parent">
          <ChildrenSorter>{slots.default?.()}</ChildrenSorter>
        </div>
      )
    },
  })

  return {
    OrderedParent,
    getChildren: () => orderedChildren.value,
  }
}

describe('useOrderedChildren', () => {
  it('should track and remove ordered children normally', async () => {
    const { OrderedParent, getChildren } = createHarness()
    const showFirst = ref(true)

    const wrapper = mount({
      setup() {
        return () => (
          <OrderedParent>
            {showFirst.value && <OrderedChild name="a" />}
            <OrderedChild name="b" />
          </OrderedParent>
        )
      },
    })

    expect(getChildren().map((c) => c.name)).toEqual(['a', 'b'])

    showFirst.value = false
    await nextTick()

    expect(getChildren().map((c) => c.name)).toEqual(['b'])
    wrapper.unmount()
  })

  it('should not throw when child node is detached before unmount', () => {
    const { OrderedParent } = createHarness()

    const wrapper = mount({
      setup() {
        return () => (
          <OrderedParent>
            <OrderedChild name="a" />
          </OrderedParent>
        )
      },
    })

    wrapper.find('.ordered-child').element.remove()
    expect(() => wrapper.unmount()).not.toThrow()
  })

  it('should not throw when child node is moved to an untracked parent before unmount', () => {
    const { OrderedParent } = createHarness()
    const externalParent = document.createElement('div')

    const wrapper = mount({
      setup() {
        return () => (
          <OrderedParent>
            <OrderedChild name="a" />
          </OrderedParent>
        )
      },
    })

    externalParent.appendChild(wrapper.find('.ordered-child').element)
    expect(() => wrapper.unmount()).not.toThrow()
  })
})
