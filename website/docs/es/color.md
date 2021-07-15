<script>
  import bus from '../../bus';
  import { tintColor } from '../../color.js';
  import BorderBox from "../../components/demo/color/border-box.vue"
  const borderColors = [
    {
      name: 'Borde base',
      type: 'base',
      color: '#DCDFE6',
    },
    {
      name: 'Borde ligero',
      type: 'light',
      color: '#E4E7ED',
    },
    {
      name: 'Borde claro',
      type: 'lighter',
      color: '#EBEEF5',
    },
    {
      name: 'Borde extra claro',
      type: 'extra-light',
      color: '#F2F6FC',
    },
  ]

  const varMap = {
    'primary': '$--color-primary',
    'success': '$--color-success',
    'warning': '$--color-warning',
    'danger': '$--color-danger',
    'info': '$--color-info',
    'white': '$--color-white',
    'black': '$--color-black',
    'textPrimary': '$--color-text-primary',
    'textRegular': '$--color-text-regular',
    'textSecondary': '$--color-text-secondary',
    'textPlaceholder': '$--color-text-placeholder',
  };
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
      BorderBox
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
        textPrimary: '',
        textRegular: '',
        textSecondary: '',
        textPlaceholder: '',
        borderColors,
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

Element Plus utiliza un conjunto de paletas para especificar colores, y así, proporcionar una apariencia y sensación coherente para los productos que construye.

### Color principal

El color principal de Element Plus es el azul brillante y amigable.

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

### Color secundario

Además del color principal, se necesitan utilizar distintos colores para diferentes escenarios (por ejemplo, el color en tono rojo indica una operación peligrosa).

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: success }"
    >Success<div class="value">#67C23A</div>
      <div
        class="bg-color-sub"
      >
        <div
          class="bg-success-sub-item"
          v-for="(item, key) in Array(2)"
          :key="key"
          :style="{ background: tintColor(success, (key + 8) / 10) }"
            >
        </div>
      </div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: warning }"
    >Warning<div class="value">#E6A23C</div>
      <div
          class="bg-color-sub"
        >
        <div
          class="bg-success-sub-item"
          v-for="(item, key) in Array(2)"
          :key="key"
          :style="{ background: tintColor(warning, (key + 8) / 10) }"
            >
        </div>
      </div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: danger }"
    >Danger<div class="value">#F56C6C</div>
      <div
          class="bg-color-sub"
        >
        <div
          class="bg-success-sub-item"
          v-for="(item, key) in Array(2)"
          :key="key"
          :style="{ background: tintColor(danger, (key + 8) / 10) }"
            >
        </div>
      </div>
    </div>
  </el-col>
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box"
    :style="{ background: info }"
    >Info<div class="value">#909399</div>
      <div
          class="bg-color-sub"
        >
        <div
          class="bg-success-sub-item"
          v-for="(item, key) in Array(2)"
          :key="key"
          :style="{ background: tintColor(info, (key + 8) / 10) }"
            >
        </div>
      </div>
    </div>
  </el-col>
</el-row>

### Color neutro

Los colores neutrales son para texto, fondos y bordes. Puede usar diferentes colores neutrales para representar una estructura jerárquica.

<el-row :gutter="12">
  <el-col :span="6" :xs="{span: 12}">
    <div class="demo-color-box-group">
      <div class="demo-color-box demo-color-box-other"
      :style="{ background: textPrimary }"
      >Texto primario<div class="value">{{textPrimary}}</div></div>
      <div class="demo-color-box demo-color-box-other"
      :style="{ background: textRegular }"
      >
      Texto regular<div class="value">{{textRegular}}</div></div>
      <div class="demo-color-box demo-color-box-other"
      :style="{ background: textSecondary }"
      >Texto secundario<div class="value">{{textSecondary}}</div></div>
      <div class="demo-color-box demo-color-box-other"
      :style="{ background: textPlaceholder }"
      >Texto de placeholder<div class="value">{{textPlaceholder}}</div></div>
    </div>
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
