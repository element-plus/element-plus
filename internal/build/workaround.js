import { createRequire } from 'module'

const require = createRequire(import.meta.url)
require.extensions['.ts'] = () => {
  /**
   * Workaround to force gulp-cli to use import instead of require for .ts files.
   *
   * In newer Node versions, require() supports loading synchronous ES modules by default, no longer throwing ERR_REQUIRE_ESM.
   * By throwing ERR_REQUIRE_ESM manually, this forces gulp-cli to fall back to import, which allows tsx to compile TypeScript files to ESM format.
   *
   * @see https://github.com/gulpjs/gulp-cli/blob/1cfedec3c63b58fc6e9ee715c9857418a29413da/lib/shared/require-or-import.js#L27-L32
   * @see https://nodejs.org/api/errors.html#err_require_esm
   */
  throw {
    code: 'ERR_REQUIRE_ESM',
  }
}
