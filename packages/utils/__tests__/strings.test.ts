import * as vueShared from '@vue/shared'
import { describe, expect, it } from 'vitest'
import {
  camelize,
  capitalize,
  escapeStringRegexp,
  hyphenate,
  kebabCase,
} from '..'

describe('strings', () => {
  it('escapeStringRegexp should work', () => {
    expect(escapeStringRegexp('foo')).toMatchInlineSnapshot('"foo"')
    expect(escapeStringRegexp('**\\//aa^~#$')).toMatchInlineSnapshot(
      `"\\*\\*\\\\//aa\\^~#\\$"`
    )
  })

  it('capitalize', () => {
    ;['capitalize', 'camelize', 'hyphenate'].forEach((item) => {
      expect(capitalize(item)).toBe(vueShared.capitalize(item))
    })
  })

  it('re-export from @vue/shared', () => {
    expect(camelize).toBe(vueShared.camelize)
    expect(hyphenate).toBe(vueShared.hyphenate)
    expect(kebabCase).toBe(vueShared.hyphenate)
  })
})
