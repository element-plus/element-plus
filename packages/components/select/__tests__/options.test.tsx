import { defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { flatten } from 'lodash-unified'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Options from '../src/options'

import type { VueWrapper } from '@vue/test-utils'

describe('options', () => {
  let wrapper: ReturnType<typeof mount>
  const onOptionsChange = vi.fn()

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
    wrapper = mount(
      (_, { slots }) => (
        <Options onUpdate-options={onOptionsChange}>
          {slots?.default?.()}
        </Options>
      ),
      {
        global: {
          components: {
            ElOption: ElOptionStub,
            ElOptionGroup: ElOptionGroupStub,
          },
        },
        slots,
      }
    ) as VueWrapper<any>
  }

  afterEach(() => {
    wrapper.unmount()
    onOptionsChange.mockClear()
  })

  it('renders emit correct options', async () => {
    createWrapper({
      default: () =>
        samples.map((_, i) => <ElOptionStub label={getLabel(i)} />),
    })

    await nextTick()

    expect(onOptionsChange).toHaveBeenCalledWith(
      ...[...[samples.map((_, i) => getLabel(i))]]
    )
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

    expect(onOptionsChange).toHaveBeenCalledWith(
      flatten(
        samples.map((_, i) => samples.map((_, j) => getLabel(`${i}-${j}`)))
      )
    )
  })
})
