import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { EVENT_CODE } from '@element-plus/constants'
import { ElFormItem } from '@element-plus/components/form'
import Slider from '../src/slider.vue'

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
      data: () => ({ value: 60 }),
      render() {
        return <Slider v-model={this.value} min={50} />
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
      data: () => ({ value: 0 }),
      render() {
        return <Slider v-model={this.value} size="small" />
      },
    })

    expect(wrapper.find('.el-slider--small').exists()).toBe(true)
  })

  it('show tooltip', () => {
    const wrapper = mount({
      data: () => ({ value: 0 }),
      render() {
        return <Slider v-model={this.value} />
      },
    })

    const slider = wrapper.findComponent({ name: 'ElSliderButton' })
    slider.vm.handleMouseEnter()
    expect(slider.vm.tooltipVisible).toBeTruthy()
    slider.vm.handleMouseLeave()
    expect(slider.vm.tooltipVisible).toBeFalsy()
  })

  it('hide tooltip', () => {
    const wrapper = mount({
      data: () => ({ value: 0 }),
      render() {
        return <Slider ref="slider" v-model={this.value} show-tooltip={false} />
      },
    })

    const slider = wrapper.vm.$refs.slider
    const tooltip = slider.$refs.firstButton.$refs.tooltip
    expect(tooltip.disabled).toBe(true)
  })

  it('format tooltip', async () => {
    const wrapper = mount({
      data: () => ({ value: 0 }),
      render() {
        const formatTooltip = (val: number) => `$${val}`
        return (
          <Slider
            ref="slider"
            v-model={this.value}
            format-tooltip={formatTooltip}
          />
        )
      },
    })

    const slider = wrapper.findComponent({ name: 'ElSliderButton' })
    nextTick().then(() => {
      expect(slider.vm.formatValue).toBe('$0')
    })
  })

  describe('drag', () => {
    it('horizontal', async () => {
      vi.useRealTimers()
      const wrapper = mount(
        {
          data: () => ({ value: 0 }),
          render() {
            return (
              <div style="width: 200px;">
                <Slider v-model={this.value} vertical={false} />
              </div>
            )
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

      const mousemove = new MouseEvent('mousemove', {
        screenX: 100,
        screenY: 0,
        clientX: 100,
        clientY: 0,
      })
      window.dispatchEvent(mousemove)

      const mouseup = new MouseEvent('mouseup', {
        screenX: 100,
        screenY: 0,
        clientX: 100,
        clientY: 0,
      })
      window.dispatchEvent(mouseup)

      await nextTick()
      expect(wrapper.vm.value === 50).toBeTruthy()
    })

    it('vertical', async () => {
      vi.useRealTimers()
      const wrapper = mount(
        {
          data: () => ({ value: 0 }),
          render() {
            return (
              <div style="width: 200px;">
                <Slider v-model={this.value} vertical={true} />
              </div>
            )
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

      const mousemove = new MouseEvent('mousemove', {
        screenX: 0,
        screenY: -100,
        clientX: 0,
        clientY: -100,
      })
      window.dispatchEvent(mousemove)

      const mouseup = new MouseEvent('mouseup', {
        screenX: 0,
        screenY: -100,
        clientX: 0,
        clientY: -100,
      })
      window.dispatchEvent(mouseup)
      await nextTick()
      expect(wrapper.vm.value).toBe(50)
    })
  })

  describe('accessibility', () => {
    it('left/right arrows', async () => {
      const wrapper = mount({
        data: () => ({ value: 0.1 }),
        render() {
          return <Slider v-model={this.value} />
        },
      })

      const slider = wrapper.findComponent({ name: 'ElSliderButton' })

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
        data: () => ({ value: 0.1 }),
        render() {
          return <Slider v-model={this.value} />
        },
      })

      const slider = wrapper.findComponent({ name: 'ElSliderButton' })

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
        data: () => ({ value: -1 }),
        render() {
          return <Slider v-model={this.value} min={-5} max={10} />
        },
      })

      const slider = wrapper.findComponent({ name: 'ElSliderButton' })
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
        data: () => ({ value: 0 }),
        render() {
          return <Slider v-model={this.value} min={-5} max={10} />
        },
      })

      const slider = wrapper.findComponent({ name: 'ElSliderButton' })
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
        data: () => ({ value: 0 }),
        render() {
          return (
            <div style="width: 200px;">
              <Slider v-model={this.value} min={0} max={1} step={0.1} />
            </div>
          )
        },
      },
      {
        attachTo: document.body,
      }
    )

    const mockClientWidth = vi
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    const slider = wrapper.findComponent({ name: 'ElSliderButton' })
    await nextTick()

    slider.trigger('mousedown', { clientX: 0 })

    const mousemove = new MouseEvent('mousemove', {
      screenX: 100,
      screenY: 0,
      clientX: 100,
      clientY: 0,
    })
    window.dispatchEvent(mousemove)

    const mouseup = new MouseEvent('mouseup', {
      screenX: 100,
      screenY: 0,
      clientX: 100,
      clientY: 0,
    })
    await nextTick()
    window.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.vm.value === 0.5).toBeTruthy()
    mockClientWidth.mockRestore()
  })

  it('click', async () => {
    vi.useRealTimers()
    const wrapper = mount({
      data: () => ({ value: 0 }),
      render() {
        return <Slider v-model={this.value} />
      },
    })

    const mockClientWidth = vi
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    const slider = wrapper.findComponent({ name: 'ElSlider' })
    slider.vm.onSliderClick(new MouseEvent('mousedown', { clientX: 100 }))
    await nextTick()
    expect(wrapper.vm.value > 0).toBeTruthy()
    mockClientWidth.mockRestore()
  })

  it('change event', async () => {
    vi.useRealTimers()
    const wrapper = mount({
      data: () => ({ data: 0, value: 0 }),
      render() {
        const onChange = (val: number | number[]) => (this.data = val)
        return (
          <div style="width: 200px">
            <Slider v-model={this.value} onChange={onChange} />
          </div>
        )
      },
    })

    const slider = wrapper.findComponent({ name: 'ElSlider' })
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
      data: () => ({ data: 0, value: 0 }),
      render() {
        const onInput = (val: number | number[]) => (this.data = val)
        return (
          <div style="width: 200px">
            <Slider v-model={this.value} onInput={onInput} />
          </div>
        )
      },
    })

    const slider = wrapper.findComponent({ name: 'ElSlider' })
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
      data: () => ({ value: 0 }),
      render() {
        return <Slider v-model={this.value} disabled />
      },
    })

    const mockClientWidth = vi
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    const slider = wrapper.findComponent({ name: 'ElSliderButton' })
    slider.vm.onButtonDown({ clientX: 0 })

    const mousemove = new MouseEvent('mousemove', {
      screenX: 50,
      screenY: 0,
      clientX: 50,
      clientY: 0,
    })
    window.dispatchEvent(mousemove)

    const mouseup = new MouseEvent('mouseup', {
      screenX: 50,
      screenY: 0,
      clientX: 50,
      clientY: 0,
    })
    window.dispatchEvent(mouseup)
    await nextTick()
    expect(wrapper.vm.value).toBe(0)
    mockClientWidth.mockRestore()
  })

  it('show input', async () => {
    const wrapper = mount({
      data: () => ({ value: 0 }),
      render() {
        return <Slider v-model={this.value} show-input />
      },
    })

    const increaseButton = wrapper.find('.el-input-number__increase')
    await increaseButton.trigger('mousedown')
    vi.advanceTimersByTime(200)
    expect(wrapper.vm.value > 0).toBeTruthy()
  })

  it('show stops', () => {
    const wrapper = mount(() => <Slider step={10} show-stops />)

    const stops = wrapper.findAll('.el-slider__stop')
    expect(stops.length).toBe(9)
  })

  it('vertical mode', async () => {
    vi.useRealTimers()
    const wrapper = mount(
      {
        data: () => ({ value: 0 }),
        render() {
          return <Slider height="200px" v-model={this.value} vertical />
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
    const slider = wrapper.getComponent({ name: 'ElSlider' })
    slider.vm.onSliderClick(new MouseEvent('mousedown', { clientX: 100 }))
    await nextTick()
    expect(wrapper.vm.value > 0).toBeTruthy()
    mockRectBottom.mockRestore()
    mockClientHeight.mockRestore()
  })

  it('rerender with min and show-input', async () => {
    const wrapper = mount(
      {
        data: () => ({ show: false, value: 30 }),
        mounted() {
          this.show = true
        },
        render() {
          return (
            this.show && <Slider v-model={this.value} min={10} show-input />
          )
        },
      },
      {
        attachTo: document.body,
      }
    )

    await nextTick()
    expect(wrapper.vm.value).toEqual(30)
  })

  describe('range', () => {
    it('basic ranged slider', () => {
      const wrapper = mount({
        data: () => ({ value: [10, 20] }),
        render() {
          return <Slider v-model={this.value} range />
        },
      })

      const sliders = wrapper.findAllComponents({ name: 'ElSliderButton' })
      expect(sliders.length).toBe(2)
    })

    it('should not exceed min and max', async () => {
      const wrapper = mount({
        data: () => ({ value: [50, 60] }),
        render() {
          return <Slider v-model={this.value} min={50} range />
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
          data: () => ({ value: [0, 100] }),
          render() {
            return (
              <div style="width: 200px;">
                <Slider v-model={this.value} range />
              </div>
            )
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
      const slider = wrapper.getComponent({ name: 'ElSlider' })
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
        data: () => ({ min: 0, max: 100, value: [50, 80] }),
        render() {
          return (
            <Slider v-model={this.value} min={this.min} max={this.max} range />
          )
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
        data: () => ({ value: [30, 60] }),
        render() {
          return <Slider v-model={this.value} step={10} range show-stops />
        },
      })

      await nextTick()
      const stops = wrapper.findAll('.el-slider__stop')
      expect(stops.length).toBe(5)
    })

    it('marks', async () => {
      const wrapper = mount({
        data: () => ({
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
        }),
        render() {
          return (
            <Slider
              v-model={this.value}
              min={20}
              step={10}
              marks={this.marks}
              range
              show-stops
            />
          )
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
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <Slider />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const sliderButton = wrapper.find('.el-slider__button-wrapper')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(sliderButton.attributes().id)
    })

    it('range with automatic id attachment', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <Slider range />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const sliderWrapper = wrapper.find('.el-slider')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(sliderWrapper.attributes().id)
    })

    it('specified id attachment', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <Slider id="foobar" />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const sliderButton = wrapper.find('.el-slider__button-wrapper')
      expect(formItem.attributes().role).toBeFalsy()
      expect(sliderButton.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(sliderButton.attributes().id)
    })

    it('range with specified id attachment', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <Slider id="foobar" range />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const sliderWrapper = wrapper.find('.el-slider')
      expect(formItem.attributes().role).toBeFalsy()
      expect(sliderWrapper.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(sliderWrapper.attributes().id)
    })

    it('form item role is group when multiple inputs', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <Slider />
          <Slider />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      expect(formItem.attributes().role).toBe('group')
    })
  })
})
