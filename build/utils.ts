// import { EP_PREFIX } from './constants'
// import { getWorkspaceNames } from './utils/pkg'
// import { buildConfig } from './info'
// import type { Module } from './info'

// export const pathsRewriter = async () => {
//   const workspacePkgs = (await getWorkspaceNames()).filter((pkg) =>
//     pkg.startsWith(EP_PREFIX)
//   )
//   return (module: Module) => (id: string) => {
//     const config = buildConfig[module]
//     if (workspacePkgs.some((pkg) => id.startsWith(pkg)))
//       return id.replace(EP_PREFIX, config.bundle.path)
//     else return ''
//   }
// }
