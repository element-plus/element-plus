import { App } from 'vue'
import type { SFCWithInstall } from '@element-plus/utils/types'
import Footer from '../container/src/footer.vue'

Footer.install = (app: App): void => {
  app.component(Footer.name, Footer)
}

const _Footer: SFCWithInstall<typeof Footer> = Footer

export default _Footer

