import { withInstall } from '@element-plus/utils'

import Captcha from './src/captcha.vue'
import type { SFCWithInstall } from '@element-plus/utils'

export const ElCaptcha: SFCWithInstall<typeof Captcha> = withInstall(Captcha)

export default ElCaptcha

export * from './src/captcha'
