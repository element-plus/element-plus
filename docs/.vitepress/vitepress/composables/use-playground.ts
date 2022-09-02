import { utoa } from '../utils'

const MAIN_FILE_NAME = 'App.vue'

export const usePlayground = (source: string) => {
  const code = decodeURIComponent(source)
  const originCode = {
    [MAIN_FILE_NAME]: code,
  }

  const encoded = utoa(JSON.stringify(originCode))
  const link = `https://element-plus.run/#${encoded}`
  return {
    encoded,
    link,
  }
}
