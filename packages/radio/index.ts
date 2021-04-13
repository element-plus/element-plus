import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Radio from './src/radio.vue'

Radio.install = (app: App): void => {
  app.component(Radio.name, Radio)
}

const _Radio: SFCWithInstall<typeof Radio> = Radio

export default _Radio
