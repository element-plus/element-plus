export default {
  title: 'Button',
}

export const NormalButton = (): string => '<el-button>With Text</el-button>'
export const ButtonTwo = (): string => '<el-button>button two</el-button>'
export const ButtonGroup = (): string => `<el-button-group>
<el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
<el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
</el-button-group>`
