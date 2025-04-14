import { describe, expect, test, vi } from 'vitest'
import * as utils from '@element-plus/utils'
import { notificationKeepOpen } from '../src/notification'
import { __mount, isClosed, isOpen } from './wrapper.utils'
import { mockAnimationsApi } from './mock-animations-api'
import type { NotificationAction } from '../src/notification'
import type { NotificationVueWrapper } from './wrapper.utils'

const findActions = (wrapper: NotificationVueWrapper) =>
  wrapper.find('.el-notification__actions')

const getActionButton = (wrapper: NotificationVueWrapper) =>
  findActions(wrapper).get('button')

const findAllActionButtons = (wrapper: NotificationVueWrapper) =>
  findActions(wrapper).findAll('button')

describe('Notification.vue', () => {
  mockAnimationsApi()

  describe('actions', () => {
    const validActions: NotificationAction[] = [
      { label: 'test', execute: () => undefined },
    ]

    test.for([{}, { actions: undefined }, { actions: [] }])(
      'does not render with: %o',
      (props) => {
        const wrapper = __mount(props)
        expect(findActions(wrapper).exists()).toBe(false)
      }
    )

    test.for([{ actions: validActions }])('does render with: %o', (props) => {
      const wrapper = __mount(props)
      expect(findActions(wrapper).exists()).toBe(true)
    })

    describe('required action properties not passed', () => {
      const invalidActions = [
        { label: 'test' },
        { execute: () => undefined },
      ] as unknown as NotificationAction[]

      test('does not render invalid actions: %o', () => {
        const wrapper = __mount({ actions: invalidActions })
        expect(findActions(wrapper).exists()).toBe(false)
      })

      test('will render only valid action', () => {
        const wrapper = __mount({
          actions: [...invalidActions, ...validActions],
        })
        expect(findAllActionButtons(wrapper)).toHaveLength(validActions.length)
      })
    })

    test('calls debugWarn on duplicate label', () => {
      const debugWarn = vi
        .spyOn(utils, 'debugWarn')
        .mockImplementation(() => undefined)
      __mount({
        actions: [
          { label: 'test', execute: () => undefined },
          { label: 'test', execute: () => undefined },
        ],
      })
      expect(debugWarn).toMatchInlineSnapshot(`
        [MockFunction debugWarn] {
          "calls": [
            [
              "ElNotification",
              "Duplicated action label: \`test\`. Please change action label.",
            ],
          ],
          "results": [
            {
              "type": "return",
              "value": undefined,
            },
          ],
        }
      `)
      debugWarn.mockRestore()
    })

    describe('with same label', () => {
      const execute = vi.fn()
      const missedExecute = vi.fn()
      // NOTE: debugWarn spy removes console warning
      const debugWarn = vi
        .spyOn(utils, 'debugWarn')
        .mockImplementation(() => undefined)
      const wrapper = __mount({
        actions: [
          { label: 'test', execute },
          { label: 'test', execute: missedExecute },
        ],
      })

      test('will be one action button', () => {
        expect(findAllActionButtons(wrapper)).toHaveLength(1)
      })

      test('on click will execute first action', async () => {
        await wrapper.get('button').trigger('click')
        expect(execute).toHaveBeenCalled()
        expect(missedExecute).not.toHaveBeenCalled()
      })
      debugWarn.mockRestore()
    })

    describe('button', () => {
      // NOTE: ElButton has `default` as default size, but action button uses `small` as default
      const defaultSizeClass = 'el-button--small'

      describe('omit `onclick` properties (case insensitive)', () => {
        test.for(['onClick', 'onclick', 'OnClicK'])(
          'calls `execute`, not button[%s]',
          async (name) => {
            const button = { [name]: vi.fn() }
            const execute = vi.fn()
            const wrapper = __mount({
              actions: [{ execute, label: 'Default', button }],
            })
            await getActionButton(wrapper).trigger('click')
            expect(execute).toHaveBeenCalled()
            expect(button[name]).not.toHaveBeenCalled()
          }
        )
      })

      describe('default (property is not provided)', () => {
        const wrapper = __mount({
          actions: [{ execute: utils.NOOP, label: 'Default' }],
        })
        const button = getActionButton(wrapper)

        test('does contain default size class', () => {
          expect(button.classes()).toContain(defaultSizeClass)
        })

        test('matches snapshot', () => {
          expect(button.html()).toMatchInlineSnapshot(`
            "<button ariadisabled="false" type="button" class="el-button el-button--small">
              <!--v-if--><span class="">Default</span>
            </button>"
          `)
        })
      })

      describe('custom with default size', () => {
        const wrapper = __mount({
          actions: [
            {
              label: 'Custom props',
              execute: utils.NOOP,
              button: { type: 'primary' },
            },
          ],
        })
        const button = getActionButton(wrapper)

        test('does contain default size class', () => {
          expect(button.classes()).toContain(defaultSizeClass)
        })

        test('matches snapshot', () => {
          expect(button.html()).toMatchInlineSnapshot(`
            "<button ariadisabled="false" type="button" class="el-button el-button--primary el-button--small">
              <!--v-if--><span class="">Custom props</span>
            </button>"
          `)
        })
      })

      describe('custom with custom size', () => {
        const wrapper = __mount({
          actions: [
            {
              execute: utils.NOOP,
              button: { type: 'primary', size: 'default' },
              label: 'Custom props with custom size',
            },
          ],
        })
        const button = getActionButton(wrapper)

        test('does not contain default size class', () => {
          expect(button.classes()).not.toContain(defaultSizeClass)
        })

        test('does contain custom size class', () => {
          expect(button.classes()).toContain('el-button--default')
        })

        test('matches snapshot', () => {
          expect(button.html()).toMatchInlineSnapshot(`
            "<button ariadisabled="false" type="button" class="el-button el-button--primary el-button--default">
              <!--v-if--><span class="">Custom props with custom size</span>
            </button>"
          `)
        })
      })
    })

    describe('keepOpen', () => {
      test.for(
        [{}, { keepOpen: false }, { keepOpen: undefined }].map((base) => [
          {
            ...base,
            label: 'Close',
            execute: utils.NOOP,
          },
        ])
      )('does close the notification with: %o', async (actions) => {
        const wrapper = __mount({ actions, duration: 0 })
        expect(wrapper).toSatisfy(isOpen)
        await getActionButton(wrapper).trigger('click')
        expect(wrapper).toSatisfy(isClosed)
      })

      test('does close the notification with { keepOpen: "until-resolved" }', async () => {
        const TIMEOUT = 100
        const execute = vi.fn(
          () => new Promise<void>((resolve) => setTimeout(resolve, TIMEOUT))
        )
        const wrapper = __mount({
          actions: [
            {
              label: `Close after ${TIMEOUT}ms`,
              execute,
              keepOpen: 'until-resolved',
            },
          ],
          duration: 0,
        })
        expect(wrapper).toSatisfy(isOpen)
        expect(execute).not.toHaveBeenCalled()
        await getActionButton(wrapper).trigger('click')
        expect(execute).toHaveBeenCalled()
        expect(execute).not.toHaveResolved()
        await vi.waitFor(() => {
          expect(wrapper).toSatisfy(isClosed)
        })
        expect(execute).toHaveResolved()
      })

      test('does not close the notification with { keepOpen: true }', async () => {
        const wrapper = __mount({
          actions: [
            { label: 'Keep open', keepOpen: true, execute: utils.NOOP },
          ],
          duration: 0,
        })
        expect(wrapper).toSatisfy(isOpen)
        await getActionButton(wrapper).trigger('click')
        expect(wrapper).toSatisfy(isOpen)
      })
    })

    describe('disableAfterExecute', () => {
      const actions = [
        {},
        { keepOpen: undefined },
        ...notificationKeepOpen.map((keepOpen) => ({ keepOpen })),
      ] as { keepOpen: NotificationAction['keepOpen'] }[]

      const withDisableAfterExecute =
        (disableAfterExecute: boolean) =>
        (action: Partial<NotificationAction>) => ({
          ...action,
          disableAfterExecute,
        })

      const raise = (message: string) => {
        throw new Error(message)
      }

      const MAGIC_NUMBER = 3

      describe.each<{
        name: string
        cases: Partial<NotificationAction>[]
        expectedExecutionsCount: number
        clicksCount: number
      }>([
        {
          expectedExecutionsCount: 1,
          clicksCount: MAGIC_NUMBER,
          name: 'run execute once on many clicks',
          cases: [
            actions.map(withDisableAfterExecute(true)),
            actions.filter((action) => action.keepOpen !== true),
          ].flat(),
        },
        {
          expectedExecutionsCount: MAGIC_NUMBER,
          clicksCount: MAGIC_NUMBER,
          name: 'run execute on every click',
          cases: [
            actions.find((action) => action.keepOpen === true) ||
              raise('actions must contain action with keepOpen === true'),
            actions.map(withDisableAfterExecute(false)),
          ].flat(),
        },
      ] as const)(
        '$name',
        ({ cases, expectedExecutionsCount, clicksCount }) => {
          test.for(cases)('with %o', (optionalProps) => {
            if (clicksCount <= 1 || !Number.isInteger(clicksCount)) {
              throw new Error('clicksCount must be an integer greater than 1')
            }
            const execute = vi.fn()
            const wrapper = __mount({
              actions: [
                {
                  label: `Action`,
                  execute,
                  ...optionalProps,
                },
              ],
              duration: 0,
            })
            const button = getActionButton(wrapper)
            for (let i = 0; i < clicksCount; i++) {
              button.trigger('click')
            }
            expect(execute).toHaveBeenCalledTimes(expectedExecutionsCount)
          })
        }
      )
    })
  })
})
