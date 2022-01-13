import { useGlobalConfig } from '../use-global-config'

export const useNamespace = () => {
  const ns = useGlobalConfig('namespace')
  const namespace = ns.value

  const b = (block: string) => `${namespace}-${block}`
  const e = (block: string, element: string) => `${b(block)}--${element}`
  const m = (block: string, element: string, modifier: string) =>
    `${e(block, element)}__${modifier}`

  return {
    namespace,
    b,
    e,
    m,
  }
}
