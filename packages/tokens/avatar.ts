import type { InjectionKey, Ref } from 'vue'

export type ImageLoadingState = 'idle' | 'loading' | 'loaded' | 'error'

export interface AvatarContext {
  imageLoadingStatus: Ref<ImageLoadingState>
}

export const avatarKey: InjectionKey<AvatarContext> = Symbol('avatarKey')
