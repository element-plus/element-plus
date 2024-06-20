import { h, nextTick, onMounted, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { EVENT_CODE } from '@element-plus/constants'
import { ElFormItem } from '@element-plus/components/form'
import Slider from '../src/slider.vue'
import type { SliderProps } from '../src/slider'
import type { VueWrapper } from '@vue/test-utils'

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

type DragState = { x: number; y: number; ctrlKey: boolean }

class MouseDragger {
  state: DragState = { x: 0, y: 0, ctrlKey: false }

  async down(triggerComponent: VueWrapper<any>, state: Partial<DragState>) {
    Object.assign(this.state, { ctrlKey: false }, state)
    triggerComponent.trigger('mousedown', {
      clientX: this.state.x,
      clientY: this.state.y,
      ctrlKey: this.state.ctrlKey,
    })
    await nextTick()
  }

  async dragTo(state: Partial<DragState>) {
    Object.assign(this.state, { ctrlKey: false }, state)
    window.dispatchEvent(
      new MouseEvent('mousemove', {
        screenX: this.state.x,
        screenY: this.state.y,
        clientX: this.state.x,
        clientY: this.state.y,
        ctrlKey: this.state.ctrlKey,
      })
    )
    await nextTick()
  }

  async done() {
    window.dispatchEvent(
      new MouseEvent('mouseup', {
        screenX: this.state.x,
        screenY: this.state.y,
        clientX: this.state.x,
        clientY: this.state.y,
        ctrlKey: this.state.ctrlKey,
      })
    )
    await nextTick()
  }
}

async function mouseDrag(
  triggerComponent: VueWrapper<any>,
  from: Partial<DragState>,
  to: Partial<DragState>
) {
  const dragger = new MouseDragger()
  await dragger.down(triggerComponent, from)
  await dragger.dragTo(to)
  await dragger.done()
}

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
    const value = ref(60)
    mount(() => <Slider v-model={value.value} min={50} />)

    await nextTick()
    value.value = 40
    await nextTick()
    expect(value.value).toBe(50)
    value.value = 120
    await nextTick()
    expect(value.value).toBe(100)
  })

  it('sizes', () => {
    const value = ref(0)
    const wrapper = mount(() => <Slider v-model={value.value} size="small" />)

    expect(wrapper.find('.el-slider--small').exists()).toBe(true)
  })

  it('show tooltip', () => {
    const value = ref(0)
    const wrapper = mount(() => <Slider v-model={value.value} />)

    const slider = wrapper.findComponent({ name: 'ElSliderButton' })
    slider.vm.handleMouseEnter()
    expect(slider.vm.tooltipVisible).toBeTruthy()
    slider.vm.handleMouseLeave()
    expect(slider.vm.tooltipVisible).toBeFalsy()
  })

  it('hide tooltip', () => {
    const value = ref(0)
    const wrapper = mount({
      setup() {
        return () => (
          <Slider ref="slider" v-model={value.value} show-tooltip={false} />
        )
      },
    })

    const tooltip = wrapper.findComponent({ name: 'ElTooltip' }).vm
    expect(tooltip.disabled).toBe(true)
  })

  it('format tooltip', async () => {
    const value = ref(0)
    const formatTooltip = (val: number) => `$${val}`
    const wrapper = mount(() => (
      <Slider v-model={value.value} format-tooltip={formatTooltip} />
    ))

    const slider = wrapper.findComponent({ name: 'ElSliderButton' })
    await nextTick()
    expect(slider.vm.formatValue).toBe('$0')
  })

  it('placement', async () => {
    const TOOLTIP_CLASS = 'custom_tooltip'
    const PLACEMENT = 'left'

    mount(() => <Slider tooltip-class={TOOLTIP_CLASS} placement={PLACEMENT} />)

    await nextTick()
    await nextTick() // here

    expect(
      (document.querySelector(`.${TOOLTIP_CLASS}`) as HTMLElement).dataset
        .popperPlacement
    ).toBe(PLACEMENT)
  })

  describe('drag', () => {
    it('horizontal', async () => {
      vi.useRealTimers()
      const value = ref(0)
      const wrapper = mount(
        () => (
          <div style="width: 200px;">
            <Slider v-model={value.value} vertical={false} />
          </div>
        ),
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

      await mouseDrag(slider, { x: 0 }, { x: 100 })
      expect(value.value === 50).toBeTruthy()
    })

    it('vertical', async () => {
      vi.useRealTimers()
      const value = ref(0)
      const wrapper = mount(
        () => (
          <div style="width: 200px;">
            <Slider v-model={value.value} vertical={true} />
          </div>
        ),
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

      await mouseDrag(slider, { y: 0 }, { y: -100 })
      expect(value.value).toBe(50)
    })
  })

  it('marks percentage snapping (horizontal + vertical)', async () => {
    vi.useRealTimers()
    const value = ref(0)
    const marks = ref({
      40: '40',
      70: '70',
    })
    const vertical = ref(false)
    const markSnapPercentage = ref(0)
    const wrapper = mount(
      () => (
        <div style="width: 200px;">
          <Slider
            v-model={value.value}
            vertical={vertical.value}
            marks={marks.value}
            mark-snap-percentage={markSnapPercentage.value}
          />
        </div>
      ),
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
    vi.spyOn(
      wrapper.find('.el-slider__runway').element,
      'clientHeight',
      'get'
    ).mockImplementation(() => 200)

    const directions: Array<[string, number, boolean]> = [
      ['x', 2, false],
      ['y', -2, true],
    ]
    for (const [axis, mul, vert] of directions) {
      vertical.value = vert
      await nextTick()

      // no snap
      const dragger = new MouseDragger()
      await dragger.down(slider, { [axis]: 0 })
      expect(value.value).toBe(0)
      await dragger.dragTo({ [axis]: mul * 39 })
      expect(value.value).toBe(39)

      // snap to 5%
      markSnapPercentage.value = 5
      await nextTick()

      await dragger.dragTo({ [axis]: mul * 36 })
      expect(value.value).toBe(40)
      await dragger.dragTo({ [axis]: mul * 35 })
      expect(value.value).toBe(40)
      await dragger.dragTo({ [axis]: mul * 34 })
      expect(value.value).toBe(34)
      await dragger.dragTo({ [axis]: mul * 44 })
      expect(value.value).toBe(40)

      // ctrlKey disables snap
      await dragger.dragTo({ [axis]: mul * 41, ctrlKey: true })
      expect(value.value).toBe(41)
      await dragger.dragTo({ [axis]: mul * 37, ctrlKey: true })
      expect(value.value).toBe(37)

      // snap to 2%
      markSnapPercentage.value = 2
      await nextTick()

      await dragger.dragTo({ [axis]: mul * 64 })
      expect(value.value).toBe(64)
      await dragger.dragTo({ [axis]: mul * 65 })
      expect(value.value).toBe(65)
      await dragger.dragTo({ [axis]: mul * 68 })
      expect(value.value).toBe(70)
      await dragger.dragTo({ [axis]: mul * 69 })
      expect(value.value).toBe(70)
      await dragger.dragTo({ [axis]: mul * 72 })
      expect(value.value).toBe(70)
      await dragger.dragTo({ [axis]: mul * 73 })
      expect(value.value).toBe(73)
      await dragger.dragTo({ [axis]: mul * 75 })
      expect(value.value).toBe(75)
      await dragger.dragTo({ [axis]: mul * 71 })
      expect(value.value).toBe(70)

      // snap to negative = no snap
      markSnapPercentage.value = -99
      await nextTick()

      await dragger.dragTo({ [axis]: mul * 39 })
      expect(value.value).toBe(39)

      // reset to zero
      await dragger.dragTo({ [axis]: mul * 0 })
      expect(value.value).toBe(0)
      await dragger.done()
      expect(value.value).toBe(0)
    }
  })

  describe('accessibility', () => {
    it('left/right arrows', async () => {
      const value = ref(0)
      const wrapper = mount(() => <Slider v-model={value.value} />)

      const slider = wrapper.findComponent({ name: 'ElSliderButton' })

      slider.vm.onKeyDown(
        new KeyboardEvent('keydown', { key: EVENT_CODE.right })
      )
      await nextTick()
      expect(value.value).toBe(1)

      slider.vm.onKeyDown(
        new KeyboardEvent('keydown', { key: EVENT_CODE.left })
      )
      await nextTick()
      expect(value.value).toBe(0)
    })

    it('up/down arrows', async () => {
      const value = ref(0.1)
      const wrapper = mount(() => <Slider v-model={value.value} />)

      const slider = wrapper.findComponent({ name: 'ElSliderButton' })

      slider.vm.onKeyDown(new KeyboardEvent('keydown', { key: EVENT_CODE.up }))
      await nextTick()
      expect(value.value).toBe(1)

      slider.vm.onKeyDown(
        new KeyboardEvent('keydown', { key: EVENT_CODE.down })
      )
      await nextTick()
      expect(value.value).toBe(0)
    })

    it('page up/down keys', async () => {
      const value = ref(-1)
      const wrapper = mount(() => (
        <Slider v-model={value.value} min={-5} max={10} />
      ))

      const slider = wrapper.findComponent({ name: 'ElSliderButton' })
      slider.vm.onKeyDown(
        new KeyboardEvent('keydown', { key: EVENT_CODE.pageUp })
      )
      await nextTick()
      expect(value.value).toBe(3)

      slider.vm.onKeyDown(
        new KeyboardEvent('keydown', { key: EVENT_CODE.pageDown })
      )
      await nextTick()
      expect(value.value).toBe(-1)
    })

    it('home/end keys', async () => {
      const value = ref(0)
      const wrapper = mount(() => (
        <Slider v-model={value.value} min={-5} max={10} />
      ))

      const slider = wrapper.findComponent({ name: 'ElSliderButton' })
      slider.vm.onKeyDown(
        new KeyboardEvent('keydown', { key: EVENT_CODE.home })
      )
      await nextTick()
      expect(value.value).toBe(-5)

      slider.vm.onKeyDown(new KeyboardEvent('keydown', { key: EVENT_CODE.end }))
      await nextTick()
      expect(value.value).toBe(10)
    })
  })

  it('step', async () => {
    vi.useRealTimers()
    const value = ref(0)
    const wrapper = mount(
      () => (
        <div style="width: 200px;">
          <Slider v-model={value.value} min={0} max={1} step={0.1} />
        </div>
      ),
      {
        attachTo: document.body,
      }
    )

    const mockClientWidth = vi
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    const slider = wrapper.findComponent({ name: 'ElSliderButton' })
    await nextTick()

    await mouseDrag(slider, { x: 0 }, { x: 100 })
    expect(value.value === 0.5).toBeTruthy()
    mockClientWidth.mockRestore()
  })

  it('click', async () => {
    vi.useRealTimers()
    const value = ref(0)
    const wrapper = mount(() => <Slider v-model={value.value} />)

    const mockClientWidth = vi
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    const slider = wrapper.findComponent({ name: 'ElSlider' })
    slider.vm.onSliderClick(new MouseEvent('mousedown', { clientX: 100 }))
    await nextTick()
    expect(value.value > 0).toBeTruthy()
    mockClientWidth.mockRestore()
  })

  it('change event', async () => {
    vi.useRealTimers()
    const value = ref(0)
    const data = ref<SliderProps['modelValue']>(0)
    const onChange = (val: SliderProps['modelValue']) => (data.value = val)
    const wrapper = mount(() => (
      <div style="width: 200px">
        <Slider v-model={value.value} onChange={onChange} />
      </div>
    ))

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
    expect(data.value).toBe(0)
    slider.vm.onSliderClick(new MouseEvent('mousedown', { clientX: 100 }))
    await nextTick()
    expect(data.value === 50).toBeTruthy()
    mockRectLeft.mockRestore()
    mockClientWidth.mockRestore()
  })

  it('input event', async () => {
    vi.useRealTimers()
    const value = ref(0)
    const data = ref<SliderProps['modelValue']>(0)
    const onInput = (val: SliderProps['modelValue']) => (data.value = val)
    const wrapper = mount(() => (
      <div style="width: 200px">
        <Slider v-model={value.value} onInput={onInput} />
      </div>
    ))

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
    expect(data.value).toBe(0)
    slider.vm.onSliderClick(new MouseEvent('mousedown', { clientX: 100 }))
    await nextTick()
    expect(data.value === 50).toBeTruthy()
    mockRectLeft.mockRestore()
    mockClientWidth.mockRestore()
  })

  it('disabled', async () => {
    vi.useRealTimers()
    const value = ref(0)
    const wrapper = mount(() => <Slider v-model={value.value} disabled />)

    const mockClientWidth = vi
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    const slider = wrapper.findComponent({ name: 'ElSliderButton' })

    await mouseDrag(slider, { x: 0 }, { x: 50 })
    expect(value.value).toBe(0)
    mockClientWidth.mockRestore()
  })

  it('show input', async () => {
    const value = ref(0)
    const wrapper = mount(() => <Slider v-model={value.value} show-input />)

    const increaseButton = wrapper.find('.el-input-number__increase')
    await increaseButton.trigger('mousedown')
    vi.advanceTimersByTime(200)
    expect(value.value > 0).toBeTruthy()
  })

  it('show stops', () => {
    const wrapper = mount(() => <Slider step={10} show-stops />)

    const stops = wrapper.findAll('.el-slider__stop')
    expect(stops.length).toBe(9)
  })

  it('vertical mode', async () => {
    vi.useRealTimers()
    const value = ref(0)
    const wrapper = mount(
      () => <Slider height="200px" v-model={value.value} vertical />,
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
    expect(value.value > 0).toBeTruthy()
    mockRectBottom.mockRestore()
    mockClientHeight.mockRestore()
  })

  it('rerender with min and show-input', async () => {
    const value = ref(30)
    const show = ref(false)
    mount(
      {
        setup() {
          onMounted(() => (show.value = true))
          return () =>
            show.value && <Slider v-model={value.value} min={10} show-input />
        },
      },
      {
        attachTo: document.body,
      }
    )

    await nextTick()
    expect(value.value).toEqual(30)
  })

  describe('range', () => {
    it('basic ranged slider', () => {
      const value = ref([10, 20])
      const wrapper = mount(() => <Slider v-model={value.value} range />)

      const sliders = wrapper.findAllComponents({ name: 'ElSliderButton' })
      expect(sliders.length).toBe(2)
    })

    it('should not exceed min and max', async () => {
      const value = ref([50, 60])
      mount(() => <Slider v-model={value.value} min={50} range />)

      await nextTick()

      value.value = [40, 60]
      await nextTick()
      expect(value.value).toStrictEqual([50, 60])

      value.value = [50, 120]
      await nextTick()
      expect(value.value).toStrictEqual([50, 100])
    })

    it('click', async () => {
      vi.useRealTimers()
      const value = ref([0, 100])
      const wrapper = mount(
        () => (
          <div style="width: 200px;">
            <Slider v-model={value.value} range />
          </div>
        ),
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
      expect(value.value[0] === 0).toBeTruthy()
      expect(value.value[1] === 50).toBeTruthy()
      mockRectLeft.mockRestore()
      mockClientWidth.mockRestore()
    })

    it('responsive to dynamic min and max', async () => {
      const min = ref(0)
      const max = ref(100)
      const value = ref([50, 80])
      mount(() => (
        <Slider v-model={value.value} min={min.value} max={max.value} range />
      ))

      await nextTick()

      min.value = 60
      await nextTick()
      expect(value.value).toStrictEqual([60, 80])

      min.value = 30
      max.value = 40
      await nextTick()
      expect(value.value).toStrictEqual([40, 40])
    })

    it('show stops', async () => {
      const value = ref([30, 60])
      const wrapper = mount(() => (
        <Slider v-model={value.value} step={10} range show-stops />
      ))

      await nextTick()
      const stops = wrapper.findAll('.el-slider__stop')
      expect(stops.length).toBe(5)
    })

    it('marks', async () => {
      const value = ref([30, 60])
      const marksValue = ref({
        0: '0°C',
        8: '8°C',
        37: '37°C',
        50: {
          style: {
            color: '#f50',
          },
          label: h('strong', '50°C'),
        },
      })
      const wrapper = mount(() => (
        <Slider
          v-model={value.value}
          min={20}
          step={10}
          marks={marksValue.value}
          range
          show-stops
        />
      ))

      await nextTick()
      const stops = wrapper.findAll('.el-slider__marks-stop.el-slider__stop')
      const marks = wrapper.findAll('.el-slider__marks .el-slider__marks-text')
      expect(marks.length).toBe(2)
      expect(stops.length).toBe(2)
      expect(getComputedStyle(marks[marks.length - 1].element).color).toBe(
        'rgb(255, 85, 0)'
      )
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
