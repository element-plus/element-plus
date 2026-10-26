import { computed, h, shallowRef, toValue } from 'vue'
import { flushPromises, mount } from '@vue/test-utils'
import { useClipboard } from '@vueuse/core'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ElMessage } from 'element-plus'
import { useCopyColor } from '../utils/colors/hooks'

vi.mock('@vueuse/core', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@vueuse/core')>()),
  useClipboard: vi.fn(),
}))

vi.mock('../utils/colors/var', () => ({
  getColorValue: () => '#409eff',
}))

const supported = shallowRef(true)
const copy = vi.fn<() => Promise<void>>()
let wrapper: ReturnType<typeof mount>

beforeEach(() => {
  vi.spyOn(ElMessage, 'success').mockReturnValue({ close: vi.fn() })
  vi.spyOn(ElMessage, 'error').mockReturnValue({ close: vi.fn() })
  supported.value = true
  copy.mockReset().mockResolvedValue(undefined)
  vi.mocked(useClipboard).mockReturnValue({
    isSupported: computed(() => supported.value),
    copy,
    text: shallowRef(''),
    copied: shallowRef(false),
    copyPending: shallowRef(false),
  })
  wrapper = mount(
    {
      setup() {
        const { copyColor } = useCopyColor()
        return () =>
          h('button', { onClick: () => copyColor('primary') }, 'Copy color')
      },
    },
    {
      global: {
        plugins: [ElMessage],
      },
    }
  )
})

afterEach(() => {
  wrapper.unmount()
  vi.restoreAllMocks()
})

describe('copy documentation colors', () => {
  it('reports unsupported clipboard access without copying or reporting success', async () => {
    supported.value = false

    await wrapper.get('button').trigger('click')
    await flushPromises()

    expect(ElMessage.error).toHaveBeenCalledWith('Copy failed')
    expect(copy).not.toHaveBeenCalled()
    expect(ElMessage.success).not.toHaveBeenCalled()
  })

  it('copies the current color and reports success when supported', async () => {
    await wrapper.get('button').trigger('click')
    await flushPromises()

    expect(copy).toHaveBeenCalledOnce()
    expect(toValue(vi.mocked(useClipboard).mock.calls[0][0]?.source)).toBe(
      '#409eff'
    )
    expect(ElMessage.success).toHaveBeenCalledWith(
      '--el-color-primary: #409eff'
    )
    expect(ElMessage.error).not.toHaveBeenCalled()
  })

  it('reports copy failures without reporting success', async () => {
    copy.mockRejectedValue(new Error('Clipboard denied'))

    await wrapper.get('button').trigger('click')
    await flushPromises()

    expect(copy).toHaveBeenCalledOnce()
    expect(ElMessage.error).toHaveBeenCalledWith('Clipboard denied')
    expect(ElMessage.success).not.toHaveBeenCalled()
  })
})
