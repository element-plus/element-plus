// @ts-nocheck
import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { ElFormItem } from '@element-plus/components/form'
import Checkbox from '../src/checkbox.vue'
import CheckboxButton from '../src/checkbox-button.vue'
import CheckboxGroup from '../src/checkbox-group.vue'
import type { VueWrapper } from '@vue/test-utils'
import type { FormItemInstance } from '@element-plus/components/form'
import type { CheckboxInstance } from '@element-plus/components/checkbox'

const _mount = (
  template: string,
  data: () => Record<string, unknown>,
  otherObj?: Record<string, unknown>
) =>
  mount({
    components: {
      'el-checkbox': Checkbox,
      'el-checkbox-group': CheckboxGroup,
      'el-checkbox-button': CheckboxButton,
      'el-form-item': ElFormItem,
    },
    template,
    data,
    ...otherObj,
  })

describe('Checkbox', () => {
  test('create', async () => {
    const wrapper = _mount(
      '<el-checkbox v-model="checkbox" label="a"/>',
      () => ({ checkbox: false })
    )
    expect(wrapper.classes()).toContain('el-checkbox')
    expect(wrapper.classes()).not.toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-checked')
    await wrapper.trigger('click')
    expect(wrapper.classes('is-checked')).toBe(false)
  })

  describe('no v-model', () => {
    test('checkbox without label', async () => {
      const wrapper = _mount('<el-checkbox />', () => ({
        checkbox: false,
      }))
      expect(wrapper.classes('is-checked')).toBe(false)
    })

    test('checkbox with label attribute', async () => {
      const wrapper = _mount('<el-checkbox label="a"/>', () => ({
        checkbox: false,
      }))
      expect(wrapper.classes('is-checked')).toBe(false)
    })
  })

  describe('disabled', () => {
    test('checkbox without label', async () => {
      const wrapper: VueWrapper<FormItemInstance> = _mount(
        `<el-form-item label="test">
          <el-checkbox ref="check" v-model="checkbox" disabled/>
        </el-form-item>`,
        () => ({ checkbox: false })
      )
      const checkbox = wrapper.findComponent({ ref: 'check' })
      expect(checkbox.classes()).toContain('is-disabled')
      expect(wrapper.vm.checkbox).toBe(false)
      await checkbox.trigger('click')
      await nextTick()
      expect(checkbox.classes()).toContain('is-disabled')
      expect(wrapper.vm.checkbox).toBe(false)
    })

    test('checkbox with label attribute', async () => {
      const wrapper: VueWrapper<CheckboxInstance> = _mount(
        '<el-checkbox v-model="checkbox" disabled label="a"/>',
        () => ({ checkbox: false })
      )
      expect(wrapper.classes()).toContain('is-disabled')
      expect(wrapper.vm.checkbox).toBe(false)
      await wrapper.trigger('click')
      await nextTick()
      expect(wrapper.classes()).toContain('is-disabled')
      expect(wrapper.vm.checkbox).toBe(false)
    })
  })

  describe('change event', () => {
    test('checkbox without label', async () => {
      const wrapper: VueWrapper<FormItemInstance> = _mount(
        `<el-form-item label="test">
          <el-checkbox ref="check" v-model="checked" @change="onChange" />
        </el-form-item>`,
        () => ({
          data: null,
          checked: false,
        }),
        {
          methods: {
            onChange(val: boolean) {
              wrapper.setData({ data: val })
            },
          },
        }
      )
      const vm = wrapper.vm
      await wrapper.findComponent({ ref: 'check' }).trigger('click')
      expect(vm.data).toBe(true)
    })

    test('checkbox with label attribute', async () => {
      const wrapper: VueWrapper<CheckboxInstance> = _mount(
        `<el-checkbox v-model="checked" label="Foobar" @change="onChange" />`,
        () => ({
          data: null,
          checked: false,
        }),
        {
          methods: {
            onChange(val: boolean) {
              wrapper.setData({ data: val })
            },
          },
        }
      )
      const vm = wrapper.vm
      await wrapper.trigger('click')
      expect(vm.data).toBe(true)
    })

    test('checkbox with label as slot content', async () => {
      const wrapper: VueWrapper<CheckboxInstance> = _mount(
        `<el-checkbox v-model="checked" @change="onChange">Foobar</el-checkbox>`,
        () => ({
          data: null,
          checked: false,
        }),
        {
          methods: {
            onChange(val: boolean) {
              wrapper.setData({ data: val })
            },
          },
        }
      )
      const vm = wrapper.vm
      await wrapper.trigger('click')
      expect(vm.data).toBe(true)
    })
  })

  test('checkbox group', async () => {
    const wrapper = _mount(
      `
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="a" ref="a"></el-checkbox>
        <el-checkbox label="b" ref="b"></el-checkbox>
        <el-checkbox label="c" ref="c"></el-checkbox>
        <el-checkbox label="d" ref="d"></el-checkbox>
      </el-checkbox-group>
      `,
      () => ({ checkList: [] })
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(0)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    expect(vm.checkList.length).toBe(1)

    expect(vm.checkList).toContain('a')
    await wrapper.findComponent({ ref: 'b' }).trigger('click')
    expect(vm.checkList.length).toBe(2)
    expect(vm.checkList).toContain('a')
    expect(vm.checkList).toContain('b')
  })

  test('checkbox group without modelValue', async () => {
    const wrapper = _mount(
      `
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="a" ref="a"></el-checkbox>
        <el-checkbox label="b" ref="b"></el-checkbox>
        <el-checkbox label="c" ref="c"></el-checkbox>
        <el-checkbox label="d" ref="d"></el-checkbox>
      </el-checkbox-group>
      `,
      () => ({ checkList: undefined } as any)
    )
    const vm = wrapper.vm
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    expect(vm.checkList.length).toBe(1)
    expect(vm.checkList).toContain('a')
  })

  test('checkbox group change', async () => {
    const wrapper = _mount(
      `
      <el-checkbox-group v-model="checkList" @change="onChange">
        <el-checkbox label="a" ref="a"></el-checkbox>
        <el-checkbox label="b" ref="b"></el-checkbox>
      </el-checkbox-group>
      `,
      () => ({ checkList: [], data: null } as any),
      {
        methods: {
          onChange(val: string[]) {
            ;(this as any).data = val
          },
        },
      }
    )
    const vm = wrapper.vm
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    await nextTick()
    expect(vm.data.length).toBe(1)
    expect(vm.data).toEqual(['a'])
  })

  test('nested group', async () => {
    const wrapper = _mount(
      `
      <el-checkbox-group v-model="checkList">
        <div>
          <el-checkbox label="a" ref="a"></el-checkbox>
          <el-checkbox label="b" ref="b"></el-checkbox>
          <el-checkbox label="c" ref="c"></el-checkbox>
          <el-checkbox label="d" ref="d"></el-checkbox>
        </div>
      </el-checkbox-group>
      `,
      () => ({ checkList: [] })
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(0)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    expect(vm.checkList).toEqual(['a'])
  })

  describe('true false label', () => {
    test('without label', async () => {
      const wrapper = _mount(
        `<el-form-item label="test">
          <el-checkbox ref="check" true-label="a" :false-label="3" v-model="checked" />
        </el-form-item>`,
        () => ({
          checked: 'a',
        })
      )
      const vm = wrapper.vm
      const checkbox = wrapper.findComponent({ ref: 'check' })
      await checkbox.trigger('click')
      await nextTick()
      expect(vm.checked).toBe(3)
      await checkbox.trigger('click')
      await nextTick()
      expect(vm.checked).toBe('a')
    })

    test('with label attribute', async () => {
      const wrapper = _mount(
        `<el-checkbox label="Foobar" true-label="a" :false-label="3" v-model="checked" />`,
        () => ({
          checked: 'a',
        })
      )
      const vm = wrapper.vm
      await wrapper.trigger('click')
      await nextTick()
      expect(vm.checked).toBe(3)
      await wrapper.trigger('click')
      await nextTick()
      expect(vm.checked).toBe('a')
    })

    test('with label as slot content', async () => {
      const wrapper = _mount(
        `<el-checkbox true-label="a" :false-label="3" v-model="checked">Foobar</el-checkbox>`,
        () => ({
          checked: 'a',
        })
      )
      const vm = wrapper.vm
      await wrapper.trigger('click')
      await nextTick()
      expect(vm.checked).toBe(3)
      await wrapper.trigger('click')
      await nextTick()
      expect(vm.checked).toBe('a')
    })
  })

  test('check', () => {
    const wrapper = _mount(
      `
      <div>
        <el-checkbox v-model="checked" checked></el-checkbox>
        <el-checkbox-group v-model="checklist">
          <el-checkbox checked label="a"></el-checkbox>
        </el-checkbox-group>
      </div>
      `,
      () => ({
        checked: false,
        checklist: [],
      })
    ) as any
    expect(wrapper.vm.checked).toBe(true)
    expect(wrapper.vm.checklist).toEqual(['a'])
  })

  test('label', async () => {
    const wrapper = _mount(
      `
      <div>
        <el-checkbox-group v-model="checklist">
          <el-checkbox label="">all</el-checkbox>
          <el-checkbox label="a">a</el-checkbox>
          <el-checkbox label="b">b</el-checkbox>
        </el-checkbox-group>
      </div>
      `,
      () => ({
        checked: false,
        checklist: [],
      })
    )
    const checkbox = wrapper.find('.el-checkbox')
    await checkbox.trigger('click')
    expect(wrapper.vm.checklist[0]).toEqual('')
  })
})

describe('check-button', () => {
  test('create', async () => {
    const wrapper = _mount(
      '<el-checkbox-button v-model="checkbox" label="a"/>',
      () => ({ checkbox: false })
    )
    expect(wrapper.classes()).toContain('el-checkbox-button')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-checked')
    await wrapper.trigger('click')
    expect(wrapper.classes('is-checked')).toBe(false)
  })

  test('disabled', async () => {
    const wrapper = _mount(
      '<el-checkbox-button v-model="checkbox" disabled label="a"/>',
      () => ({ checkbox: false })
    )
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-disabled')
  })

  test('change event', async () => {
    const wrapper = _mount(
      `<el-checkbox-button v-model="checked" @change="onChange" />
      `,
      () => ({
        data: '',
        checked: false,
      }),
      {
        methods: {
          onChange(val: boolean) {
            wrapper.setData({ data: val })
          },
        },
      }
    )

    const vm = wrapper.vm
    await wrapper.trigger('click')
    expect(vm.data).toBe(true)
  })

  test('button group change', async () => {
    const wrapper = _mount(
      `
      <el-checkbox-group v-model="checkList" @change="onChange">
        <el-checkbox-button label="a" ref="a"></el-checkbox-button>
        <el-checkbox-button label="b" ref="b"></el-checkbox-button>
        <el-checkbox-button label="c" ref="c"></el-checkbox-button>
        <el-checkbox-button label="d" ref="d"></el-checkbox-button>
      </el-checkbox-group>
      `,
      () => ({
        data: null,
        checkList: [],
      }),
      {
        methods: {
          onChange(val: string[]) {
            wrapper.setData({
              data: val,
            })
          },
        },
      }
    )
    const vm = wrapper.vm
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    await nextTick() // await change event
    expect(vm.data).toEqual(['a'])
    await wrapper.findComponent({ ref: 'b' }).trigger('click')
    await nextTick() // await change event
    expect(vm.data).toEqual(['a', 'b'])
  })

  test('button group props', () => {
    const wrapper = _mount(
      `
      <el-checkbox-group v-model="checkList" size="large" fill="#FF0000" text-color="#000">
        <el-checkbox-button label="a" ref="a"></el-checkbox-button>
        <el-checkbox-button label="b" ref="b"></el-checkbox-button>
        <el-checkbox-button label="c" ref="c"></el-checkbox-button>
        <el-checkbox-button label="d" ref="d"></el-checkbox-button>
      </el-checkbox-group>
      `,
      () => ({ checkList: ['a', 'b'] })
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(2)
    expect((vm.$refs.a as any).$el.classList.contains('is-checked')).toBe(true)
    expect(
      (vm.$refs.a as any).$el.querySelector('.el-checkbox-button__inner').style
        .borderColor
    ).toEqual('#ff0000')
  })

  test('button group tag', () => {
    const wrapper = _mount(
      `
      <el-checkbox-group v-model="checkList" tag="tr">
        <el-checkbox-button label="a" ref="a"></el-checkbox-button>
        <el-checkbox-button label="b" ref="b"></el-checkbox-button>
        <el-checkbox-button label="c" ref="c"></el-checkbox-button>
        <el-checkbox-button label="d" ref="d"></el-checkbox-button>
      </el-checkbox-group>
      `,
      () => ({ checkList: ['a', 'b'] })
    )
    expect(wrapper.find('tr').classes('el-checkbox-group')).toBeTruthy()
  })

  test('button group min and max', async () => {
    const wrapper = _mount(
      `
      <el-checkbox-group
        v-model="checkList"
        :min="2"
        :max="3"
      >
        <el-checkbox-button label="a" ref="a"></el-checkbox-button>
        <el-checkbox-button label="b" ref="b"></el-checkbox-button>
        <el-checkbox-button label="c" ref="c"></el-checkbox-button>
        <el-checkbox-button label="d" ref="d"></el-checkbox-button>
        <el-checkbox-button label="e" ref="e"></el-checkbox-button>
      </el-checkbox-group>
      `,
      () => ({
        checkList: ['a', 'b'],
        lastEvent: null,
      })
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(2)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    vm.$nextTick(async () => {
      expect(vm.checkList.length).toBe(2)
      await wrapper.findComponent({ ref: 'c' }).trigger('click')
      expect(vm.checkList.length).toBe(3)
      expect(vm.checkList).toEqual(['a', 'b', 'c'])
      expect((wrapper.findComponent({ ref: 'd' }).vm as any).isDisabled).toBe(
        true
      )
      expect((wrapper.findComponent({ ref: 'e' }).vm as any).isDisabled).toBe(
        true
      )
      vm.checkList = []
      await vm.$nextTick()
      await wrapper.findComponent({ ref: 'a' }).trigger('click')
      await wrapper.findComponent({ ref: 'd' }).trigger('click')
      expect(vm.checkList).toEqual(['a', 'd'])
      await wrapper.findComponent({ ref: 'a' }).trigger('click')
      expect(vm.checkList).toEqual(['a', 'd'])
      expect((wrapper.findComponent({ ref: 'a' }).vm as any).isDisabled).toBe(
        true
      )
    })
  })

  test('nested group', async () => {
    const wrapper = _mount(
      `
      <el-checkbox-group v-model="checkList">
        <div>
          <el-checkbox-button label="a" ref="a"></el-checkbox-button>
          <el-checkbox-button label="b" ref="b"></el-checkbox-button>
          <el-checkbox-button label="c" ref="c"></el-checkbox-button>
          <el-checkbox-button label="d" ref="d"></el-checkbox-button>
        </div>
      </el-checkbox-group>
      `,
      () => ({ checkList: [] })
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(0)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    expect(vm.checkList).toEqual(['a'])
  })

  describe('checked prop', () => {
    test('check', () => {
      const wrapper = _mount(
        `
        <div>
          <el-checkbox-button v-model="checked" checked />
          <el-checkbox-group v-model="checklist">
            <el-checkbox-button checked label="a" />
          </el-checkbox-group>
        </div>
        `,
        () => ({
          checked: false,
          checklist: [],
        })
      )
      expect(wrapper.vm.checked).toBe(true)
      expect(wrapper.vm.checklist).toEqual(['a'])
    })

    test('checked', () => {
      const wrapper = _mount(`<el-checkbox checked />`, () => ({}))
      expect(wrapper.find('.el-checkbox').classes().toString()).toMatch(
        'is-checked'
      )
    })
  })

  describe('form item accessibility integration', () => {
    test('checkbox, no label, automatic label attachment', async () => {
      const wrapper = _mount(
        `
        <el-form-item ref="item" label="Test">
          <el-checkbox ref="checkbox" />
        </el-form-item>
        `,
        () => ({})
      )
      await nextTick()
      const formItem = await wrapper.findComponent({ ref: 'item' })
      const checkbox = await wrapper.findComponent({ ref: 'checkbox' })
      const formItemLabel = formItem.find('.el-form-item__label')
      const checkboxInput = checkbox.find('.el-checkbox__original')
      expect(checkboxInput.attributes().id).toBe(formItemLabel.attributes().for)
    })

    test('checkbox with label, form item is group', async () => {
      const wrapper = _mount(
        `
        <el-form-item ref="item" label="Test">
          <el-checkbox label="Foo" ref="checkbox" />
        </el-form-item>
        `,
        () => ({})
      )
      await nextTick()
      const formItem = await wrapper.findComponent({ ref: 'item' })
      const checkbox = await wrapper.findComponent({ ref: 'checkbox' })
      const checkboxLabel = checkbox.find('.el-checkbox__label')
      const checkboxInput = checkbox.find('.el-checkbox__original')
      expect(checkboxLabel.element.textContent).toBe('Foo')
      expect(checkboxInput.attributes().id).toBeFalsy()
      expect(formItem.attributes().role).toBe('group')
    })

    test('single checkbox group in form item', async () => {
      const wrapper = _mount(
        `
        <el-form-item ref="item" label="Test">
          <el-checkbox-group ref="checkboxGroup">
            <el-checkbox label="Foo" />
            <el-checkbox label="Bar" />
          </el-checkbox-group>
        </el-form-item>
        `,
        () => ({})
      )
      await nextTick()
      const formItem = await wrapper.findComponent({ ref: 'item' })
      const checkboxGroup = await wrapper.findComponent({
        ref: 'checkboxGroup',
      })
      const formItemLabel = formItem.find('.el-form-item__label')
      expect(formItem.attributes().role).toBeFalsy()
      expect(checkboxGroup.attributes().role).toBe('group')
      expect(formItemLabel.attributes().for).toBe(checkboxGroup.attributes().id)
      expect(formItemLabel.attributes().id).toBe(
        checkboxGroup.attributes()['aria-labelledby']
      )
    })

    test('single checkbox group in form item, override label', async () => {
      const wrapper = _mount(
        `
        <el-form-item ref="item" label="Test">
          <el-checkbox-group label="Foo" ref="checkboxGroup">
            <el-checkbox label="Foo" />
            <el-checkbox label="Bar" />
          </el-checkbox-group>
        </el-form-item>
        `,
        () => ({})
      )
      await nextTick()
      const formItem = await wrapper.findComponent({ ref: 'item' })
      const checkboxGroup = await wrapper.findComponent({
        ref: 'checkboxGroup',
      })
      const formItemLabel = formItem.find('.el-form-item__label')
      expect(formItemLabel.attributes().for).toBe(checkboxGroup.attributes().id)
      expect(checkboxGroup.attributes().role).toBe('group')
      expect(checkboxGroup.attributes()['aria-label']).toBe('Foo')
      expect(checkboxGroup.attributes()['aria-labelledby']).toBeFalsy()
    })

    test('multiple checkbox groups in form item', async () => {
      const wrapper = _mount(
        `
        <el-form-item ref="item" label="Test">
          <el-checkbox-group label="Foo" ref="checkboxGroup1">
            <el-checkbox label="Foo" />
            <el-checkbox label="Bar" />
          </el-checkbox-group>
          <el-checkbox-group label="Bar" ref="checkboxGroup2">
            <el-checkbox label="Foo" />
            <el-checkbox label="Bar" />
          </el-checkbox-group>
        </el-form-item>
        `,
        () => ({})
      )
      await nextTick()
      const formItem = await wrapper.findComponent({ ref: 'item' })
      const checkboxGroup1 = await wrapper.findComponent({
        ref: 'checkboxGroup1',
      })
      const checkboxGroup2 = await wrapper.findComponent({
        ref: 'checkboxGroup2',
      })
      const formItemLabel = formItem.find('.el-form-item__label')
      expect(formItem.attributes().role).toBe('group')
      expect(formItem.attributes()['aria-labelledby']).toBe(
        formItemLabel.attributes().id
      )
      expect(checkboxGroup1.attributes().role).toBe('group')
      expect(checkboxGroup1.attributes()['aria-label']).toBe('Foo')
      expect(checkboxGroup1.attributes()['aria-labelledby']).toBeFalsy()
      expect(checkboxGroup2.attributes().role).toBe('group')
      expect(checkboxGroup2.attributes()['aria-label']).toBe('Bar')
      expect(checkboxGroup2.attributes()['aria-labelledby']).toBeFalsy()
    })
  })
})
