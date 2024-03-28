import { createApp } from 'vue'
import { describe, expect, it } from 'vitest'
import { withInstall, withInstallDirective } from '../..'

describe('withInstall', () => {
  it('it should add an install method to the main component', () => {
    const mainComponent = {
      name: 'MainComponent',
      render: () => null,
    }

    const componentWithInstall = withInstall(mainComponent)
    expect(typeof componentWithInstall.install).toBe('function')
  })

  it('it should register the main component and extra components when calling install', () => {
    const mainComponent = {
      name: 'MainComponent',
      render: () => null,
    }

    const extraComponents = {
      ExtraComponent: {
        name: 'ExtraComponent',
        render: () => null,
      },
    }

    const app = createApp({})
    const componentWithInstall = withInstall(mainComponent, extraComponents)

    componentWithInstall.install?.(app)

    expect(app.component('MainComponent')).toBeTruthy()
    expect(app.component('ExtraComponent')).toBeTruthy()
  })

  it('it should add extra components to the main component when provided', () => {
    const mainComponent = {
      name: 'MainComponent',
      render: () => null,
    }

    const extraComponents = {
      ExtraComponent: {
        name: 'ExtraComponent',
        render: () => null,
      },
    }

    const componentWithInstall = withInstall(mainComponent, extraComponents)

    expect(componentWithInstall.ExtraComponent).toBeTruthy()
  })

  it('it should not add extra components if none provided', () => {
    const mainComponent = {
      name: 'MainComponent',
      render: () => null,
    }

    const componentWithInstall = withInstall(mainComponent)

    expect(componentWithInstall.ExtraComponent).toBeFalsy()
  })
})

describe('withInstallDirective', () => {
  it('it should add an install method to the directive', () => {
    const directive = {
      mounted: () => null,
      unmounted: () => null,
    }

    const directiveWithInstall = withInstallDirective(
      directive,
      'test-directive'
    )
    expect(typeof directiveWithInstall.install).toBe('function')
  })

  it('it should register the directive when calling install', () => {
    const directive = {
      mounted: () => null,
      unmounted: () => null,
    }

    const app = createApp({})
    const directiveWithInstall = withInstallDirective(
      directive,
      'test-directive'
    )

    directiveWithInstall.install?.(app)

    expect(app.directive('test-directive')).toBeTruthy()
  })
})
