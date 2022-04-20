import { describe, expect, it } from 'vitest'
import makeMount from '@element-plus/test-utils/make-mount'
import SkeletonItem from '../src/skeleton-item.vue'

describe('<skeleton-item />', () => {
  const mount = makeMount(SkeletonItem, {})

  it('should render correctly', () => {
    const wrapper = mount()

    expect(wrapper.find('.el-skeleton__text').exists()).toBe(true)
  })

  it('should render image placeholder', () => {
    const wrapper = mount({
      props: {
        variant: 'image',
      },
    })

    expect(wrapper.find('svg').exists()).toBe(true)
  })
})
