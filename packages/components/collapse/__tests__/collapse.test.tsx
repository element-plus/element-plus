import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import Input from '../../input/src/input.vue'
import Collapse from '../src/collapse.vue'
import CollapseItem from '../src/collapse-item.vue'
import type { VueWrapper } from '@vue/test-utils'
import type { CollapseItemInstance } from '../src/instance'

describe('Collapse.vue', () => {
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

      await input.trigger('keydown', { key: 'Enter' })
      await nextTick()

      const collapseItem = wrapper.findComponent(CollapseItem)
      expect(collapseItem.vm.isActive).toBe(true)

      await header.trigger('keydown', { key: 'Enter' })
      await nextTick()
      expect(collapseItem.vm.isActive).toBe(false)
    })

    test('should not toggle collapse when pressing space on input', async () => {
      const wrapper = createWrapper(true)
      const input = wrapper.find('[data-testid="test-input"]')
      const header = wrapper.find('.el-collapse-item__header')

      await input.trigger('keydown', { key: ' ' })
      await nextTick()

      const collapseItem = wrapper.findComponent(CollapseItem)
      expect(collapseItem.vm.isActive).toBe(true)

      await header.trigger('keydown', { key: ' ' })
      await nextTick()
      expect(collapseItem.vm.isActive).toBe(false)
    })
  })
})
