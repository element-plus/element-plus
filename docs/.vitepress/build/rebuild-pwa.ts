import { resolveConfig } from 'vite'
import type { VitePluginPWAAPI } from 'vite-plugin-pwa'

const rebuildPwa = async () => {
  const config = await resolveConfig({}, 'build', 'production')
  const pwaPlugin: VitePluginPWAAPI = config.plugins.find((i) => {
    return i.name === 'vite-plugin-pwa'
  })?.api

  if (pwaPlugin && pwaPlugin.generateSW && !pwaPlugin.disabled) {
    await pwaPlugin.generateSW()
  }
}

rebuildPwa()
