import { defineComponent, h, nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { useTeleport } from '../use-teleport'
import type { VueWrapper } from '@vue/test-utils'

const AXIOM = 'Rem is the best girl'

const Comp = defineComponent({
  setup() {
    const appendToBody = ref(true)
    const { showTeleport, hideTeleport, renderTeleport } = useTeleport(
      () => h('div', AXIOM),
      appendToBody
    )

    return () => (
      <>
        <button class="show" onClick={showTeleport}>
          show
        </button>
        <button class="hide" onClick={hideTeleport}>
          hide
        </button>
        <button
          class="toggle"
          onClick={() => (appendToBody.value = !appendToBody.value)}
        >
          toggle
        </button>
        {renderTeleport()}
      </>
    )
  },
})

describe('useModal', () => {
  let wrapper: VueWrapper<InstanceType<typeof Comp>>

  beforeEach(() => {
    wrapper = mount(Comp)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should render correctly', async () => {
    await nextTick()
    expect(wrapper.text()).not.toContain(AXIOM)
  })

  it('should render teleport to the DOM', async () => {
    await nextTick()
    expect(wrapper.text()).not.toContain(AXIOM)

    await wrapper.find('.show').trigger('click')

    expect(document.body.innerHTML).toContain(AXIOM)

    await wrapper.find('.hide').trigger('click')

    expect(document.body.innerHTML).not.toContain(AXIOM)
  })

  it('should render to the current wrapper instead of document.body', async () => {
    await nextTick()

    expect(wrapper.text()).not.toContain(AXIOM)

    await wrapper.find('.toggle').trigger('click')

    expect(wrapper.text()).toContain(AXIOM)
  })
})
