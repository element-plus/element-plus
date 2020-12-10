import { mount } from '@vue/test-utils'
import ElMenu from '../src/menu.vue'
import ElSubmenu from '../src/submenu.vue'
import ElMenuItem from '../src/menuItem.vue'
import ElMenuItemGroup from '../src/menuItemGroup.vue'
import { nextTick } from 'vue'

describe('Menu.vue', () => {
  test('open method', async () => {
    const wrapper = mount({
      template: `
        <div>
          <el-menu
            ref="menu"
            default-active="2"
            class="el-menu-vertical-demo"
          >
            <el-submenu index="1">
              <template #title>
                <i class="el-icon-location"></i>
                <span>导航一</span>
              </template>
              <el-menu-item-group>
                <template #title>分组一</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <template #title>选项4</template>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <template #title>导航二</template>
            </el-menu-item>
          </el-menu>
          <button @click="open"></button>
        </div>
      `,
      components: { ElMenu, ElSubmenu, ElMenuItem, ElMenuItemGroup },
      methods: {
        open(){
          this.$refs.menu.open('1')
        },
      },
    })
    const elSubmenu = wrapper.findComponent({ name: 'ElSubmenu' })
    const button = wrapper.find('button')
    button.trigger('click')
    await nextTick()
    expect(elSubmenu.vm.opened).toBeTruthy()
  })
})
