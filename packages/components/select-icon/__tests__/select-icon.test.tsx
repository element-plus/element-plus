import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'

import SelectIcon from '../src/select-icon.vue'

describe('SelectIcon.vue', () => {
  test('render test', () => {
    const wrapper = mount(() => <SelectIcon />)
    expect(wrapper.find('.el-select-icon').exists()).toBe(true)
  })

  test('iconBackgroundColor is #ff00ff', () => {
    const wrapper = mount(() => <SelectIcon iconBackgroundColor="#ff00ff" />)
    expect(wrapper.find('button').attributes('style')).toContain(
      `--el-button-bg-color: #ff00ff;`
    )
  })

  test('useDefaultIcon is false', () => {
    const wrapper = mount(() => <SelectIcon useDefaultIcon={false} />)
    expect(
      wrapper.find('.el-select-icon__default_content').find('button').exists()
    ).not.toBe(true)
  })

  test('hiddenPagination is true', () => {
    const wrapper = mount(() => <SelectIcon hiddenPagination={true} />)
    expect(wrapper.find('.el-pagination').exists()).not.toBe(true)
  })

  test('custom icon slot', () => {
    const wrapper = mount(<SelectIcon />, {
      slots: {
        icon: '<div id="custom-icon"></div>',
      },
    })
    expect(wrapper.find('#custom-icon').exists()).toBe(true)
  })

  test('search slot', () => {
    const wrapper = mount(<SelectIcon />, {
      slots: {
        search: '<div id="custom-search"></div>',
      },
    })
    expect(wrapper.find('#custom-search').exists()).toBe(true)
  })
})
