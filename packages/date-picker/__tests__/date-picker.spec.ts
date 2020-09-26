import Picker from '@element-plus/time-picker/src/common/picker.vue'
import { mount } from '@vue/test-utils'
import dayjs from 'dayjs'
import { nextTick } from 'vue'
import DatePicker from '../src/date-picker'

const _mount = (template: string, data = () => ({}), otherObj?) => mount({
  components: {
    'el-date-picker': DatePicker,
  },
  template,
  data,
  ...otherObj,
}, {
  global: {
    provide: {
      elForm: {},
      elFormItem: {},
    },
  },
})

afterEach(() => {
  document.documentElement.innerHTML = ''
})


describe('DatePicker', () => {
  it('create', async () => {
    const wrapper = _mount(`<el-date-picker
        :readonly="true"
        placeholder='test_'
        format='HH-mm-ss'
    />`)
    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('test_')
    expect(input.attributes('readonly')).not.toBeUndefined()
  })

  it('select date', async () => {
    const wrapper = _mount(`<el-date-picker
        v-model="value"
    />`, () => ({ value: '' }))
    const date = dayjs()

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const spans = document.querySelectorAll('.el-date-picker__header-label')
    const arrowLeftElm = document.querySelector('.el-date-picker__prev-btn.el-icon-arrow-left') as HTMLElement
    const arrowRightElm = document.querySelector('.el-date-picker__next-btn.el-icon-arrow-right') as HTMLElement
    expect(spans[0].textContent).toContain(date.year())
    expect(spans[1].textContent).toContain(date.format('MMMM'))
    const arrowLeftYeayElm = document.querySelector('.el-date-picker__prev-btn.el-icon-d-arrow-left') as HTMLElement
    arrowLeftYeayElm.click()
    let count = 20
    while (--count) {
      arrowLeftElm.click()
    }
    count = 20
    while (--count) {
      arrowRightElm.click()
    }
    await nextTick()
    expect(spans[0].textContent).toContain(date.add(-1, 'year').year())
    expect(spans[1].textContent).toContain(date.format('MMMM'));
    (document.querySelector('td.available') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).toBeDefined()
  })

  it('defaultTime and clear value', async () => {
    const wrapper = _mount(`<el-date-picker
        v-model="value"
        :default-time="new Date(2011,1,1,12,0,0)"
    />`, () => ({ value: '' }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick();
    (document.querySelector('td.available') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).toBeDefined()
    expect(vm.value.getHours()).toBe(12)
    expect(vm.value.getMinutes()).toBe(0)
    expect(vm.value.getSeconds()).toBe(0)
    const picker = wrapper.findComponent(Picker);
    (picker.vm as any).showClose = true
    await nextTick();
    (picker.element.querySelector('.el-icon-circle-close') as HTMLElement).click()
    expect(vm.value).toBeNull()
  })

  it('event change, focus, blur', async () => {
    const changeHandler = jest.fn()
    const focusHandler = jest.fn()
    const blurHandler = jest.fn()
    let onChangeValue
    const wrapper = _mount(`<el-date-picker
        v-model="value"
        @change="onChange"
        @focus="onFocus"
        @blur="onBlur"
      />`, () => ({ value: new Date(2016, 9, 10, 18, 40) }), {
      methods: {
        onChange(e) {
          onChangeValue = e
          return changeHandler(e)
        },
        onFocus(e) {
          return focusHandler(e)
        },
        onBlur(e) {
          return blurHandler(e)
        },
      },
    })

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(focusHandler).toHaveBeenCalledTimes(1);
    (document.querySelector('td.available') as HTMLElement).click()
    await nextTick()
    expect(changeHandler).toHaveBeenCalledTimes(1)
    expect(blurHandler).toHaveBeenCalledTimes(1)
    expect(onChangeValue.getTime()).toBe(new Date(2016, 9, 1).getTime())
  })

  // it('nuke invalid input on close', done => {
  //   vm = createVue({
  //     template: '<el-date-picker v-model="value" value-format="yyyy-MM-dd" ref="compo" />',
  //     data() {
  //       return {
  //         value: '2010-10-01',
  //       }
  //     },
  //   }, true)

  //   const compo = vm.$refs.compo
  //   const input = compo.$el.querySelector('input')
  //   input.blur()
  //   input.focus()

  //   setTimeout(_ => {
  //     compo.userInput = 'abc'
  //     compo.handleChange() // simplified test
  //     compo.handleClose()
  //     setTimeout(_ => {
  //       expect(input.value).to.equal('2010-10-01')
  //       expect(vm.value).to.equal('2010-10-01')
  //       done()
  //     }, DELAY)
  //   }, DELAY)
  // })


})
