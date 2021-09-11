import 'normalize.css'
import 'element-plus/theme-chalk/src/index.scss'
import './styles/app.scss'

import VPApp from './components/vp-app.vue'
import VPDemo from './components/vp-demo.vue'
import MainColor from './components/globals/main-color.vue'
import NeutralColor from './components/globals/neutral-color.vue'
import SecondaryColors from './components/globals/secondary-colors.vue'
import IconList from './components/globals/icons.vue'
export { default as NotFound } from './components/vp-not-found.vue'

export default VPApp
export const globals = [
  ['Demo', VPDemo],
  ['MainColor', MainColor],
  ['NeutralColor', NeutralColor],
  ['SecondaryColors', SecondaryColors],
  ['IconList', IconList],
]
