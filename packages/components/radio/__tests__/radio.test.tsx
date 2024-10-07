import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it, test } from 'vitest'
import { ElFormItem } from '@element-plus/components/form'
import Radio from '../src/radio.vue'
import RadioGroup from '../src/radio-group.vue'
import RadioButton from '../src/radio-button.vue'

import type { RadioProps } from '../src/radio'

describe('Radio', () => {
  test('create', async () => {
    const radio = ref('')
    const wrapper = mount(() => <Radio v-model={radio.value} label="a" />)
    expect(wrapper.classes()).toContain('el-radio')
    await wrapper.trigger('click')
    expect(wrapper.classes()).toContain('is-checked')
  })

  test('disabled', async () => {
    const radio = ref('')
    const wrapper = mount(() => (
      <Radio v-model={radio.value} label="3" disabled />
    ))
    await wrapper.trigger('click')
    expect(radio.value).toBe('')
    expect(wrapper.classes()).toContain('is-disabled')
  })

  test('border', () => {
    const radio = ref('')
    const wrapper = mount(() => (
      <Radio v-model={radio.value} label="3" border />
    ))
    expect(wrapper.classes()).toContain('is-bordered')
  })

  test('change event', async () => {
    const radio = ref('')
    const changeData = ref<RadioProps['modelValue']>('')
    function handleChange(val: RadioProps['modelValue']) {
      changeData.value = val
    }
    const wrapper = mount(() => (
      <Radio v-model={radio.value} label="3" onChange={handleChange} />
    ))
    await wrapper.trigger('click')
    await nextTick()
    expect(changeData.value).toEqual('3')
  })

  test('change event only triggers on user input', async () => {
    const radio = ref('')
    const changeData = ref<RadioProps['modelValue']>('')
    function handleChange(val: RadioProps['modelValue']) {
      changeData.value = val
    }
    mount(() => (
      <Radio v-model={radio.value} label="3" onChange={handleChange} />
    ))
    radio.value = '3'
    await nextTick()
    expect(changeData.value).toEqual('')
    expect(radio.value).toEqual('3')
  })
})

describe('Radio group', () => {
  it('create', async () => {
    const radio = ref(3)
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value}>
        <Radio value={3} ref="radio1">
          3
        </Radio>
        <Radio value={6} ref="radio2">
          6
        </Radio>
        <Radio value={9}>9</Radio>
      </RadioGroup>
    ))
    await nextTick()
    const [radio1, radio2] = wrapper.findAll('.el-radio')
    expect(radio1.classes()).toContain('is-checked')
    await radio2.trigger('click')
    expect(radio2.classes()).toContain('is-checked')
    expect(radio.value).toEqual(6)
  })

  it('id auto derive', async () => {
    const radioValue1 = ref(3)
    const wrapper1 = mount(() => (
      <RadioGroup v-model={radioValue1.value}>
        <Radio value={3} ref="radio1">
          3
        </Radio>
        <Radio value={6} ref="radio2">
          6
        </Radio>
        <Radio value={9}>9</Radio>
      </RadioGroup>
    ))

    const radioValue2 = ref(3)
    const wrapper2 = mount(() => (
      <RadioGroup v-model={radioValue2.value}>
        <Radio value={3} ref="radio1">
          3
        </Radio>
        <Radio value={6} ref="radio2">
          6
        </Radio>
        <Radio value={9}>9</Radio>
      </RadioGroup>
    ))

    const id1 = wrapper1.find('.el-radio').find('input').attributes('name')
    const id2 = wrapper2.find('.el-radio').find('input').attributes('name')

    expect(id1).not.toEqual(id2)
  })

  it('disabled', async () => {
    const radio = ref(3)
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value} disabled>
        <Radio value={3} ref="radio1">
          3
        </Radio>
        <Radio value={6} ref="radio2">
          6
        </Radio>
        <Radio value={9}>9</Radio>
      </RadioGroup>
    ))
    expect(wrapper.find('label.is-disabled').exists()).toBe(true)

    const [radio1, radio2] = wrapper.findAll('.el-radio')
    expect(radio1.classes()).toContain('is-checked')
    await radio2.trigger('click')
    expect(radio.value).toEqual(3)
    expect(radio1.classes()).toContain('is-checked')
  })

  it('change event', async () => {
    const radio = ref(3)
    const data = ref<RadioProps['modelValue']>(0)
    function onChange(val: RadioProps['modelValue']) {
      data.value = val
    }
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value} onChange={onChange}>
        <Radio value={3}>3</Radio>
        <Radio value={6} ref="radio2">
          6
        </Radio>
        <Radio value={9}>9</Radio>
      </RadioGroup>
    ))
    const radio2 = wrapper.findAll('.el-radio').at(1)
    await radio2?.trigger('click')
    await nextTick()
    expect(data.value).toEqual(6)
  })

  it('change event only triggers on user input', async () => {
    const radio = ref(3)
    const data = ref<RadioProps['modelValue']>(0)
    function onChange(val: RadioProps['modelValue']) {
      data.value = val
    }
    mount(() => (
      <RadioGroup v-model={radio.value} onChange={onChange}>
        <Radio value={3}>3</Radio>
        <Radio value={6} ref="radio2">
          6
        </Radio>
        <Radio value={9}>9</Radio>
      </RadioGroup>
    ))

    radio.value = 6
    await nextTick()
    expect(data.value).toEqual(0)
  })

  it('disabled when children is radio button', async () => {
    const radio = ref(3)
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value} disabled>
        <RadioButton value={3} ref="radio1">
          3
        </RadioButton>
        <RadioButton value={6} ref="radio2">
          6
        </RadioButton>
        <RadioButton value={9}>9</RadioButton>
      </RadioGroup>
    ))

    const [radio1, radio2] = wrapper.findAll('.el-radio-button')
    expect(radio1.classes()).toContain('is-active')
    expect(wrapper.findAll('.is-disabled').length).toBe(3)
    await radio2.trigger('click')
    expect(radio.value).toEqual(3)
    expect(radio1.classes()).toContain('is-active')
  })
})

describe('Radio Button', () => {
  it('create', async () => {
    const radio = ref(3)
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value}>
        <RadioButton value={3} ref="radio1">
          3
        </RadioButton>
        <RadioButton value={6} ref="radio2">
          6
        </RadioButton>
        <RadioButton value={9}>9</RadioButton>
      </RadioGroup>
    ))
    const [radio1, radio2] = wrapper.findAll('.el-radio-button')
    expect(radio1.classes()).toContain('is-active')
    await radio2.trigger('click')
    expect(radio2.classes()).toContain('is-active')
    expect(radio.value).toEqual(6)
  })

  it('custom color', () => {
    const radio = ref(3)
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value} fill="#000" text-color="#ff0">
        <RadioButton value={3} ref="radio1">
          3
        </RadioButton>
        <RadioButton value={6} ref="radio2">
          6
        </RadioButton>
        <RadioButton value={9}>9</RadioButton>
      </RadioGroup>
    ))
    const radio1 = wrapper.find('.el-radio-button')
    expect(radio1.find('span').attributes('style')).toContain(
      'background-color: rgb(0, 0, 0); border-color: #000; box-shadow: -1px 0 0 0 #000; color: rgb(255, 255, 0);'
    )
  })

  it('change event', async () => {
    const radio = ref(3)
    const data = ref<RadioProps['modelValue']>(0)
    function onChange(val: RadioProps['modelValue']) {
      data.value = val
    }
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value} onChange={onChange}>
        <RadioButton value={3} ref="radio1">
          3
        </RadioButton>
        <RadioButton value={6} ref="radio2">
          6
        </RadioButton>
        <RadioButton value={9}>9</RadioButton>
      </RadioGroup>
    ))
    const radio2 = wrapper.findAll('.el-radio-button').at(1)
    await radio2?.trigger('click')
    expect(radio.value).toEqual(6)
  })

  it('change event only triggers on user input', async () => {
    const radio = ref(3)
    const data = ref<RadioProps['modelValue']>(0)
    function onChange(val: RadioProps['modelValue']) {
      data.value = val
    }
    mount(() => (
      <RadioGroup v-model={radio.value} onChange={onChange}>
        <RadioButton value={3} ref="radio1">
          3
        </RadioButton>
        <RadioButton value={6} ref="radio2">
          6
        </RadioButton>
        <RadioButton value={9}>9</RadioButton>
      </RadioGroup>
    ))

    radio.value = 6
    await nextTick()
    expect(data.value).toEqual(0)
  })

  it('size', () => {
    const radio = ref(3)
    const wrapper = mount(() => (
      <RadioGroup v-model={radio.value} size="large">
        <RadioButton value={3} ref="radio1">
          3
        </RadioButton>
        <RadioButton value={6} ref="radio2">
          6
        </RadioButton>
        <RadioButton value={9}>9</RadioButton>
      </RadioGroup>
    ))
    expect(wrapper.findAll('.el-radio-button--large').length).toBe(3)
  })

  describe('form item accessibility integration', () => {
    test('single radio group in form item', async () => {
      const wrapper = mount(() => (
        <ElFormItem ref="item" label="Test">
          <RadioGroup ref="radioGroup">
            <Radio label="Foo" value="Foo" />
            <Radio label="Bar" value="Bar" />
          </RadioGroup>
        </ElFormItem>
      ))
      await nextTick()
      const formItem = await wrapper.findComponent(ElFormItem)
      const radioGroup = await wrapper.findComponent(RadioGroup)
      const formItemLabel = formItem.find('.el-form-item__label')
      expect(formItem.attributes().role).toBeFalsy()
      expect(radioGroup.attributes().role).toBe('radiogroup')
      expect(formItemLabel.attributes().for).toBe(radioGroup.attributes().id)
      expect(formItemLabel.attributes().id).toBe(
        radioGroup.attributes()['aria-labelledby']
      )
    })

    test('single radio group in form item, override label', async () => {
      const wrapper = mount(() => (
        <ElFormItem ref="item" label="Test">
          <RadioGroup aria-label="Foo" ref="radioGroup">
            <Radio label="Foo" value="Foo" />
            <Radio label="Bar" value="Bar" />
          </RadioGroup>
        </ElFormItem>
      ))
      await nextTick()
      const formItem = await wrapper.findComponent(ElFormItem)
      const radioGroup = await wrapper.findComponent(RadioGroup)
      const formItemLabel = formItem.find('.el-form-item__label')
      expect(formItemLabel.attributes().for).toBe(radioGroup.attributes().id)
      expect(radioGroup.attributes().role).toBe('radiogroup')
      expect(radioGroup.attributes()['aria-label']).toBe('Foo')
      expect(radioGroup.attributes()['aria-labelledby']).toBeFalsy()
    })

    test('multiple radio groups in form item', async () => {
      const wrapper = mount(() => (
        <ElFormItem ref="item" label="Test">
          <RadioGroup aria-label="Foo" ref="radioGroup1">
            <Radio label="Foo" value="Foo" />
            <Radio label="Bar" value="Bar" />
          </RadioGroup>
          <RadioGroup aria-label="Bar" ref="radioGroup2">
            <Radio label="Foo" value="Foo" />
            <Radio label="Bar" value="Bar" />
          </RadioGroup>
        </ElFormItem>
      ))
      await nextTick()
      const formItem = await wrapper.findComponent(ElFormItem)
      const [radioGroup1, radioGroup2] = await wrapper.findAllComponents(
        RadioGroup
      )
      const formItemLabel = formItem.find('.el-form-item__label')
      expect(formItem.attributes().role).toBe('group')
      expect(formItem.attributes()['aria-labelledby']).toBe(
        formItemLabel.attributes().id
      )
      expect(radioGroup1.attributes().role).toBe('radiogroup')
      expect(radioGroup1.attributes()['aria-label']).toBe('Foo')
      expect(radioGroup1.attributes()['aria-labelledby']).toBeFalsy()
      expect(radioGroup2.attributes().role).toBe('radiogroup')
      expect(radioGroup2.attributes()['aria-label']).toBe('Bar')
      expect(radioGroup2.attributes()['aria-labelledby']).toBeFalsy()
    })

    test('value is number change event need checked', async () => {
      const radio = ref(1)
      const wrapper = mount(() => <Radio v-model={radio.value} label="1" />)
      expect(wrapper.classes()).not.toContain('is-checked')
      await wrapper.trigger('click')
      expect(wrapper.classes()).toContain('is-checked')
    })
  })
})
