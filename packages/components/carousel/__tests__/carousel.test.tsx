import { nextTick, reactive } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it, vi } from 'vitest'
import Carousel from '../src/carousel.vue'
import CarouselItem from '../src/carousel-item.vue'

import type { VueWrapper } from '@vue/test-utils'
import type { CarouselInstance } from '../src/instance'

const generateCarouselItems = (count = 3, hasLabel = false) => {
  const list = Array.from({ length: count }, (_, index) => index + 1)
  return list.map((i) =>
    hasLabel ? <CarouselItem key={i} label={i} /> : <CarouselItem key={i} />
  )
}

describe('Carousel', () => {
  let wrapper: VueWrapper<any>

  const createComponent = (
    props: any = {},
    count?: number,
    hasLabel?: boolean
  ) => {
    return mount({
      setup() {
        return () => (
          <div>
            <Carousel {...props}>
              {generateCarouselItems(count, hasLabel)}
            </Carousel>
          </div>
        )
      },
    })
  }

  afterEach(() => {
    wrapper.unmount()
    vi.useRealTimers()
  })

  it('create', () => {
    wrapper = createComponent({
      ref: 'carousel',
    })

    const carousel = wrapper.findComponent({ ref: 'carousel' })
      .vm as CarouselInstance
    expect(carousel.direction).toBe('horizontal')
    expect(wrapper.findAll('.el-carousel__item').length).toEqual(3)
  })

  it('auto play', async () => {
    vi.useFakeTimers()
    wrapper = createComponent({
      interval: 50,
    })

    await nextTick()
    vi.advanceTimersByTime(10)
    await nextTick()
    const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
    expect(items[0].classList.contains('is-active')).toBeTruthy()
    vi.advanceTimersByTime(60)
    await nextTick()
    expect(items[1].classList.contains('is-active')).toBeTruthy()
  })

  it('initial index', async () => {
    vi.useFakeTimers()
    wrapper = createComponent({
      autoplay: false,
      'initial-index': 1,
    })

    await nextTick()
    vi.advanceTimersByTime(10)
    await nextTick()

    expect(
      wrapper.vm.$el
        .querySelectorAll('.el-carousel__item')[1]
        .classList.contains('is-active')
    ).toBeTruthy()
  })

  it('reset timer', async () => {
    vi.useFakeTimers()
    wrapper = createComponent({
      interval: 500,
    })
    await nextTick()
    const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
    await wrapper.trigger('mouseenter')
    await nextTick()
    expect(items[0].classList.contains('is-active')).toBeTruthy()
    await wrapper.trigger('mouseleave')
    await nextTick()
    vi.advanceTimersByTime(700)
    await nextTick()
    expect(items[1].classList.contains('is-active')).toBeTruthy()
  })

  it('change', async () => {
    vi.useFakeTimers()
    const state = reactive({
      val: -1,
      oldVal: -1,
    })

    wrapper = createComponent({
      onChange(val: number, prevVal: number) {
        state.val = val
        state.oldVal = prevVal
      },
      interval: 50,
    })

    await nextTick()
    vi.advanceTimersByTime(50)
    await nextTick()
    expect(state.val).toBe(1)
    expect(state.oldVal).toBe(0)
  })

  it('label', async () => {
    wrapper = createComponent(undefined, 3, true)
    await nextTick()
    expect(wrapper.find('.el-carousel__button span').text()).toBe('1')
  })

  describe('manual control', () => {
    it('hover', async () => {
      vi.useFakeTimers()
      wrapper = createComponent({
        autoplay: false,
      })

      await nextTick()
      vi.advanceTimersByTime(100)
      await nextTick()
      await wrapper.findAll('.el-carousel__indicator')[1].trigger('mouseenter')
      await nextTick()
      vi.advanceTimersByTime(100)
      await nextTick()
      expect(
        wrapper.vm.$el
          .querySelectorAll('.el-carousel__item')[1]
          .classList.contains('is-active')
      ).toBeTruthy()
    })
  })

  it('card', async () => {
    vi.useFakeTimers()
    wrapper = createComponent(
      {
        autoplay: false,
        type: 'card',
        cardScale: 0.6,
      },
      7
    )

    await nextTick()
    vi.advanceTimersByTime(100)
    await nextTick()
    const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
    expect(items[0].classList.contains('is-active')).toBeTruthy()
    expect(items[1].classList.contains('is-in-stage')).toBeTruthy()
    expect(items[6].classList.contains('is-in-stage')).toBeTruthy()
    await items[1].click()
    vi.advanceTimersByTime(100)
    await nextTick()
    expect(items[0].getAttribute('style')).toContain('scale(0.6)')
    expect(items[1].getAttribute('style')).toContain('scale(1)')
    expect(items[1].classList.contains('is-active')).toBeTruthy()
    await wrapper.vm.$el.querySelector('.el-carousel__arrow--left').click()
    vi.advanceTimersByTime(100)
    await nextTick()
    expect(items[0].classList.contains('is-active')).toBeTruthy()
    await items[6].click()
    vi.advanceTimersByTime(100)
    await nextTick()
    expect(items[6].classList.contains('is-active')).toBeTruthy()
  })

  it('vertical direction', () => {
    wrapper = createComponent({
      ref: 'carousel',
      autoplay: false,
      direction: 'vertical',
      height: '100px',
    })
    const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
    const carousel = wrapper.findComponent({ ref: 'carousel' })
      .vm as CarouselInstance
    expect(carousel.direction).toBe('vertical')
    expect(items[0].style.transform.includes('translateY')).toBeTruthy()
  })

  it('pause auto play on hover', async () => {
    vi.useFakeTimers()
    wrapper = createComponent({
      interval: 50,
      'pause-on-hover': false,
    })

    await nextTick()
    await wrapper.find('.el-carousel').trigger('mouseenter')
    const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
    await nextTick()
    vi.advanceTimersByTime(60)
    await nextTick()
    expect(items[1].classList.contains('is-active')).toBeTruthy()
  })

  it('motion blur', async () => {
    const state = reactive({
      val: -1,
      oldVal: -1,
    })

    wrapper = createComponent({
      onChange(val: number, prevVal: number) {
        state.val = val
        state.oldVal = prevVal
      },
      'motion-blur': true,
    })

    await nextTick()

    const el = wrapper.vm.$el.querySelector('.el-carousel__container')

    let event = new Event('transitionstart')
    el.dispatchEvent(event)
    expect(el.classList.contains('el-transitioning')).toBe(true)

    event = new Event('transitionend')
    el.dispatchEvent(event)
    expect(el.classList.contains('el-transitioning')).toBe(false)
  })

  it('should guarantee order of indicators', async () => {
    const data = reactive([1, 2, 3, 4])
    wrapper = mount({
      setup() {
        return () => (
          <div>
            <Carousel>
              {data.map((value) => (
                <CarouselItem label={value} key={value}>
                  {value}
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        )
      },
    })
    await nextTick()

    data.splice(1, 0, 5)
    await nextTick()
    const indicators = wrapper.findAll('.el-carousel__button')
    data.forEach((value, index) => {
      expect(indicators[index].element.textContent).toEqual(value.toString())
    })
  })
  it('height is set to auto', async () => {
    const data = [1, 2, 3]

    wrapper = mount({
      setup() {
        return () => (
          <div>
            <Carousel height={'auto'} autoplay={false}>
              {data.map((value) => (
                <CarouselItem label={value} key={value} style="height: 100px">
                  {value}
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        )
      },
    })

    const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')

    Array.from<HTMLElement>(items).forEach((item) => {
      vi.spyOn(item, 'offsetHeight', 'get').mockImplementation(() => {
        return Number.parseFloat(window.getComputedStyle(item).height) || 0
      })
    })

    await nextTick()
    expect(items[0].classList.contains('is-active')).toBeTruthy()

    const container = wrapper.find<HTMLElement>(
      '.el-carousel__container'
    ).element

    expect(container.style.height).toBe('100px')
  })
  it('set to automatic when item is of different height', async () => {
    const data = [100, 200, 300]

    wrapper = mount({
      setup() {
        return () => (
          <div>
            <Carousel height={'auto'} autoplay={false} ref={'carousel'}>
              {data.map((value) => (
                <CarouselItem
                  label={value}
                  key={value}
                  style={`height: ${value}px`}
                >
                  {value}
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        )
      },
    })

    const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')

    Array.from<HTMLElement>(items).forEach((item) => {
      vi.spyOn(item, 'offsetHeight', 'get').mockImplementation(() => {
        return Number.parseFloat(window.getComputedStyle(item).height) || 0
      })
    })

    await nextTick()

    const carousel = wrapper.findComponent({ ref: 'carousel' })
      .vm as CarouselInstance

    const container = wrapper.find<HTMLElement>(
      '.el-carousel__container'
    ).element

    expect(items[0].classList.contains('is-active')).toBeTruthy()
    expect(container.style.height).toBe('100px')

    carousel.next()
    await nextTick()

    expect(items[1].classList.contains('is-active')).toBeTruthy()
    expect(container.style.height).toBe('200px')

    carousel.next()
    await nextTick()

    expect(items[2].classList.contains('is-active')).toBeTruthy()
    expect(container.style.height).toBe('300px')

    carousel.next()
    await nextTick()

    expect(items[0].classList.contains('is-active')).toBeTruthy()
    expect(container.style.height).toBe('100px')
  })

  it('exposes', async () => {
    const data = [100, 200, 300, 500]

    wrapper = mount({
      setup() {
        return () => (
          <div>
            <Carousel ref={'carousel'}>
              {data.map((value) => (
                <CarouselItem label={value} key={value}>
                  {value}
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        )
      },
    })

    await nextTick()
    const vm = wrapper.vm

    expect(vm.$refs.carousel.activeIndex).toBe(0)
    vm.$refs.carousel.setActiveItem(3)
    expect(vm.$refs.carousel.activeIndex).toBe(3)
    vm.$refs.carousel.prev()
    expect(vm.$refs.carousel.activeIndex).toBe(2)
    vm.$refs.carousel.next()
    expect(vm.$refs.carousel.activeIndex).toBe(3)
  })

  it('two item, activeIndex is not a supplementary item', async () => {
    const data = [100, 200]

    wrapper = mount({
      setup() {
        return () => (
          <div>
            <Carousel ref={'carousel'}>
              {data.map((value) => (
                <CarouselItem label={value} key={value}>
                  {value}
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        )
      },
    })

    await nextTick()
    const vm = wrapper.vm

    expect(vm.$refs.carousel.activeIndex).toBe(0)
    vm.$refs.carousel.next()
    expect(vm.$refs.carousel.activeIndex).toBe(1)
    vm.$refs.carousel.next()
    expect(vm.$refs.carousel.activeIndex).toBe(0)
    vm.$refs.carousel.prev()
    expect(vm.$refs.carousel.activeIndex).toBe(1)
  })

  it('should continue auto play after adding new items dynamically', async () => {
    vi.useFakeTimers()
    const data = reactive([1, 2, 3])

    wrapper = mount({
      setup() {
        return () => (
          <div>
            <Carousel interval={30} ref={'carousel'}>
              {data.map((value) => (
                <CarouselItem label={value} key={value}>
                  {value}
                </CarouselItem>
              ))}
            </Carousel>
          </div>
        )
      },
    })

    await nextTick()
    const vm = wrapper.vm

    expect(vm.$refs.carousel.activeIndex).toBe(0)

    vi.advanceTimersByTime(40)
    await nextTick()
    expect(vm.$refs.carousel.activeIndex).toBe(1)

    data.push(4)
    await nextTick()

    expect(wrapper.findAll('.el-carousel__item').length).toBe(4)
    expect(vm.$refs.carousel.activeIndex).toBe(0)

    vi.advanceTimersByTime(80)
    await nextTick()
    expect(vm.$refs.carousel.activeIndex).toBe(2)
  })
})
