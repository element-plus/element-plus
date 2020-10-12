import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Calendar from '../src/index.vue'

const _mount = (template: string, data?, otherObj?) => mount({
  components: {
    'el-calendar': Calendar,
  },
  template,
  data,
  ...otherObj,
})

describe('Calendar.vue', () => {
  it('create', async() => {
    const wrapper = _mount(`
    <el-calendar v-model="value"></el-calendar>
    `, () => ({ value: new Date('2019-04-01') }))
    const titleEl = wrapper.find('.el-calendar__title')
    expect(/2019.*April/.test((titleEl.element as HTMLElement).innerHTML)).toBeTruthy()
    expect(wrapper.element.querySelectorAll('thead th').length).toBe(7)
    const rows = wrapper.element.querySelectorAll('.el-calendar-table__row')
    expect(rows.length).toBe(6);
    (rows[5].firstElementChild as HTMLElement).click()

    await nextTick()
    expect(/2019.*May/.test((titleEl.element as HTMLElement).innerHTML)).toBeTruthy()
    const vm = wrapper.vm as any
    const date = vm.value
    expect(date.getFullYear()).toBe(2019)
    expect(date.getMonth()).toBe(4)
    expect((wrapper.find('.is-selected span').element as HTMLElement).innerHTML).toBe('5')
  })

  it('range type Date', () => {
    const wrapper = _mount(`
    <el-calendar :range="[new Date(2019, 2, 4), new Date(2019, 2, 24)]"></el-calendar>
    `)
    const titleEl = wrapper.find('.el-calendar__title')
    expect(/2019.*March/.test((titleEl.element as HTMLElement).innerHTML)).toBeTruthy()
    const rows = wrapper.element.querySelectorAll('.el-calendar-table__row')
    expect(rows.length).toBe(4)
    expect(wrapper.element.querySelector('.el-calendar__button-group')).toBeNull()
  })

  it('range type String', () => {
    const wrapper = _mount(`
    <el-calendar :range="['2019-02-03', '2019-02-23']"></el-calendar>
    `)
    const titleEl = wrapper.find('.el-calendar__title')
    expect(/2019.*February/.test((titleEl.element as HTMLElement).innerHTML)).toBeTruthy()
    const rows = wrapper.element.querySelectorAll('.el-calendar-table__row')
    expect(rows.length).toBe(3)
    expect(wrapper.element.querySelector('.el-calendar__button-group')).toBeNull()
  })

  it('range tow monthes', async() => {
    const wrapper = _mount(`
    <el-calendar :range="[new Date(2019, 3, 14), new Date(2019, 4, 18)]"></el-calendar>
    `)
    const titleEl = wrapper.find('.el-calendar__title')
    expect(/2019.*April/.test((titleEl.element as HTMLElement).innerHTML)).toBeTruthy()
    const dateTables = wrapper.element.querySelectorAll('.el-calendar-table.is-range')
    expect(dateTables.length).toBe(2)
    const rows = wrapper.element.querySelectorAll('.el-calendar-table__row')
    expect(rows.length).toBe(5)
    const cell = rows[rows.length - 1].firstElementChild;
    (cell as HTMLElement).click()

    await nextTick()

    expect(/2019.*May/.test((titleEl.element as HTMLElement).innerHTML)).toBeTruthy()
    expect(cell.classList.contains('is-selected')).toBeTruthy()
  })
})
