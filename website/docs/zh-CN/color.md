<script>
  import bus from '../../bus';
  import { tintColor } from '../../color.js';
  import BorderBox from "../../components/demo/color/border-box.vue"
  import ColorBox from "../../components/demo/color/color-box.vue"
  import TextBox from "../../components/demo/color/text-box.vue"
  const borderColors = [
    {
      name: '一级边框',
      type: 'base',
      color: '#DCDFE6',
    },
    {
      name: '二级边框',
      type: 'light',
      color: '#E4E7ED',
    },
    {
      name: '三级边框',
      type: 'lighter',
      color: '#EBEEF5',
    },
    {
      name: '四级边框',
      type: 'extra-light',
      color: '#F2F6FC',
    },
  ]

  const textColors = [
    {
      name: '主要文字',
      type: 'primary',
    },
    {
      name: '常规文字',
      type: 'regular',
    },
    {
      name: '次要文字',
      type: 'secondary',
    },
    {
      name: '占位文字',
      type: 'placeholder',
    }
  ]

  const varMap = {
    'primary': '$--color-primary',
    'success': '$--color-success',
    'warning': '$--color-warning',
    'danger': '$--color-danger',
    'info': '$--color-info',
    'white': '$--color-white',
    'black': '$--color-black',
  };
  const original = {
    primary: '#409EFF',
    success: '#67C23A',
    warning: '#E6A23C',
    danger: '#F56C6C',
    info: '#909399',
    white: '#FFFFFF',
    black: '#000000',
  }
  export default {
    components: {
      BorderBox,
      ColorBox,
      TextBox,
    },
    mounted() {
      this.setGlobal();
    },
    methods: {
      tintColor(color, tint) {
        return tintColor(color, tint);
      },
      setGlobal() {
        if (window.userThemeConfig) {
          this.global = window.userThemeConfig.global;
        }
      }
    },
    data() {
      return {
        global: {},
        primary: '',
        success: '',
        warning: '',
        danger: '',
        info: '',
        white: '',
        black: '',
        borderColors,
        textColors,
      }
    },
    watch: {
      global: {
        immediate: true,
        handler(value) {
          Object.keys(original).forEach((o) => {
            if (value[varMap[o]]) {
              this[o] = value[varMap[o]]
            } else {
              this[o] = original[o]
            }
          });
        }
      }
    },
  }
</script>

## Color 色彩

Element Plus 为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。

### 主色

Element Plus 主要品牌颜色是鲜艳、友好的蓝色。

<el-row :gutter="12">
  <el-col :span="10" :xs="{span: 12}">
    <div class="demo-color-box" :style="{ background: primary }">Brand Color
      <div class="value">#409EFF</div>
      <div class="bg-color-sub" :style="{ background: tintColor(primary, 0.9) }">
        <div
          class="bg-blue-sub-item"
          v-for="(item, key) in Array(8)"
          :key="key"
          :style="{ background: tintColor(primary, (key + 1) / 10) }"
        ></div>
      </div>
    </div>
  </el-col>
</el-row>

### 辅助色

除了主色外的场景色，需要在不同的场景中使用（例如危险色表示危险的操作）。

<color-box />

### 中性色

中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <text-box :text-colors="textColors" />
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <border-box :border-colors="borderColors" />
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div
      class="demo-color-box demo-color-box-other"
      :style="{ background: black }"
      >基础黑色<div class="value">{{black}}</div></div>
      <div
      class="demo-color-box demo-color-box-other"
      :style="{ background: white, color: '#303133', border: '1px solid #eee' }"
      >基础白色<div class="value">{{white}}</div></div>
      <div class="demo-color-box demo-color-box-other bg-transparent">透明<div class="value">Transparent</div>
      </div>
    </div>
  </el-col>
</el-row>
