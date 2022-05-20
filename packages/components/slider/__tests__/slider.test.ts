import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { EVENT_CODE } from '@element-plus/constants'
import { ElFormItem } from '@element-plus/components/form'
import Slider from '../src/index.vue'

vi.mock('lodash-unified', async () => {
  return {
    ...((await vi.importActual('lodash-unified')) as Record<string, any>),
    debounce: vi.fn((fn) => {
      fn.cancel = vi.fn()
      fn.flush = vi.fn()
      return fn
    }),
  }
})

describe('Slider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('create', () => {
    const wrapper = mount(Slider)
    expect(wrapper.props().modelValue).toBe(0)
  })

  it('should not exceed min and max', async () => {
    const wrapper = mount({
      template: `
        <slider v-model="value" :min="50"></slider>
      `,
      components: { Slider },
      data() {
        return {
          value: 60,
        }
      },
    })

    await nextTick()
    wrapper.vm.value = 40
    await nextTick()
    expect(wrapper.vm.value).toBe(50)
    wrapper.vm.value = 120
    await nextTick()
    expect(wrapper.vm.value).toBe(100)
  })

  it('sizes', () => {
    const wrapper = mount({
      template: `
        <div>
        <slider v-model="value" size="small">
        </slider>
        </div>
      `,
      components: { Slider },
      data() {
        return {
          value: 0,
        }
      },
    })
    expect(wrapper.find('.el-slider--small').exists()).toBe(true)
  })

  it('show tooltip', () => {
    const wrapper = mount({
      template: `
        <div>
          <slider v-model="value">
          </slider>
        </div>
      `,
      components: { Slider },
      data() {
        return {
          value: 0,
        }
      },
    })
    const slider: any = wrapper.findComponent({ name: 'ElSliderButton' })
    slider.vm.handleMouseEnter()
    expect(slider.vm.tooltipVisible).toBeTruthy()
    slider.vm.handleMouseLeave()
    expect(slider.vm.tooltipVisible).toBeFalsy()
  })

  it('hide tooltip', () => {
    const wrapper = mount({
      template: `
        <div>
          <slider ref="slider" v-model="value" :show-tooltip="false">
          </slider>
        </div>
      `,
      components: { Slider },
      data() {
        return {
          value: 0,
        }
      },
    })
    const slider = wrapper.vm.$refs.slider as any
    const tooltip = slider.$refs.firstButton.$refs.tooltip
    expect(tooltip.disabled).toBe(true)
  })

  it('format tooltip', async () => {
    const wrapper = mount({
      template: `
        <div>
          <slider ref="slider" v-model="value" :format-tooltip="formatTooltip">
          </slider>
        </div>
      `,
      components: { Slider },
      data() {
        return {
          value: 0,
        }
      },
      methods: {
        formatTooltip(val: number) {
          return `$${val}`
        },
      },
    })
    const slider: any = wrapper.findComponent({ name: 'ElSliderButton' })
    nextTick().then(() => {
      expect(slider.vm.formatValue).toBe('$0')
    })
  })

  describe('drag', () => {
    it('horizontal', async () => {
      vi.useRealTimers()
      const wrapper = mount(
        {
          template: `
          <div style="width: 200px;">
            <slider v-model="value" :vertical="false"></slider>
          </div>
        `,
          components: { Slider },
          data() {
            return {
              value: 0,
            }
          },
        },
        {
          attachTo: document.body,
        }
      )
      const slider = wrapper.findComponent({ name: 'ElSliderButton' })

      vi.spyOn(
        wrapper.find('.el-slider__runway').element,
        'clientWidth',
        'get'
      ).mockImplementation(() => 200)
      slider.trigger('mousedown', { clientX: 0 })

      const mousemove = document.createEvent('MouseEvent')
      mousemove.initMouseEvent(
        'mousemove',
        true,
        true,
        window,
        1,
        100,
        0,
        100,
        0,
        false,
        false,
        true,
        false,
        0,
        null
      )
      window.dispatchEvent(mousemove)

      const mouseup = document.createEvent('MouseEvent')
      mouseup.initMouseEvent(
        'mouseup',
        true,
        true,
        window,
        1,
        100,
        0,
        100,
        0,
        false,
        false,
        true,
        false,
        0,
        null
      )
      window.dispatchEvent(mouseup)

      await nextTick()
      expect(wrapper.vm.value === 50).toBeTruthy()
    })

    it('vertical', async () => {
      vi.useRealTimers()
      const wrapper = mount(
        {
          template: `
          <div style="height: 200px;">
            <slider v-model="value" :vertical="true"></slider>
          </div>
        `,
          components: { Slider },
          data() {
            return {
              value: 0,
            }
          },
        },
        {
          attachTo: document.body,
        }
      )
      const slider = wrapper.findComponent({ name: 'ElSliderButton' })
      vi.spyOn(
        wrapper.find('.el-slider__runway').element,
        'clientHeight',
        'get'
      ).mockImplementation(() => 200)
      slider.trigger('mousedown', { clientY: 0 })
      const mousemove = document.createEvent('MouseEvent')
      mousemove.initMouseEvent(
        'mousemove',
        true,
        true,
        window,
        1,
        0,
        -100,
        0,
        -100,
        false,
        false,
        true,
        false,
        0,
        null
      )
      window.dispatchEvent(mousemove)
      const mouseup = document.createEvent('MouseEvent')
      mouseup.initMouseEvent(
        'mouseup',
        true,
        true,
        window,
        1,
        0,
        -100,
        0,
        -100,
        false,
        false,
        true,
        false,
        0,
        null
      )
      window.dispatchEvent(mouseup)
      await nextTick()
      expect(wrapper.vm.value).toBe(50)
    })
  })

  describe('accessibility', () => {
    it('left/right arrows', async () => {
      const wrapper = mount({
        template: `
          <div>
            <slider v-model="value"></slider>
          </div>
        `,
        components: { Slider },
        data() {
          return {
            value: 0.1,
          }
        },
      })
      const slider: any = wrapper.findComponent({ name: 'ElSliderButton' })

      slider.vm.onKeyDown(
        new KeyboardEvent('keydown', { key: EVENT_CODE.right })
      )
      await nextTick()
      expect(wrapper.vm.value).toBe(1)

      slider.vm.onKeyDown(
        new KeyboardEvent('keydown', { key: EVENT_CODE.left })
      )
      await nextTick()
      expect(wrapper.vm.value).toBe(0)
    })

    it('up/down arrows', async () => {
      const wrapper = mount({
        template: `
          <div>
            <slider v-model="value"></slider>
          </div>
        `,
        components: { Slider },
        data() {
          return {
            value: 0.1,
          }
        },
      })
      const slider: any = wrapper.findComponent({ name: 'ElSliderButton' })

      slider.vm.onKeyDown(new KeyboardEvent('keydown', { key: EVENT_CODE.up }))
      await nextTick()
      expect(wrapper.vm.value).toBe(1)

      slider.vm.onKeyDown(
        new KeyboardEvent('keydown', { key: EVENT_CODE.down })
      )
      await nextTick()
      expect(wrapper.vm.value).toBe(0)
    })

    it('page up/down keys', async () => {
      const wrapper = mount({
        template: `
          <div>
            <slider v-model="value" :min="-5" :max="10"></slider>
          </div>
        `,
        components: { Slider },
        data() {
          return {
            value: -1,
          }
        },
      })
      const slider: any = wrapper.findComponent({ name: 'ElSliderButton' })
      slider.vm.onKeyDown(
        new KeyboardEvent('keydown', { key: EVENT_CODE.pageUp })
      )
      await nextTick()
      expect(wrapper.vm.value).toBe(3)

      slider.vm.onKeyDown(
        new KeyboardEvent('keydown', { key: EVENT_CODE.pageDown })
      )
      await nextTick()
      expect(wrapper.vm.value).toBe(-1)
    })

    it('home/end keys', async () => {
      const wrapper = mount({
        template: `
          <div>
            <slider v-model="value" :min="-5" :max="10"></slider>
          </div>
        `,
        components: { Slider },
        data() {
          return {
            value: 0,
          }
        },
      })
      const slider: any = wrapper.findComponent({ name: 'ElSliderButton' })
      slider.vm.onKeyDown(
        new KeyboardEvent('keydown', { key: EVENT_CODE.home })
      )
      await nextTick()
      expect(wrapper.vm.value).toBe(-5)

      slider.vm.onKeyDown(new KeyboardEvent('keydown', { key: EVENT_CODE.end }))
      await nextTick()
      expect(wrapper.vm.value).toBe(10)
    })
  })

  it('step', async () => {
    vi.useRealTimers()
    const wrapper = mount(
      {
        template: `
        <div style="width: 200px;">
          <slider v-model="value" :min="0" :max="1" :step="0.1"></slider>
        </div>
      `,
        components: { Slider },
        data() {
          return {
            value: 0,
          }
        },
      },
      {
        attachTo: document.body,
      }
    )
    const mockClientWidth = vi
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    const slider: any = wrapper.findComponent({ name: 'ElSliderButton' })
    await nextTick()

    slider.trigger('mousedown', { clientX: 0 })
    const mousemove = document.createEvent('MouseEvent')
    mousemove.initMouseEvent(
      'mousemove',
      true,
      true,
      window,
      1,
      100,
      0,
      100,
      0,
      false,
      false,
      true,
      false,
      0,
      null
    )
    window.dispatchEvent(mousemove)
    const mouseup = document.createEvent('MouseEvent')
    mouseup.initMouseEvent(
      'mouseup',
      true,
      true,
      window,
      1,
      100,
      0,
      100,
      0,
      false,
      false,
      true,
      false,
      0,
      null
    )
    await nextTick()
    window.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.vm.value === 0.5).toBeTruthy()
    mockClientWidth.mockRestore()
  })

  it('click', async () => {
    vi.useRealTimers()
    const wrapper = mount({
      template: `
        <div>
          <slider v-model="value"></slider>
        </div>
      `,
      components: { Slider },
      data() {
        return {
          value: 0,
        }
      },
    })
    const mockClientWidth = vi
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    const slider: any = wrapper.findComponent({ name: 'ElSlider' })
    slider.vm.onSliderClick(new MouseEvent('mousedown', { clientX: 100 }))
    await nextTick()
    expect(wrapper.vm.value > 0).toBeTruthy()
    mockClientWidth.mockRestore()
  })

  it('change event', async () => {
    vi.useRealTimers()
    const wrapper = mount({
      template: `
        <div style="width: 200px">
          <slider v-model="value" @change="onChange">
          </slider>
        </div>
      `,
      components: { Slider },
      data() {
        return {
          data: 0,
          value: 0,
        }
      },
      methods: {
        onChange(val: number) {
          this.data = val
        },
      },
    })
    const slider: any = wrapper.findComponent({ name: 'ElSlider' })
    const mockRectLeft = vi
      .spyOn(
        wrapper.find('.el-slider__runway').element,
        'getBoundingClientRect'
      )
      .mockImplementation(() => {
        return {
          left: 0,
        } as DOMRect
      })
    const mockClientWidth = vi
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    expect(wrapper.vm.data).toBe(0)
    slider.vm.onSliderClick(new MouseEvent('mousedown', { clientX: 100 }))
    await nextTick()
    expect(wrapper.vm.data === 50).toBeTruthy()
    mockRectLeft.mockRestore()
    mockClientWidth.mockRestore()
  })

  it('input event', async () => {
    vi.useRealTimers()
    const wrapper = mount({
      template: `
        <div style="width: 200px">
          <slider v-model="value" @input="onInput">
          </slider>
        </div>
      `,
      components: { Slider },
      data() {
        return {
          data: 0,
          value: 0,
        }
      },
      methods: {
        onInput(val: number) {
          this.data = val
        },
      },
    })
    const slider: any = wrapper.findComponent({ name: 'ElSlider' })
    const mockRectLeft = vi
      .spyOn(
        wrapper.find('.el-slider__runway').element,
        'getBoundingClientRect'
      )
      .mockImplementation(() => {
        return {
          left: 0,
        } as DOMRect
      })
    const mockClientWidth = vi
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    await nextTick()
    expect(wrapper.vm.data).toBe(0)
    slider.vm.onSliderClick(new MouseEvent('mousedown', { clientX: 100 }))
    await nextTick()
    expect(wrapper.vm.data === 50).toBeTruthy()
    mockRectLeft.mockRestore()
    mockClientWidth.mockRestore()
  })

  it('disabled', async () => {
    vi.useRealTimers()
    const wrapper = mount({
      template: `
        <div>
          <slider v-model="value" disabled></slider>
        </div>
      `,
      components: { Slider },
      data() {
        return {
          value: 0,
        }
      },
    })
    const mockClientWidth = vi
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    const slider: any = wrapper.findComponent({ name: 'ElSliderButton' })
    slider.vm.onButtonDown({ clientX: 0 })
    const mousemove = document.createEvent('MouseEvent')
    mousemove.initMouseEvent(
      'mousemove',
      true,
      true,
      window,
      1,
      50,
      0,
      50,
      0,
      false,
      false,
      true,
      false,
      0,
      null
    )
    window.dispatchEvent(mousemove)
    const mouseup = document.createEvent('MouseEvent')
    mouseup.initMouseEvent(
      'mouseup',
      true,
      true,
      window,
      1,
      50,
      0,
      50,
      0,
      false,
      false,
      true,
      false,
      0,
      null
    )
    window.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.vm.value).toBe(0)
    mockClientWidth.mockRestore()
  })

  it('show input', async () => {
    const wrapper = mount({
      template: `
        <div>
          <slider v-model="value" show-input></slider>
        </div>
      `,
      components: { Slider },
      data() {
        return {
          value: 0,
        }
      },
    })
    const increaseButton = wrapper.find('.el-input-number__increase')
    await increaseButton.trigger('mousedown')
    vi.advanceTimersByTime(200)
    expect(wrapper.vm.value > 0).toBeTruthy()
  })

  it('show stops', () => {
    const wrapper = mount(Slider, {
      props: {
        showStops: true,
        step: 10,
      },
    })
    const stops = wrapper.findAll('.el-slider__stop')
    expect(stops.length).toBe(9)
  })

  it('vertical mode', async () => {
    vi.useRealTimers()
    const wrapper = mount(
      {
        template: `
        <div>
          <slider vertical v-model="value" height="200px"></slider>
        </div>
      `,
        components: { Slider },
        data() {
          return {
            value: 0,
          }
        },
      },
      {
        attachTo: document.body,
      }
    )
    const mockRectBottom = vi
      .spyOn(
        wrapper.find('.el-slider__runway').element,
        'getBoundingClientRect'
      )
      .mockImplementation(() => {
        return {
          bottom: 200,
        } as DOMRect
      })
    const mockClientHeight = vi
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientHeight', 'get')
      .mockImplementation(() => 200)
    const slider: any = wrapper.getComponent({ name: 'ElSlider' })
    slider.vm.onSliderClick(new MouseEvent('mousedown', { clientX: 100 }))
    await nextTick()
    expect(wrapper.vm.value > 0).toBeTruthy()
    mockRectBottom.mockRestore()
    mockClientHeight.mockRestore()
  })

  it('rerender with min and show-input', async () => {
    const wrapper = mount({
      template: '<slider v-if="show" v-model="value" :min="10" show-input/>',
      components: { Slider },
      data() {
        return {
          show: false,
          value: 30,
        }
      },
      mounted() {
        this.show = true
      },
    })
    await nextTick()
    expect(wrapper.vm.value).toEqual(30)
  })

  describe('range', () => {
    it('basic ranged slider', () => {
      const wrapper = mount({
        template: `
          <div>
            <slider v-model="value" range></slider>
          </div>
        `,
        components: { Slider },
        data() {
          return {
            value: [10, 20],
          }
        },
      })
      const sliders = wrapper.findAllComponents({ name: 'ElSliderButton' })
      expect(sliders.length).toBe(2)
    })

    it('should not exceed min and max', async () => {
      const wrapper = mount({
        template: `
          <div>
            <slider v-model="value" range :min="50">
            </slider>
          </div>
        `,
        components: { Slider },
        data() {
          return {
            value: [50, 60],
          }
        },
      })
      await nextTick()

      wrapper.vm.value = [40, 60]
      await nextTick()
      expect(wrapper.vm.value).toStrictEqual([50, 60])

      wrapper.vm.value = [50, 120]
      await nextTick()
      expect(wrapper.vm.value).toStrictEqual([50, 100])
    })

    it('click', async () => {
      vi.useRealTimers()
      const wrapper = mount(
        {
          template: `
          <div style="width: 200px;">
            <slider range v-model="value"></slider>
          </div>
        `,
          components: { Slider },
          data() {
            return {
              value: [0, 100],
            }
          },
        },
        {
          attachTo: document.body,
        }
      )
      const mockRectLeft = vi
        .spyOn(
          wrapper.find('.el-slider__runway').element,
          'getBoundingClientRect'
        )
        .mockImplementation(() => {
          return {
            left: 0,
          } as DOMRect
        })
      const mockClientWidth = vi
        .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
        .mockImplementation(() => 200)
      const slider: any = wrapper.getComponent({ name: 'ElSlider' })
      slider.vm.onSliderClick(new MouseEvent('mousedown', { clientX: 100 }))
      await nextTick()
      // Because mock the clientWidth, so the targetValue is 50.
      // The behavior of the setPosition method in the useSlider.ts file should be that the value of the second button is 50
      expect(wrapper.vm.value[0] === 0).toBeTruthy()
      expect(wrapper.vm.value[1] === 50).toBeTruthy()
      mockRectLeft.mockRestore()
      mockClientWidth.mockRestore()
    })

    it('responsive to dynamic min and max', async () => {
      const wrapper = mount({
        template: `
          <div>
            <slider v-model="value" range :min="min" :max="max">
            </slider>
          </div>
        `,
        components: { Slider },
        data() {
          return {
            min: 0,
            max: 100,
            value: [50, 80],
          }
        },
      })
      await nextTick()

      wrapper.vm.min = 60
      await nextTick()
      expect(wrapper.vm.value).toStrictEqual([60, 80])

      wrapper.vm.min = 30
      wrapper.vm.max = 40
      await nextTick()
      expect(wrapper.vm.value).toStrictEqual([40, 40])
    })

    it('show stops', async () => {
      const wrapper = mount({
        template: `
          <div>
            <slider
              v-model="value"
              range
              :step="10"
              show-stops
            ></slider>
          </div>
        `,
        components: { Slider },
        data() {
          return {
            value: [30, 60],
          }
        },
      })
      await nextTick()
      const stops = wrapper.findAll('.el-slider__stop')
      expect(stops.length).toBe(5)
    })

    it('marks', async () => {
      const wrapper = mount({
        template: `
          <div>
            <slider
              v-model="value"
              range
              :step="10"
              :marks="marks"
              :min="20"
              show-stops
            ></slider>
          </div>
        `,
        components: { Slider },
        data() {
          return {
            value: [30, 60],
            marks: {
              0: '0°C',
              8: '8°C',
              37: '37°C',
              50: {
                style: {
                  color: '#f50',
                },
                label: h('strong', '50°C'),
              },
            },
          }
        },
      })

      await nextTick()
      const stops = wrapper.findAll('.el-slider__marks-stop.el-slider__stop')
      const marks = wrapper.findAll('.el-slider__marks .el-slider__marks-text')
      expect(marks.length).toBe(2)
      expect(stops.length).toBe(2)
    })
  })

  describe('form item accessibility integration', () => {
    it('automatic id attachment', async () => {
      const wrapper = mount({
        template: `<el-form-item label="Foobar" data-test-ref="item">
            <el-slider />
          </el-form-item>`,
        components: {
          'el-slider': Slider,
          'el-form-item': ElFormItem,
        },
      })

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const sliderButton = wrapper.find('.el-slider__button-wrapper')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(sliderButton.attributes().id)
    })

    it('range with automatic id attachment', async () => {
      const wrapper = mount({
        template: `<el-form-item label="Foobar" data-test-ref="item">
            <el-slider :range="true" />
          </el-form-item>`,
        components: {
          'el-slider': Slider,
          'el-form-item': ElFormItem,
        },
      })

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const sliderWrapper = wrapper.find('.el-slider')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(sliderWrapper.attributes().id)
    })

    it('specified id attachment', async () => {
      const wrapper = mount({
        template: `<el-form-item label="Foobar" data-test-ref="item">
            <el-slider id="foobar" />
          </el-form-item>`,
        components: {
          'el-slider': Slider,
          'el-form-item': ElFormItem,
        },
      })

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const sliderButton = wrapper.find('.el-slider__button-wrapper')
      expect(formItem.attributes().role).toBeFalsy()
      expect(sliderButton.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(sliderButton.attributes().id)
    })

    it('range with specified id attachment', async () => {
      const wrapper = mount({
        template: `<el-form-item label="Foobar" data-test-ref="item">
            <el-slider id="foobar" :range="true" />
          </el-form-item>`,
        components: {
          'el-slider': Slider,
          'el-form-item': ElFormItem,
        },
      })

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const sliderWrapper = wrapper.find('.el-slider')
      expect(formItem.attributes().role).toBeFalsy()
      expect(sliderWrapper.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(sliderWrapper.attributes().id)
    })

    it('form item role is group when multiple inputs', async () => {
      const wrapper = mount({
        template: `<el-form-item label="Foobar" data-test-ref="item">
            <el-slider />
            <el-slider />
          </el-form-item>`,
        components: {
          'el-slider': Slider,
          'el-form-item': ElFormItem,
        },
      })

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      expect(formItem.attributes().role).toBe('group')
    })
  })
})
