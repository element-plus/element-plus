import { nextTick } from 'vue'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import makeMount from '@element-plus/test-utils/make-mount'
import Skeleton from '../src/skeleton.vue'
import type { SkeletonInstance } from '../src/skeleton'
const AXIOM = 'AXIOM is the best girl'

describe('Skeleton.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  const mount = makeMount(Skeleton, {})
  it('render test', () => {
    const wrapper = mount()
    expect(wrapper.findAll('.el-skeleton__p')).toHaveLength(4)
    expect(wrapper.classes()).toMatchInlineSnapshot(`
      [
        "el-skeleton",
      ]
    `)
  })

  it('should render with animation', () => {
    const wrapper = mount({
      props: {
        animated: true,
      },
    })

    expect(wrapper.classes()).toMatchInlineSnapshot(`
      [
        "el-skeleton",
        "is-animated",
      ]
    `)
  })

  it('should render x times', async () => {
    const wrapper = mount()

    expect(wrapper.findAll('.el-skeleton__p')).toHaveLength(4)

    await wrapper.setProps({
      count: 2,
    })

    expect(wrapper.findAll('.el-skeleton__p')).toHaveLength(8)
  })

  it('should render x rows', () => {
    const wrapper = mount({
      props: {
        rows: 4,
      },
    })

    expect(wrapper.findAll('.el-skeleton__p')).toHaveLength(5)
  })

  it('should render default slots', () => {
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

  it('should render templates', () => {
    const wrapper = mount({
      slots: {
        template: () => AXIOM,
      },
    })

    expect(wrapper.text()).toBe(AXIOM)
  })

  it('should throttle rendering', async () => {
    const wrapper = mount({
      props: {
        throttle: 500,
      },
    })

    expect((wrapper.vm as SkeletonInstance).uiLoading).toBe(false)

    vi.runAllTimers()

    await nextTick()

    expect((wrapper.vm as SkeletonInstance).uiLoading).toBe(true)
  })
})
