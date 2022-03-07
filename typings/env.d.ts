declare global {
  const process: {
    env: { NODE_ENV: string }
  }

  namespace JSX {
    interface IntrinsicAttributes {
      class?: any
      style?: any
    }
  }
}

export {}
