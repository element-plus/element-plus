import AST from 'unplugin-ast/rollup'
import { RemoveWrapperFunction } from 'unplugin-ast/resolvers'

export const ASTPlugin = () =>
  AST({
    transformer: [RemoveWrapperFunction(['definePropType', 'mutable'])],
  })
