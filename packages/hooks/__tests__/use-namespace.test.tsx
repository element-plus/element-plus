import { computed, defineComponent, getCurrentInstance, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { provideGlobalConfig } from '@element-plus/components/config-provider'
import { useNamespace } from '..'
import type { VueWrapper } from '@vue/test-utils'

const TestComp = defineComponent({
  setup() {
    const ns = useNamespace('table')
    const cssVar = ns.cssVar({
      'border-style': 'solid',
      'border-width': '',
    })
    const cssVarBlock = ns.cssVarBlock({
      'text-color': '#409eff',
      'active-color': '',
    })
    return () => (
      <div
        id="testId"
        class={[
          ns.b(), // return ns + block
          ns.b('body'),
          ns.e('content'),
          ns.m('active'),
          ns.be('content', 'active'),
          ns.em('content', 'active'),
          ns.bem('body', 'content', 'active'),
          ns.is('focus'),
          ns.e(), // return empty string
          ns.m(), // return empty string
          ns.be(), // return empty string
          ns.em(), // return empty string
          ns.bem(), // return empty string
          ns.is('hover', undefined), // return empty string
          ns.is('clicked', false), // return empty string
        ]}
        style={{ ...cssVar, ...cssVarBlock }}
      >
        text
      </div>
    )
  },
})

describe('use-locale', () => {
  const Comp = defineComponent({
    setup(_props, { slots }) {
      provideGlobalConfig({ namespace: 'ep' })
      return () => slots.default?.()
    },
  })
  let wrapper: VueWrapper<InstanceType<typeof Comp>>
  beforeEach(() => {
    wrapper = mount(Comp, {
      slots: { default: () => <TestComp /> },
    })
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should provide bem correctly', async () => {
    await nextTick()
    expect(wrapper.find('#testId').classes()).toEqual([
      'ep-table', // b()
      'ep-table-body', // b('body')
      'ep-table__content', // e('content')
      'ep-table--active', // m('active')
      'ep-table-content__active', // be('content', 'active')
      'ep-table__content--active', // em('content', 'active')
      'ep-table-body__content--active', // bem('body', 'content', 'active')
      'is-focus', // is('focus')
    ])

    const style = wrapper.find('#testId').attributes('style')
    expect(style).toMatch('--ep-border-style: solid;')
    expect(style).not.toMatch('--ep-border-width:')
    expect(style).toMatch('--ep-table-text-color: #409eff;')
    expect(style).not.toMatch('--ep-table-active-color:')
  })

  it('overrides namespace', () => {
    const overrides = 'override'
    const { vm } = mount(
      defineComponent({
        setup(_, { expose }) {
          const { namespace } = useNamespace(
            'ns',
            computed(() => overrides)
          )
          expose({
            namespace,
          })
        },
        template: '<div></div>',
      }),
      {
        global: {
          provide: {
            namespace: 'el',
          },
        },
      }
    )

    expect(vm.namespace).toBe(overrides)
  })

  it('injects the global namespace if the component cannot get provides', async () => {
    const ParentComp = defineComponent({
      setup() {
        provideGlobalConfig({ namespace: 'ep' })
        return () => <ChildComp />
      },
    })
    const ChildComp = defineComponent({
      setup() {
        const instance = getCurrentInstance()
        if (instance) {
          // simulate the component can't get provides
          instance.parent = null
        }

        const { namespace } = useNamespace('ns')
        return () => `${namespace.value}`
      },
    })

    const wrapper = mount(ParentComp)
    await nextTick()
    expect(wrapper.findComponent(ChildComp).text()).toBe('ep')
  })
})
