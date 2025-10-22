// @ts-nocheck
import { markRaw, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { ElementPlus } from '@element-plus/icons-vue'
import { sleep } from '@element-plus/test-utils'
import { EVENT_CODE } from '@element-plus/constants'
import { ElTooltip } from '@element-plus/components/tooltip'
import Button from '@element-plus/components/button'
import { usePopperContainerId } from '@element-plus/hooks'
import Dropdown from '../src/dropdown.vue'
import DropdownItem from '../src/dropdown-item.vue'
import DropdownMenu from '../src/dropdown-menu.vue'
import dropdownSubMenu from '../src/dropdown-sub-menu.vue'

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
      [dropdownSubMenu.name]: dropdownSubMenu,
    },
    template,
    data,
    ...otherObj,
  })

describe('Dropdown', () => {
  afterEach(() => {
    document.body.innerHTML = ''
  })

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
    await nextTick()
    expect(content.open).toBe(false)
    vi.useRealTimers()
    wrapper.unmount()
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
    wrapper.unmount()
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
    await triggerElm.trigger('click')
    expect(content.open).toBe(true)
    wrapper.unmount()
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
    expect(content.open).toBe(true)
    wrapper.unmount()
  })

  test('virtual ref', async () => {
    const wrapper = _mount(
      `
      <el-button style="height: 400px; width: 400px" @click="handleClick" @contextmenu="handleContextmenu">
        Right click
      </el-button>
      <el-dropdown
        ref="dropdownRef"
        popper-class="virtual-ref-cls"
        :virtual-ref="triggerRef"
        virtual-triggering
        :popper-options="popperOptions"
      >
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Apple</el-dropdown-item>
            <el-dropdown-item>Orange</el-dropdown-item>
            <el-dropdown-item>Cherry</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      `,
      function () {
        return {
          dropdownRef: null,
          popperOptions: {
            modifiers: [
              { name: 'offset', options: { offset: [0, 0] } },
              { name: 'flip', options: { fallbackPlacements: ['bottom'] } },
            ],
          },
          position: {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
            x: 0,
            y: 0,
            width: 0,
            height: 0,
            toJSON: () => {},
          },
          triggerRef: {
            getBoundingClientRect: () => this.position,
          },
        }
      },
      {
        methods: {
          handleClick() {
            this.$refs.dropdownRef?.handleClose()
          },
          handleContextmenu(event: MouseEvent) {
            event.preventDefault()
            const { clientX, clientY } = event
            this.position = {
              ...this.position,
              top: clientY,
              left: clientX,
              x: clientX,
              y: clientY,
              right: clientX,
              bottom: clientY,
            }
            this.$refs.dropdownRef?.handleOpen()
          },
        },
      }
    )

    await nextTick()
    const content = wrapper.findComponent(ElTooltip).vm as InstanceType<
      typeof ElTooltip
    >
    const triggerElm = wrapper.find('.el-button')

    expect(content.open).toBe(false)
    vi.useFakeTimers()
    await triggerElm.trigger('contextmenu', {
      clientX: 100,
      clientY: 100,
    })
    vi.runAllTimers()
    expect(content.open).toBe(true)
    const dropdownEl = document.querySelector('.virtual-ref-cls')
    const dropdownStyle = getComputedStyle(dropdownEl)

    expect(dropdownStyle.left).toBe('100px')
    expect(dropdownStyle.top).toBe('100px')
    await triggerElm.trigger('click')
    vi.runAllTimers()
    expect(content.open).toBe(false)
    vi.useRealTimers()
    wrapper.unmount()
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
    expect(content.open).toBe(true)
    await dropdown.$refs.refDropdown.handleClose()
    expect(content.open).toBe(false)
    wrapper.unmount()
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
    wrapper.unmount()
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
    wrapper.unmount()
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
    wrapper.unmount()
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
    wrapper.unmount()
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
    wrapper.unmount()
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
    wrapper.unmount()
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
    wrapper.unmount()
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
    wrapper.unmount()
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
    wrapper.unmount()
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
    wrapper.unmount()
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
      wrapper.unmount()
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
      wrapper.unmount()
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
      wrapper.unmount()
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
      wrapper.unmount()
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
      wrapper.unmount()
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
      wrapper.unmount()
    })

    test('Trigger dropdown via hover', async () => {
      const wrapper = _mount(
        `
        <el-dropdown trigger="hover" menu-trigger="hover" :show-timeout="0" :hide-timeout="0">
          <span class="el-dropdown-link">
            Dropdown List
          </span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-item class="item-1" disabled>Item</el-dropdown-item>
              <el-dropdown-item class="item-2">Item</el-dropdown-item>
              <el-dropdown-sub-menu ref="subMenu" label="item-3" class="item-3">
                <el-dropdown-item>item-3-1</el-dropdown-item>
                <el-dropdown-item>item-3-2</el-dropdown-item>
              </el-dropdown-sub-menu>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()

      const trigger = wrapper.find('.el-tooltip__trigger')
      const content = wrapper.findComponent(ElTooltip)
      await trigger.trigger(MOUSE_ENTER_EVENT)
      expect(content.vm.open).toBe(true)

      const menu = wrapper.findComponent({ ref: 'menu' })
      await menu.trigger('keydown', { code: EVENT_CODE.down })
      const item2 = menu.find('.item-2')
      expect(item2.element.getAttribute('tabindex')).toBe('0')

      const subMenu = wrapper.findComponent({ ref: 'subMenu' })
      const subMenuTrigger = subMenu.find('.el-dropdown-menu__item')
      const subMenuContent = subMenu.findComponent({ name: 'ElTooltip' })
      await subMenuTrigger.trigger('pointerenter', { pointerType: 'mouse' })
      expect(subMenuTrigger.classes()).toContain('is-selected')
      expect(subMenuContent.vm.open).toBe(true)

      await subMenuTrigger.trigger('pointerleave', { pointerType: 'mouse' })
      await sleep()
      expect(subMenuTrigger.classes()).not.toContain('is-selected')

      await trigger.trigger(MOUSE_LEAVE_EVENT)
      await sleep()
      expect(content.vm.open).toBe(false)

      wrapper.unmount()
    })

    test('Trigger dropdown via click', async () => {
      const wrapper = _mount(
        `
        <el-dropdown trigger="click" menu-trigger="click" :show-timeout="0" :hide-timeout="0">
          <span class="el-dropdown-link">
            Dropdown List
          </span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-item class="item-1" disabled>Item</el-dropdown-item>
              <el-dropdown-item class="item-2">Item</el-dropdown-item>
              <el-dropdown-sub-menu ref="subMenu" label="item-3" class="item-3">
                <el-dropdown-item>item-3-1</el-dropdown-item>
                <el-dropdown-item>item-3-2</el-dropdown-item>
              </el-dropdown-sub-menu>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()

      const trigger = wrapper.find('.el-tooltip__trigger')
      const content = wrapper.findComponent(ElTooltip)
      await trigger.trigger('click')
      expect(content.vm.open).toBe(true)

      const menu = wrapper.findComponent({ ref: 'menu' })
      await menu.trigger('keydown', { code: EVENT_CODE.down })
      const item2 = menu.find('.item-2')
      expect(item2.element.getAttribute('tabindex')).toBe('0')

      const subMenu = wrapper.findComponent({ ref: 'subMenu' })
      const subMenuTrigger = subMenu.find('.el-dropdown-menu__item')
      const subMenuContent = subMenu.findComponent({ name: 'ElTooltip' })

      await subMenuTrigger.trigger('click')
      expect(subMenuTrigger.element.getAttribute('class')).toContain(
        'is-selected'
      )
      expect(subMenuContent.vm.open).toBe(true)

      await subMenuTrigger.trigger('click')
      expect(subMenuTrigger.element.getAttribute('class')).not.toContain(
        'is-selected'
      )
      expect(subMenuContent.vm.open).toBe(false)

      await trigger.trigger('click')
      expect(content.vm.open).toBe(false)
      wrapper.unmount()
    })

    test('Trigger dropdown via focus', async () => {
      const wrapper = _mount(
        `
        <el-dropdown trigger="focus" :show-timeout="0" :hide-timeout="0">
          <span class="el-dropdown-link">
            Dropdown List
          </span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-item class="item-1" disabled>Item</el-dropdown-item>
              <el-dropdown-item class="item-2">Item</el-dropdown-item>
              <el-dropdown-sub-menu ref="subMenu" label="item-3" class="item-3">
                <el-dropdown-item>item-3-1</el-dropdown-item>
                <el-dropdown-item>item-3-2</el-dropdown-item>
              </el-dropdown-sub-menu>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()
      const trigger = wrapper.find('.el-tooltip__trigger')
      const content = wrapper.findComponent(ElTooltip)
      await trigger.trigger('focus')
      await trigger.trigger('keydown', { code: EVENT_CODE.down })
      expect(content.vm.open).toBe(true)
      await sleep()

      const menu = wrapper.findComponent({ ref: 'menu' })
      // In theory, the following line of code is not necessary, but the test failed
      await menu.trigger('keydown', { code: EVENT_CODE.down })
      const item2 = menu.find('.item-2')
      expect(item2.element.getAttribute('tabindex')).toBe('0')

      const subMenu = wrapper.findComponent({ ref: 'subMenu' })
      const subMenuTrigger = subMenu.find('.el-dropdown-menu__item')
      const subMenuContent = subMenu.findComponent({ name: 'ElTooltip' })

      await subMenuTrigger.trigger('focus')
      await subMenuTrigger.trigger('keydown', { code: EVENT_CODE.right })
      expect(subMenuTrigger.element.getAttribute('class')).toContain(
        'is-selected'
      )
      expect(subMenuContent.vm.open).toBe(true)

      await subMenuTrigger.trigger('keydown', { code: EVENT_CODE.left })
      expect(subMenuTrigger.element.getAttribute('class')).not.toContain(
        'is-selected'
      )
      expect(subMenuContent.vm.open).toBe(false)

      await menu.trigger('keydown', { code: EVENT_CODE.esc })
      expect(content.vm.open).toBe(false)
      wrapper.unmount()
    })

    test('Trigger dropdown via trigger-keys', async () => {
      const wrapper = _mount(
        `
        <el-dropdown trigger="focus" :trigger-keys="triggerKeys" :show-timeout="0" :hide-timeout="0">
          <span class="el-dropdown-link">
            Dropdown List
          </span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-item class="item-1" disabled>Item</el-dropdown-item>
              <el-dropdown-item class="item-2">Item</el-dropdown-item>
              <el-dropdown-sub-menu ref="subMenu" label="item-3" class="item-3">
                <el-dropdown-item>item-3-1</el-dropdown-item>
                <el-dropdown-item>item-3-2</el-dropdown-item>
              </el-dropdown-sub-menu>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({ triggerKeys: [EVENT_CODE.home] })
      )
      await nextTick()
      const trigger = wrapper.find('.el-tooltip__trigger')
      const content = wrapper.findComponent(ElTooltip)
      await trigger.trigger('focus')
      await trigger.trigger('keydown', { code: EVENT_CODE.down })
      expect(content.vm.open).toBe(false)

      await trigger.trigger('keydown', { code: EVENT_CODE.home })
      expect(content.vm.open).toBe(true)
    })
  })

  describe('teleported API', () => {
    test('should mount on popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      _mount(
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
        </el-dropdown>`,
        () => ({})
      )

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value).innerHTML).not.toBe('')
    })

    test('should not mount on the popper container', async () => {
      expect(document.body.innerHTML).toBe('')
      _mount(
        `
        <el-dropdown ref="b" placement="right" :teleported="false">
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
        </el-dropdown>`,
        () => ({})
      )

      await nextTick()
      const { selector } = usePopperContainerId()
      expect(document.body.querySelector(selector.value).innerHTML).toBe('')
    })
  })

  test('hover trigger: click dropdown-item should close immediately', async () => {
    const wrapper = _mount(
      `
      <el-dropdown trigger="hover" :hide-timeout="3000">
        <span class="el-dropdown-link">
          dropdown<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <template #dropdown>
          <el-dropdown-menu ref="menu">
            <el-dropdown-item ref="item">Apple</el-dropdown-item>
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
    await nextTick()
    expect(content.open).toBe(true)

    const menu = wrapper.findComponent({ ref: 'menu' })
    await menu.trigger(MOUSE_ENTER_EVENT)

    const item = wrapper
      .findComponent({ ref: 'item' })
      .findComponent({ name: 'DropdownItemImpl' })
      .find('.el-dropdown-menu__item')

    await item.trigger('click')
    await nextTick()
    vi.advanceTimersByTime(100)
    expect(content.open).toBe(false)

    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    vi.runAllTimers()
    await nextTick()
    expect(content.open).toBe(true)
    vi.useRealTimers()
    wrapper.unmount()
  })

  describe('submenu inside dropdown', () => {
    test('create', async () => {
      const wrapper = _mount(
        `
        <el-dropdown>
          <span class="el-dropdown-link">dropdown</span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-item>Item 1</el-dropdown-item>
              <el-dropdown-sub-menu ref="subMenu" label="Item 2">
                <el-dropdown-item>Sub Item 1</el-dropdown-item>
                <el-dropdown-item>Sub Item 2</el-dropdown-item>
              </el-dropdown-sub-menu>
              <el-dropdown-item>Item 3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()

      const menu = wrapper.findComponent({ ref: 'menu' })
      expect(menu.exists()).toBe(true)
      const subMenu = wrapper.findComponent({ ref: 'subMenu' })
      expect(subMenu.exists()).toBe(true)
      wrapper.unmount()
    })

    test('label', async () => {
      const wrapper = _mount(
        `
        <el-dropdown>
          <span class="el-dropdown-link">dropdown</span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-sub-menu ref="subMenu" label="Custom Label">
                <el-dropdown-item>Sub Item 1</el-dropdown-item>
              </el-dropdown-sub-menu>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()

      const subMenu = wrapper.findComponent({ ref: 'subMenu' })
      expect(subMenu.text()).toContain('Custom Label')
      wrapper.unmount()
    })

    test('disabled', async () => {
      const wrapper = _mount(
        `
        <el-dropdown>
          <span class="el-dropdown-link">dropdown</span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-item>Item 1</el-dropdown-item>
              <el-dropdown-sub-menu ref="subMenu" label="Item 2" disabled>
                <el-dropdown-item>Sub Item 1</el-dropdown-item>
                <el-dropdown-item>Sub Item 2</el-dropdown-item>
              </el-dropdown-sub-menu>
              <el-dropdown-item>Item 3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()

      const subMenu = wrapper.findComponent({ ref: 'subMenu' })
      const menuItemElement = subMenu.find('.el-dropdown-menu__item')
      expect(menuItemElement.classes()).toContain('is-disabled')
      wrapper.unmount()
    })

    test('divided', async () => {
      const wrapper = _mount(
        `
        <el-dropdown>
          <span class="el-dropdown-link">dropdown</span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-item>Item 1</el-dropdown-item>
              <el-dropdown-sub-menu ref="subMenu" label="Item 2" divided>
                <el-dropdown-item>Sub Item 1</el-dropdown-item>
                <el-dropdown-item>Sub Item 2</el-dropdown-item>
              </el-dropdown-sub-menu>
              <el-dropdown-item>Item 3</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()

      const subMenu = wrapper.findComponent({ ref: 'subMenu' })
      const dividerElement = subMenu.find('.el-dropdown-menu__item--divided')
      expect(dividerElement.exists()).toBe(true)
      wrapper.unmount()
    })

    test('icon', async () => {
      const wrapper = _mount(
        `
        <el-dropdown>
          <span class="el-dropdown-link">dropdown</span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-sub-menu ref="subMenu" label="Item with icon" :icon="icon">
                <el-dropdown-item>Sub Item 1</el-dropdown-item>
              </el-dropdown-sub-menu>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({ icon: markRaw(ElementPlus) })
      )
      await nextTick()

      const subMenu = wrapper.findComponent({ ref: 'subMenu' })
      const icon = subMenu.findComponent(ElementPlus)
      expect(icon.exists()).toBe(true)
      wrapper.unmount()
    })

    test('popperClass', async () => {
      const wrapper = _mount(
        `
        <el-dropdown>
          <span class="el-dropdown-link">dropdown</span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-sub-menu ref="subMenu" label="Item 2" popper-class="custom-submenu-class">
                <el-dropdown-item>Sub Item 1</el-dropdown-item>
              </el-dropdown-sub-menu>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()

      const subMenu = wrapper.findComponent({ ref: 'subMenu' })
      const tooltip = subMenu.findComponent({ name: 'ElTooltip' })
      expect(tooltip.props('popperClass')).toContain('custom-submenu-class')
      wrapper.unmount()
    })

    test('popperStyle', async () => {
      const customStyle = { backgroundColor: 'red' }
      const wrapper = _mount(
        `
        <el-dropdown>
          <span class="el-dropdown-link">dropdown</span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-sub-menu ref="subMenu" label="Item 2" :popper-style="customStyle">
                <el-dropdown-item>Sub Item 1</el-dropdown-item>
              </el-dropdown-sub-menu>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({
          customStyle,
        })
      )
      await nextTick()

      const subMenu = wrapper.findComponent({ ref: 'subMenu' })
      const tooltip = subMenu.findComponent({ name: 'ElTooltip' })
      expect(tooltip.props('popperStyle')).toEqual(customStyle)
      wrapper.unmount()
    })

    test('custom title slot', async () => {
      const wrapper = _mount(
        `
        <el-dropdown>
          <span class="el-dropdown-link">dropdown</span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-sub-menu ref="subMenu">
                <template #title>
                  <span class="custom-title">Custom Title Slot</span>
                </template>
                <el-dropdown-item>Sub Item 1</el-dropdown-item>
              </el-dropdown-sub-menu>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()

      const subMenu = wrapper.findComponent({ ref: 'subMenu' })
      expect(subMenu.find('.custom-title').exists()).toBe(true)
      expect(subMenu.find('.custom-title').text()).toBe('Custom Title Slot')
      wrapper.unmount()
    })

    test('events', async () => {
      const onClickHandler = vi.fn()
      const onPointerEnterHandler = vi.fn()
      const onPointerLeaveHandler = vi.fn()

      const wrapper = _mount(
        `
        <el-dropdown>
          <span class="el-dropdown-link">dropdown</span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-sub-menu 
                ref="subMenu" 
                label="Item 2" 
                @click="onClickHandler"
                @pointerenter="onPointerEnterHandler"
                @pointerleave="onPointerLeaveHandler"
              >
                <el-dropdown-item>Sub Item 1</el-dropdown-item>
              </el-dropdown-sub-menu>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({}),
        {
          methods: {
            onClickHandler,
            onPointerEnterHandler,
            onPointerLeaveHandler,
          },
        }
      )
      await nextTick()

      const trigger = wrapper.find('.el-tooltip__trigger')
      await trigger.trigger(MOUSE_ENTER_EVENT)

      const subMenu = wrapper.findComponent({ ref: 'subMenu' })
      const subMenuTrigger = subMenu.find('.el-dropdown-menu__item')

      await subMenuTrigger.trigger('click')
      await nextTick()
      expect(onClickHandler).toHaveBeenCalled()

      await subMenuTrigger.trigger('pointerenter')
      expect(onPointerEnterHandler).toHaveBeenCalled()

      await subMenuTrigger.trigger('pointerleave')
      expect(onPointerLeaveHandler).toHaveBeenCalled()
      wrapper.unmount()
    })

    test('nested submenu', async () => {
      const wrapper = _mount(
        `
        <el-dropdown>
          <span class="el-dropdown-link">dropdown</span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-sub-menu ref="parentSubMenu" label="Parent Menu">
                <el-dropdown-item>Item 1</el-dropdown-item>
                <el-dropdown-sub-menu ref="nestedSubMenu" label="Nested Menu">
                  <el-dropdown-item class="item">Nested Item 1</el-dropdown-item>
                  <el-dropdown-item class="item">Nested Item 2</el-dropdown-item>
                </el-dropdown-sub-menu>
              </el-dropdown-sub-menu>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()

      const parentSubMenu = wrapper.findComponent({ ref: 'parentSubMenu' })
      const parentSubMenuTrigger = parentSubMenu.find('.el-dropdown-menu__item')
      expect(parentSubMenu.exists()).toBe(true)
      expect(parentSubMenuTrigger.exists()).toBe(true)

      const nestedSubMenu = wrapper.findComponent({ ref: 'nestedSubMenu' })
      const nestedSubMenuTrigger = nestedSubMenu.find('.el-dropdown-menu__item')
      expect(nestedSubMenu.exists()).toBe(true)
      expect(nestedSubMenuTrigger.exists()).toBe(true)
      wrapper.unmount()
    })

    test('submenu with maxHeight inheritance', async () => {
      const wrapper = _mount(
        `
        <el-dropdown max-height="100px">
          <span class="el-dropdown-link">dropdown</span>
          <template #dropdown>
            <el-dropdown-menu ref="menu">
              <el-dropdown-sub-menu ref="subMenu" label="Item 2">
                <el-dropdown-item>Sub Item 1</el-dropdown-item>
                <el-dropdown-item>Sub Item 2</el-dropdown-item>
                <el-dropdown-item>Sub Item 3</el-dropdown-item>
                <el-dropdown-item>Sub Item 4</el-dropdown-item>
                <el-dropdown-item>Sub Item 5</el-dropdown-item>
              </el-dropdown-sub-menu>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        `,
        () => ({})
      )
      await nextTick()

      const subMenu = wrapper.findComponent({ ref: 'subMenu' })
      const scrollbar = subMenu.findComponent({ name: 'ElScrollbar' })

      const wrapStyle = scrollbar.props('wrapStyle')
      expect(wrapStyle).toHaveProperty('maxHeight', '100px')
      wrapper.unmount()
    })
  })
})
