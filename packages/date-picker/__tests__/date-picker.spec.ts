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
        :default-time="new Date(2011,1,1,12,0,1)"
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
    expect(vm.value.getSeconds()).toBe(1)
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
})

describe('DatePicker Navigation', () => {
  let prevMonth, prevYear, nextMonth, nextYear, getYearLabel, getMonthLabel

  const initNavigationTest = async value => {
    const wrapper = _mount(`<el-date-picker
        v-model="value"
    />`, () => ({ value }))

    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    prevMonth = document.querySelector('button.el-icon-arrow-left')
    prevYear = document.querySelector('button.el-icon-d-arrow-left')
    nextMonth = document.querySelector('button.el-icon-arrow-right')
    nextYear = document.querySelector('button.el-icon-d-arrow-right')
    getYearLabel = () => document.querySelectorAll('.el-date-picker__header-label')[0].textContent
    getMonthLabel = () => document.querySelectorAll('.el-date-picker__header-label')[1].textContent
  }

  it('month, year', async() => {
    await initNavigationTest(new Date(2000, 0, 1))
    expect(getYearLabel()).toContain('2000')
    expect(getMonthLabel()).toContain('January')

    prevMonth.click()
    await nextTick()
    expect(getYearLabel()).toContain('1999')
    expect(getMonthLabel()).toContain('December')

    prevYear.click()
    await nextTick()
    expect(getYearLabel()).toContain('1998')
    expect(getMonthLabel()).toContain('December')

    nextMonth.click()
    await nextTick()
    expect(getYearLabel()).toContain('1999')
    expect(getMonthLabel()).toContain('January')

    nextYear.click()
    await nextTick()
    expect(getYearLabel()).toContain('2000')
    expect(getMonthLabel()).toContain('January')
  })

  it('month with fewer dates', async() => {
    // July has 31 days, June has 30
    await initNavigationTest(new Date(2000, 6, 31))
    prevMonth.click()
    await nextTick()
    expect(getYearLabel()).toContain('2000')
    expect(getMonthLabel()).toContain('June')
  })

  it('year with fewer Feburary dates', async() => {
    // Feburary 2008 has 29 days, Feburary 2007 has 28
    await initNavigationTest(new Date(2008, 1, 29))
    prevYear.click()
    await nextTick()
    expect(getYearLabel()).toContain('2007')
    expect(getMonthLabel()).toContain('February')
  })

  it('month label with fewer dates', async() => {
    await initNavigationTest(new Date(2000, 6, 31))
    const yearLabel = document.querySelectorAll('.el-date-picker__header-label')[0];
    (yearLabel as HTMLElement).click()
    await nextTick()
    const year1999Label = document.querySelectorAll('.el-year-table td a')[1];
    (year1999Label as HTMLElement).click()
    await nextTick()
    const juneLabel = document.querySelectorAll('.el-month-table td a')[5];
    (juneLabel as HTMLElement).click()
    await nextTick()
    expect(getYearLabel()).toContain('2001')
    expect(getMonthLabel()).toContain('June')
    const monthLabel = document.querySelectorAll('.el-date-picker__header-label')[1];
    (monthLabel as HTMLElement).click()
    await nextTick()
    const janLabel = document.querySelectorAll('.el-month-table td a')[0];
    (janLabel as HTMLElement).click()
    await nextTick()
    expect(getYearLabel()).toContain('2001')
    expect(getMonthLabel()).toContain('January')
  })
})

describe('MonthPicker', () => {
  it('basic', async () => {
    const wrapper = _mount(`<el-date-picker
    type='month'
    v-model="value"
  />`, () => ({ value: new Date(2020, 7, 1) }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect((document.querySelector('.el-month-table') as HTMLElement).style.display).toBe('')
    expect(document.querySelector('.el-year-table')).toBeNull();
    (document.querySelector('.el-month-table a.cell') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value.getMonth()).toBe(0)
  })
})

describe('YearPicker', () => {
  it('basic', async () => {
    const wrapper = _mount(`<el-date-picker
    type='year'
    v-model="value"
  />`, () => ({ value: new Date(2020, 7, 1) }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect((document.querySelector('.el-year-table') as HTMLElement).style.display).toBe('')
    expect(document.querySelector('.el-month-table')).toBeNull()

    const leftBtn = document.querySelector('.el-icon-d-arrow-left') as HTMLElement
    const rightBtn = document.querySelector('.el-icon-d-arrow-right') as HTMLElement
    let count = 2

    while (--count) {
      leftBtn.click()
    }
    count = 3
    while (--count) {
      rightBtn.click()
    }

    await nextTick();

    (document.querySelector('.el-year-table a.cell') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value.getFullYear()).toBe(2030)
  })
})

describe('WeekPicker', () => {
  it('create', async () => {
    const wrapper = _mount(`<el-date-picker
    type='week'
    v-model="value"
  />`, () => ({ value: new Date(2020, 7, 15) }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(document.querySelector('.is-week-mode')).not.toBeNull();
    // select month still is in week-mode
    (document.querySelectorAll('.el-date-picker__header-label')[1] as HTMLElement).click()
    await nextTick();
    (document.querySelectorAll('.el-month-table .cell')[7] as HTMLElement).click()
    await nextTick()
    expect(document.querySelector('.is-week-mode')).not.toBeNull()
    const numberOfHighlightRows = () => document.querySelectorAll('.el-date-table__row.current').length;
    (document.querySelector('.el-date-table__row ~ .el-date-table__row td.available') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).not.toBeNull()
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(numberOfHighlightRows()).toBe(1);
    // test: next month should not have highlight
    (document.querySelector('.el-icon-arrow-right') as HTMLElement).click()
    await nextTick()
    expect(numberOfHighlightRows()).toBe(0);
    // test: next year should not have highlight
    (document.querySelector('.el-icon-arrow-left') as HTMLElement).click()
    await nextTick();
    (document.querySelector('.el-icon-d-arrow-right') as HTMLElement).click()
    await nextTick()
    expect(numberOfHighlightRows()).toBe(0)
  })
})

describe('DatePicker dates', () => {
  it('create', async () => {
    const wrapper = _mount(`<el-date-picker
    type='dates'
    v-model="value"
  />`, () => ({ value: '' }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const td = (document.querySelectorAll('.el-date-table__row .available') as NodeListOf<HTMLElement>)
    const vm = wrapper.vm as any
    td[0].click()
    await nextTick()
    expect(vm.value.length).toBe(1)
    td[1].click()
    await nextTick()
    expect(vm.value.length).toBe(2)
    expect(document.querySelectorAll('.el-date-table__row .selected').length).toBe(2)
    td[0].click()
    await nextTick()
    expect(vm.value.length).toBe(1)
    td[1].click()
    await nextTick()
    expect(vm.value.length).toBe(0)
  })
})

describe('DateRangePicker', () => {

  it('create', async () => {
    const wrapper = _mount(`<el-date-picker
    type='daterange'
    v-model="value"
  />`, () => ({ value: '' }))
    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()

    const panels = document.querySelectorAll('.el-date-range-picker__content')
    expect(panels.length).toBe(2);
    (panels[0].querySelector('td.available') as HTMLElement).click()
    await nextTick();
    (panels[1].querySelector('td.available') as HTMLElement).click()
    await nextTick()
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    // correct highlight
    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    const inRangeDate = document.querySelectorAll('.in-range')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
    expect(inRangeDate.length).toBeGreaterThan(28)
    // value is array
    const vm = wrapper.vm as any
    expect(Array.isArray(vm.value)).toBeTruthy()
    // input text is something like date string
    expect(inputs[0].element.value.length).toBe(10)
    expect(inputs[1].element.value.length).toBe(10)
  })

  it('reverse selection', async () => {
    const wrapper = _mount(`<el-date-picker
      type='daterange'
      v-model="value"
    />`, () => ({ value: '' }))
    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()

    const panels = document.querySelectorAll('.el-date-range-picker__content');
    (panels[1].querySelector('td.available') as HTMLElement).click()
    await nextTick();
    (panels[0].querySelector('td.available') as HTMLElement).click()
    await nextTick()
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    // correct highlight
    const startDate = document.querySelectorAll('.start-date')
    const endDate = document.querySelectorAll('.end-date')
    const inRangeDate = document.querySelectorAll('.in-range')
    expect(startDate.length).toBe(1)
    expect(endDate.length).toBe(1)
    expect(inRangeDate.length).toBeGreaterThan(28)
    const vm = wrapper.vm as any
    expect(vm.value[0].getTime() < vm.value[1].getTime()).toBeTruthy()
  })

  it('unlink:true', async () => {
    const wrapper = _mount(`<el-date-picker
      type='daterange'
      v-model="value"
      unlink-panels
    />`, () => ({ value: [new Date(2000, 9, 1), new Date(2000, 9, 2)] }))
    const inputs = wrapper.findAll('input')
    inputs[0].trigger('blur')
    inputs[0].trigger('focus')
    await nextTick()
    const panels = document.querySelectorAll('.el-date-range-picker__content')
    const left = panels[0].querySelector('.el-date-range-picker__header')
    const right = panels[1].querySelector('.is-right .el-date-range-picker__header')
    expect(left.textContent).toContain('October')
    expect(right.textContent).toContain('November')
  })

  // it('unlink panels', done => {
  //   vm = createTest(DatePicker, {
  //     type: 'daterange',
  //     unlinkPanels: true,
  //   }, true)
  //   const input = vm.$el.querySelector('input')

  //   input.click()

  //   setTimeout(_ => {
  //     const panels = vm.picker.$el.querySelectorAll('.el-date-range-picker__content')

  //     expect(Array.prototype.slice.call(panels)).to.length(2)

  //     panels[1].querySelector('.el-icon-d-arrow-right').click()
  //     panels[1].querySelector('.el-icon-arrow-right').click()

  //     setTimeout(_ => {
  //       const left = panels[0].querySelector('.el-date-range-picker__header')
  //       const right = panels[1].querySelector('.is-right .el-date-range-picker__header')
  //       const leftText = left.textContent.match(/\d+/g).map(i => Number(i))
  //       const rightText = right.textContent.match(/\d+/g).map(i => Number(i))

  //       expect((rightText[1] <= 2 ? rightText[0] - 1 : rightText[0]) - leftText[0]).to.equal(1)
  //       expect((rightText[1] <= 2 ? rightText[1] + 12 : rightText[1]) - leftText[1]).to.equal(2)

  //       done()
  //     }, DELAY)
  //   }, DELAY)
  // })

  // it('daylight saving time highlight', done => {
  //   // Run test with environment variable TZ=Australia/Sydney
  //   // The following test uses Australian Eastern Daylight Time (AEDT)
  //   // AEST -> AEDT shift happened on 2016-10-02 02:00:00
  //   vm = createVue({
  //     template: '<el-date-picker type="daterange" v-model="value" ref="compo" />',
  //     data() {
  //       return {
  //         value: [new Date(2016, 9, 1), new Date(2016, 9, 3)],
  //       }
  //     },
  //   }, true)

  //   const rangePicker = vm.$refs.compo
  //   const inputs = rangePicker.$el.querySelectorAll('input')
  //   inputs[0].focus()

  //   setTimeout(_ => {
  //     const startDate = rangePicker.picker.$el.querySelectorAll('.start-date')
  //     const endDate = rangePicker.picker.$el.querySelectorAll('.end-date')
  //     expect(startDate.length).to.equal(1)
  //     expect(endDate.length).to.equal(1)
  //     done()
  //   }, DELAY)
  // })

  // it('clear value', done => {
  //   vm = createVue({
  //     template: '<el-date-picker type="daterange" v-model="value" ref="compo" />',
  //     data() {
  //       return {
  //         value: [new Date(2000, 9, 1), new Date(2000, 9, 2)],
  //       }
  //     },
  //   }, true)

  //   vm.$el.querySelector('input').focus()

  //   setTimeout(_ => {
  //     vm.$refs.compo.showClose = true
  //     vm.$refs.compo.handleClickIcon({ stopPropagation: () => null })
  //     setTimeout(_ => {
  //       expect(vm.value).to.equal(null)
  //       done()
  //     }, DELAY)
  //   }, DELAY)
  // })

  // it('change event', done => {
  //   vm = createVue({
  //     template: `
  //       <el-date-picker
  //         ref="compo"
  //         v-model="value"
  //         type="daterange" />`,
  //     data() {
  //       return {
  //         value: '',
  //       }
  //     },
  //   }, true)

  //   const spy = sinon.spy()
  //   vm.$refs.compo.$on('change', spy)

  //   const input = vm.$el.querySelector('input')

  //   input.blur()
  //   input.focus()

  //   setTimeout(_ => {
  //     const picker = vm.$refs.compo.picker
  //     setTimeout(_ => {
  //       picker.$el.querySelector('td.available').click()
  //       setTimeout(_ => {
  //         picker.$el.querySelector('td.available ~ td.available').click()
  //         setTimeout(_ => {
  //           expect(spy.calledOnce).to.equal(true)
  //           // change event is not emitted if used does not change value
  //           // datarange also requires proper array equality check
  //           input.blur()
  //           input.focus()
  //           setTimeout(_ => {
  //             const startCell = picker.$el.querySelector('td.start-date')
  //             const endCell = picker.$el.querySelector('td.end-date')
  //             startCell.click()
  //             setTimeout(_ => {
  //               endCell.click()
  //               setTimeout(_ => {
  //                 expect(spy.calledOnce).to.equal(true)
  //                 done()
  //               }, DELAY)
  //             }, DELAY)
  //           }, DELAY)
  //         }, DELAY)
  //       }, DELAY)
  //     }, DELAY)
  //   }, DELAY)
  // })

  // describe('default value', () => {
  //   it('single', done => {
  //     const defaultValue = '2000-10-01'
  //     const expectValue = [new Date(2000, 9, 1), new Date(2000, 9, 2)]

  //     vm = createVue({
  //       template: '<el-date-picker type="daterange" v-model="value" ref="compo" :default-value="defaultValue" />',
  //       data() {
  //         return {
  //           value: '',
  //           defaultValue,
  //         }
  //       },
  //     }, true)

  //     vm.$el.querySelector('input').focus()
  //     setTimeout(_ => {
  //       const $el = vm.$refs.compo.picker.$el
  //       const defaultEls = $el.querySelectorAll('.el-date-table td.default')
  //       expect(defaultEls.length).to.equal(1)
  //       defaultEls[0].click()
  //       setTimeout(_ => {
  //         $el.querySelector('.el-date-table td.default + td').click()
  //         setTimeout(_ => {
  //           expect(vm.value).to.eql(expectValue)
  //           done()
  //         }, DELAY)
  //       }, DELAY)
  //     }, DELAY)
  //   })

  //   it('array', done => {
  //     const defaultValue = ['2000-01-01', '2000-02-01']
  //     const expectValue = [new Date(2000, 0, 1), new Date(2000, 1, 1)]

  //     vm = createVue({
  //       template: '<el-date-picker type="daterange" v-model="value" ref="compo" :default-value="defaultValue" />',
  //       data() {
  //         return {
  //           value: '',
  //           defaultValue,
  //         }
  //       },
  //     }, true)

  //     vm.$el.querySelector('input').focus()
  //     setTimeout(_ => {
  //       const defaultEls = vm.$refs.compo.picker.$el.querySelectorAll('.el-date-table td.default')
  //       expect(defaultEls.length).to.equal(2)
  //       defaultEls[0].click()
  //       setTimeout(_ => {
  //         defaultEls[1].click()
  //         setTimeout(_ => {
  //           expect(vm.value).to.eql(expectValue)
  //           done()
  //         }, DELAY)
  //       }, DELAY)
  //     }, DELAY)
  //   })
  // })
})
