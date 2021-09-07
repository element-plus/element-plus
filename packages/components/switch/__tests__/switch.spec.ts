import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import Switch from '../src/index.vue'

jest.useFakeTimers()

describe('Switch.vue', () => {
  test('create', () => {
    const wrapper = mount(Switch, {
      props: {
        activeText: 'on',
        inactiveText: 'off',
        activeColor: '#0f0',
        inactiveColor: '#f00',
        width: 100,
      },
    })
    const vm = wrapper.vm
    const coreEl = vm.$el.querySelector('.el-switch__core')
    expect(coreEl.style.backgroundColor).toEqual('rgb(255, 0, 0)')
    expect(coreEl.style.width).toEqual('100px')
    const leftLabelWrapper = wrapper.find('.el-switch__label--left span')
    expect(leftLabelWrapper.text()).toEqual('off')
  })

  test('switch with icons', () => {
    const wrapper = mount(Switch, {
      props: {
        activeIconClass: 'el-icon-check',
        inactiveIconClass: 'el-icon-close',
      },
    })

    const iconWrapper = wrapper.find('.el-switch__label--left i')
    expect(iconWrapper.classes('el-icon-close')).toBe(true)
  })

  test('value correctly update', async () => {
    const wrapper = mount({
      components: {
        'el-switch': Switch,
      },
      template: `
        <div>
          <el-switch
            v-model="value"
            activeColor="#0f0"
            inactiveColor="#f00">
          </el-switch>
        </div>
      `,
      data() {
        return {
          value: true,
        }
      },
    })
    const vm = wrapper.vm
    const coreEl = vm.$el.querySelector('.el-switch__core')
    expect(coreEl.style.backgroundColor).toEqual('rgb(0, 255, 0)')
    const coreWrapper = wrapper.find('.el-switch__core')
    await coreWrapper.trigger('click')
    expect(coreEl.style.backgroundColor).toEqual('rgb(255, 0, 0)')
    expect(vm.value).toEqual(false)
    await coreWrapper.trigger('click')
    expect(vm.value).toEqual(true)
  })

  test('change event', async () => {
    const wrapper = mount({
      components: {
        'el-switch': Switch,
      },
      template: `
        <div>
          <el-switch
            v-model="value"
            @update:modelValue="handleChange">
          </el-switch>
        </div>
      `,
      methods: {
        handleChange(val) {
          this.target = val
        },
      },
      data() {
        return {
          target: 1,
          value: true,
        }
      },
    })
    const vm = wrapper.vm

    expect(vm.target).toEqual(1)
    const coreWrapper = wrapper.find('.el-switch__core')
    await coreWrapper.trigger('click')
    const switchWrapper = wrapper.findComponent(Switch)
    expect(switchWrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(vm.target).toEqual(false)
  })

  test('disabled switch should not respond to user click', async () => {
    const wrapper = mount({
      components: {
        'el-switch': Switch,
      },
      template: `
        <div>
          <el-switch disabled v-model="value"></el-switch>
        </div>
      `,
      data() {
        return {
          value: true,
        }
      },
    })
    const vm = wrapper.vm

    expect(vm.value).toEqual(true)
    const coreWrapper = wrapper.find('.el-switch__core')
    await coreWrapper.trigger('click')
    expect(vm.value).toEqual(true)
  })

  test('expand switch value', async () => {
    const wrapper = mount({
      components: {
        'el-switch': Switch,
      },
      template: `
        <div>
          <el-switch v-model="value" :active-value="onValue" :inactive-value="offValue"></el-switch>
        </div>
      `,
      data() {
        return {
          value: '100',
          onValue: '100',
          offValue: '0',
        }
      },
    })
    const vm = wrapper.vm

    const coreWrapper = wrapper.find('.el-switch__core')
    await coreWrapper.trigger('click')
    expect(vm.value).toEqual('0')
    await coreWrapper.trigger('click')
    expect(vm.value).toEqual('100')
  })

  test('value is the single source of truth', async () => {
    const wrapper = mount({
      components: {
        'el-switch': Switch,
      },
      template: `
        <div>
          <el-switch :value="true"></el-switch>
        </div>
      `,
    })
    const vm = wrapper.vm
    const coreWrapper = wrapper.find('.el-switch__core')
    const switchWrapper = wrapper.findComponent(Switch)
    const switchVm = switchWrapper.vm
    const inputEl = vm.$el.querySelector('input')

    expect(switchVm.checked).toBe(true)
    expect(switchWrapper.classes('is-checked')).toEqual(true)
    expect(inputEl.checked).toEqual(true)
    await coreWrapper.trigger('click')
    expect(switchVm.checked).toBe(true)
    expect(switchWrapper.classes('is-checked')).toEqual(true)
    expect(inputEl.checked).toEqual(true)
  })

  test('model-value is the single source of truth', async () => {
    const wrapper = mount({
      components: {
        'el-switch': Switch,
      },
      template: `
        <div>
          <el-switch :model-value="true"></el-switch>
        </div>
      `,
    })
    const vm = wrapper.vm
    const coreWrapper = wrapper.find('.el-switch__core')
    const switchWrapper = wrapper.findComponent(Switch)
    const switchVm = switchWrapper.vm
    const inputEl = vm.$el.querySelector('input')

    expect(switchVm.checked).toBe(true)
    expect(switchWrapper.classes('is-checked')).toEqual(true)
    expect(inputEl.checked).toEqual(true)
    await coreWrapper.trigger('click')
    expect(switchVm.checked).toBe(true)
    expect(switchWrapper.classes('is-checked')).toEqual(true)
    expect(inputEl.checked).toEqual(true)
  })

  test('sets checkbox value', async () => {
    const wrapper = mount({
      components: {
        'el-switch': Switch,
      },
      template: `
        <div>
          <el-switch v-model="value"></el-switch>
        </div>
      `,
      data() {
        return {
          value: false,
        }
      },
    })
    const vm = wrapper.vm
    const inputEl = vm.$el.querySelector('input')

    vm.value = true
    await vm.$nextTick()
    expect(inputEl.checked).toEqual(true)
    vm.value = false
    await vm.$nextTick()
    expect(inputEl.checked).toEqual(false)
  })

  test('beforeChange function return promise', async () => {
    const wrapper = mount({
      components: {
        'el-switch': Switch,
      },
      template: `
        <div>
          <el-switch
            v-model="value"
            :loading="loading"
            :before-change="beforeChange"
          />
        </div>
      `,
      data() {
        return {
          value: true,
          loading: false,
          asyncResult: 'error',
        }
      },
      methods: {
        beforeChange() {
          this.loading = true
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              this.loading = false
              return this.asyncResult == 'success'
                ? resolve(true)
                : reject(new Error('error'))
            }, 1000)
          })
        },
      },
    })
    const vm = wrapper.vm

    const coreWrapper = wrapper.find('.el-switch__core')

    coreWrapper.trigger('click')
    jest.runAllTimers()
    await nextTick()
    expect(vm.value).toEqual(true)

    vm.asyncResult = 'success'

    coreWrapper.trigger('click')
    jest.runAllTimers()
    await nextTick()
    expect(vm.value).toEqual(false)

    coreWrapper.trigger('click')
    jest.runAllTimers()
    await nextTick()
    expect(vm.value).toEqual(true)
  })

  test('beforeChange function return boolean', async () => {
    const wrapper = mount({
      components: {
        'el-switch': Switch,
      },
      template: `
        <div>
          <el-switch
            v-model="value"
            :before-change="beforeChange"
          />
        </div>
      `,
      data() {
        return {
          value: true,
          result: false,
        }
      },
      methods: {
        beforeChange() {
          // do something ...
          return this.result
        },
      },
    })
    const vm = wrapper.vm

    const coreWrapper = wrapper.find('.el-switch__core')

    await coreWrapper.trigger('click')
    expect(vm.value).toEqual(true)

    vm.result = true

    await coreWrapper.trigger('click')
    expect(vm.value).toEqual(false)

    await coreWrapper.trigger('click')
    expect(vm.value).toEqual(true)
  })
})
