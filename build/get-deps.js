/* eslint-disable */
/**
 *
 * @param {PathLike} path path to dependencies
 * @returns {Array<string>}
 */
module.exports = path => {
  const pkgJson = require(path)

  const { dependencies } = pkgJson
  return Object.keys(dependencies)
}
