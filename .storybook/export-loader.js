module.exports = function (content) {
  return content.replace(
  /export ?{\s* default as (.+?)}(.+)/g,`
import _$1 $2
export const $1 = () => _$1
`)
}
