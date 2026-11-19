import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Statistic from '../src/statistic.vue'

const TITLE_CLASS = '.el-statistic__head'
const CONTENT_CLASS = '.el-statistic__content'
const PREFIX_CLASS = '.el-statistic__prefix'
const SUFFIX_CLASS = '.el-statistic__suffix'

describe('Statistic.vue', () => {
  it('render test', () => {
    const wrapper = mount(() => <Statistic title="test" value={57454157} />)

    expect(wrapper.find(TITLE_CLASS).text()).toBe('test')
    expect(wrapper.find(CONTENT_CLASS).text()).toBe('57,454,157')
  })

  it('basics test', () => {
    const wrapper = mount(() => <Statistic value={268500.123456} />)

    expect(wrapper.find(CONTENT_CLASS).text()).toBe('268,500')
  })

  it('precision', async () => {
    const precision = ref(6)
    const wrapper = mount(() => (
      <Statistic precision={precision.value} value={268500.123456} />
    ))

    expect(wrapper.find(CONTENT_CLASS).text()).toBe('268,500.123456')
    precision.value = 4
    await nextTick()
    expect(wrapper.find(CONTENT_CLASS).text()).toBe('268,500.1234')
  })

  it('value written with an exponent', () => {
    const small = mount(() => <Statistic precision={8} value={0.00000012} />)
    expect(small.find(CONTENT_CLASS).text()).toBe('0.00000012')

    const smaller = mount(() => <Statistic precision={2} value={1e-7} />)
    expect(smaller.find(CONTENT_CLASS).text()).toBe('0.00')

    const large = mount(() => <Statistic value={1.5e21} />)
    expect(large.find(CONTENT_CLASS).text()).toBe(
      '1,500,000,000,000,000,000,000'
    )

    const negative = mount(() => <Statistic precision={8} value={-1.2e-7} />)
    expect(negative.find(CONTENT_CLASS).text()).toBe('-0.00000012')
  })

  it('value written with an exponent is not rounded', () => {
    const tiny = mount(() => <Statistic precision={21} value={1e-21} />)
    expect(tiny.find(CONTENT_CLASS).text()).toBe('0.000000000000000000001')

    const truncated = mount(() => (
      <Statistic precision={6} value={9.99999999999999e-7} />
    ))
    expect(truncated.find(CONTENT_CLASS).text()).toBe('0.000000')
  })

  it('prefix & suffix', () => {
    const slots = {
      prefix: () => 'prefix',
      suffix: () => 'suffix',
    }
    const wrapper = mount(() => <Statistic v-slots={slots} value={57454157} />)

    expect(wrapper.find(PREFIX_CLASS).text()).toBe('prefix')
    expect(wrapper.find(SUFFIX_CLASS).text()).toBe('suffix')
    expect(wrapper.find(CONTENT_CLASS).text()).toBe('prefix57,454,157suffix')
  })
})
