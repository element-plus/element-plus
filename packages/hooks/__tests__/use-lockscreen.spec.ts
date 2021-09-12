import { ref, nextTick, defineComponent, onMounted } from 'vue'
import { mount } from '@vue/test-utils'
import { hasClass } from '@element-plus/utils/dom'

import useLockScreen from '../use-lockscreen'

const kls = 'el-popup-parent--hidden'

const Comp = defineComponent({
  setup() {
    const flag = ref(false)
    useLockScreen(flag)
    onMounted(() => {
      flag.value = true
    })
  },
  template: `<div></div>`,
})

describe('useLockScreen', () => {
  test('should lock screen when trigger is true', async () => {
    const wrapper = mount({
      template: `
        <test-comp />
      `,
      components: {
        'test-comp': Comp,
      },
    })
    await nextTick()
    expect(hasClass(document.body, kls)).toBe(true)

    wrapper.unmount()
    await nextTick()
    expect(hasClass(document.body, kls)).toBe(false)
  })

  test('should cleanup when unmounted', async () => {
    const wrapper = mount({
      template: `
        <test-comp v-if="shouldRender" />
      `,
      data() {
        return {
          shouldRender: true,
        }
      },
      components: {
        'test-comp': Comp,
      },
    })

    await nextTick()

    expect(hasClass(document.body, kls)).toBe(true)

    wrapper.vm.shouldRender = false
    await nextTick()

    expect(hasClass(document.body, kls)).toBe(false)
  })
})
