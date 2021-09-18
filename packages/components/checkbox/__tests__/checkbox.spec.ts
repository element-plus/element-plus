import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Checkbox from '../src/checkbox.vue'
import CheckboxButton from '../src/checkbox-button.vue'
import CheckboxGroup from '../src/checkbox-group.vue'

const _mount = <D>(
  template: string,
  data: () => D,
  otherObj?: Record<string, unknown>
) =>
  mount<D>({
    components: {
      'el-checkbox': Checkbox,
      'el-checkbox-group': CheckboxGroup,
      'el-checkbox-button': CheckboxButton,
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
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-checked')
    await wrapper.trigger('click')
    expect(wrapper.classes('is-checked')).toBe(false)
  })

  test('no v-model', async () => {
    const wrapper = _mount('<el-checkbox label="a"/>', () => ({
      checkbox: false,
    }))
    expect(wrapper.classes('is-checked')).toBe(false)
  })

  test('disabled', async () => {
    const wrapper = _mount(
      '<el-checkbox v-model="checkbox" disabled label="a"/>',
      () => ({ checkbox: false })
    )
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-disabled')
  })

  test('change event', async () => {
    const wrapper = _mount(
      `<el-checkbox v-model="checked" @change="onChange" />`,
      () => ({
        data: null,
        checked: false,
      }),
      {
        methods: {
          onChange(val: boolean) {
            this.data = val
          },
        },
      }
    )

    const vm = wrapper.vm
    await wrapper.trigger('click')
    expect(vm.data).toBe(true)
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

  test('checkbox group change', async () => {
    const wrapper = _mount(
      `
      <el-checkbox-group v-model="checkList" @change="onChange">
        <el-checkbox label="a" ref="a"></el-checkbox>
        <el-checkbox label="b" ref="b"></el-checkbox>
      </el-checkbox-group>
      `,
      () => ({ checkList: [], data: null }),
      {
        methods: {
          onChange(val: string[]) {
            this.data = val
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

  test('true false label', async () => {
    const wrapper = _mount(
      `<el-checkbox true-label="a" :false-label="3" v-model="checked"></el-checkbox>`,
      () => ({
        checked: 'a',
      })
    )
    const vm = wrapper.vm
    await wrapper.trigger('click')
    expect(vm.checked).toBe(3)
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
      `
      <el-checkbox-button v-model="checked" @change="onChange" />
      `,
      () => ({
        data: '',
        checked: false,
      }),
      {
        methods: {
          onChange(val: boolean) {
            this.data = val
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
            this.data = val
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

  test('button group min and max', async () => {
    const wrapper = _mount(
      `
      <el-checkbox-group
        v-model="checkList"
        :min="1"
        :max="2"
      >
        <el-checkbox-button label="a" ref="a"></el-checkbox-button>
        <el-checkbox-button label="b" ref="b"></el-checkbox-button>
        <el-checkbox-button label="c" ref="c"></el-checkbox-button>
        <el-checkbox-button label="d" ref="d"></el-checkbox-button>
      </el-checkbox-group>
      `,
      () => ({
        checkList: ['a'],
        lastEvent: null,
      })
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(1)
    await wrapper.findComponent({ ref: 'a' }).trigger('click')
    vm.$nextTick(async () => {
      expect(vm.checkList.length).toBe(1)
      await wrapper.findComponent({ ref: 'b' }).trigger('click')
      expect(vm.checkList.length).toBe(2)
      await wrapper.findComponent({ ref: 'c' }).trigger('click')
      expect(vm.checkList.length).toBe(2)
      expect(vm.checkList).toEqual(['a', 'b'])
      expect((wrapper.findComponent({ ref: 'c' }).vm as any).isDisabled).toBe(
        true
      )
      expect((wrapper.findComponent({ ref: 'd' }).vm as any).isDisabled).toBe(
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

  test('true false lable', async () => {
    const wrapper = _mount(
      `<el-checkbox-button true-label="a" :false-label="3" v-model="checked" />`,
      () => ({
        checked: 'a',
      })
    )
    const vm = wrapper.vm
    await wrapper.trigger('click')
    expect(vm.checked).toBe(3)
  })

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
