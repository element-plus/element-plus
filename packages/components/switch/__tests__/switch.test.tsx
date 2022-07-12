// @ts-nocheck
import { markRaw, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { debugWarn } from '@element-plus/utils'
import { Checked, CircleClose } from '@element-plus/icons-vue'
import { ElFormItem } from '@element-plus/components/form'
import Switch from '../src/switch.vue'
import type { VueWrapper } from '@vue/test-utils'
import type { SwitchInstance } from '../src/switch'

vi.mock('@element-plus/utils/error', () => ({
  debugWarn: vi.fn(),
}))

describe('Switch.vue', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

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
    expect(vm.$el.style.getPropertyValue('--el-switch-on-color')).toEqual(
      '#0f0'
    )
    expect(vm.$el.style.getPropertyValue('--el-switch-off-color')).toEqual(
      '#f00'
    )
    expect(vm.$el.classList.contains('is-checked')).false
    const coreEl = vm.$el.querySelector('.el-switch__core')
    expect(coreEl.style.width).toEqual('100px')
    const leftLabelWrapper = wrapper.find('.el-switch__label--left span')
    expect(leftLabelWrapper.text()).toEqual('off')
  })

  test('size', () => {
    const wrapper = mount(Switch, {
      props: {
        size: 'large',
      },
    })
    expect(wrapper.find('.el-switch--large').exists()).toBe(true)
  })

  test('tabindex', () => {
    const wrapper = mount(Switch, {
      props: {
        tabindex: '0',
      },
    })
    expect(wrapper.find('.el-switch__input').attributes().tabindex).toBe('0')
  })

  test('inline prompt', () => {
    const wrapper = mount(Switch, {
      props: {
        inlinePrompt: true,
        activeText: 'on',
        inactiveText: 'off',
        activeColor: '#0f0',
        inactiveColor: '#f00',
        width: 100,
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.style.getPropertyValue('--el-switch-on-color')).toEqual(
      '#0f0'
    )
    expect(vm.$el.style.getPropertyValue('--el-switch-off-color')).toEqual(
      '#f00'
    )
    expect(vm.$el.classList.contains('is-checked')).false
    const coreEl = vm.$el.querySelector('.el-switch__core')
    expect(coreEl.style.width).toEqual('100px')
    const leftLabelWrapper = wrapper.find('.el-switch__inner span')
    expect(leftLabelWrapper.text()).toEqual('on')
  })

  test('switch with icons', () => {
    const wrapper = mount(Switch, {
      props: {
        activeIcon: markRaw(Checked),
        inactiveIcon: markRaw(CircleClose),
      },
    })

    expect(wrapper.findComponent(Checked).exists()).toBe(true)
  })

  test('value correctly update', async () => {
    const wrapper = mount({
      components: {
        'el-switch': Switch,
      },
      template: `
        <el-switch
          v-model="value"
          activeColor="#0f0"
          inactiveColor="#f00">
        </el-switch>
      `,
      data() {
        return {
          value: true,
        }
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.style.getPropertyValue('--el-switch-on-color')).toEqual(
      '#0f0'
    )
    expect(vm.$el.style.getPropertyValue('--el-switch-off-color')).toEqual(
      '#f00'
    )
    expect(vm.$el.classList.contains('is-checked')).true
    const coreWrapper = wrapper.find('.el-switch__core')
    await coreWrapper.trigger('click')
    expect(vm.$el.classList.contains('is-checked')).false
    expect(vm.value).toEqual(false)
    await coreWrapper.trigger('click')
    expect(vm.$el.classList.contains('is-checked')).true
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
        handleChange(val: boolean) {
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

  test('default switch active-value is false', async () => {
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
          value: false,
          onValue: false,
          offValue: true,
        }
      },
    })
    const vm = wrapper.vm

    const coreWrapper = wrapper.find('.el-switch__core')
    await coreWrapper.trigger('click')
    expect(vm.value).toEqual(true)
    await coreWrapper.trigger('click')
    expect(vm.value).toEqual(false)
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
    const switchWrapper: VueWrapper<SwitchInstance> =
      wrapper.findComponent(Switch)
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
    const switchWrapper: VueWrapper<SwitchInstance> =
      wrapper.findComponent(Switch)
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
                : reject(new Error('Error'))
            }, 1000)
          })
        },
      },
    })
    const vm = wrapper.vm

    const coreWrapper = wrapper.find('.el-switch__core')

    vi.useFakeTimers()

    await coreWrapper.trigger('click')
    vi.runAllTimers()
    await nextTick()
    expect(vm.value).toEqual(true)
    expect(debugWarn).toHaveBeenCalledTimes(0)

    vm.asyncResult = 'success'

    await coreWrapper.trigger('click')
    vi.runAllTimers()
    await nextTick()
    expect(vm.value).toEqual(false)
    expect(debugWarn).toHaveBeenCalledTimes(1)

    await coreWrapper.trigger('click')
    vi.runAllTimers()
    await nextTick()
    expect(vm.value).toEqual(true)
    expect(debugWarn).toHaveBeenCalledTimes(1)
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

  describe('form item accessibility integration', () => {
    test('automatic id attachment', async () => {
      const wrapper = mount({
        template: `<el-form-item label="Foobar" data-test-ref="item">
            <el-switch />
          </el-form-item>`,
        components: {
          'el-switch': Switch,
          'el-form-item': ElFormItem,
        },
      })

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const switchInput = wrapper.find('.el-switch__input')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(switchInput.attributes().id)
    })

    test('specified id attachment', async () => {
      const wrapper = mount({
        template: `<el-form-item label="Foobar" data-test-ref="item">
            <el-switch id="foobar" />
          </el-form-item>`,
        components: {
          'el-switch': Switch,
          'el-form-item': ElFormItem,
        },
      })

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const switchInput = wrapper.find('.el-switch__input')
      expect(formItem.attributes().role).toBeFalsy()
      expect(switchInput.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(switchInput.attributes().id)
    })

    test('form item role is group when multiple inputs', async () => {
      const wrapper = mount({
        template: `<el-form-item label="Foobar" data-test-ref="item">
            <el-switch />
            <el-switch />
          </el-form-item>`,
        components: {
          'el-switch': Switch,
          'el-form-item': ElFormItem,
        },
      })

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      expect(formItem.attributes().role).toBe('group')
    })
  })
})
