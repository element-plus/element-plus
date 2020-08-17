
const _ = jest.genMockFromModule('lodash-es')

const debounce = (fn) => () => fn()

_.debounce = debounce

module.exports = _
