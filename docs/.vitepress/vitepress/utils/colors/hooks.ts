import { getCurrentInstance, ref } from 'vue'
import { useClipboard } from '@vueuse/core'
import { getColorValue } from './var'

// copy color
export const useCopyColor = () => {
  const source = ref('')
  const { copy, isSupported } = useClipboard({ source })

  const vm = getCurrentInstance()!
  const copyColor = async (colorType: string) => {
    const colorValue = getColorValue(colorType)
    source.value = colorValue
    const { $message } = vm.appContext.config.globalProperties
    if (!isSupported) {
      $message.error('Copy failed')
    }
    try {
      await copy()
      $message.success(`--el-color-${colorType}: ${source.value}`)
    } catch (e: any) {
      $message.error(e.message)
    }
  }

  return {
    copyColor,
  }
}
