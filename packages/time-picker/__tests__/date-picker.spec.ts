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


describe('TimePicker', () => {
  it('create', async () => {
    const wrapper = _mount(`<el-date-picker
        :readonly="true"
        placeholder='test_'
        format='HH-mm-ss'
    />`)
    const input = wrapper.find('input')
    expect(input.attributes('placeholder')).toBe('test_')
    // todo readonly
    // expect(input.attributes('readonly')).toBeTruthy()
  })

  it('select date', async () => {
    const wrapper = _mount(`<el-date-picker
        v-model="value"
    />`, () => ({ value: '' }))
    const input = wrapper.find('input').element
    const date = dayjs()

    input.blur()
    input.focus()
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

  it.only('clear value', async () => {
    const wrapper = _mount(`<div class="out">out</div><el-date-picker
        v-model="value"
    />`, () => ({ value: '' }))
    const input = wrapper.find('input').element
    input.focus()
    await nextTick();
    (document.querySelector('td.available') as HTMLElement).click()
    await nextTick()
    const vm = wrapper.vm as any
    expect(vm.value).toBeDefined()
    console.log(document.querySelectorAll('.out').click());
    (document.querySelector('.out') as HTMLElement).click()
    await nextTick()
    expect(vm.value).toBeNull()
  })

})
