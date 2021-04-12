import makeMount from '@element-plus/test-utils/make-mount'
import Result from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Result.vue', () => {
  const mount = makeMount(Result, {})
  test('render test', () => {
    const wrapper = mount()
    expect(wrapper.find('.el-result__icon').exists()).toBe(true)
    expect(wrapper.classes()).toContain('el-result')
  })

  test('should render title props', () => {
    const wrapper = mount({
      props: {
        title: AXIOM,
      },
    })
    expect(wrapper.find('.el-result__title').text()).toBe(AXIOM)
  })

  test('should render sub-title props', () => {
    const wrapper = mount({
      props: {
        subTitle: AXIOM,
      },
    })
    expect(wrapper.find('.el-result__subtitle').text()).toBe(AXIOM)
  })

  test('should render type props', async () => {
    const wrapper = mount({
      props: {
        type: 'success',
      },
    })
    expect(wrapper.find('.el-result__icon i').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon i').classes()).toContain('el-icon-success')
    await wrapper.setProps({
      type: 'error',
    })
    expect(wrapper.find('.el-result__icon i').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon i').classes()).toContain('el-icon-error')
    await wrapper.setProps({
      type: 'warning',
    })
    expect(wrapper.find('.el-result__icon i').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon i').classes()).toContain('el-icon-warning')
    await wrapper.setProps({
      type: 'info',
    })
    expect(wrapper.find('.el-result__icon i').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon i').classes()).toContain('el-icon-info')
  })

  test('should render icon slots', () => {
    const wrapper = mount({
      slots: {
        icon: AXIOM,
      },
    })
    expect(wrapper.find('.el-result__icon').exists()).toBe(true)
  })

  test('should render title slots', () => {
    const wrapper = mount({
      slots: {
        title: AXIOM,
      },
    })
    expect(wrapper.find('.el-result__title').exists()).toBe(true)
  })

  test('should render sub-title slots', () => {
    const wrapper = mount({
      slots: {
        subTitle: AXIOM,
      },
    })
    expect(wrapper.find('.el-result__subtitle').exists()).toBe(true)
  })

  test('should render extra slots', () => {
    const wrapper = mount({
      slots: {
        extra: AXIOM,
      },
    })
    expect(wrapper.find('.el-result__extra').exists()).toBe(true)
  })
})
