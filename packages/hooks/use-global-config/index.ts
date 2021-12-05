import { inject } from 'vue'
import { configProviderContextKey } from '@element-plus/tokens'
import type { ConfigProviderContext } from '@element-plus/tokens'

const defaultConfig: ConfigProviderContext = {
  button: {
    autoInsertSpace: false,
  },
}

export const useGlobalConfig = () =>
  inject(configProviderContextKey, defaultConfig)
