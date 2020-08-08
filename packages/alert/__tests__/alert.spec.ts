import { mount } from '@vue/test-utils'
import Alert from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

const _mount = (template: string) => mount({
  components: {
    'el-alert': Alert,
  },
  template,
}, {
  global: {
    provide: {
      breadcrumb: {},
    },
  },
})

const _mount = (template: string) => mount({
  components: {
    'el-alert': Alert,
  },
  template,
}, {
  global: {
    provide: {
      breadcrumb: {},
    },
  },
})

describe('Alert.vue', () => {
  test('render test & class', () => {
    const wrapper = mount(Alert, {
      props: {
        title: AXIOM,
        showIcon: true,
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.querySelector('.el-alert__title').textContent).toEqual(AXIOM)
    expect(vm.$el.classList.contains('el-alert--info')).toEqual(true)
  })

  test('type', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'test',
        type: 'success',
        showIcon: true,
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('el-alert--success')).toEqual(true)
  })

  test('description', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'Dorne',
        description: AXIOM,
        showIcon: true,
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.querySelector('.el-alert__description').textContent)
      .toEqual(AXIOM)
  })

  test('theme', () => {
    const wrapper = mount(Alert, {
      props: {
        title: 'test',
        effect: 'dark',
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.classList.contains('is-dark')).toEqual(true)
  })

  // test('title slot', () => {
  //   const wrapper = _mount(`
  //     <el-alert>
  //       <span slot="title">foo</span>
  //     </el-alert>
  //   `)
  //   expect(wrapper.find('.el-alert__title').text()).toBe('foo')
  // })

  test('title slot', () => {
    const wrapper = mount(Alert, {
      slots: {
        title: AXIOM,
      },
    })
    const vm = wrapper.vm
    expect(vm.$el.querySelector('.el-alert__title').textContent)
      .toEqual(AXIOM)
  })

  test('close', async () => {
    const wrapper = mount(Alert, {
      props: {
        closeText: 'close',
      },
    })

    const closeBtn = wrapper.find('.el-alert__closebtn')
    expect(closeBtn.exists()).toBe(true)

    await closeBtn.trigger('click')
    expect(wrapper.emitted()).toBeDefined()
  })
})
