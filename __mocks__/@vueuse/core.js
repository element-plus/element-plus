const core = jest.createMockFromModule('@vueuse/core')

const setMockIsClient = (val) => (core.isClient = val)

core.isClient = true

core.__setIsClient = setMockIsClient

export {}

module.exports = core
