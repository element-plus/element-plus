import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import { Edit } from '@element-plus/icons-vue'

import ElSteps from '../src/steps.vue'
import ElStep from '../src/item.vue'

import type { StepsProps } from '../src/steps'

describe('Steps.vue', () => {
  test('render', () => {
    const wrapper = mount(() => (
      <ElSteps>
        <ElStep />
        <ElStep />
        <ElStep />
      </ElSteps>
    ))

    expect(wrapper.findAll('.el-step').length).toBe(3)
    expect(wrapper.classes()).toContain('el-steps--horizontal')
    expect(wrapper.find('.el-step').classes()).toContain('is-horizontal')
  })

  test('space', () => {
    const wrapper = mount(() => (
      <ElSteps space={100}>
        <ElStep />
        <ElStep />
        <ElStep />
      </ElSteps>
    ))

    expect(wrapper.find('.el-step').attributes('style')).toMatch(
      'flex-basis: 100px;'
    )
  })

  test('alignCenter', () => {
    const wrapper = mount(() => (
      <ElSteps alignCenter>
        <ElStep />
      </ElSteps>
    ))

    expect(wrapper.find('.el-step').classes()).toContain('is-center')
  })

  test('direction', () => {
    const wrapper = mount(() => (
      <ElSteps direction="vertical">
        <ElStep />
      </ElSteps>
    ))

    expect(wrapper.classes()).toContain('el-steps--vertical')
    expect(wrapper.find('.el-step').classes()).toContain('is-vertical')
  })

  test('simple', () => {
    const wrapper = mount(() => (
      <ElSteps simple direction="vertical" space={100} alignCenter>
        <ElStep />
      </ElSteps>
    ))

    expect(wrapper.classes()).toContain('el-steps--simple')
    expect(wrapper.find('is-center').exists()).toBe(false)
    expect(wrapper.find('is-vertical').exists()).toBe(false)
  })

  test('active', async () => {
    const active = ref(0)
    const wrapper = mount(() => (
      <ElSteps active={active.value}>
        <ElStep />
        <ElStep />
        <ElStep />
      </ElSteps>
    ))

    const $ElSteps = wrapper.findAllComponents(ElStep)

    await nextTick()

    expect($ElSteps[0].find('.el-step__head').classes()).toContain('is-process')
    expect($ElSteps[1].find('.el-step__head').classes()).toContain('is-wait')
    expect($ElSteps[2].find('.el-step__head').classes()).toContain('is-wait')

    active.value = 1
    await nextTick()

    expect($ElSteps[0].find('.el-step__head').classes()).toContain('is-finish')
    expect($ElSteps[1].find('.el-step__head').classes()).toContain('is-process')
    expect($ElSteps[2].find('.el-step__head').classes()).toContain('is-wait')

    active.value = 2
    await nextTick()

    expect($ElSteps[0].find('.el-step__head').classes()).toContain('is-finish')
    expect($ElSteps[1].find('.el-step__head').classes()).toContain('is-finish')
    expect($ElSteps[2].find('.el-step__head').classes()).toContain('is-process')

    active.value = 3
    await nextTick()

    expect($ElSteps[2].find('.el-step__head').classes()).toContain('is-finish')
  })

  test('process-status', async () => {
    const processStatus = ref<StepsProps['processStatus']>('success')

    const wrapper = mount(() => (
      <ElSteps active={2} processStatus={processStatus.value}>
        <ElStep />
        <ElStep />
        <ElStep />
      </ElSteps>
    ))

    const $ElSteps = wrapper.findAllComponents(ElStep)

    await nextTick()
    expect($ElSteps[2].find('.el-step__head').classes()).toContain('is-success')

    processStatus.value = 'error'
    await nextTick()

    expect($ElSteps[2].find('.el-step__head').classes()).toContain('is-error')
  })

  test('finish-status', async () => {
    const finishStatus = ref<StepsProps['finishStatus']>('error')

    const wrapper = mount(() => (
      <ElSteps active={2} finishStatus={finishStatus.value}>
        <ElStep />
        <ElStep />
        <ElStep />
      </ElSteps>
    ))

    const $ElSteps = wrapper.findAllComponents(ElStep)

    await nextTick()
    expect($ElSteps[0].find('.el-step__head').classes()).toContain('is-error')

    finishStatus.value = 'success'
    await nextTick()

    expect($ElSteps[0].find('.el-step__head').classes()).toContain('is-success')
  })

  test('step attribute', () => {
    const wrapper = mount(() => (
      <ElSteps active={0}>
        <ElStep
          icon={Edit}
          title="title"
          description="description"
          status="wait"
        />
      </ElSteps>
    ))

    expect(wrapper.find('.el-step__head').classes()).toContain('is-wait')
    expect(wrapper.find('.el-step__title').text()).toBe('title')
    expect(wrapper.find('.el-step__description').text()).toBe('description')
    expect(wrapper.findComponent(Edit).exists()).toBe(true)
  })

  test('step slot', () => {
    const wrapper = mount(() => (
      <ElSteps active={0}>
        <ElStep
          v-slots={{
            title: () => 'A',
            description: () => 'B',
          }}
        />
      </ElSteps>
    ))

    expect(wrapper.find('.el-step__title').text()).toBe('A')
    expect(wrapper.find('.el-step__description').text()).toBe('B')
  })
})
