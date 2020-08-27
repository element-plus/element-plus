import { mount } from '@vue/test-utils'
import { eventKeys } from '@element-plus/utils/aria'
import Dropdown from '../src/dropdown.vue'
import DropdownItem from '../src/dropdown-item.vue'
import DropdownMenu from '../src/dropdown-menu.vue'

const MOUSE_ENTER_EVENT = 'mouseenter'
const MOUSE_LEAVE_EVENT = 'mouseleave'
const CLICK = 'click'

const _mount = (template: string, data, otherObj?) => mount({
  components: {
    [Dropdown.name]: Dropdown,
    [DropdownItem.name]: DropdownItem,
    [DropdownMenu.name]: DropdownMenu,
  },
  template,
  data,
  ...otherObj,
})
const sleep = (time = 250) => new Promise(resolve => setTimeout(resolve, time))
export const timeout = async (fn, time = 250) => {
  await sleep(time)
  fn()
}

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
      () => ({}),
    )
    const content = wrapper.findComponent({ ref: 'b' }).vm.$refs.popper as any
    const triggerElm = wrapper.find('.el-dropdown-link')
    expect(content.value).toBe(false)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep()
    expect(content.value).toBe(true)
    await triggerElm.trigger(MOUSE_LEAVE_EVENT)
    await sleep()
    expect(content.value).toBe(false)
  })

  test('menu click', async () => {
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
          commandHandler(command) {
            this.name = command.name
          },
        },
      },
    )
    // const content = wrapper.findComponent({ ref: 'b' }).vm.$refs.popper as any
    const triggerElm = wrapper.find('.el-dropdown-link')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep()
    await wrapper.findComponent({ ref: 'c' }).trigger('click')
    await sleep()
    expect((wrapper.vm as any).name).toBe('CommandC')
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
      }),
    )
    const content = wrapper.findComponent({ ref: 'b' }).vm.$refs.popper as any
    const triggerElm = wrapper.find('.el-dropdown-link')
    expect(content.value).toBe(false)
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep()
    expect(content.value).toBe(false)
    await triggerElm.trigger(CLICK)
    await sleep()
    expect(content.value).toBe(true)
  })

  test('split button', async () => {
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
          handleClick() {
            this.name = 'click'
          },
        },
      },
    )
    const content = wrapper.findComponent({ ref: 'b' }).vm.$refs.popper as any
    const triggerElm = wrapper.find('.el-dropdown__caret-button')
    const button = wrapper.find('.el-button')
    expect(content.value).toBe(false)
    await button.trigger('click')
    expect((wrapper.vm as any).name).toBe('click')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep()
    expect(content.value).toBe(true)
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
      () => ({}),
    )

    const content = wrapper.findComponent({ ref: 'b' }).vm.$refs.popper as any
    const triggerElm = wrapper.find('.el-dropdown-link')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep()
    await wrapper.findComponent({ ref: 'c' }).trigger('click')
    await sleep()
    expect(content.value).toBe(true)
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
      () => ({}),
    )

    const content = wrapper.findComponent({ ref: 'b' }).vm.$refs.popper as any
    const triggerElm = wrapper.find('.el-dropdown-link')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep()
    await triggerElm.trigger('keydown', {
      code: `${eventKeys.enter}`,
    })
    await sleep()
    expect(content.value).toBe(false)

    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep()
    await triggerElm.trigger('keydown', {
      code: `${eventKeys.tab}`,
    })
    await sleep()
    expect(content.value).toBe(false)
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
      () => ({}),
    )

    const content = wrapper.findComponent({ ref: 'a' })
    const triggerElm = wrapper.find('.el-dropdown-link')
    await triggerElm.trigger(MOUSE_ENTER_EVENT)
    await sleep()
    await content.trigger('keydown', {
      code: `${eventKeys.down}`,
    })
    await sleep()
    expect(wrapper.findComponent({ ref: 'd' }).attributes('tabindex')).toBe('0')

  })
})
