import { computed, defineComponent, nextTick, onMounted, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import { hasClass } from '@element-plus/utils'

import { useLockscreen } from '../use-lockscreen'
import { useNamespace } from '../use-namespace'

const kls = 'el-popup-parent--hidden'

const Comp = defineComponent({
  setup() {
    const flag = ref(false)
    useLockscreen(flag)
    onMounted(() => {
      flag.value = true
    })

    return () => undefined
  },
})

describe('useLockscreen', () => {
  it('should lock screen when trigger is true', async () => {
    const wrapper = mount({
      setup: () => () => <Comp />,
    })
    await nextTick()
    expect(hasClass(document.body, kls)).toBe(true)

    wrapper.unmount()
    await nextTick()

    setTimeout(() => {
      expect(hasClass(document.body, kls)).toBe(false)
    }, 250)
  })

  it('should cleanup when unmounted', async () => {
    const shouldRender = ref(true)
    mount({
      setup: () => () => shouldRender.value ? <Comp /> : undefined,
    })

    await nextTick()

    expect(hasClass(document.body, kls)).toBe(true)

    shouldRender.value = false
    await nextTick()

    setTimeout(() => {
      expect(hasClass(document.body, kls)).toBe(false)
    }, 250)
  })

  it('should render a different namespace than the given one', async () => {
    const namespace = 'test'
    const wrapper = mount({
      setup() {
        const ns = useNamespace(
          'lock',
          computed(() => namespace)
        )
        const trigger = ref(false)
        useLockscreen(trigger, { ns })
        onMounted(() => {
          trigger.value = true
        })
        return () => undefined
      },
    })

    await nextTick()
    expect(hasClass(document.body, `${namespace}-lock-parent--hidden`)).toBe(
      true
    )

    wrapper.unmount()
  })
})
