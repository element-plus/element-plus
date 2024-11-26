import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import updateLocale from 'dayjs/plugin/updateLocale'
import dayjs from 'dayjs'
import Calendar from '../src/calendar.vue'

const AXIOM = 'Rem is the best girl'

const setDayjsWeekStart = (weekStart = 0) => {
  dayjs.extend(updateLocale)
  const dayjsLocale = dayjs.locale()
  dayjs.updateLocale(dayjsLocale, {
    weekStart,
  })
}

describe('Calendar.vue', () => {
  it('create', async () => {
    const wrapper = mount({
      data: () => ({ value: new Date('2019-04-01') }),
      render() {
        return <Calendar v-model={this.value} />
      },
    })
    const titleEl = wrapper.find('.el-calendar__title')
    expect(/2019.*April/.test(titleEl.element?.innerHTML)).toBeTruthy()
    expect(wrapper.element.querySelectorAll('thead th').length).toBe(7)
    const rows = wrapper.element.querySelectorAll('.el-calendar-table__row')
    expect(rows.length).toBe(5)
    ;(rows[4].lastElementChild as HTMLElement).click()

    await nextTick()
    expect(/2019.*May/.test(titleEl.element.innerHTML)).toBeTruthy()
    const vm = wrapper.vm
    const date = vm.value
    expect(date.getFullYear()).toBe(2019)
    expect(date.getMonth()).toBe(4)
    expect(wrapper.find('.is-selected span').element.innerHTML).toBe('4')
  })

  it('range', () => {
    const wrapper = mount(() => (
      <Calendar range={[new Date(2019, 2, 4), new Date(2019, 2, 24)]} />
    ))
    const titleEl = wrapper.find('.el-calendar__title')
    expect(/2019.*March/.test(titleEl.element.innerHTML)).toBeTruthy()
    const rows = wrapper.element.querySelectorAll('.el-calendar-table__row')
    expect(rows.length).toBe(4)
    expect(
      wrapper.element.querySelector('.el-calendar__button-group')
    ).toBeNull()
  })

  // https://github.com/element-plus/element-plus/issues/3155
  it('range when the start date will be calculated to last month', () => {
    const wrapper = mount(() => (
      <Calendar range={[new Date(2021, 1, 2), new Date(2021, 1, 28)]} />
    ))
    const titleEl = wrapper.find('.el-calendar__title')
    expect(/2021.*January/.test(titleEl.element.innerHTML)).toBeTruthy()
    const rows = wrapper.element.querySelectorAll('.el-calendar-table__row')
    expect(rows.length).toBe(5)
    expect(
      wrapper.element.querySelector('.el-calendar__button-group')
    ).toBeNull()
  })

  it('range tow monthes', async () => {
    const wrapper = mount(() => (
      <Calendar range={[new Date(2019, 3, 14), new Date(2019, 4, 18)]} />
    ))
    const titleEl = wrapper.find('.el-calendar__title')
    expect(/2019.*April/.test(titleEl.element.innerHTML)).toBeTruthy()
    const dateTables = wrapper.element.querySelectorAll(
      '.el-calendar-table.is-range'
    )
    expect(dateTables.length).toBe(2)
    const rows = wrapper.element.querySelectorAll('.el-calendar-table__row')
    expect(rows.length).toBe(5)
    const cell = rows[rows.length - 1].firstElementChild as HTMLElement
    cell.click()

    await nextTick()

    expect(/2019.*May/.test(titleEl.element.innerHTML)).toBeTruthy()
    expect(cell?.classList.contains('is-selected')).toBeTruthy()
  })

  // https://github.com/element-plus/element-plus/issues/3155
  it('range tow monthes when the start date will be calculated to last month', async () => {
    const wrapper = mount(() => (
      <Calendar range={[new Date(2021, 1, 2), new Date(2021, 2, 21)]} />
    ))
    const titleEl = wrapper.find('.el-calendar__title')
    expect(/2021.*January/.test(titleEl.element.innerHTML)).toBeTruthy()
    const dateTables = wrapper.element.querySelectorAll(
      '.el-calendar-table.is-range'
    )
    expect(dateTables.length).toBe(3)
    const rows = wrapper.element.querySelectorAll('.el-calendar-table__row')
    expect(rows.length).toBe(8)
    const cell = rows[rows.length - 1].firstElementChild as HTMLElement
    cell.click()

    await nextTick()

    expect(/2021.*March/.test(titleEl.element.innerHTML)).toBeTruthy()
    expect(cell?.classList.contains('is-selected')).toBeTruthy()
  })

  it('firstDayOfWeek', async () => {
    // default en locale, weekStart 0 Sunday
    const wrapper = mount({
      data: () => ({ value: new Date('2019-04-01') }),
      render() {
        return <Calendar v-model={this.value} />
      },
    })
    const head = wrapper.element.querySelector('.el-calendar-table thead tr')
    expect(head?.firstElementChild?.innerHTML).toBe('Sun')
    expect(head?.lastElementChild?.innerHTML).toBe('Sat')
    const firstRow = wrapper.element.querySelector('.el-calendar-table__row')
    expect(firstRow?.firstElementChild?.innerHTML).toContain('31')
    expect(firstRow?.lastElementChild?.innerHTML).toContain('6')
  })

  it('firstDayOfWeek when set 1', async () => {
    setDayjsWeekStart(1)
    const wrapper = mount({
      data: () => ({ value: new Date('2019-09-01') }),
      render() {
        return <Calendar v-model={this.value} />
      },
    })
    const head = wrapper.element.querySelector('.el-calendar-table thead tr')
    expect(head?.firstElementChild?.innerHTML).toBe('Mon')
    expect(head?.lastElementChild?.innerHTML).toBe('Sun')
    const firstRow = wrapper.element.querySelector('.el-calendar-table__row')
    expect(firstRow?.firstElementChild?.innerHTML).toContain('26')
    expect(firstRow?.lastElementChild?.innerHTML).toContain('1')
    const rows = wrapper.element.querySelectorAll('.el-calendar-table__row')
    expect(rows.length).toBe(6)
    // reset weekStart 0
    setDayjsWeekStart()
  })

  it('firstDayOfWeek in range mode', async () => {
    const wrapper = mount({
      data: () => ({ value: new Date('2019-03-04') }),
      render() {
        return (
          <Calendar
            v-model={this.value}
            range={[new Date(2019, 1, 3), new Date(2019, 2, 23)]}
          />
        )
      },
    })
    const head = wrapper.element.querySelector('.el-calendar-table thead tr')
    expect(head?.firstElementChild?.innerHTML).toBe('Sun')
    expect(head?.lastElementChild?.innerHTML).toBe('Sat')
    const firstRow = wrapper.element.querySelector('.el-calendar-table__row')
    expect(firstRow?.firstElementChild?.innerHTML).toContain('3')
    expect(firstRow?.lastElementChild?.innerHTML).toContain('9')
  })

  it('click previous month or next month', async () => {
    const wrapper = mount({
      data: () => ({ value: new Date('2019-04-01') }),
      render() {
        return <Calendar v-model={this.value} />
      },
    })
    await nextTick()
    const btns = wrapper.findAll('.el-button')
    const prevBtn = btns.at(0)
    const nextBtn = btns.at(2)
    await prevBtn?.trigger('click')
    expect(wrapper.find('.is-selected').text()).toBe('1')
    await nextBtn?.trigger('click')
    expect(wrapper.find('.is-selected').text()).toBe('1')
  })

  it('range two years', async () => {
    const wrapper = mount(() => (
      <Calendar range={[new Date(2022, 0, 1), new Date(2022, 0, 31)]} />
    ))
    const titleEl = wrapper.find('.el-calendar__title')
    expect(/2021.*December/.test(titleEl.element.innerHTML)).toBeTruthy()
    const dateTables = wrapper.element.querySelectorAll(
      '.el-calendar-table.is-range'
    )
    expect(dateTables.length).toBe(3)
    const rows = wrapper.element.querySelectorAll('.el-calendar-table__row')
    expect(rows.length).toBe(6)
    const cell = rows[rows.length - 1].firstElementChild as HTMLElement
    cell.click()

    await nextTick()

    expect(/2022.*January/.test(titleEl.element.innerHTML)).toBeTruthy()
    expect(cell?.classList.contains('is-selected')).toBeTruthy()
  })

  it('range two years', async () => {
    const wrapper = mount(() => (
      <Calendar range={[new Date(2021, 11, 20), new Date(2022, 0, 10)]} />
    ))
    const titleEl = wrapper.find('.el-calendar__title')
    expect(/2021.*December/.test(titleEl.element.innerHTML)).toBeTruthy()
    const dateTables = wrapper.element.querySelectorAll(
      '.el-calendar-table.is-range'
    )
    expect(dateTables.length).toBe(2)
    const rows = wrapper.element.querySelectorAll('.el-calendar-table__row')
    expect(rows.length).toBe(4)
    const cell = rows[rows.length - 1].firstElementChild as HTMLElement
    cell.click()

    await nextTick()

    expect(/2022.*January/.test(titleEl.element.innerHTML)).toBeTruthy()
    expect(cell?.classList.contains('is-selected')).toBeTruthy()
  })

  it('slots', async () => {
    const wrapper = mount(() => (
      <Calendar
        v-slots={{
          header: () => AXIOM,
          'date-cell': () => AXIOM,
        }}
      />
    ))

    expect(wrapper.find('.el-calendar__header').text()).toEqual(AXIOM)
    expect(wrapper.find('.current.is-today').text()).toEqual(AXIOM)
  })
})
