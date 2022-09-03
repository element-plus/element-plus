import { markRaw, nextTick, ref } from 'vue'
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
    const props = {
      activeText: 'on',
      inactiveText: 'off',
      activeColor: '#0f0',
      inactiveColor: '#f00',
      indeterminateColor: '#00f',
      width: 100,
    }
    const wrapper = mount(() => <Switch {...props} />)
    const vm = wrapper.vm
    expect(vm.$el.style.getPropertyValue('--el-switch-on-color')).toEqual(
      '#0f0'
    )
    expect(vm.$el.style.getPropertyValue('--el-switch-off-color')).toEqual(
      '#f00'
    )
    expect(
      vm.$el.style.getPropertyValue('--el-switch-indeterminate-color')
    ).toEqual('#00f')
    expect(vm.$el.classList.contains('is-checked')).false
    const coreEl = vm.$el.querySelector('.el-switch__core')
    expect(coreEl.style.width).toEqual('100px')
    const leftLabelWrapper = wrapper.find('.el-switch__label--left span')
    expect(leftLabelWrapper.text()).toEqual('off')
  })

  test('size', () => {
    const wrapper = mount(() => <Switch size="large" />)
    expect(wrapper.find('.el-switch--large').exists()).toBe(true)
  })

  test('tabindex', () => {
    const wrapper = mount(() => <Switch tabindex="0" />)
    expect(wrapper.find('.el-switch__input').attributes().tabindex).toBe('0')
  })

  test('inline prompt', async () => {
    const indeterminate = ref(false)
    const props = {
      inlinePrompt: true,
      activeText: 'on',
      inactiveText: 'off',
      activeColor: '#0f0',
      inactiveColor: '#f00',
      indeterminateColor: '#00f',
      width: 100,
    }
    const wrapper = mount(() => (
      <Switch {...props} indeterminate={indeterminate.value} />
    ))
    const vm = wrapper.vm
    expect(vm.$el.style.getPropertyValue('--el-switch-on-color')).toEqual(
      '#0f0'
    )
    expect(vm.$el.style.getPropertyValue('--el-switch-off-color')).toEqual(
      '#f00'
    )
    expect(
      vm.$el.style.getPropertyValue('--el-switch-indeterminate-color')
    ).toEqual('#00f')
    expect(vm.$el.classList.contains('is-checked')).false
    const coreEl = vm.$el.querySelector('.el-switch__core')
    expect(coreEl.style.width).toEqual('100px')
    const leftLabelWrapper = wrapper.find('.el-switch__inner span')
    expect(leftLabelWrapper.text()).toEqual('on')

    expect(wrapper.find('.el-switch__inner').exists()).toEqual(true)
    indeterminate.value = true
    await vm.$nextTick()
    expect(wrapper.find('.el-switch__inner').exists()).toEqual(false)
  })

  test('switch with icons', async () => {
    const indeterminate = ref(false)
    const wrapper = mount(() => (
      <Switch
        activeIcon={markRaw(Checked)}
        inactiveIcon={markRaw(CircleClose)}
        indeterminate={indeterminate.value}
      />
    ))

    expect(wrapper.findComponent(Checked).exists()).toBe(true)

    expect(wrapper.find('.el-switch__label--left.is-active').exists()).toEqual(
      true
    )
    indeterminate.value = true
    await wrapper.vm.$nextTick()
    expect(wrapper.find('.el-switch__label--left.is-active').exists()).toEqual(
      false
    )
  })

  test('value correctly update', async () => {
    const value = ref(true)
    const indeterminate = ref(false)
    const wrapper = mount(() => (
      <Switch
        v-model={value.value}
        activeColor="#0f0"
        inactiveColor="#f00"
        indeterminate={indeterminate.value}
      />
    ))
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
    expect(value.value).toEqual(false)
    await coreWrapper.trigger('click')
    expect(vm.$el.classList.contains('is-checked')).true
    expect(value.value).toEqual(true)

    indeterminate.value = true
    await wrapper.vm.$nextTick()
    await coreWrapper.trigger('click')
    expect(vm.$el.classList.contains('is-checked')).false
    expect(value.value).toEqual(false)
    await coreWrapper.trigger('click')
    expect(vm.$el.classList.contains('is-indeterminate')).true
    expect(value.value).toEqual(null)
    await coreWrapper.trigger('click')
    expect(vm.$el.classList.contains('is-checked')).true
    expect(value.value).toEqual(true)
  })

  test('change event', async () => {
    const target = ref<string | number | boolean>(1)
    const value = ref(true)
    const handleChange = (val: string | number | boolean) => {
      target.value = val
    }
    const wrapper = mount(() => (
      <Switch v-model={value.value} onUpdate:modelValue={handleChange} />
    ))

    expect(target.value).toEqual(1)
    const coreWrapper = wrapper.find('.el-switch__core')
    await coreWrapper.trigger('click')
    const switchWrapper = wrapper.findComponent(Switch)
    expect(switchWrapper.emitted()['update:modelValue']).toBeTruthy()
    expect(target.value).toEqual(false)
  })

  test('disabled switch should not respond to user click', async () => {
    const value = ref(true)
    const wrapper = mount(() => <Switch disabled v-model={value.value} />)

    expect(value.value).toEqual(true)
    const coreWrapper = wrapper.find('.el-switch__core')
    await coreWrapper.trigger('click')
    expect(value.value).toEqual(true)
  })

  test('expand switch value', async () => {
    const value = ref('100')
    const onValue = ref('100')
    const offValue = ref('0')
    const indeterminateValue = ref('50')
    const indeterminate = ref(false)
    const wrapper = mount(() => (
      <div>
        <Switch
          indeterminate={indeterminate.value}
          v-model={value.value}
          active-value={onValue.value}
          inactive-value={offValue.value}
          indeterminate-value={indeterminateValue.value}
        />
      </div>
    ))

    const coreWrapper = wrapper.find('.el-switch__core')
    await coreWrapper.trigger('click')
    expect(value.value).toEqual('0')
    await coreWrapper.trigger('click')
    expect(value.value).toEqual('100')

    indeterminate.value = true
    await wrapper.vm.$nextTick()
    await coreWrapper.trigger('click')
    expect(value.value).toEqual('0')
    await coreWrapper.trigger('click')
    expect(value.value).toEqual('50')
    await coreWrapper.trigger('click')
    expect(value.value).toEqual('100')
  })

  test('default switch active-value is false', async () => {
    const value = ref(false)
    const onValue = ref(false)
    const offValue = ref(true)
    const wrapper = mount(() => (
      <div>
        <Switch
          v-model={value.value}
          active-value={onValue.value}
          inactive-value={offValue.value}
        />
      </div>
    ))

    const coreWrapper = wrapper.find('.el-switch__core')
    await coreWrapper.trigger('click')
    expect(value.value).toEqual(true)
    await coreWrapper.trigger('click')
    expect(value.value).toEqual(false)
  })

  test('value is the single source of truth', async () => {
    const wrapper = mount(() => <Switch value={true} />)

    const vm = wrapper.vm
    const coreWrapper = wrapper.find('.el-switch__core')
    const switchWrapper: VueWrapper<SwitchInstance> =
      wrapper.findComponent(Switch)
    const switchVm = switchWrapper.vm
    const inputEl = vm.$el.querySelector('input')

    expect(switchVm.$.exposed?.checked.value).toBe(true)
    expect(switchWrapper.classes('is-checked')).toEqual(true)
    expect(inputEl.checked).toEqual(true)
    await coreWrapper.trigger('click')
    expect(switchVm.$.exposed?.checked.value).toBe(true)
    expect(switchWrapper.classes('is-checked')).toEqual(true)
    expect(inputEl.checked).toEqual(true)
  })

  test('model-value is the single source of truth', async () => {
    const wrapper = mount(() => <Switch model-value={true} />)

    const vm = wrapper.vm
    const coreWrapper = wrapper.find('.el-switch__core')
    const switchWrapper: VueWrapper<SwitchInstance> =
      wrapper.findComponent(Switch)
    const switchVm = switchWrapper.vm
    const inputEl = vm.$el.querySelector('input')

    expect(switchVm.$.exposed?.checked.value).toBe(true)
    expect(switchWrapper.classes('is-checked')).toEqual(true)
    expect(inputEl.checked).toEqual(true)
    await coreWrapper.trigger('click')
    expect(switchVm.$.exposed?.checked.value).toBe(true)
    expect(switchWrapper.classes('is-checked')).toEqual(true)
    expect(inputEl.checked).toEqual(true)
  })

  test('sets checkbox value', async () => {
    const value = ref(false)
    const wrapper = mount(() => (
      <div>
        <Switch v-model={value.value} />
      </div>
    ))
    const vm = wrapper.vm
    const inputEl = vm.$el.querySelector('input')

    value.value = true
    await vm.$nextTick()
    expect(inputEl.checked).toEqual(true)
    value.value = false
    await vm.$nextTick()
    expect(inputEl.checked).toEqual(false)
  })

  test('beforeChange function return promise', async () => {
    const value = ref(true)
    const loading = ref(false)
    const asyncResult = ref('error')
    const beforeChange = () => {
      loading.value = true
      return new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
          loading.value = false
          return asyncResult.value == 'success'
            ? resolve(true)
            : reject(new Error('Error'))
        }, 1000)
      })
    }
    const wrapper = mount(() => (
      <div>
        <Switch
          v-model={value.value}
          loading={loading.value}
          beforeChange={beforeChange}
        />
      </div>
    ))

    const coreWrapper = wrapper.find('.el-switch__core')

    vi.useFakeTimers()

    await coreWrapper.trigger('click')
    vi.runAllTimers()
    await nextTick()
    expect(value.value).toEqual(true)
    expect(debugWarn).toHaveBeenCalledTimes(0)

    asyncResult.value = 'success'

    await coreWrapper.trigger('click')
    vi.runAllTimers()
    await nextTick()
    expect(value.value).toEqual(false)
    expect(debugWarn).toHaveBeenCalledTimes(1)

    await coreWrapper.trigger('click')
    vi.runAllTimers()
    await nextTick()
    expect(value.value).toEqual(true)
    expect(debugWarn).toHaveBeenCalledTimes(1)
  })

  test('beforeChange function return boolean', async () => {
    const value = ref(true)
    const result = ref(false)
    const beforeChange = () => {
      // do something ...
      return result.value
    }
    const wrapper = mount(() => (
      <div>
        <Switch v-model={value.value} beforeChange={beforeChange} />
      </div>
    ))

    const coreWrapper = wrapper.find('.el-switch__core')

    await coreWrapper.trigger('click')
    expect(value.value).toEqual(true)

    result.value = true

    await coreWrapper.trigger('click')
    expect(value.value).toEqual(false)

    await coreWrapper.trigger('click')
    expect(value.value).toEqual(true)
  })

  describe('form item accessibility integration', () => {
    test('automatic id attachment', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <Switch />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const switchInput = wrapper.find('.el-switch__input')
      expect(formItem.attributes().role).toBeFalsy()
      expect(formItemLabel.attributes().for).toBe(switchInput.attributes().id)
    })

    test('specified id attachment', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <Switch id="foobar" />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      const formItemLabel = formItem.find('.el-form-item__label')
      const switchInput = wrapper.find('.el-switch__input')
      expect(formItem.attributes().role).toBeFalsy()
      expect(switchInput.attributes().id).toBe('foobar')
      expect(formItemLabel.attributes().for).toBe(switchInput.attributes().id)
    })

    test('form item role is group when multiple inputs', async () => {
      const wrapper = mount(() => (
        <ElFormItem label="Foobar" data-test-ref="item">
          <Switch />
          <Switch />
        </ElFormItem>
      ))

      await nextTick()
      const formItem = wrapper.find('[data-test-ref="item"]')
      expect(formItem.attributes().role).toBe('group')
    })
  })
})
