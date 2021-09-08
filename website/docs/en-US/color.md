<script>
  import bus from '../../bus';
  import { tintColor } from '../../color.js';
  import BorderBox from "../../components/demo/color/border-box.vue"
  import ColorBox from "../../components/demo/color/color-box.vue"
  import TextBox from "../../components/demo/color/text-box.vue"
  const varMap = {
    'primary': '$--color-primary',
    'success': '$--color-success',
    'warning': '$--color-warning',
    'danger': '$--color-danger',
    'info': '$--color-info',
    'white': '$--color-white',
    'black': '$--color-black',
  };

  const borderColors = [
    {
      type: 'base',
      color: '#DCDFE6',
    },
    {
      type: 'light',
      color: '#E4E7ED',
    },
    {
      type: 'lighter',
      color: '#EBEEF5',
    },
    {
      type: 'extra-light',
      color: '#F2F6FC',
    },
  ]

  const textColors = [
    {
      name: 'Primary Text',
      type: 'primary',
    },
    {
      name: 'Regular Text',
      type: 'regular',
    },
    {
      name: 'Secondary Text',
      type: 'secondary',
    },
    {
      name: 'Placeholder Text',
      type: 'placeholder',
    }
  ]

  const original = {
    primary: '#409EFF',
    success: '#67C23A',
    warning: '#E6A23C',
    danger: '#F56C6C',
    info: '#909399',
    white: '#FFFFFF',
    black: '#000000',
    textPrimary: '#303133',
    textRegular: '#606266',
    textSecondary: '#909399',
    textPlaceholder: '#C0C4CC',
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
      },
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

## Color

Element Plus uses a specific set of palettes to specify colors to provide a consistent look and feel for the products you build.

### Main Color

The main color of Element Plus is bright and friendly blue.

<el-row :gutter="12">
  <el-col :span="10" :xs="{span: 12}">
    <div
      class="demo-color-box"
      :style="{ background: primary }"
    >
      Brand Color<div class="value">#409EFF</div>
    <div
      class="bg-color-sub"
      :style="{ background: tintColor(primary, 0.9) }"
    >
    <div
      class="bg-blue-sub-item"
      v-for="(item, key) in Array(8)"
      :key="key"
      :style="{ background: tintColor(primary, (key + 1) / 10) }"
        >
    </div>
    </div>
    </div>
  </el-col>
</el-row>

### Secondary Color

Besides the main color, you need to use different scene colors in different scenarios (for example, dangerous color indicates dangerous operation)

<color-box />

### Neutral Color

Neutral colors are for text, background and border colors. You can use different neutral colors to represent the hierarchical structure.

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
      >Basic Black<div class="value">{{black}}</div></div>
      <div
      class="demo-color-box demo-color-box-other"
      :style="{ background: white, color: '#303133', border: '1px solid #eee' }"
      >Basic White<div class="value">{{white}}</div></div>
      <div class="demo-color-box demo-color-box-other bg-transparent">Transparent<div class="value">Transparent</div>
      </div>
    </div>
  </el-col>
</el-row>
