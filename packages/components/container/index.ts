import { withInstall, withNoopInstall } from '@element-plus/utils'

import Container from './src/container.vue'
import Aside from './src/aside.vue'
import Footer from './src/footer.vue'
import Header from './src/header.vue'
import Main from './src/main.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElContainer: SFCWithInstall<typeof Container> & {
  Aside: typeof Aside
  Footer: typeof Footer
  Header: typeof Header
  Main: typeof Main
} = withInstall(Container, {
  Aside,
  Footer,
  Header,
  Main,
})

export default ElContainer
export const ElAside: SFCWithInstall<typeof Aside> = withNoopInstall(Aside)
export const ElFooter: SFCWithInstall<typeof Footer> = withNoopInstall(Footer)
export const ElHeader: SFCWithInstall<typeof Header> = withNoopInstall(Header)
export const ElMain: SFCWithInstall<typeof Main> = withNoopInstall(Main)

export type ContainerInstance = InstanceType<typeof Container>
export type AsideInstance = InstanceType<typeof Aside>
export type FooterInstance = InstanceType<typeof Footer>
export type HeaderInstance = InstanceType<typeof Header>
export type MainInstance = InstanceType<typeof Main>
