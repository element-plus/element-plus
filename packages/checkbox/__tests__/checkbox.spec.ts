import { mount } from '@vue/test-utils'
import Checkbox from '../src/checkbox.vue'
import CheckboxButton from '../src/checkbox-button.vue'
import CheckboxGroup from '../src/checkbox-group.vue'

const _mount = <T={data: any; checkList: [];}>(template: string, data, otherObj?) => mount<T>({
  components: {
    'el-checkbox': Checkbox,
    'el-checkbox-group': CheckboxGroup,
    'el-checkbox-button': CheckboxButton,
  },
  template,
  data,
  ...otherObj,
}, {
  global: {
    provide: {
      elForm: {},
      elFormItem: {},
      CheckboxGroup: {},
    },
  },
})

describe('Checkbox', () => {
  test('create', async (done) => {
    const wrapper = _mount('<el-checkbox v-model="checkbox" label="a"/>', () => ({ checkbox: false }))
    const vm = wrapper.vm
    expect(wrapper.classes()).toContain('el-checkbox')
    await wrapper.trigger('click')
    vm.$nextTick(async () => {
      expect(wrapper.classes()).toContain('is-checked')
      await wrapper.trigger('click')
      expect(wrapper.classes()).not.toContain('is-checked')
      done()
    })
  })

  test('disabled', async (done) => {
    const wrapper = _mount('<el-checkbox v-model="checkbox" disabled label="a"/>', () => ({ checkbox: false }))
    const vm = wrapper.vm
    expect(wrapper.classes()).toContain('is-disabled')
    await wrapper.trigger('click')
    vm.$nextTick(() => {
      expect(wrapper.classes()).toContain('is-disabled')
      done()
    })
  })

  test('change event', async (done) => {
    const wrapper = _mount(
      `
      <el-checkbox v-model="checked" @change="onChange" />
      `,
      () => ({
        data: '',
        checked: false,
      }),
      {
        methods: {
          onChange(val) {
            this.data = val
          },
        },
      },
    )

    const vm = wrapper.vm
    /**
     * wrapper.trigger cannot trigger click event immediatly
     */
    // vm.$el.click()
    await wrapper.trigger('click')
    vm.$nextTick(() => {
      expect(vm.data).toBe(true)
      done()
    })
  })

  test('checkbox group', async (done) => {
    const wrapper = _mount(
      `
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="a" ref="a"></el-checkbox>
        <el-checkbox label="b" ref="b"></el-checkbox>
        <el-checkbox label="c" ref="c"></el-checkbox>
        <el-checkbox label="d" ref="d"></el-checkbox>
      </el-checkbox-group>
      `,
      () => ({ checkList: [] }),
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(0)
    ;(vm.$refs.a as any).$el.click()
    vm.$nextTick(() => {
      expect(vm.checkList.length).toBe(1)
      expect(vm.checkList).toContain('a')
      ;(vm.$refs.b as any).$el.click()
      vm.$nextTick(() => {
        expect(vm.checkList.length).toBe(2)
        expect(vm.checkList).toContain('a')
        expect(vm.checkList).toContain('b')
        done()
      })
    })
  })

  test('group change', async done => {
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
        data: '',
        checkList: [],
      }),
      {
        methods: {
          onChange(val) {
            this.data = val
          },
        },
      },
    )
    const vm = wrapper.vm
    ;(vm.$refs.a as any).$el.click()
    vm.$nextTick(() => {
      expect(vm.data).toEqual(['a'])
      ;(vm.$refs.b as any).$el.click()
      vm.$nextTick(() => {
        expect(vm.data).toEqual(['a', 'b'])
        done()
      })
    })
  })

  test('group props', () => {
    const wrapper = _mount(
      `
      <el-checkbox-group v-model="checkList" size="large" fill="#FF0000" text-color="#000">
        <el-checkbox-button label="a" ref="a"></el-checkbox-button>
        <el-checkbox-button label="b" ref="b"></el-checkbox-button>
        <el-checkbox-button label="c" ref="c"></el-checkbox-button>
        <el-checkbox-button label="d" ref="d"></el-checkbox-button>
      </el-checkbox-group>
      `,
      () => ({ checkList: ['a', 'b'] }),
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(2)
    expect((vm.$refs.a as any).$el.classList.contains('is-checked')).toBe(true)
    expect((vm.$refs.a as any).$el.querySelector('.el-checkbox-button__inner').style.borderColor).toEqual('#ff0000')
  })

  test('min and max', done => {
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
      }),
    )
    const vm = wrapper.vm
    expect(vm.checkList.length).toBe(1)
    ;(vm.$refs.a as any).$el.click()
    vm.$nextTick(() => {
      expect(vm.checkList.length).toBe(1)
      ;(vm.$refs.b as any).$el.click()
      vm.$nextTick(() => {
        expect(vm.checkList.length).toBe(2)
        ;(vm.$refs.c as any).$el.click()
        vm.$nextTick(() => {
          expect(vm.checkList.length).toBe(2)
          expect(vm.checkList).toEqual(['a', 'b'])
          done()
        })
      })
    })
  })
})
