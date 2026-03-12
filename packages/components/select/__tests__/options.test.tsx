import { defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Options from '../src/options'
import Select from '../src/select.vue'

import type { PropType, Slots } from 'vue'
import type { VueWrapper } from '@vue/test-utils'

describe('options', () => {
  let wrapper: ReturnType<typeof mount>

  const GOptionStub = defineComponent({
    name: 'GOption',
    props: {
      label: String,
      value: [String, Number, Boolean, Object] as PropType<
        string | number | boolean | object
      >,
    },
    template: '<div></div>',
  })

  const getLabel = (i: number | string) => `label-${i}`

  const GOptionGroupStub = defineComponent({
    name: 'GOptionGroup',
    props: {
      label: String,
    },
    template: '<div><slot /></div>',
  })

  const samples = Array.from({ length: 3 })

  const createWrapper = (slots = {}) => {
    wrapper = mount(
      (_: unknown, { slots }: { slots: Slots }) => (
        <Select>
          <Options>{slots?.default?.()}</Options>
        </Select>
      ),
      {
        global: {
          components: {
            GOption: GOptionStub,
            GOptionGroup: GOptionGroupStub,
          },
        },
        slots,
      }
    ) as VueWrapper<any>
  }

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders emit correct options', async () => {
    const mockWarn = vi.spyOn(console, 'warn').mockImplementation(() => {})
    createWrapper({
      default: () =>
        samples.map((_, i) => <GOptionStub label={getLabel(i)} />),
    })
    expect(mockWarn).not.toHaveBeenCalled()
    vi.resetAllMocks()
    await nextTick()
  })

  it('renders emit correct options with option group', async () => {
    const spy = vi.spyOn(console, 'warn').mockImplementation(() => {})
    createWrapper({
      default: () =>
        samples.map((_, i) => (
          <GOptionGroupStub label={getLabel(i)}>
            {{
              default: () =>
                samples.map((_, j) => (
                  <GOptionStub
                    label={getLabel(`${i}-${j}`)}
                    value={j}
                  ></GOptionStub>
                )),
            }}
          </GOptionGroupStub>
        )),
    })
    expect(spy).not.toHaveBeenCalled()
    vi.resetAllMocks()
  })
})
