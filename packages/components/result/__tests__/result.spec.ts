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

  test('should render icon props', async () => {
    const wrapper = mount({
      props: {
        icon: 'success',
      },
    })
    expect(wrapper.find('.el-result__icon svg').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon svg').classes()).toContain(
      'icon-success'
    )
    await wrapper.setProps({
      icon: 'error',
    })
    expect(wrapper.find('.el-result__icon svg').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon svg').classes()).toContain(
      'icon-error'
    )
    await wrapper.setProps({
      icon: 'warning',
    })
    expect(wrapper.find('.el-result__icon svg').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon svg').classes()).toContain(
      'icon-warning'
    )
    await wrapper.setProps({
      icon: 'info',
    })
    expect(wrapper.find('.el-result__icon svg').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon svg').classes()).toContain(
      'icon-info'
    )
  })

  test('should render icon slots', () => {
    const wrapper = mount({
      slots: {
        icon: AXIOM,
      },
    })
    expect(wrapper.find('.el-result__icon').exists()).toBe(true)
    expect(wrapper.find('.el-result__icon').text()).toBe(AXIOM)
  })

  test('should render title slots', () => {
    const wrapper = mount({
      slots: {
        title: AXIOM,
      },
    })
    expect(wrapper.find('.el-result__title').exists()).toBe(true)
    expect(wrapper.find('.el-result__title').text()).toBe(AXIOM)
  })

  test('should render sub-title slots', () => {
    const wrapper = mount({
      slots: {
        subTitle: AXIOM,
      },
    })
    expect(wrapper.find('.el-result__subtitle').exists()).toBe(true)
    expect(wrapper.find('.el-result__subtitle').text()).toBe(AXIOM)
  })

  test('should render extra slots', () => {
    const wrapper = mount({
      slots: {
        extra: AXIOM,
      },
    })
    expect(wrapper.find('.el-result__extra').exists()).toBe(true)
    expect(wrapper.find('.el-result__extra').text()).toBe(AXIOM)
  })
})
