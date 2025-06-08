import type { vShow } from 'vue'
import type { INSTALLED_KEY } from '@element-plus/constants'

declare global {
  const process: {
    env: {
      NODE_ENV: string
      RUN_TEST_WITH_PERSISTENT: boolean
    }
  }

  namespace JSX {
    interface IntrinsicAttributes {
      class?: unknown
      style?: unknown
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

  export interface ComponentCustomProperties {
    vShow: typeof vShow
  }
}

export {}
