import { type Ref, computed, watch } from 'vue'
import { type MaybeComputedRef, resolveUnref as toValue } from '@vueuse/core'

export function useProgress(
  showProgressBar: MaybeComputedRef<boolean>,
  duration: MaybeComputedRef<number>,
  templateRef: Ref<HTMLElement | undefined>,
  onEnd: () => void
) {
  let animation: Animation | undefined

  function initialize() {
    const progressBar = templateRef.value
    if (!progressBar) return
    if (animation) {
      animation.cancel()
      animation.onfinish = null
    }
    const durationValue = toValue(duration)
    animation = createProgressBarAnimation(durationValue, progressBar)
    animation.play()
    if (durationValue > 0) {
      animation.onfinish = () => {
        onEnd()
      }
    }
  }

  watch(() => toValue(duration), initialize)

  return {
    mustHide: computed(
      () => !(toValue(showProgressBar) && toValue(duration) > 0)
    ),
    initialize,
    pause() {
      if (!animation) return
      animation.pause()
    },
    resume() {
      if (!animation) return
      animation.play()
    },
    cleanup() {
      if (!animation) return
      animation.cancel()
      animation = undefined
    },
  }
}

function createProgressBarAnimation(duration: number, element: HTMLElement) {
  return new Animation(
    new KeyframeEffect(element, [{ width: '100%' }, { width: '0%' }], {
      duration,
      fill: 'forwards',
    })
  )
}
