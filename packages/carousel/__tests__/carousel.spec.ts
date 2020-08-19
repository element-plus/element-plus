import { mount } from '@vue/test-utils'
import Carousel from '../src/main.vue'
import CarouselItem from '../src/item.vue'

const _mount = (template: string, data?: () => void, methods?: any) =>
  mount({
    components: {
      'el-carousel': Carousel,
      'el-carousel-item': CarouselItem,
    },
    template,
    data,
    methods,
  })

describe('Carousel', () => {
  it('create', () => {
    const wrapper = _mount(
      `
        <div>
          <el-carousel ref="carousel">
            <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
      `,
    )

    expect(wrapper.vm.$refs.carousel.direction).toBe('horizontal')
    expect(wrapper.findAll('.el-carousel__item').length).toEqual(3)
  })

  it('auto play', done => {
    const wrapper = _mount(`
        <div>
          <el-carousel :interval="50">
            <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
      `)

    setTimeout(() => {
      const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
      expect(items[0].classList.contains('is-active')).toBeTruthy()
      setTimeout(() => {
        expect(items[1].classList.contains('is-active')).toBeTruthy()
        done()
      }, 60)
    }, 10)
  })

  it('initial index', done => {
    const wrapper = _mount(`
        <div>
          <el-carousel :autoplay="false" :initial-index="1">
            <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
      `)

    setTimeout(() => {
      expect(
        wrapper.vm.$el
          .querySelectorAll('.el-carousel__item')[1]
          .classList.contains('is-active'),
      ).toBeTruthy()
      done()
    }, 10)
  })

  it('reset timer', done => {
    const wrapper = _mount(`
        <div>
          <el-carousel :interval="500">
            <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
      `)
    setTimeout(() => {
      const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
      wrapper.trigger('mouseenter')
      setTimeout(() => {
        expect(items[0].classList.contains('is-active')).toBeTruthy()
        wrapper.trigger('mouseleave')
        setTimeout(() => {
          expect(items[1].classList.contains('is-active')).toBeTruthy()
          done()
        }, 700)
      }, 20)
    }, 100)
  })

  it('change', done => {
    const wrapper = _mount(
      `
        <div>
          <el-carousel :interval="50" @change="handleChange">
            <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
      `,
      () => {
        return {
          val: -1,
          oldVal: -1,
        }
      },
      {
        handleChange(val, oldVal) {
          this.val = val
          this.oldVal = oldVal
        },
      },
    )

    setTimeout(() => {
      expect(wrapper.vm.val).toBe(1)
      expect(wrapper.vm.oldVal).toBe(0)
      done()
    }, 60)
  })

  it('label', done => {
    const wrapper = _mount(`
        <div>
          <el-carousel>
            <el-carousel-item v-for="item in 3" :key="item" :label="item"></el-carousel-item>
          </el-carousel>
        </div>
      `)
    setTimeout(() => {
      expect(wrapper.find('.el-carousel__button span').text()).toBe('1')
      done()
    }, 10)
  })

  describe('manual control', () => {
    it('hover', done => {
      const wrapper = _mount(`
        <div>
          <el-carousel :autoplay="false">
            <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
      `)

      setTimeout(() => {
        wrapper.findAll('.el-carousel__indicator')[1].trigger('mouseenter')
        setTimeout(() => {
          expect(
            wrapper.vm.$el
              .querySelectorAll('.el-carousel__item')[1]
              .classList.contains('is-active'),
          ).toBeTruthy()
          done()
        }, 10)
      }, 10)
    })

    it('click', done => {
      const wrapper = _mount(`
        <div>
          <el-carousel :autoplay="false" trigger="click" ref="carousel">
            <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
      `)

      setTimeout(() => {
        const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
        wrapper.findAll('.el-carousel__indicator')[2].trigger('click')
        setTimeout(() => {
          expect(items[2].classList.contains('is-active')).toBeTruthy()
          wrapper.find('.el-carousel__arrow--right').trigger('mouseenter')
          wrapper.find('.el-carousel__arrow--right').trigger('click')
          setTimeout(() => {
            expect(items[0].classList.contains('is-active')).toBeTruthy()
            done()
          }, 10)
        }, 10)
      }, 10)
    })
  })

  describe('methods', () => {
    it('setActiveItem', done => {
      const wrapper = _mount(`
        <div>
          <el-carousel :autoplay="false" ref="carousel">
            <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
      `)

      setTimeout(() => {
        wrapper.vm.$refs.carousel.setActiveItem(1)
        setTimeout(() => {
          expect(
            wrapper.vm.$el
              .querySelectorAll('.el-carousel__item')[1]
              .classList.contains('is-active'),
          ).toBeTruthy()
          done()
        }, 10)
      }, 10)
    })

    it('slide', done => {
      const wrapper = _mount(`
        <div>
          <el-carousel :autoplay="false" ref="carousel">
            <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
      `)

      setTimeout(() => {
        wrapper.vm.$refs.carousel.prev(1)
        const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
        setTimeout(() => {
          expect(items[2].classList.contains('is-active')).toBeTruthy()
          wrapper.vm.$refs.carousel.next(1)
          setTimeout(() => {
            expect(items[0].classList.contains('is-active')).toBeTruthy()
            done()
          }, 10)
        }, 10)
      }, 10)
    })
  })

  it('card', done => {
    const wrapper = _mount(`
        <div>
          <el-carousel :autoplay="false" type="card">
            <el-carousel-item v-for="item in 7" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
      `)

    setTimeout(() => {
      const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')
      expect(items[0].classList.contains('is-active')).toBeTruthy()
      expect(items[1].classList.contains('is-in-stage')).toBeTruthy()
      expect(items[6].classList.contains('is-in-stage')).toBeTruthy()
      items[1].click()
      setTimeout(() => {
        expect(items[1].classList.contains('is-active')).toBeTruthy()
        wrapper.vm.$el.querySelector('.el-carousel__arrow--left').click()
        setTimeout(() => {
          expect(items[0].classList.contains('is-active')).toBeTruthy()
          items[6].click()
          setTimeout(() => {
            expect(items[6].classList.contains('is-active')).toBeTruthy()
            done()
          }, 10)
        }, 10)
      }, 10)
    }, 10)
  })

  it('vertical direction', () => {
    const wrapper = _mount(`
        <div>
          <el-carousel ref="carousel" :autoplay="false" direction="vertical" height="100px">
            <el-carousel-item v-for="item in 3" :key="item"></el-carousel-item>
          </el-carousel>
        </div>
      `)
    const items = wrapper.vm.$el.querySelectorAll('.el-carousel__item')

    expect(wrapper.vm.$refs.carousel.direction).toBe('vertical')
    expect(items[0].style.transform.indexOf('translateY') !== -1).toBeTruthy()
  })
})
