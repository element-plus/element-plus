/**
 * @type import('@jest/types').Config.InitialOptions
 */
module.exports = {
  setupFiles: ['./jest.setup.js'],
  testMatch: [
    '**/__tests__/**/*.[jt]s?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
    '!**/**vitest**',
  ],
  testPathIgnorePatterns: ['/node_modules/', 'dist'],
  modulePathIgnorePatterns: ['/node_modules/', 'dist', 'cypress'],
  testEnvironment: 'jsdom',
  transform: {
    '\\.[jt]sx?$': 'babel-jest',
    '^.+\\.vue$': '<rootDir>/internal/build/vue-jest-transformer.js',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'vue'],
  // u can change this option to a more specific folder for test single component or util when dev
  // for example, ['<rootDir>/packages/components/input']
  roots: ['<rootDir>'],
}
