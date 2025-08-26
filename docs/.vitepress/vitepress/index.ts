import 'normalize.css'
// import 'element-plus/dist/index.css'

// for dev
// reset
import '../../../packages/theme-chalk/src/reset.scss'
import '../../../packages/theme-chalk/src/index.scss'
// for dark mode
import '../../../packages/theme-chalk/src/dark/css-vars.scss'

import './styles/css-vars.scss'
import './styles/app.scss'

import 'uno.css'

import VPApp from './components/vp-app.vue'
import VPDemo from './components/vp-demo.vue'
import ApiTyping from './components/globals/vp-api-typing.vue'
import ApiFunctionType from './components/globals/vp-api-function.vue'
import ApiBooleanType from './components/globals/vp-api-bool.vue'
import ApiStringType from './components/globals/vp-api-string.vue'
import ApiNumberType from './components/globals/vp-api-number.vue'
import ApiRefType from './components/globals/vp-api-ref.vue'
import ApiEnumType from './components/globals/vp-api-enum.vue'
import ApiExternalType from './components/globals/vp-api-external.vue'
import Overview from './components/globals/overview.vue'
import IconList from './components/globals/icons.vue'

import type { Component } from 'vue'

export { default as NotFound } from './components/vp-not-found.vue'

export default VPApp
export const globals: [string, Component][] = [
  ['Demo', VPDemo],
  ['Overview', Overview],
  ['IconList', IconList],
  ['ApiTyping', ApiTyping],
  ['FunctionType', ApiFunctionType],
  ['EnumType', ApiEnumType],
  ['BooleanType', ApiBooleanType],
  ['StringType', ApiStringType],
  ['NumberType', ApiNumberType],
  ['RefType', ApiRefType],
  ['ExternalType', ApiExternalType],
]
