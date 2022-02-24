import 'normalize.css'
// import 'element-plus/dist/index.css'

// for dev
import '../../../packages/theme-chalk/src/index.scss'
// for dark mode
import '../../../packages/theme-chalk/src/dark/vars.scss'
import './styles/app.scss'

import VPApp from './components/vp-app.vue'
import VPDemo from './components/vp-demo.vue'
import Changelog from './components/globals/vp-changelog.vue'
import MainColor from './components/globals/main-color.vue'
import NeutralColor from './components/globals/neutral-color.vue'
import SecondaryColors from './components/globals/secondary-colors.vue'
import IconList from './components/globals/icons.vue'

import ParallaxHome from './components/globals/parallax-home.vue'
import Resource from './components/globals/resource.vue'

import type { Component } from 'vue'

export { default as NotFound } from './components/vp-not-found.vue'

export default VPApp
export const globals: [string, Component][] = [
  ['Demo', VPDemo],
  ['MainColor', MainColor],
  ['NeutralColor', NeutralColor],
  ['SecondaryColors', SecondaryColors],
  ['IconList', IconList],
  ['Changelog', Changelog],
  ['ParallaxHome', ParallaxHome],
  ['Resource', Resource],
]
