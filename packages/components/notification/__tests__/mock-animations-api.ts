import {
  mockAnimationsApi as _mockAnimationsApi,
  configMocks,
} from 'jsdom-testing-mocks'
import { afterAll, afterEach } from 'vitest'

export function mockAnimationsApi() {
  configMocks({
    afterEach,
    afterAll,
  })
  _mockAnimationsApi()
}
