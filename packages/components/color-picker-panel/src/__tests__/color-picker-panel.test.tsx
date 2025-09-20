import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterAll, describe, expect, it, vi } from 'vitest'
import { EVENT_CODE } from '@element-plus/constants'
import ColorPickerPanel from '../color-picker-panel.vue'
import HueSlider from '../components/hue-slider.vue'
import AlphaSlider from '../components/alpha-slider.vue'

import type { ComponentPublicInstance } from 'vue'

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

type ColorPickerVM = ComponentPublicInstance<{
  handleClick: (opt: {
    target: HTMLElement | null
    type: string
    clientX: number
    clientY: number
  }) => void
  thumbTop: number
  handleDrag: (opt: { type: string; clientX: number; clientY: number }) => void
}>

describe('Color-picker-panel', () => {
  it('Mount Color-picker-panel', () => {
    const wrapper = mount(ColorPickerPanel)
    expect(wrapper.html()).toContain('el-color-picker')
    wrapper.unmount()
  })

  describe('disabled', () => {
    const predefine = ['rgba(19, 206, 102, 0.18)']
    const updateModelValue = vi.fn()
    const _wrapper = mount(() => (
      <ColorPickerPanel
        disabled
        modelValue=""
        predefine={predefine}
        showAlpha
        onUpdate:modelValue={updateModelValue}
      />
    ))
    const wrapper = _wrapper.findComponent(ColorPickerPanel)

    afterAll(() => {
      _wrapper.unmount()
    })

    it('hue slider disabled', async () => {
      const hueSlideWrapper = wrapper.findComponent(HueSlider)
      const hueSlideDom = hueSlideWrapper.element as HTMLElement
      const thumbDom = hueSlideWrapper.find<HTMLElement>(
        '.el-color-hue-slider__thumb'
      ).element
      const mockHueSlideRect = vi
        .spyOn(hueSlideDom, 'getBoundingClientRect')
        .mockReturnValue({
          height: 176,
          width: 12,
          x: 0,
          y: 0,
          top: 0,
        } as DOMRect)
      const mockHueSlideOffsetHeight = vi
        .spyOn(hueSlideDom, 'offsetHeight', 'get')
        .mockReturnValue(200)
      const mockThumbDom = vi
        .spyOn(thumbDom, 'offsetHeight', 'get')
        .mockReturnValue(4)
      ;(hueSlideWrapper.vm as any).handleClick({
        target: null,
        type: 'mouseup',
        clientX: 0,
        clientY: 100,
      })
      await nextTick()
      const hue = wrapper.vm.color.get('hue')
      expect(hue === 0).toBe(true)
      expect(updateModelValue).not.toHaveBeenCalled()
      mockHueSlideOffsetHeight.mockRestore()
      mockHueSlideRect.mockRestore()
      mockThumbDom.mockRestore()
    })
    it('alpha slider disabled', async () => {
      const alphaWrapper = wrapper.findComponent(AlphaSlider)
      const alphaDom = alphaWrapper.element as HTMLElement
      const mockAlphaDom = vi
        .spyOn(alphaDom, 'getBoundingClientRect')
        .mockReturnValue({
          height: 12,
          width: 280,
          x: 0,
          y: 0,
          left: 0,
        } as DOMRect)
      const thumbDom = alphaWrapper.find<HTMLElement>(
        '.el-color-alpha-slider__thumb'
      ).element
      const mockThumbDom = vi
        .spyOn(thumbDom, 'offsetWidth', 'get')
        .mockReturnValue(4)
      ;(alphaWrapper.vm as any).handleClick({
        target: null,
        type: 'mouseup',
        clientX: 50,
        clientY: 0,
      })
      await nextTick()
      expect(wrapper.vm.color.get('alpha') === 100).toBe(true)
      expect(updateModelValue).not.toHaveBeenCalled()
      mockAlphaDom.mockRestore()
      mockThumbDom.mockRestore()
    })
    it('predefine color disabled', async () => {
      await wrapper.find('.el-color-predefine__color-selector').trigger('click')
      expect(updateModelValue).not.toHaveBeenCalled()
    })
    it('sv panel disabled', async () => {
      const svPanelWrapper = wrapper.findComponent({ ref: 'sv' })
      ;(svPanelWrapper.vm as ColorPickerVM).handleDrag({
        type: 'mousemove',
        clientX: 0,
        clientY: 0,
      })
      await nextTick()
      expect(updateModelValue).not.toHaveBeenCalled()
    })
  })

  it('should show alpha slider when show-alpha=true', async () => {
    const color = ref('#20a0ff')
    const wrapper = mount(() => (
      <ColorPickerPanel v-model={color.value} show-alpha={true} />
    ))

    const alphaSlider = wrapper.find('.el-color-alpha-slider')
    expect(alphaSlider.exists()).toBe(true)
    wrapper.unmount()
  })
  it('should show correct rgb value', async () => {
    const color = ref('#20a0ff')
    const wrapper = mount(() => <ColorPickerPanel v-model={color.value} />)

    await nextTick()
    const input = wrapper.find<HTMLInputElement>('input')
    expect(input.element.value.trim()).toEqual('#20a0ff')
    wrapper.unmount()
  })

  it('should show correct hex value contains alpha', async () => {
    const color = ref('#20a0ffee')
    const wrapper = mount(() => (
      <ColorPickerPanel v-model={color.value} color-format="hex" show-alpha />
    ))
    await nextTick()

    const input = wrapper.find<HTMLInputElement>('input')
    expect(input.element.value.trim()).toEqual('#20a0ffee')
    wrapper.unmount()
  })
  it('control alpha changes through keyboard', async () => {
    const color = ref('rgba(19, 206, 102, 0.18)')
    const wrapper = mount(() => (
      <ColorPickerPanel v-model={color.value} show-alpha />
    ))

    const alphaSlider = wrapper.findComponent('.el-color-alpha-slider')
    await alphaSlider.find('.el-color-alpha-slider__thumb').trigger('keydown', {
      key: EVENT_CODE.down,
      code: EVENT_CODE.down,
    })
    await alphaSlider.find('.el-color-alpha-slider__thumb').trigger('keydown', {
      key: EVENT_CODE.left,
      code: EVENT_CODE.left,
    })
    const input = wrapper.find<HTMLInputElement>('input').element
    expect(input!.value).toEqual('rgba(19, 206, 102, 0.16)')

    await alphaSlider.find('.el-color-alpha-slider__thumb').trigger('keydown', {
      key: EVENT_CODE.up,
      code: EVENT_CODE.up,
    })
    expect(input!.value).toEqual('rgba(19, 206, 102, 0.17)')
    wrapper.unmount()
  })
  it('should init the right color when open', async () => {
    const color = ref('#0f0')
    const _wrapper = mount(() => <ColorPickerPanel v-model={color.value} />)
    const wrapper = _wrapper.findComponent(ColorPickerPanel)

    const hueSlideWrapper = wrapper.findComponent(HueSlider)
    const hueSlideDom = hueSlideWrapper.element as HTMLElement
    const thumbDom = hueSlideWrapper.find<HTMLElement>(
      '.el-color-hue-slider__thumb'
    ).element
    const mockHueSlideHeight = vi
      .spyOn(hueSlideDom, 'offsetHeight', 'get')
      .mockImplementation(() => 200)
    const mockThumbDom = vi
      .spyOn(thumbDom, 'offsetHeight', 'get')
      .mockImplementation(() => 4)
    await nextTick()
    expect(hueSlideWrapper.vm.thumbTop > 10).toBeTruthy()
    mockHueSlideHeight.mockRestore()
    mockThumbDom.mockRestore()
    _wrapper.unmount()
  })
  it('should change hue when clicking the hue bar', async () => {
    const color = ref('#f00')
    const _wrapper = mount(() => <ColorPickerPanel v-model={color.value} />)
    const wrapper = _wrapper.findComponent(ColorPickerPanel)

    const hueSlideWrapper = wrapper.findComponent(HueSlider)
    const hueSlideDom = hueSlideWrapper.element
    const thumbDom = hueSlideWrapper.find<HTMLElement>(
      '.el-color-hue-slider__thumb'
    ).element
    const mockHueBarHeight = vi
      .spyOn(hueSlideDom, 'getBoundingClientRect')
      .mockReturnValue({
        height: 176,
        width: 12,
        x: 0,
        y: 0,
        top: 0,
      } as DOMRect)
    const mockThumbDom = vi
      .spyOn(thumbDom, 'offsetHeight', 'get')
      .mockReturnValue(4)
    ;(hueSlideWrapper.vm as any).handleClick({
      target: null,
      type: 'mouseup',
      clientX: 0,
      clientY: 100,
    })
    const hue = wrapper.vm.color.get('hue')
    expect(hue > 0).toBeTruthy()
    mockHueBarHeight.mockRestore()
    mockThumbDom.mockRestore()
    _wrapper.unmount()
  })
  it('should change hue when saturation is zero', async () => {
    const color = ref('20a0ff')
    const _wrapper = mount(() => <ColorPickerPanel v-model={color.value} />)
    const wrapper = _wrapper.findComponent(ColorPickerPanel)

    const hueSlideWrapper = wrapper.findComponent(HueSlider)
    const hueSlideDom = hueSlideWrapper.element as HTMLElement
    const thumbDom = hueSlideWrapper.find<HTMLElement>(
      '.el-color-hue-slider__thumb'
    ).element
    const mockHueSlideRect = vi
      .spyOn(hueSlideDom, 'getBoundingClientRect')
      .mockReturnValue({
        height: 176,
        width: 12,
        x: 0,
        y: 0,
        top: 0,
      } as DOMRect)
    const mockHueSlideOffsetHeight = vi
      .spyOn(hueSlideDom, 'offsetHeight', 'get')
      .mockReturnValue(200)
    const mockThumbDom = vi
      .spyOn(thumbDom, 'offsetHeight', 'get')
      .mockReturnValue(4)
    ;(hueSlideWrapper.vm as any).handleClick({
      target: null,
      type: 'mouseup',
      clientX: 0,
      clientY: 100,
    })
    await nextTick()

    expect(hueSlideWrapper.vm.thumbTop > 0).toBe(true)
    mockHueSlideRect.mockRestore()
    mockThumbDom.mockRestore()
    mockHueSlideOffsetHeight.mockRestore()
    _wrapper.unmount()
  })
  it('should change alpha when clicking the alpha bar', async () => {
    const color = ref('#f00')
    const _wrapper = mount(() => (
      <ColorPickerPanel v-model={color.value} show-alpha />
    ))
    const wrapper = _wrapper.findComponent(ColorPickerPanel)

    const alphaWrapper = wrapper.findComponent(AlphaSlider)
    const alphaDom = alphaWrapper.element as HTMLElement
    const mockAlphaDom = vi
      .spyOn(alphaDom, 'getBoundingClientRect')
      .mockReturnValue({
        height: 12,
        width: 280,
        x: 0,
        y: 0,
        left: 0,
      } as DOMRect)
    const thumbDom = alphaWrapper.find<HTMLElement>(
      '.el-color-alpha-slider__thumb'
    ).element
    const mockThumbDom = vi
      .spyOn(thumbDom, 'offsetWidth', 'get')
      .mockReturnValue(4)
    ;(alphaWrapper.vm as any).handleClick({
      target: null,
      type: 'mouseup',
      clientX: 50,
      clientY: 0,
    })
    await nextTick()
    expect(wrapper.vm.color.get('alpha') < 100).toBeTruthy()
    mockAlphaDom.mockRestore()
    mockThumbDom.mockRestore()
    _wrapper.unmount()
  })

  it('should change saturation and value when clicking the sv-panel', async () => {
    const color = ref('hsv(0, 50%, 50%)')
    const _wrapper = mount(() => (
      <ColorPickerPanel v-model={color.value} show-alpha color-format="hsv" />
    ))
    const wrapper = _wrapper.findComponent(ColorPickerPanel)

    const svPanelWrapper = wrapper.findComponent({ ref: 'sv' })
    ;(svPanelWrapper.vm as ColorPickerVM).handleDrag({
      type: 'mousemove',
      clientX: 0,
      clientY: 0,
    })
    wrapper.vm.$nextTick(() => {
      expect((color.value as any)._saturation !== 50).toBeTruthy()
      expect((color.value as any)._value !== 50).toBeTruthy()
    })
  })

  it('should change color to the selected color', async () => {
    const color = ref('hsva(180, 65, 20, 0.5)')
    const colors = ref([
      'rgba(19, 206, 102, 0.18)',
      'rgb(25, 159, 147)',
      'hsv(250, 54, 98)',
      'hsva(180, 65, 20, 0.5)',
      'hsl(170, 32%, 87%)',
      'hsla(45, 62%, 47%, 0.13)',
      '#7486de',
      '#45aa9477',
      '#892345',
    ])
    const _wrapper = mount(() => (
      <ColorPickerPanel
        v-model={color.value}
        show-alpha
        predefine={colors.value}
      />
    ))
    const wrapper = _wrapper.findComponent(ColorPickerPanel)

    const predefineWrapper = wrapper.findComponent({
      ref: 'predefine',
    })
    const predefineDom = predefineWrapper.element as HTMLElement
    expect(
      predefineDom.querySelectorAll('.el-color-predefine__color-selector')
        .length === 9
    ).toBeTruthy()
    predefineDom
      .querySelector<HTMLElement>(
        '.el-color-predefine__color-selector:nth-child(4)'
      )
      ?.click()
    await nextTick()
    expect(wrapper.vm.color.get('hue')).toEqual(180)
    expect(wrapper.vm.color.get('saturation')).toEqual(65)
    expect(wrapper.vm.color.get('value')).toEqual(20)
    expect(wrapper.vm.color.get('alpha')).toEqual(50)

    predefineDom
      .querySelector<HTMLElement>(
        '.el-color-predefine__color-selector:nth-child(3)'
      )
      ?.click()
    await nextTick()
    expect(wrapper.vm.color.get('hue')).toEqual(250)
    expect(wrapper.vm.color.get('saturation')).toEqual(54)
    expect(wrapper.vm.color.get('value')).toEqual(98)
    expect(wrapper.vm.color.get('alpha')).toEqual(100)
  })

  it('should change selected state of predefined color', async () => {
    const color = ref('hsva(180, 65, 20, 0.5)')
    const colors = ref([
      'rgba(19, 206, 102, 0.18)',
      'rgb(25, 159, 147)',
      'hsv(250, 54, 98)',
      'hsva(180, 65, 20, 0.5)',
      'hsl(170, 32%, 87%)',
      'hsla(45, 62%, 47%, 0.13)',
      '#7486de',
      '#45aa9477',
      '#892345',
    ])
    const wrapper = mount(() => (
      <ColorPickerPanel
        v-model={color.value}
        show-alpha
        predefine={colors.value}
      />
    ))

    const colorPickerWrapper = wrapper.findComponent(ColorPickerPanel)
    const predefineWrapper = colorPickerWrapper.findComponent({
      ref: 'predefine',
    })
    const predefineDom = predefineWrapper.element as HTMLElement
    predefineDom
      .querySelector<HTMLElement>(
        '.el-color-predefine__color-selector:nth-child(4)'
      )
      ?.click()
    await nextTick()
    expect(
      predefineWrapper
        .find('.el-color-predefine__color-selector:nth-child(4)')
        .classes()
    ).toContain('selected')
    const hueSlideWrapper = colorPickerWrapper.findComponent({ ref: 'hue' })
    const hueSlideDom = hueSlideWrapper.element
    const thumbDom = hueSlideWrapper.find<HTMLElement>(
      '.el-color-hue-slider__thumb'
    ).element
    const mockHueSlideRect = vi
      .spyOn(hueSlideDom, 'getBoundingClientRect')
      .mockReturnValue({
        height: 176,
        width: 12,
        x: 0,
        y: 0,
        top: 0,
      } as DOMRect)
    const mockHueSlideOffsetHeight = vi
      .spyOn(hueSlideDom as HTMLElement, 'offsetHeight', 'get')
      .mockReturnValue(200)
    const mockThumbDom = vi
      .spyOn(thumbDom, 'offsetHeight', 'get')
      .mockReturnValue(4)
    ;(hueSlideWrapper.vm as ColorPickerVM).handleClick({
      target: null,
      type: 'mouseup',
      clientX: 0,
      clientY: 1000,
    })
    await nextTick()
    expect(
      predefineWrapper
        .find('.el-color-predefine__color-selector:nth-child(4)')
        .classes()
    ).not.toContain('selected')
    mockHueSlideRect.mockRestore()
    mockThumbDom.mockRestore()
    mockHueSlideOffsetHeight.mockRestore()
  })

  it('should update the colorFormat and selected color when the colorFormat prop changes', async () => {
    const color = ref('#00ff00')
    const colorFormat = ref('hex')
    const wrapper = mount(() => (
      <ColorPickerPanel
        v-model={color.value}
        color-format={colorFormat.value}
      />
    ))

    colorFormat.value = 'rgb'
    await nextTick()
    const colorPickerWrapper = wrapper.findComponent(ColorPickerPanel)
    const customInput = colorPickerWrapper.findComponent({
      ref: 'inputRef',
    })
    expect(colorPickerWrapper.vm.color.format).toBe('rgb')
    expect(color.value).toBe('rgb(0, 255, 0)')
    expect(
      customInput.find<HTMLInputElement>('.el-input__inner').element.value
    ).toBe('rgb(0, 255, 0)')
    wrapper.unmount()
  })
  
  it('should update the selected color when the showAlpha prop changes', async () => {
    const color = ref('#00ff00aa')
    const showAlpha = ref(true)
    const wrapper = mount(() => (
      <ColorPickerPanel
        v-model={color.value}
        color-format="hex"
        showAlpha={showAlpha.value}
      />
    ))

    showAlpha.value = false
    await nextTick()
    const colorPickerWrapper = wrapper.findComponent(ColorPickerPanel)
    const customInput = colorPickerWrapper.findComponent({
      ref: 'inputRef',
    })
    expect(colorPickerWrapper.vm.color.enableAlpha).toBe(false)
    expect(color.value).toBe('#00ff00')
    expect(
      customInput.find<HTMLInputElement>('.el-input__inner').element.value
    ).toBe('#00ff00')
    wrapper.unmount()
  })

  it('should clear the color when color is empty', async () => {
    const color = ref<string | undefined>('#20a0ff')
    const wrapper = mount(() => <ColorPickerPanel v-model={color.value} />)

    await nextTick()
    const input = wrapper.find<HTMLInputElement>('input')
    expect(input.element.value.trim()).toEqual('#20a0ff')

    color.value = ''
    await nextTick()
    expect(input.element.value).toBe('')

    color.value = '#00ff00'
    await nextTick()
    expect(input.element.value.trim()).toEqual('#00ff00')

    color.value = undefined
    await nextTick()
    expect(input.element.value).toBe('')
    wrapper.unmount()
  })
  
  it('control hue changes through keyboard', async () => {
    const color = ref('#409eff')
    const wrapper = mount(() => <ColorPickerPanel v-model={color.value} />)

    const alphaSlider = wrapper.findComponent('.el-color-hue-slider')
    await alphaSlider.find('.el-color-hue-slider__thumb').trigger('keydown', {
      key: EVENT_CODE.down,
      code: EVENT_CODE.down,
    })
    await alphaSlider.find('.el-color-hue-slider__thumb').trigger('keydown', {
      key: EVENT_CODE.left,
      code: EVENT_CODE.left,
    })
    const input = wrapper.find<HTMLInputElement>('input').element
    expect(input!.value).toEqual('#4099ff')

    await alphaSlider.find('.el-color-hue-slider__thumb').trigger('keydown', {
      key: EVENT_CODE.up,
      code: EVENT_CODE.up,
    })
    expect(input!.value).toEqual('#409cff')
    wrapper.unmount()
  })
})
