import type { INSTALLED_KEY } from '@element-plus/constants'
import type { ClassValue } from '@element-plus/utils'
import type { StyleValue } from 'vue'

declare global {
  const process: {
    env: {
      NODE_ENV: string
      RUN_TEST_WITH_PERSISTENT: string
    }
  }

  namespace JSX {
    interface IntrinsicAttributes {
      class?: ClassValue
      style?: StyleValue
    }
  }
}

declare module 'vue' {
  export interface App {
    [INSTALLED_KEY]?: boolean
  }

  export interface GlobalComponents {
    Component: (props: { is: Component | string }) => void
  }
}

export {}
