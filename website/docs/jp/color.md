<script>
  import bus from '../../bus';
  import { tintColor } from '../../color.js';
  import BorderBox from "../../components/demo/color/border-box.vue"
  import ColorBox from "../../components/demo/color/color-box.vue"
  import TextBox from "../../components/demo/color/text-box.vue"
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

## カラー

Element Plus は、特定のパレットセットを用いて色を指定し、プロダクトに一貫した外観と使用感を提供します。

### メインカラー

Element Plus のメインカラーは明るく親しみやすいブルーです。

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

### セカンダリカラー

メインカラーの他にも、シーンカラーを別のシナリオで使用する必要があります（例えば、危険な色は危険な操作を示します）。

<color-box />

### ニュートラルカラー

ニュートラルカラーとは、文字色、背景色、枠線の色のことです。ニュートラルカラーを使い分けることで、階層構造を表現することができます。

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
