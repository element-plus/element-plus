import { withInstall } from '@element-plus/utils'
import InputOtp from './src/input-otp.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElInputOtp: SFCWithInstall<typeof InputOtp> = withInstall(InputOtp)
export default ElInputOtp

export * from './src/input-otp'
export type { InputOtpInstance } from './src/instance'
