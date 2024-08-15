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
})
