import { nextTick, reactive } from 'vue'
import { mount } from '@vue/test-utils'
import Carousel from '../src/carousel.vue'
import CarouselItem from '../src/carousel-item.vue'

import type { VueWrapper } from '@vue/test-utils'
import type { CarouselInstance } from '../src/carousel'

const wait = (ms = 100) =>
  new Promise((resolve) => setTimeout(() => resolve(0), ms))

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

  it('auto play', async (done) => {
    wrapper = createComponent({
      interval: 50,
    })

    await nextTick()
    await wait(10)
    const items = wrapper.findAll('.el-carousel__item')
    expect(items[0].classes('is-active')).toBe(true)
    await wait(60)
    expect(items[1].classes('is-active')).toBe(true)
    done()
  })

  it('initial index', async (done) => {
    wrapper = createComponent({
      autoplay: false,
      'initial-index': 1,
    })

    await nextTick()
    await wait(10)

    expect(
      wrapper.vm.$el
        .querySelectorAll('.el-carousel__item')[1]
        .classList.contains('is-active')
    ).toBeTruthy()
    done()
  })

  it('reset timer', async (done) => {
    wrapper = createComponent({
      interval: 500,
    })
    await nextTick()
    const items = wrapper.findAll('.el-carousel__item')
    await wrapper.trigger('mouseenter')
    await nextTick()
    expect(items[0].classes('is-active')).toBe(true)
    await wrapper.trigger('mouseleave')
    await nextTick()
    await wait(700)
    expect(items[1].classes('is-active')).toBe(true)
    done()
  })

  it('change', async (done) => {
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
    await wait(50)
    expect(state.val).toBe(1)
    expect(state.oldVal).toBe(0)
    done()
  })

  it('label', async (done) => {
    wrapper = createComponent(undefined, 3, true)
    await nextTick()
    expect(wrapper.find('.el-carousel__button span').text()).toBe('1')
    done()
  })

  describe('manual control', () => {
    it('hover', async (done) => {
      wrapper = createComponent({
        autoplay: false,
      })

      await nextTick()
      await wait()
      await wrapper.findAll('.el-carousel__indicator')[1].trigger('mouseenter')
      await nextTick()
      await wait()
      expect(
        wrapper.vm.$el
          .querySelectorAll('.el-carousel__item')[1]
          .classList.contains('is-active')
      ).toBeTruthy()
      done()
    })
  })

  it('card', async (done) => {
    wrapper = createComponent(
      {
        autoplay: false,
        type: 'card',
      },
      7
    )

    await nextTick()
    await wait()
    const items = wrapper.findAll('.el-carousel__item')
    expect(items[0].classes('is-active')).toBeTruthy()
    expect(items[1].classes('is-in-stage')).toBeTruthy()
    expect(items[6].classes('is-in-stage')).toBeTruthy()
    await items[1].trigger('click')
    await wait()
    expect(items[1].classes('is-active')).toBeTruthy()
    await wrapper.vm.$el.querySelector('.el-carousel__arrow--left').click()
    await wait()
    expect(items[0].classes('is-active')).toBeTruthy()
    await items[6].trigger('click')
    await wait()
    expect(items[6].classes('is-active')).toBeTruthy()
    done()
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

  it('pause auto play on hover', async (done) => {
    wrapper = createComponent({
      interval: 50,
      'pause-on-hover': false,
    })

    await nextTick()
    await wrapper.find('.el-carousel').trigger('mouseenter')
    const items = wrapper.findAll('.el-carousel__item')
    await nextTick()
    await wait(60)
    expect(items[1].classes('is-active')).toBeTruthy()
    done()
  })

  it('async data', async () => {
    const wrapper = _mount(
      `
        <div>
          <el-carousel>
            <el-carousel-item v-for="item in carousels" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
      `,
      () => ({ carousels: [] })
    )

    await nextTick()
    await wait(1000)
    wrapper.setData({
      carousels: [1, 2, 3],
    })
    await nextTick()
    const items = wrapper.findAll('.el-carousel__item')
    expect(items[0].classes('is-active')).toBe(true)
  })
})
