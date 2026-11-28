/**
 * @vitest-environment node
 */
import { fileURLToPath } from 'node:url'
import { compileString } from 'sass-embedded'
import { expect, test } from 'vitest'

const loadPaths = [fileURLToPath(new URL('../src', import.meta.url))]

function compileThemes(config: string) {
  const { css } = compileString(
    `
      ${config}
      @use 'var' as light-theme;
      @use 'dark/css-vars';
    `,
    { loadPaths }
  )
  const light = Array.from(
    css.matchAll(/:root \{([^}]*)\}/g),
    ([, vars]) => vars
  ).join('\n')

  return { light, dark: css.match(/html\.dark \{([^}]*)\}/)?.[1] }
}

test('clears light RGB channels for dynamic dark shades', () => {
  const { light, dark } = compileThemes(`
    @use 'dark/var' with (
      $colors: ('primary': (
        'light-3': var(--brand-dark-shade),
        'dark-2': var(--brand-dark-accent)
      ))
    );
  `)

  expect(light).toContain('--el-color-primary-light-3-rgb: 121, 187, 255;')
  expect(light).toContain('--el-color-primary-dark-2-rgb: 51, 126, 204;')
  expect(dark).toContain('--el-color-primary-light-3: var(--brand-dark-shade);')
  expect(dark).toContain('--el-color-primary-light-3-rgb: initial;')
  expect(dark).toContain('--el-color-primary-dark-2: var(--brand-dark-accent);')
  expect(dark).toContain('--el-color-primary-dark-2-rgb: initial;')
  expect(dark).toContain('--el-color-primary-light-5-rgb: 42, 89, 138;')
})

test('omits light RGB channels for a dynamic light shade', () => {
  const { light, dark } = compileThemes(`
    @use 'common/var' with (
      $colors: ('primary': ('light-3': var(--brand-light-shade)))
    );
  `)

  expect(light).toContain(
    '--el-color-primary-light-3: var(--brand-light-shade);'
  )
  expect(light).not.toContain('--el-color-primary-light-3-rgb:')
  expect(dark).toContain('--el-color-primary-light-3-rgb: 51, 117, 185;')
})

test('emits RGB channels for custom Sass colors in each theme', () => {
  const { light, dark } = compileThemes(`
    @use 'common/var' with (
      $colors: ('primary': ('base': #123456, 'dark-2': #abcdef))
    );
    @use 'dark/var' as dark-config with (
      $colors: ('primary': ('base': #654321, 'dark-2': #fedcba))
    );
  `)

  expect(light).toContain('--el-color-primary: #123456;')
  expect(light).toContain('--el-color-primary-rgb: 18, 52, 86;')
  expect(light).toContain('--el-color-primary-dark-2: #abcdef;')
  expect(light).toContain('--el-color-primary-dark-2-rgb: 171, 205, 239;')
  expect(dark).toContain('--el-color-primary: #654321;')
  expect(dark).toContain('--el-color-primary-rgb: 101, 67, 33;')
  expect(dark).toContain('--el-color-primary-dark-2: #fedcba;')
  expect(dark).toContain('--el-color-primary-dark-2-rgb: 254, 220, 186;')
})

test('supports the original base-color RGB mixin', () => {
  const { css } = compileString(
    `
      @use 'common/var' with ($colors: ('primary': ('base': #123456)));
      @use 'mixins/_var.scss' as vars;

      .test-theme {
        @include vars.set-css-color-rgb('primary');
      }
    `,
    { loadPaths }
  )

  expect(css).toMatch(/\.test-theme \{\s*--el-color-primary-rgb: 18, 52, 86;/)
})
