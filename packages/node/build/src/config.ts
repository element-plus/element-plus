import type { Options } from 'tsup'

export interface BuildOptions {
  name?: string
  minify?: boolean | 'both'
  vue?: boolean
  dts?: boolean
  platform?: 'web' | 'node'
  tsup?: Omit<Options, 'dts' | 'tsconfig' | 'platform'>
}

export function defineConfig(options: BuildOptions) {
  return options
}
