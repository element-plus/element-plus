/* eslint-disable */
const path = require('path')

module.exports = () => {
  return {
    transform(code, id) {
      if (id.includes('packages')) {
        return {
          code: code.replace(
            /@element-plus\//g,
            `${path.relative(
              path.dirname(id),
              path.resolve(__dirname, '../packages'),
            )}/`,
          ),
          map: null,
        }
      }
      return { code, map: null }
    },
  }
}
