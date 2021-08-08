import makeInstaller from './make-installer'
import Components from './components'
import Plugins from './plugins'

export default makeInstaller([
  ...Components,
  ...Plugins,
])
