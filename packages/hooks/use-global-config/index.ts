import { inject } from 'vue'
import { configProviderContextKey } from '@element-plus/tokens'
import type { ConfigProvdierContext } from '@element-plus/tokens'

const defaultConfig: ConfigProvdierContext = {
  button: {
    autoInsertSpace: false,
  },
}

export const useGlobalConfig = () => {
  return inject(configProviderContextKey, defaultConfig)
}
