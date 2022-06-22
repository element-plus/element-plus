import AST from 'unplugin-ast/rollup'
import type { CallExpression } from '@babel/types'
import type { Transformer } from 'unplugin-ast'

export const removeWrapperFunction: Transformer<CallExpression> = {
  filterNode: (node) =>
    node.type === 'CallExpression' &&
    node.callee.type === 'Identifier' &&
    (node.callee.name === 'definePropType' || node.callee.name === 'mutable'),
  transform: (node, code) => {
    const [arg] = node.arguments
    code.overwrite(
      node.start!,
      node.end!,
      `(${code.slice(arg.start!, arg.end!)})`
    )
  },
}

export const ASTPlugin = () =>
  AST({
    transformer: [removeWrapperFunction],
  })
