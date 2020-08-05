export default {
  title: 'Button',
}

export const NormalButton = (): string => '<el-button>With Text</el-button>'
export const ButtonTwo = (): string => '<el-button>button two</el-button>'
export const ButtonGroup = (): string => `<el-button-group>
<el-button type="primary" icon="el-icon-arrow-left">Left</el-button>
<el-button type="primary">Right<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>`
