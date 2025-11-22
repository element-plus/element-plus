import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import { usePopperContainerId } from '@element-plus/hooks'
import Popconfirm from '../src/popconfirm.vue'
import triggerEvent from '@element-plus/test-utils/trigger-event'
import { EVENT_CODE } from '@element-plus/constants'

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

  it('should close the Popconfirm when pressing Escape', async () => {
    const wrapper = mount({
      setup() {
        return () => (
          <Popconfirm
            hide-after={0}
            v-slots={{
              reference: () => <div class="reference">{AXIOM}</div>,
            }}
          />
        )
      },
    })

    await wrapper.find('.reference').trigger('click')
    await nextTick()
    await rAF()

    triggerEvent(document.body, 'keydown', EVENT_CODE.esc)
    await nextTick()
    await rAF()

    expect(document.querySelector(selector)!.getAttribute('style')).toContain(
      'display: none'
    )
  })

  it('should work with virtualTriggering and virtualRef', async () => {
    const wrapper = mount({
      setup() {
        const visible = ref(false)
        const virtualRef = ref()
        const handleClick = () => {
          virtualRef.value = {
            getBoundingClientRect: () => {
              return {
                x: 0,
                y: 0,
                top: 0,
                left: 0,
                width: 100,
                height: 100,
                right: 100,
                bottom: 100,
              }
            },
          }
          visible.value = true
        }

        return () => (
          <>
            <button data-testid="testid" onClick={handleClick}>
              test
            </button>
            <Popconfirm
              v-model:visible={visible.value}
              virtualRef={virtualRef.value}
              virtualTriggering
            />
          </>
        )
      },
    })

    await nextTick()

    const popperEl = document.querySelector(selector)!
    expect(popperEl.getAttribute('style')).toContain('display: none')
    const button = wrapper.find('button[data-testid="testid"]')

    await button.trigger('click')
    await nextTick()
    await rAF()
    const style = popperEl.getAttribute('style')
    expect(style).not.toContain('display: none')
    expect(style).toContain('transform: translate(0px, 112px)')
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
