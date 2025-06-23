import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, describe, expect, test, vi } from 'vitest'
import { debugWarn } from '@element-plus/utils'
import Input from '../../input/src/input.vue'
import Collapse from '../src/collapse.vue'
import CollapseItem from '../src/collapse-item.vue'

import type { VueWrapper } from '@vue/test-utils'
import type { CollapseItemInstance } from '../src/instance'

const AXIOM = 'Rem is the best girl'

vi.mock('@element-plus/utils/error', () => ({
  debugWarn: vi.fn(),
}))

describe('Collapse.vue', () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('create', async () => {
    const wrapper = mount({
      data() {
        return {
          activeNames: ['1'],
        }
      },
      render() {
        return (
          <Collapse v-model={this.activeNames}>
            <CollapseItem title="title1" name="1">
              <div class="content">111</div>
            </CollapseItem>
            <CollapseItem title="title2" name="2">
              <div class="content">222</div>
            </CollapseItem>
            <CollapseItem title="title3" name="3">
              <div class="content">333</div>
            </CollapseItem>
            <CollapseItem title="title4" name="4">
              <div class="content">444</div>
            </CollapseItem>
          </Collapse>
        )
      },
    })

    const vm = wrapper.vm
    const collapseWrapper = wrapper.findComponent(Collapse)
    const collapseItemWrappers = collapseWrapper.findAllComponents(
      CollapseItem
    ) as VueWrapper<CollapseItemInstance>[]
    const collapseItemHeaderEls = vm.$el.querySelectorAll(
      '.el-collapse-item__header'
    )
    expect(collapseItemWrappers[0].vm.isActive).toBe(true)

    collapseItemHeaderEls[2].click()
    await nextTick()
    expect(collapseItemWrappers[0].vm.isActive).toBe(true)
    expect(collapseItemWrappers[2].vm.isActive).toBe(true)
    collapseItemHeaderEls[0].click()
    await nextTick()
    expect(collapseItemWrappers[0].vm.isActive).toBe(false)
  })

  test('accordion', async () => {
    const wrapper = mount({
      data() {
        return {
          activeNames: ['1'],
        }
      },
      render() {
        return (
          <Collapse accordion v-model={this.activeNames}>
            <CollapseItem title="title1" name="1">
              <div class="content">111</div>
            </CollapseItem>
            <CollapseItem title="title2" name="2">
              <div class="content">222</div>
            </CollapseItem>
            <CollapseItem title="title3" name="3">
              <div class="content">333</div>
            </CollapseItem>
            <CollapseItem title="title4" name="4">
              <div class="content">444</div>
            </CollapseItem>
          </Collapse>
        )
      },
    })

    const vm = wrapper.vm
    const collapseWrapper = wrapper.findComponent(Collapse)
    const collapseItemWrappers = collapseWrapper.findAllComponents(
      CollapseItem
    ) as VueWrapper<CollapseItemInstance>[]
    const collapseItemHeaderEls = vm.$el.querySelectorAll(
      '.el-collapse-item__header'
    )
    expect(collapseItemWrappers[0].vm.isActive).toBe(true)

    collapseItemHeaderEls[2].click()
    await nextTick()
    expect(collapseItemWrappers[0].vm.isActive).toBe(false)
    expect(collapseItemWrappers[2].vm.isActive).toBe(true)
    collapseItemHeaderEls[0].click()
    await nextTick()
    expect(collapseItemWrappers[0].vm.isActive).toBe(true)
    expect(collapseItemWrappers[2].vm.isActive).toBe(false)
  })

  test('event:change', async () => {
    const onChange = vi.fn()
    const wrapper = mount({
      data() {
        return {
          activeNames: ['1'],
        }
      },
      render() {
        return (
          <Collapse v-model={this.activeNames} onChange={onChange}>
            <CollapseItem title="title1" name="1">
              <div class="content">111</div>
            </CollapseItem>
            <CollapseItem title="title2" name="2">
              <div class="content">222</div>
            </CollapseItem>
            <CollapseItem title="title3" name="3">
              <div class="content">333</div>
            </CollapseItem>
            <CollapseItem title="title4" name="4">
              <div class="content">444</div>
            </CollapseItem>
          </Collapse>
        )
      },
    })

    const vm = wrapper.vm
    const collapseWrapper = wrapper.findComponent(Collapse)
    const collapseItemWrappers = collapseWrapper.findAllComponents(
      CollapseItem
    ) as VueWrapper<CollapseItemInstance>[]
    const collapseItemHeaderEls = vm.$el.querySelectorAll(
      '.el-collapse-item__header'
    )
    expect(collapseItemWrappers[0].vm.isActive).toBe(true)
    expect(vm.activeNames).toEqual(['1'])
    expect(onChange).not.toHaveBeenCalled()
    collapseItemHeaderEls[2].click()
    await nextTick()
    expect(onChange).toHaveBeenCalledTimes(1)
    expect(collapseItemWrappers[0].vm.isActive).toBe(true)
    expect(collapseItemWrappers[2].vm.isActive).toBe(true)
    expect(vm.activeNames).toEqual(['1', '3'])
    collapseItemHeaderEls[0].click()
    await nextTick()
    expect(onChange).toHaveBeenCalledTimes(2)
    expect(collapseItemWrappers[0].vm.isActive).toBe(false)
    expect(vm.activeNames).toEqual(['3'])
  })

  test('deep watch modelValue', async () => {
    const wrapper = mount({
      data() {
        return {
          activeNames: ['1'],
        }
      },
      mounted() {
        this.activeNames.push('2')
      },
      render() {
        return (
          <Collapse v-model={this.activeNames}>
            <CollapseItem title="title1" name="1">
              <div class="content">111</div>
            </CollapseItem>
            <CollapseItem title="title2" name="2">
              <div class="content">222</div>
            </CollapseItem>
            <CollapseItem title="title3" name="3">
              <div class="content">333</div>
            </CollapseItem>
            <CollapseItem title="title4" name="4">
              <div class="content">444</div>
            </CollapseItem>
          </Collapse>
        )
      },
    })

    await nextTick()
    const collapseWrapper = wrapper.findComponent(Collapse)
    const collapseItemWrappers = collapseWrapper.findAllComponents(
      CollapseItem
    ) as VueWrapper<CollapseItemInstance>[]
    expect(collapseItemWrappers[0].vm.isActive).toBe(true)
    expect(collapseItemWrappers[1].vm.isActive).toBe(true)
  })

  test('title slot', async () => {
    const wrapper = mount({
      render() {
        return (
          <Collapse>
            <CollapseItem
              name="1"
              v-slots={{
                title: ({ isActive }: { isActive: boolean }) => {
                  return (
                    <div class={['title-wrapper', { 'is-active': isActive }]}>
                      {AXIOM}
                    </div>
                  )
                },
              }}
            ></CollapseItem>
          </Collapse>
        )
      },
    })

    expect(wrapper.find('.title-wrapper').text()).toBe(AXIOM)
    await wrapper.find('.el-collapse-item__header').trigger('click')
    expect(wrapper.find('.title-wrapper').classes()).toContain('is-active')
  })

  test('beforeCollapse function return promise', async () => {
    const activeNames = ref([])
    const asyncResult = ref('error')
    const beforeCollapse = () => {
      return new Promise<boolean>((resolve, reject) => {
        setTimeout(() => {
          return asyncResult.value == 'success'
            ? resolve(true)
            : reject(new Error('Error'))
        }, 1000)
      })
    }
    const wrapper = mount(() => (
      <Collapse v-model={activeNames.value} beforeCollapse={beforeCollapse}>
        <CollapseItem title="title1" name="1">
          <div class="content">111</div>
        </CollapseItem>
        <CollapseItem title="title2" name="2">
          <div class="content">222</div>
        </CollapseItem>
        <CollapseItem title="title3" name="3">
          <div class="content">333</div>
        </CollapseItem>
        <CollapseItem title="title4" name="4">
          <div class="content">444</div>
        </CollapseItem>
      </Collapse>
    ))

    const vm = wrapper.vm
    const collapseWrapper = wrapper.findComponent(Collapse)
    const collapseItemWrappers = collapseWrapper.findAllComponents(
      CollapseItem
    ) as VueWrapper<CollapseItemInstance>[]
    const collapseItemHeaderEls = vm.$el.querySelectorAll(
      '.el-collapse-item__header'
    )

    vi.useFakeTimers()

    collapseItemHeaderEls[0].click()
    vi.runAllTimers()
    await nextTick()
    expect(collapseItemWrappers[0].vm.isActive).toBe(false)
    expect(debugWarn).toHaveBeenCalledTimes(0)

    asyncResult.value = 'success'

    collapseItemHeaderEls[0].click()
    vi.runAllTimers()
    await nextTick()
    expect(collapseItemWrappers[0].vm.isActive).toBe(true)
    expect(debugWarn).toHaveBeenCalledTimes(1)

    collapseItemHeaderEls[1].click()
    vi.runAllTimers()
    await nextTick()
    expect(collapseItemWrappers[0].vm.isActive).toBe(true)
    expect(collapseItemWrappers[1].vm.isActive).toBe(true)
    expect(debugWarn).toHaveBeenCalledTimes(1)
  })

  test('beforeCollapse function return boolean', async () => {
    const activeNames = ref([])
    const result = ref(false)
    const beforeCollapse = () => {
      return result.value
    }

    const wrapper = mount(() => (
      <Collapse v-model={activeNames.value} beforeCollapse={beforeCollapse}>
        <CollapseItem title="title1" name="1">
          <div class="content">111</div>
        </CollapseItem>
        <CollapseItem title="title2" name="2">
          <div class="content">222</div>
        </CollapseItem>
        <CollapseItem title="title3" name="3">
          <div class="content">333</div>
        </CollapseItem>
        <CollapseItem title="title4" name="4">
          <div class="content">444</div>
        </CollapseItem>
      </Collapse>
    ))

    const vm = wrapper.vm
    const collapseWrapper = wrapper.findComponent(Collapse)
    const collapseItemWrappers = collapseWrapper.findAllComponents(
      CollapseItem
    ) as VueWrapper<CollapseItemInstance>[]
    const collapseItemHeaderEls = vm.$el.querySelectorAll(
      '.el-collapse-item__header'
    )

    collapseItemHeaderEls[0].click()
    await nextTick()
    expect(collapseItemWrappers[0].vm.isActive).toBe(false)

    result.value = true

    collapseItemHeaderEls[0].click()
    await nextTick()
    expect(collapseItemWrappers[0].vm.isActive).toBe(true)

    collapseItemHeaderEls[1].click()
    await nextTick()
    expect(collapseItemWrappers[0].vm.isActive).toBe(true)
    expect(collapseItemWrappers[1].vm.isActive).toBe(true)
  })

  describe('Nested Input Interaction', () => {
    const createWrapper = (withInput: boolean = false) => {
      return mount({
        data: () => ({
          activeNames: ['1'],
          inputText: '',
        }),
        render() {
          return (
            <Collapse v-model={this.activeNames}>
              <CollapseItem
                name="1"
                v-slots={{
                  title: () => (
                    <div>
                      {withInput ? (
                        <Input
                          data-testid="test-input"
                          v-model={this.inputText}
                        />
                      ) : (
                        'title1'
                      )}
                    </div>
                  ),
                }}
              >
                <div class="content">111</div>
              </CollapseItem>
              <CollapseItem name="2" title="title2">
                <div class="content">222</div>
              </CollapseItem>
            </Collapse>
          )
        },
      })
    }

    test('should not toggle collapse when clicking on input', async () => {
      const wrapper = createWrapper(true)
      const input = wrapper.find('[data-testid="test-input"]')
      const header = wrapper.find('.el-collapse-item__header')

      await input.trigger('click')
      await nextTick()

      const collapseItem = wrapper.findComponent(CollapseItem)
      expect(collapseItem.vm.isActive).toBe(true)

      await header.trigger('click')
      await nextTick()
      expect(collapseItem.vm.isActive).toBe(false)
    })

    test('should not toggle collapse when pressing enter on input', async () => {
      const wrapper = createWrapper(true)
      const input = wrapper.find('[data-testid="test-input"]')
      const header = wrapper.find('.el-collapse-item__header')

      await input.trigger('keydown.enter')
      await nextTick()

      const collapseItem = wrapper.findComponent(CollapseItem)
      expect(collapseItem.vm.isActive).toBe(true)

      await header.trigger('keydown.enter')
      await nextTick()
      expect(collapseItem.vm.isActive).toBe(false)
    })

    test('should not toggle collapse when pressing space on input', async () => {
      const wrapper = createWrapper(true)
      const input = wrapper.find('[data-testid="test-input"]')
      const header = wrapper.find('.el-collapse-item__header')

      await input.trigger('keydown.space')
      await nextTick()

      const collapseItem = wrapper.findComponent(CollapseItem)
      expect(collapseItem.vm.isActive).toBe(true)

      await header.trigger('keydown.space')
      await nextTick()
      expect(collapseItem.vm.isActive).toBe(false)
    })
  })
})
