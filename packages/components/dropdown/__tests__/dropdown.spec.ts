import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { rAF } from '@element-plus/test-utils/tick'
import { EVENT_CODE } from '@element-plus/utils-v2'
import { ElTooltip } from '@element-plus/components/tooltip'
import Dropdown from '../src/dropdown.vue'
import DropdownItem from '../src/dropdown-item.vue'
import DropdownMenu from '../src/dropdown-menu.vue'

const MOUSE_ENTER_EVENT = 'mouseenter'
const MOUSE_LEAVE_EVENT = 'mouseleave'
const CONTEXTMENU = 'contextmenu'

jest.useFakeTimers()

const _mount = (template: string, data, otherObj?) =>
  mount({
    components: {
      [Dropdown.name]: Dropdown,
      [DropdownItem.name]: DropdownItem,
      [DropdownMenu.name]: DropdownMenu,
    },
    template,
    data,
    ...otherObj,
  })

describe('Dropdown', () => {
  test('create', async () => {
    const wrapper = _mount(
      `
        <el-dropdown ref="b" placement="right">
          <span class="el-dropdown-link" ref="a">
            dropdown<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>Apple</el-dropdown-item>
              <el-dropdown-item>Orange</el-dropdown-item>
              <el-dropdown-item>Cherry</el-dropdown-item>
              <el-dropdown-item disabled>Peach</el-dropdown-item>
              <el-dropdown-item divided>Pear</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const content = wrapper.findComponent(ElTooltip).vm as InstanceType<
      typeof ElTooltip
    >
    const triggerElm = wrapper.find('.el-tooltip__trigger')
    expect(content.open).toBe(false)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    jest.runAllTimers()
    await rAF()
    expect(content.open).toBe(true)
    await triggerElm.trigger(MOUSE_LEAVE_EVENT)
    jest.runAllTimers()
    await rAF()
    expect(content.open).toBe(false)
  })

  test('menu click', async () => {
    const commandHandler = jest.fn()
    const wrapper = _mount(
      `
      <el-dropdown ref="b" @command="commandHandler" placement="right">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">Apple</el-dropdown-item>
            <el-dropdown-item command="b">Orange</el-dropdown-item>
            <el-dropdown-item ref="c" :command="myCommandObject">Cherry</el-dropdown-item>
            <el-dropdown-item command="d">Peach</el-dropdown-item>
            <el-dropdown-item command="e">Pear</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      }),
      {
        methods: {
          commandHandler,
        },
      }
    )
    await nextTick()
    // const content = wrapper.findComponent({ ref: 'b' }).vm as any
    const triggerElm = wrapper.find('.el-tooltip__trigger')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await nextTick()
    jest.runAllTimers()
    await rAF()
    await wrapper
      .findComponent({ ref: 'c' })
      .findComponent({
        name: 'DropdownItemImpl',
      })
      .find('.el-dropdown-menu__item')
      .trigger('click')
    await nextTick()
    jest.runAllTimers()
    await rAF()
    expect(commandHandler).toHaveBeenCalled()
  })

  test('trigger', async () => {
    const wrapper = _mount(
      `
      <el-dropdown trigger="click" ref="b" placement="right">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">Apple</el-dropdown-item>
            <el-dropdown-item command="b">Orange</el-dropdown-item>
            <el-dropdown-item ref="c" :command="myCommandObject">Cherry</el-dropdown-item>
            <el-dropdown-item command="d">Peach</el-dropdown-item>
            <el-dropdown-item command="e">Pear</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      })
    )
    await nextTick()
    const content = wrapper.findComponent(ElTooltip).vm as InstanceType<
      typeof ElTooltip
    >
    const triggerElm = wrapper.find('.el-dropdown-link')
    expect(content.open).toBe(false)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    jest.runAllTimers()
    await rAF()
    expect(content.open).toBe(false)
    await triggerElm.trigger('click', {
      button: 0,
    })
    jest.runAllTimers()
    await rAF()
    expect(content.open).toBe(true)
  })

  test('trigger contextmenu', async () => {
    const wrapper = _mount(
      `
      <el-dropdown trigger="contextmenu" ref="b" placement="right">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">Apple</el-dropdown-item>
            <el-dropdown-item command="b">Orange</el-dropdown-item>
            <el-dropdown-item ref="c" :command="myCommandObject">Cherry</el-dropdown-item>
            <el-dropdown-item command="d">Peach</el-dropdown-item>
            <el-dropdown-item command="e">Pear</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      })
    )
    await nextTick()
    const content = wrapper.findComponent(ElTooltip).vm as InstanceType<
      typeof ElTooltip
    >
    const triggerElm = wrapper.find('.el-dropdown-link')
    expect(content.open).toBe(false)
    await triggerElm.trigger(CONTEXTMENU)
    jest.runAllTimers()
    await rAF()
    expect(content.open).toBe(true)
  })

  test('handleOpen and handleClose', async () => {
    const wrapper = _mount(
      `
      <el-dropdown trigger="click" ref="refDropdown" placement="right">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">Apple</el-dropdown-item>
            <el-dropdown-item command="b">Orange</el-dropdown-item>
            <el-dropdown-item command="c">Cherry</el-dropdown-item>
            <el-dropdown-item command="d">Peach</el-dropdown-item>
            <el-dropdown-item command="e">Pear</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({
        name: '',
      })
    )
    await nextTick()
    const dropdown = wrapper.vm
    const content = wrapper.findComponent(ElTooltip).vm as InstanceType<
      typeof ElTooltip
    >
    expect(content.open).toBe(false)
    await dropdown.$refs.refDropdown.handleOpen()
    jest.runAllTimers()
    await rAF()
    expect(content.open).toBe(true)
    await dropdown.$refs.refDropdown.handleClose()
    jest.runAllTimers()
    await rAF()
    expect(content.open).toBe(false)
  })

  test('split button', async () => {
    const handleClick = jest.fn()
    const wrapper = _mount(
      `
      <el-dropdown  @click="handleClick" split-button type="primary" ref="b" placement="right">
        dropdown
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="a">Apple</el-dropdown-item>
            <el-dropdown-item command="b">Orange</el-dropdown-item>
            <el-dropdown-item ref="c" :command="myCommandObject">Cherry</el-dropdown-item>
            <el-dropdown-item command="d">Peach</el-dropdown-item>
            <el-dropdown-item command="e">Pear</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({
        myCommandObject: { name: 'CommandC' },
        name: '',
      }),
      {
        methods: {
          handleClick,
        },
      }
    )
    await nextTick()
    const content = wrapper.findComponent(ElTooltip).vm as InstanceType<
      typeof ElTooltip
    >
    const triggerElm = wrapper.find('.el-dropdown__caret-button')
    const button = wrapper.find('.el-button')
    expect(content.open).toBe(false)
    await button.trigger('click')
    expect(handleClick).toHaveBeenCalled()
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    jest.runAllTimers()
    await rAF()
    expect(content.open).toBe(true)
  })

  test('hide on click', async () => {
    const wrapper = _mount(
      `
      <el-dropdown ref="b" placement="right" :hide-on-click="false">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Apple</el-dropdown-item>
            <el-dropdown-item>Orange</el-dropdown-item>
            <el-dropdown-item ref="c">Cherry</el-dropdown-item>
            <el-dropdown-item disabled>Peach</el-dropdown-item>
            <el-dropdown-item divided>Pear</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const content = wrapper.findComponent(ElTooltip).vm as InstanceType<
      typeof ElTooltip
    >
    expect(content.open).toBe(false)
    const triggerElm = wrapper.find('.el-tooltip__trigger')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    jest.runAllTimers()
    await rAF()
    expect(content.open).toBe(true)
    await wrapper
      .findComponent({ ref: 'c' })
      .findComponent({
        name: 'DropdownItemImpl',
      })
      .trigger('click')
    jest.runAllTimers()
    await rAF()
    expect(content.open).toBe(true)
  })

  test('triggerElm keydown', async () => {
    const wrapper = _mount(
      `
      <el-dropdown ref="b" placement="right" :hide-on-click="false">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Apple</el-dropdown-item>
            <el-dropdown-item>Orange</el-dropdown-item>
            <el-dropdown-item ref="c">Cherry</el-dropdown-item>
            <el-dropdown-item disabled>Peach</el-dropdown-item>
            <el-dropdown-item divided>Pear</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const content = wrapper.findComponent(ElTooltip).vm as InstanceType<
      typeof ElTooltip
    >
    const triggerElm = wrapper.find('.el-tooltip__trigger')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    jest.runAllTimers()
    await rAF()
    await triggerElm.trigger('keydown', {
      code: EVENT_CODE.enter,
    })
    jest.runAllTimers()
    await rAF()
    expect(content.open).toBe(false)

    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    jest.runAllTimers()
    await rAF()
    await triggerElm.trigger('keydown', {
      code: EVENT_CODE.tab,
    })
    jest.runAllTimers()
    await rAF()
    expect(content.open).toBe(true)
  })

  test('dropdown menu keydown', async () => {
    const wrapper = _mount(
      `
      <el-dropdown ref="b" placement="right" :hide-on-click="false">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu ref="a">
            <el-dropdown-item ref="d">Apple</el-dropdown-item>
            <el-dropdown-item>Orange</el-dropdown-item>
            <el-dropdown-item ref="c">Cherry</el-dropdown-item>
            <el-dropdown-item disabled>Peach</el-dropdown-item>
            <el-dropdown-item divided>Pear</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const content = wrapper.findComponent({ ref: 'a' })
    const triggerElm = wrapper.find('.el-tooltip__trigger')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    jest.runAllTimers()
    await rAF()
    await content.trigger('keydown', {
      code: EVENT_CODE.down,
    })
    jest.runAllTimers()
    await rAF()
    expect(
      wrapper
        .findComponent({ ref: 'd' })
        .findComponent({
          name: 'DropdownItemImpl',
        })
        .find('.el-dropdown-menu__item')
        .element.getAttribute('tabindex')
    ).toBe('0')
  })

  test('max height', async () => {
    const wrapper = _mount(
      `
      <el-dropdown ref="b" max-height="60px">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Apple</el-dropdown-item>
            <el-dropdown-item>Orange</el-dropdown-item>
            <el-dropdown-item>Cherry</el-dropdown-item>
            <el-dropdown-item disabled>Peach</el-dropdown-item>
            <el-dropdown-item divided>Pear</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    const scrollbar = wrapper
      .findComponent({
        ref: 'b',
      })
      .findComponent({ ref: 'scrollbar' })
    expect(scrollbar.find('.el-scrollbar__wrap').attributes('style')).toContain(
      'max-height: 60px;'
    )
  })

  test('tooltip debounce', async () => {
    const wrapper = _mount(
      `
      <el-dropdown ref="b">
        <span class="el-dropdown-link">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Apple</el-dropdown-item>
            <el-dropdown-item>Orange</el-dropdown-item>
            <el-dropdown-item>Cherry</el-dropdown-item>
            <el-dropdown-item>Peach</el-dropdown-item>
            <el-dropdown-item>Pear</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({})
    )
    const content = wrapper.findComponent(ElTooltip).vm as InstanceType<
      typeof ElTooltip
    >
    const triggerElm = wrapper.find('.el-tooltip__trigger')
    expect(content.open).toBe(false)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await triggerElm.trigger(MOUSE_LEAVE_EVENT)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    jest.runAllTimers()
    await rAF()
    expect(content.open).toBe(true)
  })

  test('popperClass', async () => {
    const wrapper = await _mount(
      `
      <el-dropdown ref="b" max-height="60px" popper-class="custom-popper-class">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Apple</el-dropdown-item>
            <el-dropdown-item>Orange</el-dropdown-item>
            <el-dropdown-item>Cherry</el-dropdown-item>
            <el-dropdown-item disabled>Peach</el-dropdown-item>
            <el-dropdown-item divided>Pear</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({})
    )

    const popperElement = wrapper.findComponent({
      name: 'ElPopperContent',
    }).element

    expect(popperElement.classList.contains('custom-popper-class')).toBe(true)
  })

  test('custom attributes for dropdown items', async () => {
    const wrapper = _mount(
      `
      <el-dropdown>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item data-custom-attribute="hello">Item</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({})
    )
    await nextTick()
    expect(
      wrapper
        .findComponent({
          name: 'DropdownItemImpl',
        })
        .find('.el-dropdown-menu__item')
        .element.getAttribute('data-custom-attribute')
    ).toBe('hello')
  })
})
