import {
  getCurrentInstance,
  inject,
  onBeforeMount,
  onMounted,
  watch,
} from 'vue'
import { avatarKey } from '@element-plus/tokens'

import type { ImageLoadingState } from '@element-plus/tokens'
import type { AvatarImageProps } from './avatar-image'

export const useAvatarImage = (props: AvatarImageProps) => {
  const { imageLoadingStatus } = inject(avatarKey)!
  const { emit } = getCurrentInstance()!
  let mounted: boolean

  onMounted(() => {
    mounted = true

    const onStateChange = (state: ImageLoadingState, ...args: any[]) => {
      imageLoadingStatus.value = state
      emit('state-change', state, ...args)
    }

    const updateState =
      (state: ImageLoadingState) => (evt?: Event | string) => {
        if (!mounted) return
        onStateChange(state, evt)
      }

    watch(
      () => props.src,
      (src) => {
        if (!src) {
          onStateChange('error')
          return
        }

        imageLoadingStatus.value = 'loading'
        const img = new window.Image()

        img.onload = updateState('loaded')
        img.onerror = updateState('error')
        img.src = src
      },
      {
        immediate: true,
      }
    )
  })

  onBeforeMount(() => {
    mounted = false
  })

  return {
    imageLoadingStatus,
  }
}
