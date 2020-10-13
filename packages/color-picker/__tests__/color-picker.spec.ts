import { mount } from '@vue/test-utils'
import { defineComponent, nextTick } from 'vue'
import ColorPicker from '../src/index.vue'

const _mount = (template: string, data: () => ({[key:string]: any;})) => {
  const Component = defineComponent({
    components: {
      ElColorPicker: ColorPicker,
    },
    data,
    template,
  })
  return mount(Component)
}

describe('Color-picker', () => {
  it('Mount Color-picker', () => {
    const wrapper = mount(ColorPicker)
    expect(wrapper.html()).toContain('el-color-picker')
    wrapper.unmount()
  })
  it('should show alpha slider when show-alpha=true', done => {
    const wrapper = _mount(
      `<el-color-picker v-model="color" :show-alpha="true"></el-color-picker>`,
      () => ({
        color: '#20A0FF',
      }),
    )
    wrapper.find('.el-color-picker__trigger').trigger('click').then(() => {
      const alphaSlider = document.querySelector('.el-color-alpha-slider')
      expect(alphaSlider).toBeTruthy()
      wrapper.unmount()
      done()
    })
  })
  it('should show correct rgb value', done => {
    const wrapper = _mount(
      `<el-color-picker v-model="color"></el-color-picker>`,
      () => ({
        color: '#20A0FF',
      }),
    )
    wrapper.find('.el-color-picker__trigger').trigger('click').then(() => {
      const input = document.querySelector<HTMLInputElement>('.el-color-dropdown__value input')
      expect(input.value.trim().toUpperCase()).toEqual('#20A0FF')
      wrapper.unmount()
      done()
    })
  })
  it('should pick a color when confirm button click', done => {
    const wrapper = _mount(
      `<el-color-picker v-model="color"></el-color-picker>`,
      () => ({
        color: null,
      }),
    )

    wrapper.find('.el-color-picker__trigger').trigger('click').then( async () => {
      document.querySelector<HTMLElement>('.el-color-dropdown__btn').click()
      await nextTick()
      expect(wrapper.vm.color).toEqual('#FF0000')
      wrapper.unmount()
      done()
    })
  })

  it('should init the right color when open', done => {
    const wrapper = _mount(
      `<el-color-picker v-model="color"></el-color-picker>`,
      () => ({
        color: '#0F0',
      }),
    )
    const colorPickerWrapper = wrapper.findComponent(ColorPicker)
    const hueSlideWrapper = colorPickerWrapper.findComponent({ ref: 'hue' })
    const hueSlideDom = hueSlideWrapper.element as HTMLElement
    const thumbDom = hueSlideWrapper.find<HTMLElement>('.el-color-hue-slider__thumb').element
    const mockHueSlideHeight = jest.spyOn(hueSlideDom, 'offsetHeight', 'get').mockImplementation(() => 200)
    const mockThumbDom = jest.spyOn(thumbDom, 'offsetHeight', 'get').mockImplementation(() => 4)
    wrapper.find('.el-color-picker__trigger').trigger('click').then(async () => {
      await nextTick()
      expect(hueSlideWrapper.vm.thumbTop > 10).toBeTruthy()
      mockHueSlideHeight.mockRestore()
      mockThumbDom.mockRestore()
      wrapper.unmount()
      done()
    })
  })
  it('should show color picker when click trigger', done => {
    const wrapper = _mount(
      `<el-color-picker v-model="color"></el-color-picker>`,
      () => ({
        color: '#0F0',
      }),
    )
    wrapper.find('.el-color-picker__trigger').trigger('click').then(() => {
      const dropdown = document.querySelector('.el-color-dropdown')
      expect(dropdown).toBeTruthy()
      wrapper.unmount()
      done()
    })
  })
  it('should clear a color when clear button click', done => {
    const wrapper = _mount(
      `<el-color-picker v-model="color"></el-color-picker>`,
      () => ({
        color: '#0F0',
      }),
    )
    wrapper.find('.el-color-picker__trigger').trigger('click').then(() => {
      const clearBtn = document.querySelector<HTMLElement>('.el-color-dropdown__link-btn')
      clearBtn.click()
      expect(wrapper.vm.color).toEqual(null)
      wrapper.unmount()
      done()
    })
  })
  it('should change hue when clicking the hue bar', done => {
    const wrapper = _mount(
      `<el-color-picker v-model="color"></el-color-picker>`,
      () => ({
        color: '#F00',
      }),
    )
    wrapper.find('.el-color-picker__trigger').trigger('click').then(() => {
      const colorPickerWrapper = wrapper.findComponent(ColorPicker)
      const hueSlideWrapper = colorPickerWrapper.findComponent({ ref: 'hue' })
      const hueSlideDom = hueSlideWrapper.element
      const thumbDom = hueSlideWrapper.find<HTMLElement>('.el-color-hue-slider__thumb').element
      const mockHueBarHeight = jest.spyOn(hueSlideDom,'getBoundingClientRect').mockReturnValue({
        height: 176,
        width: 12,
        x: 0,
        y: 0,
        top: 0,
      } as DOMRect)
      const mockThumbDom = jest.spyOn(thumbDom, 'offsetHeight', 'get').mockReturnValue(4)
      hueSlideWrapper.vm.handleClick({ target: null, clientX: 0, clientY: 100 })
      const hue = colorPickerWrapper.vm.color.get('hue')
      expect(hue > 0).toBeTruthy()
      mockHueBarHeight.mockRestore()
      mockThumbDom.mockRestore()
      wrapper.unmount()
      done()
    })
  })
  it('should change hue when saturation is zero', done => {
    const wrapper = _mount(
      `<el-color-picker v-model="color"></el-color-picker>`,
      () => ({
        color: '20A0FF',
      }),
    )

    wrapper.find('.el-color-picker__trigger').trigger('click').then(() => {
      const colorPickerWrapper = wrapper.findComponent(ColorPicker)
      const hueSlideWrapper = colorPickerWrapper.findComponent({ ref: 'hue' })
      const hueSlideDom = hueSlideWrapper.element as HTMLElement
      const thumbDom = hueSlideWrapper.find<HTMLElement>('.el-color-hue-slider__thumb').element
      const mockHueSlideRect = jest.spyOn(hueSlideDom,'getBoundingClientRect').mockReturnValue({
        height: 176,
        width: 12,
        x: 0,
        y: 0,
        top: 0,
      } as DOMRect)
      const mockHueSlideOffsetHeight = jest.spyOn(hueSlideDom, 'offsetHeight', 'get').mockReturnValue(200)
      const mockThumbDom = jest.spyOn(thumbDom, 'offsetHeight', 'get').mockReturnValue(4)
      hueSlideWrapper.vm.handleClick({ target: null, clientX: 0, clientY: 100 })
      hueSlideWrapper.vm.$nextTick(() => {
        expect(hueSlideWrapper.vm.thumbTop > 0).toBe(true)
        mockHueSlideRect.mockRestore()
        mockThumbDom.mockRestore()
        mockHueSlideOffsetHeight.mockRestore()
        wrapper.unmount()
        done()
      })
    })
  })
  it('should change alpha when clicking the alpha bar', done => {
    const wrapper = _mount(
      `<el-color-picker v-model="color" show-alpha></el-color-picker>`,
      () => ({
        color: '#F00',
      }),
    )
    wrapper.find('.el-color-picker__trigger').trigger('click').then(() => {
      const colorPickerWrapper = wrapper.findComponent(ColorPicker)
      const alphaWrapper = colorPickerWrapper.findComponent({ ref: 'alpha' })
      const alphaDom = alphaWrapper.element as HTMLElement
      const mockAlphaDom = jest.spyOn(alphaDom, 'getBoundingClientRect').mockReturnValue({
        height: 12,
        width: 280,
        x: 0,
        y: 0,
        left: 0,
      } as DOMRect)
      const thumbDom = alphaWrapper.find<HTMLElement>('.el-color-alpha-slider__thumb').element
      const mockThumbDom = jest.spyOn(thumbDom, 'offsetWidth', 'get').mockReturnValue(4)
      alphaWrapper.vm.handleClick({ target: null, clientX: 50, clientY: 0 })
      alphaWrapper.vm.$nextTick(() => {
        expect(colorPickerWrapper.vm.color.get('alpha') < 100).toBeTruthy()
        mockAlphaDom.mockRestore()
        mockThumbDom.mockRestore()
        wrapper.unmount()
        done()
      })
    })
  })

  it('should change saturation and value when clicking the sv-panel', done => {
    const wrapper = _mount(
      `<el-color-picker v-model="color" show-alpha color-format="hsv"></el-color-picker>`,
      () => ({
        color: 'hsv(0, 50%, 50%)',
      }),
    )

    wrapper.find('.el-color-picker__trigger').trigger('click').then(() => {
      const colorPickerWrapper = wrapper.findComponent(ColorPicker)
      const svPanelWrapper = colorPickerWrapper.findComponent({ ref: 'svPanel' })
      svPanelWrapper.vm.handleDrag({ clientX: 0, clientY: 0 })
      wrapper.vm.$nextTick(() => {
        expect(wrapper.vm.color._saturation !== 50).toBeTruthy()
        expect(wrapper.vm.color._value !== 50).toBeTruthy()
        done()
      })
    })
  })

  it('should change color to the selected color', done => {
    const wrapper = _mount(
      `<el-color-picker v-model="color" show-alpha :predefine="colors"></el-color-picker>`,
      () => ({
        color: 'hsva(180, 65, 20, 0.5)',
        colors: [
          'rgba(19, 206, 102, 0.18)',
          'rgb(25, 159, 147)',
          'hsv(250, 54, 98)',
          'hsva(180, 65, 20, 0.5)',
          'hsl(170, 32%, 87%)',
          'hsla(45, 62%, 47%, 0.13)',
          '#7486de',
          '#45aa9477',
          '#892345',
        ],
      }),
    )
    wrapper.find('.el-color-picker__trigger').trigger('click').then(() => {
      const colorPickerWrapper = wrapper.findComponent(ColorPicker)
      const predefineWrapper = colorPickerWrapper.findComponent({ ref: 'predefine' })
      const predefineDom = predefineWrapper.element as HTMLElement
      expect(predefineDom.querySelectorAll('.el-color-predefine__color-selector').length === 9).toBeTruthy()
      predefineDom.querySelector<HTMLElement>('.el-color-predefine__color-selector:nth-child(4)').click()
      colorPickerWrapper.vm.$nextTick(() => {
        expect(colorPickerWrapper.vm.color.get('hue')).toEqual(180)
        expect(colorPickerWrapper.vm.color.get('saturation')).toEqual(65)
        expect(colorPickerWrapper.vm.color.get('value')).toEqual(20)
        expect(colorPickerWrapper.vm.color.get('alpha')).toEqual(50)

        predefineDom.querySelector<HTMLElement>('.el-color-predefine__color-selector:nth-child(3)').click()
        colorPickerWrapper.vm.$nextTick(() => {
          expect(colorPickerWrapper.vm.color.get('hue')).toEqual(250)
          expect(colorPickerWrapper.vm.color.get('saturation')).toEqual(54)
          expect(colorPickerWrapper.vm.color.get('value')).toEqual(98)
          expect(colorPickerWrapper.vm.color.get('alpha')).toEqual(100)
          done()
        })
      })
    })
  })

  it('should change selected state of predefined color', done => {
    const wrapper = _mount(
      `<el-color-picker v-model="color" show-alpha :predefine="colors"></el-color-picker>`,
      () => ({
        color: 'hsva(180, 65, 20, 0.5)',
        colors: [
          'rgba(19, 206, 102, 0.18)',
          'rgb(25, 159, 147)',
          'hsv(250, 54, 98)',
          'hsva(180, 65, 20, 0.5)',
          'hsl(170, 32%, 87%)',
          'hsla(45, 62%, 47%, 0.13)',
          '#7486de',
          '#45aa9477',
          '#892345',
        ],
      }),
    )
    wrapper.find('.el-color-picker__trigger').trigger('click').then(() => {
      const colorPickerWrapper = wrapper.findComponent(ColorPicker)
      const predefineWrapper = colorPickerWrapper.findComponent({ ref: 'predefine' })
      const predefineDom = predefineWrapper.element as HTMLElement
      predefineDom.querySelector<HTMLElement>('.el-color-predefine__color-selector:nth-child(4)').click()
      colorPickerWrapper.vm.$nextTick(() => {
        expect(predefineWrapper.find('.el-color-predefine__color-selector:nth-child(4)').classes()).toContain('selected')
        const hueSlideWrapper = colorPickerWrapper.findComponent({ ref: 'hue' })
        const hueSlideDom = hueSlideWrapper.element
        const thumbDom = hueSlideWrapper.find<HTMLElement>('.el-color-hue-slider__thumb').element
        const mockHueSlideRect = jest.spyOn(hueSlideDom,'getBoundingClientRect').mockReturnValue({
          height: 176,
          width: 12,
          x: 0,
          y: 0,
          top: 0,
        } as DOMRect)
        const mockHueSlideOffsetHeight = jest.spyOn(hueSlideDom, 'offsetHeight', 'get').mockReturnValue(200)
        const mockThumbDom = jest.spyOn(thumbDom, 'offsetHeight', 'get').mockReturnValue(4)
        hueSlideWrapper.vm.handleClick({ target: null, clientX: 0, clientY: 1000 })
        colorPickerWrapper.vm.$nextTick(() => {
          expect(predefineWrapper.find('.el-color-predefine__color-selector:nth-child(4)').classes()).not.toContain('selected')
          mockHueSlideRect.mockRestore()
          mockThumbDom.mockRestore()
          mockHueSlideOffsetHeight.mockRestore()
          done()
        })
      })
    })
  })
})
