import { App } from 'vue'
import { SFCWithInstall } from '../utils/types'
import Header from '../container/src/header.vue'

Header.install = (app: App): void => {
  app.component(Header.name, Header)
}
const _Header: SFCWithInstall<typeof Header> = Header

export default _Header

