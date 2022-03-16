import { nextTick, reactive } from 'vue'
import { mount } from '@vue/test-utils'
import Carousel from '../src/carousel.vue'
import CarouselItem from '../src/carousel-item.vue'
import type { CarouselInstance } from '../src/carousel'

const wait = (ms = 100) =>
  new Promise((resolve) => setTimeout(() => resolve(0), ms))

const generateCarouselItems = (count = 3) => {
  const list = Array.from({ length: count }, (_, index) => index + 1)
  return list.map((i) => <CarouselItem key={i}></CarouselItem>)
}

describe('Carousel', () => {
  it('create', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <div>
            <Carousel ref="carousel">{generateCarouselItems()}</Carousel>
          </div>
        )
      },
    })

    const carousel = wrapper.findComponent({ ref: 'carousel' })
      .vm as CarouselInstance
    expect(carousel.direction).toBe('horizontal')
    expect(wrapper.findAll('.el-carousel__item').length).toEqual(3)
  })

  it('auto play', async (done) => {
    const wrapper = mount(() => (
      <div>
        <Carousel interval={50}>{generateCarouselItems()}</Carousel>
      </div>
    ))

    await nextTick()
    await wait(10)
    const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
    expect(items[0].classList.contains('is-active')).toBeTruthy()
    await wait(60)
    expect(items[1].classList.contains('is-active')).toBeTruthy()
    done()
  })

  it('initial index', async (done) => {
    const wrapper = mount(() => (
      <div>
        <Carousel autoplay={false} initial-index={1}>
          {generateCarouselItems()}
        </Carousel>
      </div>
    ))

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
    const wrapper = mount(() => (
      <div>
        <Carousel interval={500}>{generateCarouselItems()}</Carousel>
      </div>
    ))
    await nextTick()
    const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
    await wrapper.trigger('mouseenter')
    await nextTick()
    expect(items[0].classList.contains('is-active')).toBeTruthy()
    await wrapper.trigger('mouseleave')
    await nextTick()
    await wait(700)
    expect(items[1].classList.contains('is-active')).toBeTruthy()
    done()
  })

  it('change', async (done) => {
    const state = reactive({
      val: -1,
      oldVal: -1,
    })

    mount({
      setup() {
        const handleChange = (val: number, oldVal: number) => {
          state.val = val
          state.oldVal = oldVal
        }

        return () => (
          <div>
            <Carousel interval={50} onChange={handleChange}>
              {generateCarouselItems()}
            </Carousel>
          </div>
        )
      },
    })

    await nextTick()
    await wait(50)
    expect(state.val).toBe(1)
    expect(state.oldVal).toBe(0)
    done()
  })

  it('label', async (done) => {
    const wrapper = mount(() => (
      <div>
        <Carousel>
          {[1, 2, 3].map((i) => (
            <CarouselItem key={i} label={i}></CarouselItem>
          ))}
        </Carousel>
      </div>
    ))
    await nextTick()
    expect(wrapper.find('.el-carousel__button span').text()).toBe('1')
    done()
  })

  describe('manual control', () => {
    it('hover', async (done) => {
      const wrapper = mount(() => (
        <div>
          <Carousel autoplay={false}>{generateCarouselItems()}</Carousel>
        </div>
      ))

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
    const wrapper = mount(() => (
      <div>
        <Carousel autoplay={false} type="card">
          {generateCarouselItems(7)}
        </Carousel>
      </div>
    ))
    await nextTick()
    await wait()
    const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
    expect(items[0].classList.contains('is-active')).toBeTruthy()
    expect(items[1].classList.contains('is-in-stage')).toBeTruthy()
    expect(items[6].classList.contains('is-in-stage')).toBeTruthy()
    await items[1].click()
    await wait()
    expect(items[1].classList.contains('is-active')).toBeTruthy()
    await wrapper.vm.$el.querySelector('.el-carousel__arrow--left').click()
    await wait()
    expect(items[0].classList.contains('is-active')).toBeTruthy()
    await items[6].click()
    await wait()
    expect(items[6].classList.contains('is-active')).toBeTruthy()
    done()
  })

  it('vertical direction', () => {
    const wrapper = mount({
      setup() {
        return () => (
          <div>
            <Carousel
              ref="carousel"
              autoplay={false}
              direction="vertical"
              height="100px"
            >
              {generateCarouselItems()}
            </Carousel>
          </div>
        )
      },
    })
    const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
    const carousel = wrapper.findComponent({ ref: 'carousel' })
      .vm as CarouselInstance
    expect(carousel.direction).toBe('vertical')
    expect(items[0].style.transform.includes('translateY')).toBeTruthy()
  })

  it('pause auto play on hover', async (done) => {
    const wrapper = mount(() => (
      <div>
        <Carousel interval={50} pause-on-hover={false}>
          {generateCarouselItems()}
        </Carousel>
      </div>
    ))

    await nextTick()
    await wrapper.find('.el-carousel').trigger('mouseenter')
    const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
    await nextTick()
    await wait(60)
    expect(items[1].classList.contains('is-active')).toBeTruthy()
    done()
  })
})
