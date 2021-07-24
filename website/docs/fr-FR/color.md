<script>
  import bus from '../../bus';
  import { tintColor } from '../../color.js';
  import BorderBox from "../../components/demo/color/border-box.vue"
  import ColorBox from "../../components/demo/color/color-box.vue"
  import TextBox from "../../components/demo/color/text-box.vue"
  const borderColors = [
    {
      name: 'Bordure de base',
      type: 'base',
      color: '#DCDFE6',
    },
    {
      name: 'Bordure claire',
      type: 'light',
      color: '#E4E7ED',
    },
    {
      name: 'Bordure très claire',
      type: 'lighter',
      color: '#EBEEF5',
    },
    {
      name: 'Bordure extra claire',
      type: 'extra-light',
      color: '#F2F6FC',
    },
  ]

  const textColors = [
    {
      name: 'Texte principal',
      type: 'primary',
    },
    {
      name: 'Texte normal',
      type: 'regular',
    },
    {
      name: 'Texte secondaire',
      type: 'secondary',
    },
    {
      name: 'Texte de placeholder',
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

## Couleur

Element Plus utilise un ensemble de palettes spécifiques afin de fournir un style consistant pour vos produits.

### Couleur principale

La couleur principale d'Element Plus est un bleu clair et agréable.

<el-row :gutter="12">
  <el-col :span="10" :xs="{span: 12}">
    <div class="demo-color-box" :style="{ background: primary }">Couleur principale
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

### Couleurs secondaires

En plus de la couleur principale, vous devrez sans doute utiliser d'autres couleurs pour différents cas de figures, par exemple une couleur de danger pour indiquer une opération dangereuse.

<color-box />

### Couleurs neutres

Les couleurs neutres sont les couleurs du fond, du texte et des bordures. Vous pouvez utiliser différentes couleurs neutres pour représenter une structure hiérarchique.

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
      >Noir<div class="value">{{black}}</div></div>
      <div
      class="demo-color-box demo-color-box-other"
      :style="{ background: white, color: '#303133', border: '1px solid #eee' }"
      >Blanc<div class="value">{{white}}</div></div>
      <div class="demo-color-box demo-color-box-other bg-transparent">Transparent<div class="value">Transparent</div>
      </div>
    </div>
  </el-col>
</el-row>
