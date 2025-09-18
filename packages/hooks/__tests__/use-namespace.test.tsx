import { computed, defineComponent, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { afterEach, assertType, beforeEach, describe, expect, it } from 'vitest'
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

describe('use-namespace', () => {
  let wrapper: VueWrapper<InstanceType<typeof TestComp>>
  beforeEach(() => {
    wrapper = mount(TestComp)
  })

  afterEach(() => {
    wrapper.unmount()
  })

  it('should provide bem correctly', async () => {
    await nextTick()
    expect(wrapper.find('#testId').classes()).toEqual([
      'el-table', // b()
      'el-table-body', // b('body')
      'el-table__content', // e('content')
      'el-table--active', // m('active')
      'el-table-content__active', // be('content', 'active')
      'el-table__content--active', // em('content', 'active')
      'el-table-body__content--active', // bem('body', 'content', 'active')
      'is-focus', // is('focus')
    ])

    const style = wrapper.find('#testId').attributes('style')
    expect(style).toMatch('--el-border-style: solid;')
    expect(style).not.toMatch('--el-border-width:')
    expect(style).toMatch('--el-table-text-color: #409eff;')
    expect(style).not.toMatch('--el-table-active-color:')
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

  it('type assertion', () => {
    const ns = useNamespace('table')
    const ns2 = useNamespace(
      'table',
      computed(() => 'override')
    )

    assertType<'override'>(ns2.namespace.value)

    assertType<'el-table'>(ns.b())
    assertType<'el-table'>(ns.b(''))
    assertType<'el-table'>(ns.b(undefined))
    assertType<'el-table-body'>(ns.b('body'))

    assertType<''>(ns.e())
    assertType<''>(ns.e(''))
    assertType<''>(ns.e(undefined))
    assertType<'el-table__content'>(ns.e('content'))

    assertType<''>(ns.m())
    assertType<''>(ns.m(''))
    assertType<''>(ns.m(undefined))
    assertType<'el-table--active'>(ns.m('active'))

    assertType<''>(ns.be())
    assertType<'el-table-content__active'>(ns.be('content', 'active'))

    assertType<''>(ns.em())
    assertType<'el-table__content--active'>(ns.em('content', 'active'))

    assertType<''>(ns.bem())
    assertType<'el-table-body__content--active'>(
      ns.bem('body', 'content', 'active')
    )

    assertType<'is-focus'>(ns.is('focus'))
    assertType<''>(ns.is('focus', undefined))
    assertType<'is-focus'>(ns.is('focus', true))
    assertType<''>(ns.is('focus', false))
    assertType<'' | 'is-focus'>(ns.is('focus', false as boolean))

    assertType<{
      '--el-border-style': string
      '--el-border-width': string
    }>(
      ns.cssVar({
        'border-style': 'solid',
        'border-width': '',
      })
    )
    assertType<{
      '--el-table-text-color': string
      '--el-table-active-color': string
    }>(
      ns.cssVarBlock({
        'text-color': '#409eff',
        'active-color': '',
      })
    )

    assertType<'--el-table'>(ns.cssVarName('table'))
    assertType<'--el-table-body'>(ns.cssVarBlockName('body'))
  })
})
