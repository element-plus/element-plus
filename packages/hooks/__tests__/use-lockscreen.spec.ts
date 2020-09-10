import { ref, nextTick } from 'vue'
import { hasClass } from '@element-plus/utils/dom'
import useLockScreen from '../use-lockscreen'

describe('useLockScreen', () => {
  test('should lock screen when trigger is true', async () => {
    const _ref = ref(false)
    const cls = 'el-popup-parent--hidden'
    useLockScreen(_ref)
    expect(hasClass(document.body, cls)).toBe(false)
    _ref.value = true
    await nextTick()
    expect(hasClass(document.body, cls)).toBe(true)
  })
})
