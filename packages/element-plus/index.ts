import { defaultInstaller } from './defaults'
export * from '@element-plus/components'
export * from '@element-plus/constants'
export * from '@element-plus/directives'
export * from '@element-plus/hooks'
export * from '@element-plus/tokens'
export * from './installer'

export const install = defaultInstaller.install
export const version = defaultInstaller.version
export default defaultInstaller

export { default as dayjs } from 'dayjs'
