import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
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

  it('render test', () => {
    const wrapper = mount(<Skeleton />)
    expect(wrapper.findAll('.el-skeleton__p')).toHaveLength(4)
    expect(wrapper.classes()).toMatchInlineSnapshot(`
      [
        "el-skeleton",
      ]
    `)
  })

  it('should render with animation', () => {
    const wrapper = mount(<Skeleton animated={true} />)

    expect(wrapper.classes()).toMatchInlineSnapshot(`
      [
        "el-skeleton",
        "is-animated",
      ]
    `)
  })

  it('should render x times', async () => {
    const wrapper = mount(<Skeleton />)

    expect(wrapper.findAll('.el-skeleton__p')).toHaveLength(4)

    await wrapper.setProps({
      count: 2,
    })

    expect(wrapper.findAll('.el-skeleton__p')).toHaveLength(8)
  })

  it('should render x rows', () => {
    const wrapper = mount(<Skeleton rows={4} />)

    expect(wrapper.findAll('.el-skeleton__p')).toHaveLength(5)
  })

  it('should render default slots', () => {
    const wrapper = mount(<Skeleton loading={false}>{AXIOM}</Skeleton>)

    expect(wrapper.text()).toBe(AXIOM)
  })

  it('should render templates', () => {
    const wrapper = mount(
      <Skeleton
        v-slots={{
          template: () => AXIOM,
        }}
      />
    )

    expect(wrapper.text()).toBe(AXIOM)
  })

  it('should throttle rendering', async () => {
    const wrapper = mount(<Skeleton throttle={500} />)

    expect((wrapper.vm as SkeletonInstance).uiLoading).toBe(false)

    vi.runAllTimers()

    await nextTick()

    expect((wrapper.vm as SkeletonInstance).uiLoading).toBe(true)
  })

  it('should throttle object rendering', async () => {
    const wrapper = mount(
      <Skeleton throttle={{ trailing: 500, initVal: true }} loading={true} />
    )

    expect((wrapper.vm as SkeletonInstance).uiLoading).toBe(true)

    await wrapper.setProps({
      loading: false,
    })

    vi.runAllTimers()

    await nextTick()

    expect((wrapper.vm as SkeletonInstance).uiLoading).toBe(false)
  })
})
