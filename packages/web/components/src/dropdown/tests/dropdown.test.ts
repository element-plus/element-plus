// @ts-nocheck
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { rAF } from '@element-plus/test-utils'
import { EVENT_CODE } from '@element-plus/constants'
import { ElTooltip } from '@element-plus/components/src/tooltip'
import Button from '@element-plus/components/src/button'
import Dropdown from '../src/dropdown.vue'
import DropdownItem from '../src/dropdown-item.vue'
import DropdownMenu from '../src/dropdown-menu.vue'

const MOUSE_ENTER_EVENT = 'mouseenter'
const MOUSE_LEAVE_EVENT = 'mouseleave'
const CONTEXTMENU = 'contextmenu'

const _mount = (template: string, data, otherObj?) =>
  mount({
    components: {
      [Button.name]: Button,
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

    vi.useFakeTimers()
    const triggerElm = wrapper.find('.el-tooltip__trigger')
    expect(content.open).toBe(false)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    expect(content.open).toBe(true)
    await triggerElm.trigger(MOUSE_LEAVE_EVENT)
    vi.runAllTimers()
    expect(content.open).toBe(false)
    vi.useRealTimers()
  })

  test('menu click', async () => {
    const commandHandler = vi.fn()
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
    await wrapper
      .findComponent({ ref: 'c' })
      .findComponent({
        name: 'DropdownItemImpl',
      })
      .find('.el-dropdown-menu__item')
      .trigger('click')
    await nextTick()
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
    expect(content.open).toBe(false)
    await triggerElm.trigger('click', {
      button: 0,
    })
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
    await rAF()
    expect(content.open).toBe(true)
    await dropdown.$refs.refDropdown.handleClose()
    await rAF()
    expect(content.open).toBe(false)
  })

  test('split button', async () => {
    const handleClick = vi.fn()
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
    vi.useFakeTimers()
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    vi.useRealTimers()
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
    vi.useFakeTimers()
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    expect(content.open).toBe(true)
    await wrapper
      .findComponent({ ref: 'c' })
      .findComponent({
        name: 'DropdownItemImpl',
      })
      .trigger('click')
    vi.runAllTimers()
    expect(content.open).toBe(true)
    vi.useRealTimers()
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

    vi.useFakeTimers()
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    await triggerElm.trigger('keydown', {
      code: EVENT_CODE.enter,
    })
    vi.runAllTimers()
    expect(content.open).toBe(false)

    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    await triggerElm.trigger('keydown', {
      code: EVENT_CODE.tab,
    })
    vi.runAllTimers()
    expect(content.open).toBe(true)
    vi.useRealTimers()
  })

  test('dropdown menu keydown', async () => {
    const wrapper = _mount(
      `
      <el-dropdown ref="b" placement="right" :hide-on-click="false">
        <span class="el-dropdown-link" ref="a">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu ref="dropdown-menu">
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
    const content = wrapper.findComponent({ ref: 'dropdown-menu' })
    const triggerElm = wrapper.find('.el-tooltip__trigger')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await rAF()
    await content.trigger('keydown', {
      code: EVENT_CODE.down,
    })
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

    vi.useFakeTimers()
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await triggerElm.trigger(MOUSE_LEAVE_EVENT)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    vi.useRealTimers()
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
        <span class="el-dropdown-link">
          Custom Attributes
        </span>
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
        .find('.el-dropdown-menu__item').element.dataset.customAttribute
    ).toBe('hello')
  })

  test('disable normal dropdown', async () => {
    const wrapper = _mount(
      `
      <el-dropdown disabled>
        <span class="el-dropdown-link">
          Dropdown List
        </span>
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
          name: 'ElDropdown',
        })
        .classes()
    ).toContain('is-disabled')
  })
  test('disable dropdown with split button', async () => {
    const wrapper = _mount(
      `
      <el-dropdown disabled split-button>
        <span class="el-dropdown-link">
          Dropdown List
        </span>
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
        .findAllComponents({
          name: 'ElButton',
        })[0]
        .classes()
    ).toContain('is-disabled')
    expect(
      wrapper
        .findAllComponents({
          name: 'ElButton',
        })[1]
        .classes()
    ).toContain('is-disabled')
  })

  test('set show-timeout/hide-timeout when trigger is hover', async () => {
    const wrapper = _mount(
      `
      <el-dropdown trigger="hover" :show-timeout="200" :hide-timeout="300">
        <span class="el-dropdown-link">
          Dropdown List
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Item</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({})
    )
    const tooltipElement = wrapper.getComponent({
      name: 'ElTooltip',
    })
    expect(tooltipElement.vm.showAfter).toBe(200)
    expect(tooltipElement.vm.hideAfter).toBe(300)
  })

  test('ignore show-timeout/hide-timeout when trigger is not hover', async () => {
    const wrapper = _mount(
      `
      <el-dropdown trigger="click" :show-timeout="200" :hide-timeout="300">
        <span class="el-dropdown-link">
          Dropdown List
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Item</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      () => ({})
    )
    const tooltipElement = wrapper.getComponent({
      name: 'ElTooltip',
    })
    expect(tooltipElement.vm.showAfter).toBe(0)
    expect(tooltipElement.vm.hideAfter).toBe(0)
  })

  describe('accessibility', () => {
    test('Custom span trigger has proper attributes', async () => {
      const wrapper = _mount(
        `
        <el-dropdown>
          <span class="el-dropdown-link" data-test-ref="trigger">
            Dropdown List
          </span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-item>Item</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()
      const trigger = wrapper.find('[data-test-ref="trigger"]')
      const menu = wrapper.findComponent({ ref: 'menu' })
      expect(trigger.attributes()['role']).toBe('button')
      expect(trigger.attributes()['tabindex']).toBe('0')
      expect(trigger.attributes()['aria-haspopup']).toBe('menu')
      expect(trigger.attributes()['id']).toBe(
        menu.attributes()['aria-labelledby']
      )
      expect(trigger.attributes()['aria-controls']).toBe(
        menu.attributes()['id']
      )
    })

    test('ElButton trigger has proper attributes', async () => {
      const wrapper = _mount(
        `
        <el-dropdown>
          <el-button ref="trigger">
            Dropdown List
          </el-button>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-item>Item</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()
      const trigger = wrapper.findComponent({ ref: 'trigger' })
      const menu = wrapper.findComponent({ ref: 'menu' })
      expect(trigger.attributes()['role']).toBe('button')
      expect(trigger.attributes()['tabindex']).toBe('0')
      expect(trigger.attributes()['aria-haspopup']).toBe('menu')
      expect(trigger.attributes()['id']).toBe(
        menu.attributes()['aria-labelledby']
      )
      expect(trigger.attributes()['aria-controls']).toBe(
        menu.attributes()['id']
      )
    })

    test('Split button trigger has proper attributes', async () => {
      const wrapper = _mount(
        `
        <el-dropdown split-button>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-item>Item</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()
      const trigger = wrapper.find('.el-dropdown__caret-button')
      const menu = wrapper.findComponent({ ref: 'menu' })
      expect(trigger.attributes()['role']).toBe('button')
      expect(trigger.attributes()['tabindex']).toBe('0')
      expect(trigger.attributes()['aria-haspopup']).toBe('menu')
      expect(trigger.attributes()['id']).toBe(
        menu.attributes()['aria-labelledby']
      )
      expect(trigger.attributes()['aria-controls']).toBe(
        menu.attributes()['id']
      )
    })

    test('Menu items with "menu" role', async () => {
      const wrapper = _mount(
        `
        <el-dropdown split-button>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-item ref="menu-item">Item</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      const menu = wrapper.findComponent({ ref: 'menu' })
      const menuItem = menu.find('.el-dropdown-menu__item')
      expect(menu.attributes()['role']).toBe('menu')
      expect(menuItem.attributes()['role']).toBe('menuitem')
    })

    test('Menu items with "navigation" role', async () => {
      const wrapper = _mount(
        `
        <el-dropdown split-button role="navigation">
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-item ref="menu-item">Item</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      const menu = wrapper.findComponent({ ref: 'menu' })
      const menuItem = menu.find('.el-dropdown-menu__item')
      expect(menu.attributes()['role']).toBe('navigation')
      expect(menuItem.attributes()['role']).toBe('link')
    })

    test('Menu items with "group" role', async () => {
      const wrapper = _mount(
        `
        <el-dropdown split-button role="group">
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-item ref="menu-item">Item</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      const menu = wrapper.findComponent({ ref: 'menu' })
      const menuItem = menu.find('.el-dropdown-menu__item')
      expect(menu.attributes()['role']).toBe('group')
      expect(menuItem.attributes()['role']).toBe('button')
    })
  })
})
