import { mount } from '@vue/test-utils'
import Form from '../src/form.vue'
import FromItem from '../src/form-item.vue'

const AXIOM = 'Rem is the best girl'

describe('Form.vue', () => {
  test('render test', () => {
    const wrapper = mount(Form, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })

  test('label width', () => {
    const wrapper = mount({
      template: `
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="活动名称"></el-form-item>
        </el-form>
      `,
      data() {
        return {
          form: {
            name: '',
          },
        }
      },
      components: {
        'el-form': Form,
        'el-form-item': FromItem,
      },
    })

    const vm = wrapper.vm
    expect(vm.$el.querySelector('.el-form-item__label').style.width).toEqual('80px')
    expect(vm.$el.querySelector('.el-form-item__content').style.marginLeft).toEqual('80px')
  })

  test('auto label width', () => {
    const wrapper = mount({
      template: `
        <el-form ref="form" :model="form" label-width="auto">
          <el-form-item label="活动名称">
          </el-form-item>
          <el-form-item label="活动备注信息" v-if="display">
          </el-form-item>
        </el-form>
      `,
      components: {
        'el-form': Form,
        'el-form-item': FromItem,
      },
      data() {
        return {
          display: true,
          form: {
            name: '',
            intro: '',
          },
        }
      },
    })

    const vm = wrapper.vm
    vm.$nextTick(() => {
      const formItems = vm.$el.querySelectorAll('.el-form-item__content')
      const marginLeft = parseInt(formItems[0].style.marginLeft, 10)
      const marginLeft1 = parseInt(formItems[1].style.marginLeft, 10)
      expect(marginLeft === marginLeft1).toBe(true)
    })
  })

  test('inline form', () => {
    const wrapper = mount({
      template: `
        <el-form ref="form" :model="form" inline>
          <el-form-item>
          </el-form-item>
          <el-form-item>
          </el-form-item>
        </el-form>
      `,
      components: {
        'el-form': Form,
        'el-form-item': FromItem,
      },
      data() {
        return {
          form: {
            name: '',
            address: '',
          },
        }
      },
    })

    const vm = wrapper.vm
    expect(vm.$el.classList.contains('el-form--inline')).toBe(true)
  })

  test('label position', () => {
    const wrapper = mount({
      template: `
        <div>
          <el-form :model="form" label-position="top" ref="labelTop">
            <el-form-item>
            </el-form-item>
          </el-form>
          <el-form :model="form" label-position="left" ref="labelLeft">
            <el-form-item>
            </el-form-item>
          </el-form>
        </div>
      `,
      components: {
        'el-form': Form,
        'el-form-item': FromItem,
      },
      data() {
        return {
          form: {
            name: '',
            address: '',
          },
        }
      },
    })

    const vm = wrapper.vm
    expect((vm.$refs.labelTop as any).$el.classList.contains('el-form--label-top')).toBe(true)
    expect((vm.$refs.labelLeft as any).$el.classList.contains('el-form--label-left')).toBe(true)
  })

  test('label size', () => {
    const wrapper = mount({
      template: `
        <div>
          <el-form :model="form" size="mini" ref="labelMini">
            <el-form-item>
            </el-form-item>
          </el-form>
        </div>
      `,
      components: {
        'el-form': Form,
        'el-form-item': FromItem,
      },
      data() {
        return {
          form: {
            name: '',
          },
        }
      },
    })

    const vm = wrapper.vm
    expect((vm.$refs.labelMini as any).$el.children[0].classList.contains('el-form-item--mini')).toBe(true)
  })

})
