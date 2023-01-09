import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import { rAF } from '@element-plus/test-utils/tick'
import { usePopperContainerId } from '@element-plus/hooks'
import Popconfirm from '../src/popconfirm.vue'

const AXIOM = 'rem is the best girl'
const selector = '.el-popper'

describe('Popconfirm.vue', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

  it('render test', async () => {
    const wrapper = mount(() => (
      <>
        <Popconfirm
          attachTo="body"
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
            attachTo="body"
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
            attachTo="body"
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

  describe('confirm test', async () => {
    it('resolve confirm', async () => {
      const confirm = () => new Promise<void>((resolve) => resolve())
      const wrapper = mount(() => (
        <>
          <Popconfirm
            attachTo="body"
            onConfirm={confirm}
            v-slots={{
              reference: () => <div class="reference">{AXIOM}</div>,
            }}
          />
        </>
      ))
      await nextTick()
      wrapper.find('.reference').trigger('click')
      await nextTick()
      document
        .querySelector(selector)!
        .querySelector<HTMLElement>('.el-button--primary')!
        .click()
      await nextTick()
      expect(
        document.querySelector(selector)!.querySelector('.is-loading')
      ).not.toBeNull()
      await nextTick()
      await nextTick()
      expect(
        document.querySelector(selector)!.querySelector('.is-loading')
      ).toBeNull()
      expect(document.querySelector(selector)!.getAttribute('style')).toContain(
        'display: none'
      )
      wrapper.unmount()
    })
  })
})
