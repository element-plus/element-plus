import { mount } from '@vue/test-utils'
import { describe, expect, test } from 'vitest'
import Tag from '../src/tag.vue'

const AXIOM = 'Rem is the best girl'

describe('Tag.vue', () => {
  test('render text & class', () => {
    const wrapper = mount(() => (
      <Tag
        v-slots={{
          default: () => AXIOM,
        }}
      />
    ))
    expect(wrapper.text()).toEqual(AXIOM)

    const vm = wrapper.vm

    expect(vm.$el.classList.contains('el-tag')).toEqual(true)
    expect(vm.$el.classList.contains('el-tag__close')).toEqual(false)
    expect(vm.$el.classList.contains('is-hit')).toEqual(false)
    expect(vm.$el.classList.contains('md-fade-center')).toEqual(false)
  })

  test('type', () => {
    const wrapper = mount(() => <Tag type="success" />)
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('el-tag--success')).toEqual(true)
    expect(vm.$el.classList.contains('el-tag--primary')).toEqual(false)
    expect(vm.$el.classList.contains('el-tag--danger')).toEqual(false)
    expect(vm.$el.classList.contains('el-tag--info')).toEqual(false)
    expect(vm.$el.classList.contains('el-tag--warning')).toEqual(false)
  })

  test('hit', () => {
    const wrapper = mount(() => <Tag hit={true} />)
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('is-hit')).toEqual(true)
  })

  test('closable', async () => {
    const wrapper = mount(() => <Tag closable={true} />)
    const comp = wrapper.getComponent(Tag)
    const closeBtn = comp.find('.el-tag .el-tag__close')
    expect(closeBtn.exists()).toBe(true)

    await closeBtn.trigger('click')
    expect(comp.emitted().close).toBeTruthy()
  })

  test('disableTransitions', () => {
    const wrapper = mount(() => <Tag disableTransitions={true} />)
    const vm = wrapper.vm
    // FIXME: This check actually is useless as there is no the class `md-fade-center` in the code.
    expect(vm.$el.classList.contains('md-fade-center')).toEqual(false)
  })

  test('color', () => {
    const wrapper = mount(() => <Tag color="rgb(0, 0, 0)" />)
    const vm = wrapper.vm
    expect(vm.$el.style.backgroundColor).toEqual('rgb(0, 0, 0)')
  })

  test('theme', () => {
    const wrapper = mount(() => <Tag effect="dark" />)
    const vm = wrapper.vm
    const el = vm.$el
    expect(el.className.includes('el-tag--dark')).toEqual(true)
    expect(el.className.includes('el-tag--light')).toEqual(false)
    expect(el.className.includes('el-tag--plain')).toEqual(false)
  })

  // should also support large size
  test('size', () => {
    const wrapper = mount(() => <Tag size="large" />)
    const vm = wrapper.vm
    const el = vm.$el
    expect(el.className.includes('el-tag--large')).toEqual(true)
    expect(el.className.includes('el-tag--default')).toEqual(false)
    expect(el.className.includes('el-tag--small')).toEqual(false)
  })
})
