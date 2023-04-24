import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Statistic from '../src/statistic.vue'

const TITLE_CLASS = '.el-statistic__head'
const CONTENT_CLASS = '.el-statistic__content'
const PERFIX_CLASS = '.el-statistic__prefix'
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

  it('prefix & suffix', () => {
    const slots = {
      prefix: () => 'prefix',
      suffix: () => 'suffix',
    }
    const wrapper = mount(() => <Statistic v-slots={slots} value={57454157} />)

    expect(wrapper.find(PERFIX_CLASS).text()).toBe('prefix')
    expect(wrapper.find(SUFFIX_CLASS).text()).toBe('suffix')
    expect(wrapper.find(CONTENT_CLASS).text()).toBe('prefix57,454,157suffix')
  })
})
