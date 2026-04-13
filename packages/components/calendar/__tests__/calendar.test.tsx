import { defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
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
    const wrapper = mount(
      defineComponent({
        data: () => ({ value: new Date('2019-04-01') }),
        render() {
          return <Calendar v-model={this.value} />
        },
      })
    )
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
    const wrapper = mount(
      defineComponent({
        data: () => ({ value: new Date('2019-04-01') }),
        render() {
          return <Calendar v-model={this.value} />
        },
      })
    )
    const head = wrapper.element.querySelector('.el-calendar-table thead tr')
    expect(head?.firstElementChild?.innerHTML).toBe('Sun')
    expect(head?.lastElementChild?.innerHTML).toBe('Sat')
    const firstRow = wrapper.element.querySelector('.el-calendar-table__row')
    expect(firstRow?.firstElementChild?.innerHTML).toContain('31')
    expect(firstRow?.lastElementChild?.innerHTML).toContain('6')
  })

  it('firstDayOfWeek when set 1', async () => {
    setDayjsWeekStart(1)
    const wrapper = mount(
      defineComponent({
        data: () => ({ value: new Date('2019-09-01') }),
        render() {
          return <Calendar v-model={this.value} />
        },
      })
    )
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
    const wrapper = mount(
      defineComponent({
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
    )
    const head = wrapper.element.querySelector('.el-calendar-table thead tr')
    expect(head?.firstElementChild?.innerHTML).toBe('Sun')
    expect(head?.lastElementChild?.innerHTML).toBe('Sat')
    const firstRow = wrapper.element.querySelector('.el-calendar-table__row')
    expect(firstRow?.firstElementChild?.innerHTML).toContain('3')
    expect(firstRow?.lastElementChild?.innerHTML).toContain('9')
  })

  it('click previous month or next month', async () => {
    const wrapper = mount(
      defineComponent({
        data: () => ({ value: new Date('2019-04-01') }),
        render() {
          return <Calendar v-model={this.value} />
        },
      })
    )
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

  it('should work when controller-type is select', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2025-12-09'))
    const wrapper = mount(
      defineComponent({
        data: () => ({ value: new Date('2025-12-09') }),
        render() {
          return <Calendar v-model={this.value} controller-type="select" />
        },
      })
    )

    await nextTick()
    const selects = wrapper.findAllComponents({ name: 'ElSelect' })
    const btn = wrapper.find('.el-button')
    const yearSelect = selects[0]
    const yearOptions = yearSelect.findAllComponents({ name: 'ElOption' })
    const monthSelect = selects[1]
    const monthOptions = monthSelect.findAllComponents({ name: 'ElOption' })
    const yearVm = yearSelect.vm as any
    const monthVm = monthSelect.vm as any
    const firstRow = wrapper.element.querySelector('.el-calendar-table__row')

    expect(yearVm.modelValue).toBe(2025)
    expect(monthVm.modelValue).toBe(12)
    expect(firstRow?.firstElementChild?.innerHTML).toContain('30')
    expect(firstRow?.lastElementChild?.innerHTML).toContain('6')

    await yearOptions[9].trigger('click')
    expect(yearVm.modelValue).toBe(2024)
    expect(monthVm.modelValue).toBe(12)
    expect(firstRow?.firstElementChild?.innerHTML).toContain('1')
    expect(firstRow?.lastElementChild?.innerHTML).toContain('7')

    await monthOptions[10].trigger('click')
    expect(yearVm.modelValue).toBe(2024)
    expect(monthVm.modelValue).toBe(11)
    expect(firstRow?.firstElementChild?.innerHTML).toContain('27')
    expect(firstRow?.lastElementChild?.innerHTML).toContain('2')

    await btn.trigger('click')
    expect(yearVm.modelValue).toBe(2025)
    expect(monthVm.modelValue).toBe(12)
    expect(firstRow?.firstElementChild?.innerHTML).toContain('30')
    expect(firstRow?.lastElementChild?.innerHTML).toContain('6')
    vi.useRealTimers()
  })

  it('should not emit select event when switching month with controller buttons', async () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date(2026, 4, 1))

    const onSelect = vi.fn()
    const wrapper = mount(
      defineComponent({
        data: () => ({ value: new Date(2026, 3, 13) }),
        render() {
          return <Calendar v-model={this.value} onSelect={onSelect} />
        },
      })
    )

    const btns = wrapper.findAll('.el-button')
    const [prevBtn, todayBtn, nextBtn] = btns

    expect(btns).toHaveLength(3)

    await prevBtn.trigger('click')
    await todayBtn.trigger('click')
    await nextBtn.trigger('click')
    await nextTick()

    expect(onSelect).not.toHaveBeenCalled()
    vi.useRealTimers()
  })

  it('should not emit select event when switching year or month with select controller', async () => {
    const onSelect = vi.fn()
    const wrapper = mount(
      defineComponent({
        data: () => ({ value: new Date(2025, 11, 9) }),
        render() {
          return (
            <Calendar
              v-model={this.value}
              controller-type="select"
              onSelect={onSelect}
            />
          )
        },
      })
    )

    await nextTick()

    const selects = wrapper.findAllComponents({ name: 'ElSelect' })
    const [yearSelect, monthSelect] = selects
    const titleEl = wrapper.find('.el-calendar__title')

    await yearSelect.vm.$emit('change', 2024)
    await nextTick()
    expect(/2024.*December/.test(titleEl.text())).toBeTruthy()

    await monthSelect.vm.$emit('change', 11)
    await nextTick()
    expect(/2024.*November/.test(titleEl.text())).toBeTruthy()

    expect(onSelect).not.toHaveBeenCalled()
  })

  it('should emit select event with clicked date when a day cell is clicked', async () => {
    const onSelect = vi.fn()
    const wrapper = mount(
      defineComponent({
        data: () => ({ value: new Date(2030, 0, 1) }),
        render() {
          return <Calendar v-model={this.value} onSelect={onSelect} />
        },
      })
    )

    const dayCell = Array.from(
      wrapper.element.querySelectorAll(
        'td.current'
      ) as NodeListOf<HTMLTableCellElement>
    ).find((cell) => {
      return (
        cell.querySelector('.el-calendar-day')?.textContent?.trim() === '15'
      )
    })

    expect(dayCell).toBeDefined()

    dayCell!.click()
    await nextTick()

    expect(onSelect).toHaveBeenCalledTimes(1)
    const arg = onSelect.mock.calls[0][0]
    expect(arg).toBeInstanceOf(Date)
    expect(arg.getFullYear()).toBe(2030)
    expect(arg.getMonth()).toBe(0)
    expect(arg.getDate()).toBe(15)
  })

  it('should work with formatter prop', async () => {
    const formatter = (value: number, type: 'year' | 'month') => {
      if (type === 'year') {
        return `${value}年`
      } else {
        return `${value}月`
      }
    }

    const wrapper = mount(
      defineComponent({
        data: () => ({ value: new Date('2025-12-09') }),
        render() {
          return (
            <Calendar
              v-model={this.value}
              controller-type="select"
              formatter={formatter}
            />
          )
        },
      })
    )

    await nextTick()
    const selects = wrapper.findAllComponents({ name: 'ElSelect' })
    const yearSelect = selects[0]
    const yearOptions = yearSelect.findAllComponents({ name: 'ElOption' })
    const monthSelect = selects[1]
    const monthOptions = monthSelect.findAllComponents({ name: 'ElOption' })

    expect(yearOptions[0].text()).toBe('2015年')
    expect(monthOptions[0].text()).toBe('1月')
  })
})
