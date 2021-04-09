import { mount } from '@vue/test-utils'
import { h, nextTick } from 'vue'
import Slider from '../src/index.vue'


describe('Slider', () => {
  it('create', () => {
    const wrapper = mount(Slider)
    expect(wrapper.props().modelValue).toBe(0)
  })


  it('should not exceed min and max', done => {

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
    setTimeout(() => {
      wrapper.vm.value = 40
      nextTick().then(() => {
        expect(wrapper.vm.value).toBe(50)
        wrapper.vm.value = 120
        nextTick().then(() => {
          expect(wrapper.vm.value).toBe(100)
          done()
        })
      })
    }, 10)
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
        formatTooltip(val) {
          return '$' + val
        },
      },
    })
    const slider: any = wrapper.findComponent({ name: 'ElSliderButton' })
    nextTick().then(() => {
      expect(slider.vm.formatValue).toBe('$0')
    })
  })

  it('drag', done => {
    const wrapper = mount({
      template: `
        <div style="width: 200px;">
          <slider v-model="value" :vertical="vertical"></slider>
        </div>
      `,
      components: { Slider },
      data() {
        return {
          vertical: false,
          value: 0,
        }
      },
    }, {
      attachTo: document.body,
    })
    const mockClientWidth = jest
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    const slider = wrapper.findComponent({ name: 'ElSliderButton' })
    slider.trigger('mousedown', { clientX: 0 })
    const mousemove = document.createEvent('MouseEvent')
    mousemove.initMouseEvent('mousemove', true, true, window, 1, 100, 0, 100, 0, false, false, true, false, 0, null)
    window.dispatchEvent(mousemove)
    const mouseup = document.createEvent('MouseEvent')
    mouseup.initMouseEvent('mouseup', true, true, window, 1, 100, 0, 100, 0, false, false, true, false, 0, null)
    window.dispatchEvent(mouseup)
    setTimeout(() => {
      expect(wrapper.vm.value === 50).toBeTruthy()
      mockClientWidth.mockRestore()
      wrapper.vm.vertical = true
      wrapper.vm.value = 0
      nextTick(() => {
        expect(wrapper.vm.value === 0).toBeTruthy()

        const mockClientHeight = jest
          .spyOn(wrapper.find('.el-slider__runway').element, 'clientHeight', 'get')
          .mockImplementation(() => 200)
        slider.trigger('mousedown', { clientY: 0 })
        const mousemove = document.createEvent('MouseEvent')
        mousemove.initMouseEvent('mousemove', true, true, window, 1, 0, -100, 0, -100, false, false, true, false, 0, null)
        window.dispatchEvent(mousemove)
        const mouseup = document.createEvent('MouseEvent')
        mouseup.initMouseEvent('mouseup', true, true, window, 1, 0, -100, 0, -100, false, false, true, false, 0, null)
        window.dispatchEvent(mouseup)
        setTimeout(() => {
          expect(wrapper.vm.value === 50).toBeTruthy()
          mockClientHeight.mockRestore()
          done()
        }, 10)
      })
    }, 10)
  })

  it('accessibility', done => {
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
    slider.vm.onRightKeyDown()
    setTimeout(() => {
      expect(wrapper.vm.value).toBe(1)
      slider.vm.onLeftKeyDown()
      setTimeout(() => {
        expect(wrapper.vm.value).toBe(0)
        done()
      }, 10)
    }, 10)
  })


  it('step', done => {
    const wrapper = mount({
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
    }, {
      attachTo: document.body,
    })
    const mockClientWidth = jest
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    const slider: any = wrapper.findComponent({ name: 'ElSliderButton' })
    nextTick().then(() => {
      slider.trigger('mousedown', { clientX: 0 })
      const mousemove = document.createEvent('MouseEvent')
      mousemove.initMouseEvent('mousemove', true, true, window, 1, 100, 0, 100, 0, false, false, true, false, 0, null)
      window.dispatchEvent(mousemove)
      const mouseup = document.createEvent('MouseEvent')
      mouseup.initMouseEvent('mouseup', true, true, window, 1, 100, 0, 100, 0, false, false, true, false, 0, null)
      window.dispatchEvent(mouseup)
      setTimeout(() => {
        expect(wrapper.vm.value === 0.5).toBeTruthy()
        mockClientWidth.mockRestore()
        done()
      }, 10)
    })
  })


  it('click', done => {
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
    const slider: any = wrapper.findComponent({ name: 'ElSlider' })
    setTimeout(() => {
      slider.vm.onSliderClick({ clientX: 100 })
      setTimeout(() => {
        expect(wrapper.vm.value > 0).toBeTruthy()
        done()
      }, 10)
    }, 10)
  })

  it('change event', done => {
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
        onChange(val) {
          this.data = val
        },
      },
    })
    const slider: any = wrapper.findComponent({ name: 'ElSlider' })
    const mockRectLeft = jest
      .spyOn(wrapper.find('.el-slider__runway').element, 'getBoundingClientRect')
      .mockImplementation(() => {
        return {
          left: 0,
        } as DOMRect
      })
    const mockClientWidth = jest
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    setTimeout(() => {
      expect(wrapper.vm.data).toBe(0)
      slider.vm.onSliderClick({ clientX: 100 })
      setTimeout(() => {
        expect(wrapper.vm.data === 50).toBeTruthy()
        mockRectLeft.mockRestore()
        mockClientWidth.mockRestore()
        done()
      }, 10)
    }, 10)
  })

  it('input event', async done => {
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
        onInput(val) {
          this.data = val
        },
      },
    })
    const slider: any = wrapper.findComponent({ name: 'ElSlider' })
    const mockRectLeft = jest
      .spyOn(wrapper.find('.el-slider__runway').element, 'getBoundingClientRect')
      .mockImplementation(() => {
        return {
          left: 0,
        } as DOMRect
      })
    const mockClientWidth = jest
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    await nextTick()
    expect(wrapper.vm.data).toBe(0)
    slider.vm.onSliderClick({ clientX: 100 })
    await nextTick()
    expect(wrapper.vm.data === 50).toBeTruthy()
    mockRectLeft.mockRestore()
    mockClientWidth.mockRestore()
    done()
  })

  it('disabled', done => {
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
    const mockClientWidth = jest
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
      .mockImplementation(() => 200)
    const slider: any = wrapper.findComponent({ name: 'ElSliderButton' })
    slider.vm.onButtonDown({ clientX: 0 })
    const mousemove = document.createEvent('MouseEvent')
    mousemove.initMouseEvent('mousemove', true, true, window, 1, 50, 0, 50, 0, false, false, true, false, 0, null)
    window.dispatchEvent(mousemove)
    const mouseup = document.createEvent('MouseEvent')
    mouseup.initMouseEvent('mouseup', true, true, window, 1, 50, 0, 50, 0, false, false, true, false, 0, null)
    window.dispatchEvent(mouseup)
    setTimeout(() => {
      expect(wrapper.vm.value).toBe(0)
      mockClientWidth.mockRestore()
      done()
    }, 10)
  })

  it('show input', done => {
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
    increaseButton.trigger('mousedown')
    setTimeout(() => {
      expect(wrapper.vm.value > 0).toBeTruthy()
      done()
    }, 200)
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


  it('vertical mode', done => {
    const wrapper = mount({
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
    }, {
      attachTo: document.body,
    })
    const mockRectBottom = jest
      .spyOn(wrapper.find('.el-slider__runway').element, 'getBoundingClientRect')
      .mockImplementation(() => {
        return {
          bottom: 200,
        } as DOMRect
      })
    const mockClientHeight = jest
      .spyOn(wrapper.find('.el-slider__runway').element, 'clientHeight', 'get')
      .mockImplementation(() => 200)
    const slider: any = wrapper.getComponent({ name: 'ElSlider' })
    setTimeout(() => {
      slider.vm.onSliderClick({ clientY: 100 })
      setTimeout(() => {
        expect(wrapper.vm.value > 0).toBeTruthy()
        mockRectBottom.mockRestore()
        mockClientHeight.mockRestore()
        done()
      }, 10)
    }, 10)
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

    it('should not exceed min and max', done => {
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
      setTimeout(() => {
        wrapper.vm.value = [40, 60]
        setTimeout(() => {
          expect(wrapper.vm.value).toStrictEqual([50, 60])
          wrapper.vm.value = [50, 120]
          setTimeout(() => {
            expect(wrapper.vm.value).toStrictEqual([50, 100])
            done()
          }, 10)
        }, 10)
      }, 10)
    })


    it('click', done => {
      const wrapper = mount({
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
      }, {
        attachTo: document.body,
      })
      const mockRectLeft = jest
        .spyOn(wrapper.find('.el-slider__runway').element, 'getBoundingClientRect')
        .mockImplementation(() => {
          return {
            left: 0,
          } as DOMRect
        })
      const mockClientWidth = jest
        .spyOn(wrapper.find('.el-slider__runway').element, 'clientWidth', 'get')
        .mockImplementation(() => 200)
      const slider: any = wrapper.getComponent({ name: 'ElSlider' })
      setTimeout(() => {
        slider.vm.onSliderClick({ clientX: 100 })
        setTimeout(() => {
          // Because mock the clientWidth, so the targetValue is 50.
          // The behavior of the setPosition method in the useSlider.ts file should be that the value of the second button is 50
          expect(wrapper.vm.value[0] === 0).toBeTruthy()
          expect(wrapper.vm.value[1] === 50).toBeTruthy()
          mockRectLeft.mockRestore()
          mockClientWidth.mockRestore()
          done()
        }, 10)
      }, 10)
    })

    it('responsive to dynamic min and max', done => {
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
      setTimeout(() => {
        wrapper.vm.min = 60
        setTimeout(() => {
          expect(wrapper.vm.value).toStrictEqual([60, 80])
          wrapper.vm.min = 30
          wrapper.vm.max = 40
          setTimeout(() => {
            expect(wrapper.vm.value).toStrictEqual([40, 40])
            done()
          }, 10)
        }, 10)
      }, 10)
    })

    it('show stops', done => {
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
      setTimeout(() => {
        const stops = wrapper.findAll('.el-slider__stop')
        expect(stops.length).toBe(5)
        done()
      }, 10)
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

      nextTick().then(() => {
        const stops = wrapper.findAll('.el-slider__marks-stop.el-slider__stop')
        const marks = wrapper.findAll('.el-slider__marks .el-slider__marks-text')
        expect(marks.length).toBe(2)
        expect(stops.length).toBe(2)
      })
    })
  })
})
