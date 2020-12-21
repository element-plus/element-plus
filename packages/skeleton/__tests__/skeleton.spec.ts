import { nextTick } from 'vue'
import makeMount from '@element-plus/test-utils/make-mount'
import Skeleton from '../src/index.vue'
const AXIOM = 'AXIOM is the best girl'

jest.useFakeTimers()

describe('Skeleton.vue', () => {
  const mount = makeMount(Skeleton, { })
  test('render test', () => {
    const wrapper = mount()
    expect(wrapper.findAll('.el-skeleton__p')).toHaveLength(4)
    expect(wrapper.classes()).toContain('el-skeleton')

  })

  test('should render with animation', () => {
    const wrapper = mount({
      props: {
        animated: true,
      },
    })

    expect(wrapper.classes()).toContain('is-animated')
  })

  test('should render x times', async () => {
    const wrapper = mount()

    expect(wrapper.findAll('.el-skeleton__p')).toHaveLength(4)

    await wrapper.setProps({
      count: 2,
    })

    expect(wrapper.findAll('.el-skeleton__p')).toHaveLength(8)
  })


  test('should render x rows', () => {
    const wrapper = mount({
      props: {
        rows: 4,
      },
    })

    expect(wrapper.findAll('.el-skeleton__p')).toHaveLength(5)
  })

  test('should render default slots', () => {
    const wrapper = mount({
      slots: {
        default: () => AXIOM,
      },
      props: {
        loading: false,
      },
    })

    expect(wrapper.text()).toBe(AXIOM)
  })

  test('should render templates', () => {

    const wrapper = mount({
      slots: {
        template: () => AXIOM,
      },
    })

    expect(wrapper.text()).toBe(AXIOM)
  })


  test('should throttle rendering', async () => {
    const wrapper = mount({
      props: {
        throttle: 500,
      },
    })

    expect((wrapper.vm as any).uiLoading).toBe(false)

    jest.runAllTimers()

    await nextTick()

    expect((wrapper.vm as any).uiLoading).toBe(true)
  })

})
