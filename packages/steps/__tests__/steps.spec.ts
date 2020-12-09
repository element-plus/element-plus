import { mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import Steps from '../src/index.vue'
import Step from '../src/item.vue'

const _mount = (template: string) => mount({
  components: {
    'el-steps': Steps,
    'el-step': Step,
  },
  template,
}, {
  attachTo: document.body,
  global: {
    provide: {
      ElSteps: {},
    },
  },
})

describe('Steps.vue', () => {
  test('render', () => {
    const wrapper = _mount(`
      <el-steps>
        <el-step />
        <el-step />
        <el-step />
      </el-steps>
    `)
    expect(wrapper.findAll('.el-step').length).toBe(3)
    expect(wrapper.classes()).toContain('el-steps--horizontal')
    expect(wrapper.find('.el-step').classes()).toContain('is-horizontal')
  })

  test('space', () => {
    const wrapper = _mount(`
      <el-steps :space="100">
        <el-step />
      </el-steps>
    `)
    expect(wrapper.find('.el-step').attributes('style')).toMatch('flex-basis: 100px;')
  })

  test('alignCenter', () => {
    const wrapper = _mount(`
      <el-steps alignCenter>
        <el-step />
      </el-steps>
    `)
    expect(wrapper.find('.el-step').classes()).toContain('is-center')
  })

  test('direction', () => {
    const wrapper = _mount(`
      <el-steps direction="vertical">
        <el-step />
      </el-steps>
    `)
    expect(wrapper.classes()).toContain('el-steps--vertical')
    expect(wrapper.find('.el-step').classes()).toContain('is-vertical')
  })

  test('simple', () => {
    const wrapper = _mount(`
      <el-steps simple direction="vertical" :space="100" alignCenter>
        <el-step />
      </el-steps>
    `)
    expect(wrapper.classes()).toContain('el-steps--simple')
    expect(wrapper.find('is-center').exists()).toBe(false)
    expect(wrapper.find('is-vertical').exists()).toBe(false)
  })

  test('active', async () => {
    const wrapper = _mount(`
      <el-steps :active="0">
        <el-step />
        <el-step />
        <el-step />
      </el-steps>
    `)
    await nextTick()
    expect(wrapper.findAll('.el-step')[0].find('.el-step__head').classes()).toContain('is-process')
    expect(wrapper.findAll('.el-step')[1].find('.el-step__head').classes()).toContain('is-wait')
    expect(wrapper.findAll('.el-step')[2].find('.el-step__head').classes()).toContain('is-wait')
    await wrapper.setProps({ active: 1 })
    expect(wrapper.findAll('.el-step')[0].find('.el-step__head').classes()).toContain('is-finish')
    expect(wrapper.findAll('.el-step')[1].find('.el-step__head').classes()).toContain('is-process')
    expect(wrapper.findAll('.el-step')[2].find('.el-step__head').classes()).toContain('is-wait')
    await wrapper.setProps({ active: 2 })
    expect(wrapper.findAll('.el-step')[0].find('.el-step__head').classes()).toContain('is-finish')
    expect(wrapper.findAll('.el-step')[1].find('.el-step__head').classes()).toContain('is-finish')
    expect(wrapper.findAll('.el-step')[2].find('.el-step__head').classes()).toContain('is-process')
    await wrapper.setProps({ active: 3 })
    expect(wrapper.findAll('.el-step')[2].find('.el-step__head').classes()).toContain('is-finish')
  })

  test('process-status', async () => {
    const wrapper = _mount(`
      <el-steps :active="2" process-status="success">
        <el-step />
        <el-step />
        <el-step />
      </el-steps>
    `)
    await nextTick()
    expect(wrapper.findAll('.el-step')[2].find('.el-step__head').classes()).toContain('is-success')
    await wrapper.setProps({ processStatus: 'error' })
    expect(wrapper.findAll('.el-step')[2].find('.el-step__head').classes()).toContain('is-error')
  })

  test('finish-status', async () => {
    const wrapper = _mount(`
      <el-steps :active="2" finish-status="error">
        <el-step />
        <el-step />
        <el-step />
      </el-steps>
    `)
    await nextTick()
    expect(wrapper.findAll('.el-step')[0].find('.el-step__head').classes()).toContain('is-error')
    await wrapper.setProps({ finishStatus: 'success' })
    expect(wrapper.findAll('.el-step')[0].find('.el-step__head').classes()).toContain('is-success')
  })

  test('step attribute', () => {
    const wrapper = _mount(`
      <el-steps :active="0">
        <el-step icon="el-icon-edit" title="title" description="description" status="wait" />
      </el-steps>
    `)
    expect(wrapper.find('.el-step__head').classes()).toContain('is-wait')
    expect(wrapper.find('.el-icon-edit').exists()).toBe(true)
    expect(wrapper.find('.el-step__title').text()).toBe('title')
    expect(wrapper.find('.el-step__description').text()).toBe('description')
  })

  test('step slot', () => {
    const wrapper = _mount(`
      <el-steps :active="0">
        <el-step>
          <template #title>A</template>
          <template #description>B</template>
        </el-step>
      </el-steps>
    `)
    expect(wrapper.find('.el-step__title').text()).toBe('A')
    expect(wrapper.find('.el-step__description').text()).toBe('B')
  })
})
