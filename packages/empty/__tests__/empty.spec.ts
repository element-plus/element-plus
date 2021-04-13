import makeMount from '@element-plus/test-utils/make-mount'
import Empty from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Empty.vue', () => {
  const mount = makeMount(Empty, {})
  test('render test', () => {
    const wrapper = mount({
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.find('.el-empty__image').exists()).toBe(true)
    expect(wrapper.find('.el-empty__description').exists()).toBe(true)
    expect(wrapper.find('.el-empty__bottom').exists()).toBe(true)
  })

  test('should render image props', () => {
    const wrapper = mount({
      props: {
        image: AXIOM,
      },
    })
    expect(wrapper.find('.el-empty__image img').exists()).toBe(true)
  })

  test('should render imageSize props', async () => {
    const wrapper = mount({
      props: {
        imageSize: 500,
      },
    })
    expect(wrapper.find('.el-empty__image').attributes('style')).toContain('width: 500px')
    await wrapper.setProps({
      imageSize: 200,
    })
    expect(wrapper.find('.el-empty__image').attributes('style')).toContain('width: 200px')
  })

  test('should render description props', () => {
    const wrapper = mount({
      props: {
        description: AXIOM,
      },
    })
    expect(wrapper.find('.el-empty__description').text()).toEqual(AXIOM)
  })
  test('should render image slots', () => {
    const wrapper = mount({
      slots: {
        image: AXIOM,
      },
    })
    expect(wrapper.find('.el-empty__image').text()).toEqual(AXIOM)
  })

  test('should render description slots', () => {
    const wrapper = mount({
      slots: {
        description: AXIOM,
      },
    })
    expect(wrapper.find('.el-empty__description').text()).toEqual(AXIOM)
  })

  test('should render default slots', () => {
    const wrapper = mount({
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.find('.el-empty__bottom').text()).toEqual(AXIOM)
  })
})
