import AST from 'unplugin-ast/rollup'
import { RemoveWrapperFunction } from 'unplugin-ast/presets'

export const ASTPlugin = () =>
  AST({
    transformer: [RemoveWrapperFunction(['definePropType', 'mutable'])],
  })
