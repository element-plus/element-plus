/**
 * @vitest-environment node
 */

import { afterAll, describe, expect, it, vi } from 'vitest'
import consola from 'consola'
import { errorAndExit } from '../src'

describe('log', () => {
  it('errorAndExit should work', async () => {
    afterAll(() => {
      vi.restoreAllMocks()
    })

    const exitFn = vi
      .spyOn(process, 'exit')
      .mockImplementation(() => undefined as never)
    const errorFn = vi
      .spyOn(consola, 'error')
      .mockImplementation(() => undefined)

    errorAndExit(new Error('foo error'))

    expect(exitFn).toHaveBeenCalledOnce()
    expect(errorFn).toHaveBeenCalledOnce()
  })
})
