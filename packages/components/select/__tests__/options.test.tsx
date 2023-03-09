import { Fragment, defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, test, vi } from 'vitest'
import Options from '../src/options'

import type { Component } from 'vue'

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

  const getLabel = (i: number) => `label-${i}`

  const ElOptionGroupStub = defineComponent({
    name: 'ElOptionGroup',
    template: '<div><slot /></div>',
  })

  const createWrapper = (Children: () => JSX.Element[]) => {
    wrapper = mount(() => (
      <Options onUpdate-options={onOptionsChange}>{Children()}</Options>
    ))
  }

  afterEach(() => {
    wrapper.unmount()
    onOptionsChange.mockClear()
  })

  it('renders emit correct options', async () => {
    const samples = Array.from({ length: 3 })
    createWrapper(() =>
      Array.from({ length: 3 }).map((_, i) => (
        <ElOptionStub label={getLabel(i)} key={i} />
      ))
    )

    await nextTick()

    expect(onOptionsChange).toHaveBeenCalledWith(
      ...[...[samples.map((_, i) => getLabel(i))]]
    )
  })
})
