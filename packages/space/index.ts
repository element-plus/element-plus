import { App } from 'vue'
import Space from './src/index'
import type { SFCWithInstall } from '@element-plus/utils/types'

Space.install = (app: App): void => {
  app.component(Space.name, Space)
}

const _Space: SFCWithInstall<typeof Space> = Space as any

export default _Space
