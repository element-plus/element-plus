import { defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, it } from 'vitest'
import Options from '../src/options'

import type { VueWrapper } from '@vue/test-utils'

describe('options', () => {
  let wrapper: ReturnType<typeof mount>

  const ElOptionStub = defineComponent({
    name: 'ElOption',
    props: {
      label: String,
    },
    template: '<div></div>',
  })

  const getLabel = (i: number | string) => `label-${i}`

  const ElOptionGroupStub = defineComponent({
    name: 'ElOptionGroup',
    template: '<div><slot /></div>',
  })

  const samples = Array.from({ length: 3 })

  const createWrapper = (slots = {}) => {
    wrapper = mount((_, { slots }) => <Options>{slots?.default?.()}</Options>, {
      global: {
        components: {
          ElOption: ElOptionStub,
          ElOptionGroup: ElOptionGroupStub,
        },
      },
      slots,
    }) as VueWrapper<any>
  }

  afterEach(() => {
    wrapper.unmount()
  })

  it('renders emit correct options', async () => {
    createWrapper({
      default: () =>
        samples.map((_, i) => <ElOptionStub label={getLabel(i)} />),
    })

    await nextTick()
  })

  it('renders emit correct options with option group', async () => {
    createWrapper({
      default: () =>
        samples.map((_, i) => (
          <ElOptionGroupStub label={getLabel(i)}>
            {{
              default: () =>
                samples.map((_, j) => (
                  <ElOptionStub
                    label={getLabel(`${i}-${j}`)}
                    value={j}
                  ></ElOptionStub>
                )),
            }}
          </ElOptionGroupStub>
        )),
    })
  })
})
