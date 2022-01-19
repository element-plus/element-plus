import installer from './defaults'
export * from '@element-plus/components'
export * from '@element-plus/directives'
export * from '@element-plus/hooks'
export * from '@element-plus/tokens'
export * from '@element-plus/utils/popup-manager'
export { makeInstaller } from './make-installer'

export const install = installer.install
export const version = installer.version
export default installer
