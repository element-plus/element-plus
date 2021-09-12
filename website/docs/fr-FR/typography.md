<script>
  const fontSizes = [
    {
      level: 'Supplementary text',
      type: 'extra-small',
      size: '12px',
    },
    {
      level: 'Body (small)',
      type: 'small',
      size: '13px',
    },
    {
      level: 'Body',
      type: 'base',
      size: '14px',
    },
    {
      level: 'Small Title',
      type: 'medium',
      size: '16px',
    },
    {
      level: 'Title',
      type: 'large',
      size: '18px',
    },
    {
      level: 'Main Title',
      type: 'extra-large',
      size: '20px',
    },
  ]
  export default {
    data() {
      return {
        fontSizes
      }
    },
    methods: {
      formatType(type) {
        return type.split('-').map(item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ');
      }
    },
  }
</script>

## Typographie

Nous avons créé une convention de police d'écriture afin d'assurer la meilleur présentation possible sur toutes le plateformes.

### Police

<div class="demo-term-box">
<img src="../../assets/images/term-pingfang.png" alt="">
<img src="../../assets/images/term-hiragino.png" alt="">
<img src="../../assets/images/term-microsoft.png" alt="">
<img src="../../assets/images/term-sf.png" alt="">
<img src="../../assets/images/term-helvetica.png" alt="">
<img src="../../assets/images/term-arial.png" alt="">
</div>

### Convention des polices

<table class="demo-typo-size">
  <tbody>
  <tr
    >
      <td>Level</td>
      <td>Font Size</td>
      <td class="color-dark-light">Demo</td>
    </tr>
    <tr v-for="(fontSize, i) in fontSizes" :key="i" :style="`font-size: var(--el-font-size-${fontSize.type})`">
      <td>{{ fontSize.level }}</td>
      <td>{{ fontSize.size + ' ' + formatType(fontSize.type) }}</td>
      <td>Build with Element</td>
    </tr>
  </tbody>
</table>

### Font Line Height

<div>
<img class="lineH-left" src="~examples/assets/images/typography.png" />
<ul class="lineH-right">
<li>line-height:1 <span>No line height</span></li>
<li>line-height:1.3 <span>Compact</span></li>
<li>line-height:1.5 <span>Regular</span></li>
<li>line-height:1.7 <span>Loose</span></li>
</ul>
</div>

### Font-family

```css
font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
```
