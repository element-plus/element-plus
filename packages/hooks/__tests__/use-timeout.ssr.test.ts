/**
 * @vitest-environment node
 */

import { createSSRApp, defineComponent, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { describe, expect, it, vi } from 'vitest'
import { useTimeout } from '../use-timeout'

describe('use-timeout (SSR)', () => {
  it('should render without window in SSR environment', async () => {
    const fn = vi.fn()

    expect('window' in globalThis).toBe(false)

    const App = defineComponent({
      setup() {
        const { registerTimeout } = useTimeout()
        registerTimeout(fn, 0)

        return () => h('div', 'ssr')
      },
    })

    await expect(renderToString(createSSRApp(App))).resolves.toContain('ssr')
    expect(fn).not.toHaveBeenCalled()
  })
})
