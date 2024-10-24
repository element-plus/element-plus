import { describe, expect, test, vi } from 'vitest'
import { type NotificationProps, notificationTypes } from '../src/notification'
import {
  type NotificationVueWrapper,
  __mount,
  isClosed,
  isOpen,
} from './wrapper.utils'
import { mockAnimationsApi } from './mock-animations-api'

const findProgressBar = (wrapper: NotificationVueWrapper) =>
  wrapper.find('.el-notification__progressBar')

describe('Notification.vue', () => {
  mockAnimationsApi()

  describe('progress bar', () => {
    describe.each<{
      hidden: '' | undefined
      name: string
      cases: Partial<NotificationProps>[]
    }>([
      {
        hidden: '',
        name: 'will be hidden',
        cases: [
          ...[-4500, 0, 4500].map((duration) => ({
            showProgressBar: false,
            duration,
          })),
          ...[-4500, 0].map((duration) => ({
            showProgressBar: true,
            duration,
          })),
        ],
      },
      {
        hidden: undefined,
        name: 'will be visible',
        cases: [
          {
            showProgressBar: true,
            duration: 4500,
          },
        ],
      },
    ])('$name', ({ cases, hidden: expected }) => {
      test.for(cases)('with %o', (props) => {
        const wrapper = __mount(props)
        expect(findProgressBar(wrapper).attributes('hidden')).toBe(expected)
      })
    })

    describe('background-color', () => {
      test.for(notificationTypes)(
        "has element class and type class with { type: '%s' }",
        (type) => {
          const wrapper = __mount({ type, showProgressBar: true })
          expect(findProgressBar(wrapper).classes()).toEqual([
            'el-notification__progressBar',
            `el-notification--${type}`,
          ])
        }
      )

      test.for([{}, { type: '' }, { type: undefined }] as const)(
        'has only element class with %o',
        (base) => {
          const wrapper = __mount({ ...base, showProgressBar: true })
          expect(findProgressBar(wrapper).classes()).toEqual([
            'el-notification__progressBar',
          ])
        }
      )
    })

    test('will be visible when `duration` prop is updated', async () => {
      vi.useFakeTimers()
      const wrapper = __mount({
        duration: 100,
        showProgressBar: true,
      })
      vi.advanceTimersByTime(100 / 2)
      expect(findProgressBar(wrapper).attributes('hidden')).toBeUndefined()
      wrapper.setProps({ duration: 200 })
      vi.advanceTimersByTime(200 * 0.9)
      expect(findProgressBar(wrapper).attributes('hidden')).toBeUndefined()
      expect(wrapper).toSatisfy(isOpen)
      await vi.waitFor(() => {
        expect(wrapper).toSatisfy(isClosed)
      })
      vi.useRealTimers()
    })
  })
})
