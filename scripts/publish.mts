import { publish } from '@vitejs/release-scripts'

publish({
  // Used when tag is not `pkg@version`
  defaultPackage: 'element-plus',
  provenance: true,
})
