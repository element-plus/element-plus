


export const jestMock = (object: any, method: string, implementation: () => any, accessType?: 'get' | 'set') => {
  let mockSpy = null
  if(!accessType){
    mockSpy = jest.spyOn(object, method)
      .mockImplementation(implementation)
  }
  if(accessType === 'get' || accessType === 'set'){
    // must use `as 'get'` or `as 'set'` or `as 'any'`.
    mockSpy = jest.spyOn(object, method, accessType as 'get')
      .mockImplementation(implementation)
  }
  return mockSpy
}
