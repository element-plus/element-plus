import { h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { useNamespace, provideGlobalConfig } from '..'

const TestComp = {
  setup() {
    const ns = useNamespace('table')
    return () => {
      return h(
        'div',
        {
          id: 'testId',
          class: [
            ns.b(), // return ns + block
            ns.b('body'),
            ns.e('content'),
            ns.m('active'),
            ns.be('content', 'active'),
            ns.em('content', 'active'),
            ns.bem('body', 'content', 'active'),
            ns.e(), // return empty string
            ns.m(), // return empty string
            ns.be(), // return empty string
            ns.em(), // return empty string
            ns.bem(), // return empty string
          ],
        },
        'text'
      )
    }
  },
}

describe('use-locale', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(
      {
        components: {
          'el-test': TestComp,
        },
        setup(props, { slots }) {
          provideGlobalConfig({ namespace: 'ep' })
          return () => slots.default()
        },
      },
      {
        slots: {
          default: () => h(TestComp),
        },
      }
    )
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should provide bem correctly', async () => {
    await nextTick()
    expect(wrapper.find('#testId').classes().join('~')).toBe(
      [
        'ep-table', // b()
        'ep-table-body', // b('body')
        'ep-table__content', // e('content')
        'ep-table--active', // m('active')
        'ep-table-content__active', // be('content', 'active')
        'ep-table__content--active', // em('content', 'active')
        'ep-table-body__content--active', // bem('body', 'content', 'active')
      ].join('~')
    )
  })
})
