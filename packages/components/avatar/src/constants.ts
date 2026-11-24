import type { InjectionKey } from 'vue'
import type { AvatarProps } from './avatar'

export interface AvatarGroupContext {
  size?: AvatarProps['size']
  shape?: AvatarProps['shape']
}

export const avatarGroupContextKey: InjectionKey<AvatarGroupContext> = Symbol(
  'avatarGroupContextKey'
)
