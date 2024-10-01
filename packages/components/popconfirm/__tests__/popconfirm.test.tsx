import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import { usePopperContainerId } from '@element-plus/hooks'
import Popconfirm from '../src/popconfirm.vue'

const AXIOM = 'rem is the best girl'
const FUN = 'dQw4w9WgXcQ'
const selector = '.el-popper'

describe('Popconfirm.vue', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('render test', async () => {
    const wrapper = mount(() => (
      <>
        <Popconfirm
          v-slots={{
            reference: () => <div class="reference">{AXIOM}</div>,
          }}
        />
      </>
    ))
    await nextTick()

    expect(document.querySelector(selector)!.getAttribute('style')).toContain(
      'display: none'
    )

    await wrapper.find('.reference').trigger('click')

    await nextTick()
    await rAF()

    expect(
      document.querySelector(selector)!.getAttribute('style')
    ).not.toContain('display: none')
  })

  describe('teleported API', () => {
    it('should mount on popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      mount(() => (
        <>
          <Popconfirm
            v-slots={{
              reference: () => <div class="reference">{AXIOM}</div>,
            }}
          />
        </>
      ))

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value)!.innerHTML).not.toBe(
        ''
      )
    })

    it('should not mount on the popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      mount(() => (
        <>
          <Popconfirm
            teleported={false}
            v-slots={{
              reference: () => <div class="reference">{AXIOM}</div>,
            }}
          />
        </>
      ))

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value)!.innerHTML).toBe('')
    })
  })

  describe('actions slot', () => {
    it('should override default buttons when given actions', async () => {
      const wrapper = mount(() => (
        <>
          <Popconfirm
            v-slots={{
              reference: () => <div class="reference">{AXIOM}</div>,
              actions: () => <div class="actions">{FUN}</div>,
            }}
          />
        </>
      ))
      await nextTick()
      await wrapper.find('.reference').trigger('click')

      await nextTick()
      await rAF()

      const content = document.querySelector(selector)!.innerHTML
      expect(content).toContain(FUN)
      expect(content).not.toContain('.el-button')
    })

    it('should pass handlers that can emit events', async () => {
      const confirm = vi.fn()
      const cancel = vi.fn()
      const wrapper = mount(() => (
        <>
          <Popconfirm
            onConfirm={confirm}
            onCancel={cancel}
            teleported={false}
            v-slots={{
              reference: () => <div class="reference">{AXIOM}</div>,
              actions: ({ confirm, cancel }: { confirm: any; cancel: any }) => (
                <>
                  <button class="confirm" onClick={confirm}>
                    Confirm
                  </button>
                  <button class="cancel" onClick={cancel}>
                    Cancel
                  </button>
                </>
              ),
            }}
          />
        </>
      ))
      await nextTick()
      await wrapper.find('.reference').trigger('click')
      await nextTick()
      await rAF()

      expect(wrapper.emitted()).not.toHaveProperty('confirm')
      await wrapper.find('.confirm').trigger('click')
      await nextTick()
      await rAF()
      expect(confirm).toHaveBeenCalled()

      await nextTick()
      await wrapper.find('.reference').trigger('click')
      await nextTick()
      await rAF()

      expect(wrapper.emitted()).not.toHaveProperty('cancel')
      await wrapper.find('.cancel').trigger('click')
      await nextTick()
      await rAF()
      expect(cancel).toHaveBeenCalled()
    })
  })
})
