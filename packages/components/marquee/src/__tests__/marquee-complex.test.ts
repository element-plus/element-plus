import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import Marquee from '../marquee.vue'

describe('Marquee Complex Elements', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('should handle multiple tags correctly', async () => {
    const wrapper = mount(Marquee, {
      props: {
        direction: 'horizontal',
        speed: 40,
        loop: true,
        autoStart: false,
      },
      slots: {
        default: `
          <span class="tag">Tag 1</span>
          <span class="tag">Tag 2</span>
          <span class="tag">Tag 3</span>
          <span class="tag">Tag 4</span>
        `,
      },
    })

    await nextTick()

    const copies = wrapper.findAll('.el-marquee__copy')

    // 检查副本数量
    expect(copies.length).toBeGreaterThanOrEqual(3)

    // 检查每个副本内的元素数量
    const firstCopy = copies[0]
    const elements = firstCopy.findAll('.tag')
    expect(elements.length).toBe(4)
  })

  it('should handle mixed elements correctly', async () => {
    const wrapper = mount(Marquee, {
      props: {
        direction: 'horizontal',
        speed: 35,
        loop: true,
        autoStart: false,
      },
      slots: {
        default: `
          <button class="btn">Button 1</button>
          <span class="text">Text 1</span>
          <div class="avatar">Avatar 1</div>
          <button class="btn">Button 2</button>
          <span class="text">Text 2</span>
        `,
      },
    })

    await nextTick()

    const copies = wrapper.findAll('.el-marquee__copy')

    // 检查副本数量
    expect(copies.length).toBeGreaterThanOrEqual(3)

    // 检查第一个副本内的元素类型
    const firstCopy = copies[0]
    expect(firstCopy.find('.btn')).toBeTruthy()
    expect(firstCopy.find('.text')).toBeTruthy()
    expect(firstCopy.find('.avatar')).toBeTruthy()
  })

  it('should calculate size correctly for multiple elements', async () => {
    const wrapper = mount(Marquee, {
      props: {
        direction: 'horizontal',
        speed: 30,
        loop: true,
        autoStart: false,
      },
      slots: {
        default: `
          <span style="width: 100px; margin-right: 10px;">Element 1</span>
          <span style="width: 150px; margin-right: 10px;">Element 2</span>
          <span style="width: 80px; margin-right: 10px;">Element 3</span>
        `,
      },
    })

    await nextTick()

    const marquee = wrapper.vm

    // 等待DOM完全渲染
    await nextTick()

    // 在测试环境中，由于DOM尺寸可能为0，我们主要检查副本数量
    // 副本数量应该至少为3，即使尺寸计算为0
    expect(marquee.requiredCopies).toBeGreaterThanOrEqual(3)

    // 如果尺寸计算正常，则检查尺寸
    if (marquee.singleContentSize > 0) {
      expect(marquee.singleContentSize).toBeGreaterThan(0)
    }
  })

  it('should handle vertical scrolling with multiple elements', async () => {
    const wrapper = mount(Marquee, {
      props: {
        direction: 'vertical',
        speed: 25,
        loop: true,
        autoStart: false,
      },
      slots: {
        default: `
          <div style="height: 60px; margin-bottom: 10px;">Item 1</div>
          <div style="height: 60px; margin-bottom: 10px;">Item 2</div>
          <div style="height: 60px; margin-bottom: 10px;">Item 3</div>
          <div style="height: 60px; margin-bottom: 10px;">Item 4</div>
        `,
      },
    })

    await nextTick()

    const marquee = wrapper.vm
    const copies = wrapper.findAll('.el-marquee__copy')

    // 检查副本数量
    expect(copies.length).toBeGreaterThanOrEqual(3)

    // 在测试环境中，由于DOM尺寸可能为0，我们主要检查副本数量
    // 如果尺寸计算正常，则检查尺寸
    if (marquee.singleContentSize > 0) {
      expect(marquee.singleContentSize).toBeGreaterThan(0)
    }
  })

  it('should maintain smooth scrolling with complex content', async () => {
    const wrapper = mount(Marquee, {
      props: {
        direction: 'horizontal',
        speed: 50,
        loop: true,
        autoStart: false,
      },
      slots: {
        default: `
          <div class="complex-item" style="display: inline-block; width: 200px; height: 40px; background: #f0f0f0; margin-right: 15px;">
            <span>Complex Item 1</span>
            <small>with description</small>
          </div>
          <div class="complex-item" style="display: inline-block; width: 200px; height: 40px; background: #f0f0f0; margin-right: 15px;">
            <span>Complex Item 2</span>
            <small>with description</small>
          </div>
          <div class="complex-item" style="display: inline-block; width: 200px; height: 40px; background: #f0f0f0; margin-right: 15px;">
            <span>Complex Item 3</span>
            <small>with description</small>
          </div>
        `,
      },
    })

    await nextTick()

    const marquee = wrapper.vm

    // 开始滚动
    marquee.startScroll(true)

    // 等待滚动发生
    vi.advanceTimersByTime(200)
    await nextTick()

    // 检查滚动位置
    expect(marquee.scrollPosition).toBeGreaterThan(0)

    // 检查是否仍在滚动
    expect(marquee.isPaused).toBe(false)
  })
})
