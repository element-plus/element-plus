import type { INSTALLED_KEY } from '@element-plus/constants'

declare global {
  const process: {
    env: {
      NODE_ENV: string
      RUN_TEST_WITH_PERSISTENT: string
    }
  }

  namespace JSX {
    interface IntrinsicAttributes {
      class?: import('vue').ClassValue
      style?: import('vue').StyleValue
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
