import { nextTick, ref } from 'vue'
import { describe, expect, it, vi } from 'vitest'
import { EVENT_CODE } from '@element-plus/constants'
import { useModal } from '../use-modal'

describe('useModal', () => {
  it('should work when ref value changed', async () => {
    const visible = ref(false)
    const handleClose = vi.fn()

    useModal(
      {
        handleClose,
      },
      visible
    )

    expect(handleClose).not.toHaveBeenCalled()

    visible.value = true
    await nextTick()
    const event = new KeyboardEvent('keydown', {
      code: EVENT_CODE.esc,
    })
    document.dispatchEvent(event)
    expect(handleClose).toHaveBeenCalledTimes(1)

    visible.value = false
    await nextTick()
    document.dispatchEvent(event)
    expect(handleClose).toHaveBeenCalledTimes(1)
  })
})
