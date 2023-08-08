import { withInstall } from '@element-plus/utils'
import Typography from './src/typography.vue'
import Base from './src/base.vue'
import Paragraph from './src/paragraph.vue'
Typography.Base = Base
export const ElTypography = withInstall(Typography)
export const ElBase = withInstall(Base)
export const ElParagraph = withInstall(Paragraph)
// export default Text

export * from './src/typography'
