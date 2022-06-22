// @ts-nocheck
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, it } from 'vitest'
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat.js'
import Select from '@element-plus/components/select'
import { ElFormItem } from '@element-plus/components/form'
import TimeSelect from '../src/time-select.vue'
dayjs.extend(customParseFormat)

const { Option } = Select

const _mount = (template: string, data, otherObj?) =>
  mount(
    {
      components: {
        'el-time-select': TimeSelect,
        'el-form-item': ElFormItem,
      },
      template,
      data,
      ...otherObj,
    },
    {
      attachTo: 'body',
    }
  )

afterEach(() => {
  document.documentElement.innerHTML = ''
})

describe('TimeSelect', () => {
  it('create', async () => {
    const wrapper = _mount(
      `<el-time-select :style="{color:'red'}" class="customClass" />`,
      () => ({
        readonly: true,
      })
    )
    const outerInput = wrapper.find('.el-select')
    expect(outerInput.classes()).toContain('customClass')
    expect(outerInput.attributes().style).toBeDefined()
  })

  it('set default value', async () => {
    const wrapper = _mount(`<el-time-select v-model="value" />`, () => ({
      value: '14:30',
    }))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    expect(document.querySelector('.selected')).toBeDefined()
    expect(document.querySelector('.selected')?.textContent).toBe('14:30')
  })

  it('set minTime', async () => {
    const wrapper = _mount(`<el-time-select minTime="14:30" />`, () => ({}))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const elms = document.querySelectorAll('.is-disabled')
    const elm = elms[elms.length - 1]
    expect(elm.textContent).toBe('14:30')
  })

  it('set maxTime', async () => {
    const wrapper = _mount(`<el-time-select maxTime="14:30" />`, () => ({}))
    const input = wrapper.find('input')
    input.trigger('blur')
    input.trigger('focus')
    await nextTick()
    const elm = document.querySelector('.is-disabled')
    expect(elm?.textContent).toBe('14:30')
  })

  it('set value update', async () => {
    const wrapper = _mount(`<el-time-select v-model="value" />`, () => ({
      value: '10:00',
    }))
    await nextTick()

    const input = wrapper.find('input')

    expect(input.exists()).toBe(true)
    expect(input.element.value).toBe('10:00')

    wrapper.setData({ value: '10:30' })
    await nextTick()
    expect(wrapper.vm.value).toBe('10:30')
    expect(input.element.value).toBe('10:30')
  })

  it('update value', async () => {
    const wrapper = _mount(`<el-time-select v-model="value" />`, () => ({
      value: '10:00',
    }))
    await nextTick()
    const vm = wrapper.vm as any
    const input = wrapper.find('input')
    expect(vm.value).toBe('10:00')
    expect(input.element.value).toBe('10:00')

    const option = wrapper
      .findAllComponents(Option)
      .find((w) => w.text().trim() === '11:00')

    expect(option?.exists()).toBe(true)
    option?.trigger('click')
    await nextTick()
    expect(vm.value).toBe('11:00')
    expect(input.element.value).toBe('11:00')
  })

  it('set disabled', async () => {
    const wrapper = _mount(
      `<el-time-select v-model="value" :disabled="disabled" />`,
      () => ({
        value: '10:00',
        disabled: false,
      })
    )
    const vm = wrapper.vm as any
    const select = wrapper.findComponent({ name: 'ElSelect' })
    expect(select.props().disabled).toBe(false)

    vm.disabled = true
    await nextTick()
    expect(select.props().disabled).toBe(true)
  })

  it('set editable', async () => {
    const wrapper = _mount(
      `<el-time-select v-model="value" :editable="editable" />`,
      () => ({
        value: '10:00',
        editable: false,
      })
    )
    const vm = wrapper.vm as any
    const select = wrapper.findComponent({ name: 'ElSelect' })
    expect(select.props().filterable).toBe(false)

    vm.editable = true
    await nextTick()
    expect(select.props().filterable).toBe(true)
  })

  it('ref focus', async () => {
    _mount(`<el-time-select ref="input" />`, () => ({}), {
      mounted() {
        this.$refs.input.focus()
      },
    })
    await nextTick()
    await nextTick()

    const popperEl = document.querySelector('.el-select__popper')
    const attr = popperEl?.getAttribute('aria-hidden')
    expect(attr).toEqual('false')
  })

  it('ref blur', async () => {
    _mount(`<el-time-select ref="input" />`, () => ({}), {
      async mounted() {
        this.$refs.input.focus()
        await nextTick()
        this.$refs.input.blur()
      },
    })
    await nextTick()
    await nextTick()

    const popperEl = document.querySelector('.el-select__popper')
    const attr = popperEl?.getAttribute('aria-hidden')
    expect(attr).toEqual('true')
  })

  it('set format', async () => {
    const wrapper = _mount(
      `<el-time-select
    v-model="value"
    start="13:00"
    step="00:30"
    end="13:30"
    format="hh:mm A"
  >
  </el-time-select>`,
      () => ({ value: '' })
    )
    const input = wrapper.find('.el-input__inner')
    await input.trigger('click')
    await nextTick()
    const option = document.querySelector('.el-select-dropdown__item')
    expect(option?.textContent).toBe('01:00 PM')
  })

  describe('form item accessibility integration', () => {
    it('automatic id attachment', async () => {
      const wrapper = _mount(
        `<el-form-item label="Foobar" data-test-ref="item">
          <el-time-select />
        </el-form-item>`,
        () => ({})
      )

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const timeSelectInput = wrapper.find('.el-input__inner')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(
        timeSelectInput.attributes().id
      )
    })

    it('specified id attachment', async () => {
      const wrapper = _mount(
        `<el-form-item label="Foobar" data-test-ref="item">
          <el-time-select id="foobar" />
        </el-form-item>`,
        () => ({})
      )

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const timeSelectInput = wrapper.find('.el-input__inner')
      expect(formItem.attributes().role).toBeFalsy()
      expect(timeSelectInput.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(
        timeSelectInput.attributes().id
      )
    })

    it('form item role is group when multiple inputs', async () => {
      const wrapper = _mount(
        `<el-form-item label="Foobar" data-test-ref="item">
          <el-time-select />
          <el-time-select />
        </el-form-item>`,
        () => ({})
      )

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      expect(formItem.attributes().role).toBe('group')
    })
  })
})
