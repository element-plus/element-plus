import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import { ElFormItem } from '@element-plus/components/form'
import { EVENT_CODE } from '@element-plus/constants'
import ColorPicker from '../src/color-picker.vue'
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

describe('Color-picker', () => {
  it('Mount Color-picker', () => {
    const wrapper = mount(ColorPicker)
    expect(wrapper.html()).toContain('el-color-picker')
    wrapper.unmount()
  })
  it('should show alpha slider when show-alpha=true', async () => {
    const color = ref('#20A0FF')
    const wrapper = mount(() => (
      <ColorPicker v-model={color.value} show-alpha={true} />
    ))

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    const alphaSlider = document.querySelector('.el-color-alpha-slider')
    expect(alphaSlider).toBeTruthy()
    wrapper.unmount()
  })
  it('should show correct rgb value', async () => {
    const color = ref('#20A0FF')
    const wrapper = mount(() => <ColorPicker v-model={color.value} />)

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    await nextTick()
    const input = document.querySelector<HTMLInputElement>(
      '.el-color-dropdown__value input'
    )
    expect(input!.value.trim().toUpperCase()).toEqual('#20A0FF')
    wrapper.unmount()
  })
  it('should show correct hex value contains alpha', async () => {
    const color = ref('#20A0FFEE')
    const wrapper = mount(() => (
      <ColorPicker v-model={color.value} color-format="hex" show-alpha />
    ))

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    await nextTick()
    const input = document.querySelector<HTMLInputElement>(
      '.el-color-dropdown__value input'
    )
    expect(input!.value.trim().toUpperCase()).toEqual('#20A0FFEE')
    wrapper.unmount()
  })
  it('control alpha changes through keyboard', async () => {
    const color = ref('rgba(19, 206, 102, 0.18)')
    const wrapper = mount(() => (
      <ColorPicker v-model={color.value} show-alpha />
    ))

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    const alphaSlider = wrapper.findComponent('.el-color-alpha-slider')
    await alphaSlider.find('.el-color-alpha-slider__thumb').trigger('keydown', {
      key: EVENT_CODE.down,
      code: EVENT_CODE.down,
    })
    await alphaSlider.find('.el-color-alpha-slider__thumb').trigger('keydown', {
      key: EVENT_CODE.left,
      code: EVENT_CODE.left,
    })
    const input = document.querySelector<HTMLInputElement>(
      '.el-color-dropdown__value input'
    )
    expect(input!.value).toEqual('rgba(19, 206, 102, 0.16)')

    await alphaSlider.find('.el-color-alpha-slider__thumb').trigger('keydown', {
      key: EVENT_CODE.up,
      code: EVENT_CODE.up,
    })
    expect(input!.value).toEqual('rgba(19, 206, 102, 0.17)')
    wrapper.unmount()
  })
  it('should pick a color when confirm button click', async () => {
    const color = ref(null)
    const wrapper = mount(() => <ColorPicker v-model={color.value} />)

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    document.querySelector<HTMLElement>('.el-color-dropdown__btn')?.click()
    await nextTick()
    expect(color.value).toEqual('#FF0000')
    wrapper.unmount()
  })
  it('should pick a color contains alpha when confirm button click', async () => {
    const color = ref(null)
    const wrapper = mount(() => (
      <ColorPicker v-model={color.value} color-format="hex" show-alpha />
    ))

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    document.querySelector<HTMLElement>('.el-color-dropdown__btn')?.click()
    await nextTick()
    expect(color.value).toEqual('#FF0000FF')
    wrapper.unmount()
  })
  it('should init the right color when open', async () => {
    const color = ref('#0F0')
    const wrapper = mount(() => <ColorPicker v-model={color.value} />)

    const colorPickerWrapper = wrapper.findComponent(ColorPicker)
    const hueSlideWrapper = colorPickerWrapper.findComponent({ ref: 'hue' })
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
    await wrapper.find('.el-color-picker__trigger').trigger('click')
    await nextTick()
    expect(
      (hueSlideWrapper.vm as ComponentPublicInstance<{ thumbTop: number }>)
        .thumbTop > 10
    ).toBeTruthy()
    mockHueSlideHeight.mockRestore()
    mockThumbDom.mockRestore()
    wrapper.unmount()
  })
  it('should show color picker when click trigger', async () => {
    const color = ref('#0F0')
    const wrapper = mount(() => <ColorPicker v-model={color.value} />)

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    const dropdown = document.querySelector('.el-color-dropdown')
    expect(dropdown).toBeTruthy()
    wrapper.unmount()
  })
  it('should clear a color when clear button click', async () => {
    const color = ref('#0F0')
    const wrapper = mount(() => <ColorPicker v-model={color.value} />)

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    const clearBtn = document.querySelector<HTMLElement>(
      '.el-color-dropdown__link-btn'
    )
    clearBtn!.click()
    expect(color.value).toEqual(null)
    wrapper.unmount()
  })
  it('should change hue when clicking the hue bar', async () => {
    const color = ref('#F00')
    const wrapper = mount(() => <ColorPicker v-model={color.value} />)

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    const colorPickerWrapper = wrapper.findComponent(ColorPicker)
    const hueSlideWrapper = colorPickerWrapper.findComponent({ ref: 'hue' })
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
    ;(hueSlideWrapper.vm as ColorPickerVM).handleClick({
      target: null,
      type: 'mouseup',
      clientX: 0,
      clientY: 100,
    })
    const hue = colorPickerWrapper.vm.color.get('hue')
    expect(hue > 0).toBeTruthy()
    mockHueBarHeight.mockRestore()
    mockThumbDom.mockRestore()
    wrapper.unmount()
  })
  it('should change hue when saturation is zero', async () => {
    const color = ref('20A0FF')
    const wrapper = mount(() => <ColorPicker v-model={color.value} />)

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    const colorPickerWrapper = wrapper.findComponent(ColorPicker)
    const hueSlideWrapper = colorPickerWrapper.findComponent({ ref: 'hue' })
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
    ;(hueSlideWrapper.vm as ColorPickerVM).handleClick({
      target: null,
      type: 'mouseup',
      clientX: 0,
      clientY: 100,
    })
    await nextTick()

    expect((hueSlideWrapper.vm as ColorPickerVM).thumbTop > 0).toBe(true)
    mockHueSlideRect.mockRestore()
    mockThumbDom.mockRestore()
    mockHueSlideOffsetHeight.mockRestore()
    wrapper.unmount()
  })
  it('should change alpha when clicking the alpha bar', async () => {
    const color = ref('#F00')
    const wrapper = mount(() => (
      <ColorPicker v-model={color.value} show-alpha />
    ))

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    const colorPickerWrapper = wrapper.findComponent(ColorPicker)
    const alphaWrapper = colorPickerWrapper.findComponent({ ref: 'alpha' })
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
    ;(alphaWrapper.vm as ColorPickerVM).handleClick({
      target: null,
      type: 'mouseup',
      clientX: 50,
      clientY: 0,
    })
    await nextTick()
    expect(colorPickerWrapper.vm.color.get('alpha') < 100).toBeTruthy()
    mockAlphaDom.mockRestore()
    mockThumbDom.mockRestore()
    wrapper.unmount()
  })

  it('should change saturation and value when clicking the sv-panel', async () => {
    const color = ref('hsv(0, 50%, 50%)')
    const wrapper = mount(() => (
      <ColorPicker v-model={color.value} show-alpha color-format="hsv" />
    ))

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    const colorPickerWrapper = wrapper.findComponent(ColorPicker)
    const svPanelWrapper = colorPickerWrapper.findComponent({ ref: 'sv' })
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
    const wrapper = mount(() => (
      <ColorPicker v-model={color.value} show-alpha predefine={colors.value} />
    ))

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    const colorPickerWrapper = wrapper.findComponent(ColorPicker)
    const predefineWrapper = colorPickerWrapper.findComponent({
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
    expect(colorPickerWrapper.vm.color.get('hue')).toEqual(180)
    expect(colorPickerWrapper.vm.color.get('saturation')).toEqual(65)
    expect(colorPickerWrapper.vm.color.get('value')).toEqual(20)
    expect(colorPickerWrapper.vm.color.get('alpha')).toEqual(50)

    predefineDom
      .querySelector<HTMLElement>(
        '.el-color-predefine__color-selector:nth-child(3)'
      )
      ?.click()
    await nextTick()
    expect(colorPickerWrapper.vm.color.get('hue')).toEqual(250)
    expect(colorPickerWrapper.vm.color.get('saturation')).toEqual(54)
    expect(colorPickerWrapper.vm.color.get('value')).toEqual(98)
    expect(colorPickerWrapper.vm.color.get('alpha')).toEqual(100)
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
      <ColorPicker v-model={color.value} show-alpha predefine={colors.value} />
    ))

    await wrapper.find('.el-color-picker__trigger').trigger('click')
    const colorPickerWrapper = wrapper.findComponent(ColorPicker)
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
  it('should not execute activeChange event', async () => {
    const onActiveChange = vi.fn()
    const color = ref('#20A0FF')
    const wrapper = mount(() => (
      <ColorPicker modelValue={color.value} onActiveChange={onActiveChange} />
    ))

    await nextTick()
    expect(onActiveChange).not.toHaveBeenCalled()
    wrapper.unmount()
  })

  it('should update the colorFormat and selected color when the colorFormat prop changes', async () => {
    const color = ref('#00FF00')
    const colorFormat = ref('hex')
    const wrapper = mount(() => (
      <ColorPicker v-model={color.value} color-format={colorFormat.value} />
    ))

    colorFormat.value = 'rgb'
    await nextTick()
    const colorPickerWrapper = wrapper.findComponent(ColorPicker)
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
    const color = ref('#00FF00AA')
    const showAlpha = ref(true)
    const wrapper = mount(() => (
      <ColorPicker
        v-model={color.value}
        color-format="hex"
        showAlpha={showAlpha.value}
      />
    ))

    showAlpha.value = false
    await nextTick()
    const colorPickerWrapper = wrapper.findComponent(ColorPicker)
    const customInput = colorPickerWrapper.findComponent({
      ref: 'inputRef',
    })
    expect(colorPickerWrapper.vm.color.enableAlpha).toBe(false)
    expect(color.value).toBe('#00FF00')
    expect(
      customInput.find<HTMLInputElement>('.el-input__inner').element.value
    ).toBe('#00FF00')
    wrapper.unmount()
  })

  describe('form item accessibility integration', () => {
    it('automatic id attachment', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <ColorPicker />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const colorPickerButton = wrapper.find('.el-color-picker')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(
        colorPickerButton.attributes().id
      )
    })

    it('specified id attachment', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <ColorPicker id="foobar" />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const colorPickerButton = wrapper.find('.el-color-picker')
      expect(formItem.attributes().role).toBeFalsy()
      expect(colorPickerButton.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(
        colorPickerButton.attributes().id
      )
    })

    it('form item role is group when multiple inputs', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <ColorPicker />
          <ColorPicker />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      expect(formItem.attributes().role).toBe('group')
    })
  })

  it('it will target the focus & blur', async () => {
    const focusHandler = vi.fn()
    const blurHandler = vi.fn()
    const wrapper = mount(() => (
      <ColorPicker onFocus={focusHandler} onBlur={blurHandler} />
    ))

    await nextTick()
    await wrapper.find('.el-color-picker').trigger('focus')
    expect(focusHandler).toHaveBeenCalledTimes(1)

    await wrapper.find('.el-color-picker').trigger('blur')
    expect(blurHandler).toHaveBeenCalled()
    wrapper.unmount()
  })
})
