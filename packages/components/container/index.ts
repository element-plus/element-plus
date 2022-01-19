import { withInstall, withNoopInstall } from '@element-plus/utils/with-install'

import Container from './src/container.vue'
import Aside from './src/aside.vue'
import Footer from './src/footer.vue'
import Header from './src/header.vue'
import Main from './src/main.vue'

export const ElContainer = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main,
})

export default ElContainer
export const ElAside = withNoopInstall(Aside)
export const ElFooter = withNoopInstall(Footer)
export const ElHeader = withNoopInstall(Header)
export const ElMain = withNoopInstall(Main)
