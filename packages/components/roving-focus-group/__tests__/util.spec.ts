import { EVENT_CODE } from '@element-plus/utils-v2'
import * as Util from '../src/utils'

describe('util', () => {
  it('should be able to fetch focusIntent', () => {
    expect(
      Util.getFocusIntent(
        new KeyboardEvent('mousedown', {
          key: EVENT_CODE.enter,
        })
      )
    ).toBe(undefined)

    expect(
      Util.getFocusIntent(
        new KeyboardEvent('mousedown', {
          key: EVENT_CODE.left,
        })
      )
    ).toBe('prev')

    expect(
      Util.getFocusIntent(
        new KeyboardEvent('mousedown', {
          key: EVENT_CODE.left,
        }),
        'vertical'
      )
    ).toBeUndefined()
    expect(
      Util.getFocusIntent(
        new KeyboardEvent('mousedown', {
          key: EVENT_CODE.up,
        }),
        'horizontal'
      )
    ).toBeUndefined()

    expect(
      Util.getFocusIntent(
        new KeyboardEvent('mousedown', {
          key: EVENT_CODE.left,
        }),
        'horizontal',
        'rtl'
      )
    ).toBe('next')

    expect(
      Util.getFocusIntent(
        new KeyboardEvent('mousedown', {
          key: EVENT_CODE.right,
        }),
        'horizontal',
        'rtl'
      )
    ).toBe('prev')

    expect(
      Util.getFocusIntent(
        new KeyboardEvent('mousedown', {
          key: EVENT_CODE.up,
        }),
        'vertical',
        'rtl'
      )
    ).toBe('prev')
  })

  it('should reorder array at index X', () => {
    expect(Util.reorderArray([1, 2, 3, 4], 2)).toStrictEqual([3, 4, 1, 2])
  })
})
