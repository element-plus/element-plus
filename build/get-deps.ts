/* eslint-disable */
/**
 *
 * @param {PathLike} path path to dependencies
 * @returns {Array<string>}
 */
export default path => {
  const pkgJson = require(path)

  const { dependencies } = pkgJson
  return Object.keys(dependencies)
}
