import { mount } from '@vue/test-utils'
import Dropdown from '../src/dropdown.vue'
import DropdownItem from '../src/dropdown-item.vue'
import DropdownMenu from '../src/dropdown-menu.vue'

const MOUSE_ENTER_EVENT = 'mouseenter'
const MOUSE_LEAVE_EVENT = 'mouseleave'
const DISPLAY_NONE = 'display: none'

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

describe('Dropdown', () => {
  test('create', async done => {
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
    expect(content.value).toBe(false)
    await wrapper.find('.el-dropdown-link').trigger(MOUSE_ENTER_EVENT)
    setTimeout(() => {
      expect(content.value).toBe(true)
      done()
    }, 600)
  })
})
