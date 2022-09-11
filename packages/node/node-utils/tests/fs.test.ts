/**
 * @vitest-environment node
 */

import path from 'path'
import { describe, expect, it } from 'vitest'
import { readJSON } from '../src'

describe('fs', () => {
  const pkgPath = path.resolve(__dirname, '../package.json')

  it('readJSON should work', async () => {
    const data = await readJSON<any>(pkgPath)
    expect(data).a('object')
    expect(data.name).toBe('@element-plus/node-utils')
  })
})
