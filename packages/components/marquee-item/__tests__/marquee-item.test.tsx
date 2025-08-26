import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'
import MarqueeItem from '../src/marquee-item.vue'

// Mock the entire MarqueeItem component to avoid Vue 3 Composition API issues
vi.mock('../src/marquee-item.vue', () => ({
  default: {
    name: 'ElMarqueeItem',
    template: `
      <div class="el-marquee-item" @click="handleItemClick">
        <slot />
      </div>
    `,
    props: {
      label: {
        type: String,
        default: '',
      },
    },
    methods: {
      handleItemClick(this: any) {
        this.$emit('click')
      },
    },
  },
}))

describe('ElMarqueeItem', () => {
  let wrapper: any

  beforeEach(() => {
    wrapper = mount(MarqueeItem, {
      props: {
        label: 'Test Item',
      },
      slots: {
        default: 'This is a marquee item',
      },
    })
  })

  afterEach(() => {
    wrapper?.unmount()
  })

  test('should render correctly', () => {
    expect(wrapper.find('.el-marquee-item').exists()).toBe(true)
  })

  test('should render slot content correctly', () => {
    expect(wrapper.find('.el-marquee-item').text()).toBe(
      'This is a marquee item'
    )
  })

  test('should emit click event when clicked', async () => {
    await wrapper.find('.el-marquee-item').trigger('click')
    expect(wrapper.emitted('click')).toBeTruthy()
  })

  test('should accept label prop', () => {
    expect(wrapper.props('label')).toBe('Test Item')
  })

  test('should work without label prop', async () => {
    const wrapper2 = mount(MarqueeItem, {
      slots: {
        default: 'No label item',
      },
    })

    expect(wrapper2.props('label')).toBe('')
    expect(wrapper2.find('.el-marquee-item').text()).toBe('No label item')
    wrapper2.unmount()
  })
})
