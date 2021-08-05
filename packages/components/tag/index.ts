import Tag from './src/index.vue'

import type { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'

Tag.install = (app: App): void => {
  app.component(Tag.name, Tag)
}

const _Tag: SFCWithInstall<typeof Tag> = Tag

export default _Tag
