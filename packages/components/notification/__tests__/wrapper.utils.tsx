import { mount } from '@vue/test-utils'
import { vi } from 'vitest'
import Notification from '../src/notification.vue'

import type { VNode } from 'vue'
import type { VueWrapper } from '@vue/test-utils'
import type { NotificationProps } from '../src/notification'

const onClose = vi.fn()

export type NotificationVueWrapper = VueWrapper<
  InstanceType<typeof Notification>
>

export const _mount = ({
  props,
  slots,
}: {
  props?: Partial<NotificationProps>
  slots?: Record<'default', () => string | VNode>
}) =>
  mount(
    <Notification {...{ onClose, ...props }} v-slots={slots} />
  ) as NotificationVueWrapper

export const __mount = (props: Partial<NotificationProps>) => _mount({ props })

export const hasVisibility =
  (visibility: boolean) => (wrapper: NotificationVueWrapper) =>
    wrapper.vm.visible === visibility

export const isOpen = hasVisibility(true)

export const isClosed = hasVisibility(false)
