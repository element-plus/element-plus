<script>
  const fontSizes = [
    {
      level: '辅助文字',
      type: 'extra-small',
      size: '12px',
    },
    {
      level: '正文（小）',
      type: 'small',
      size: '13px',
    },
    {
      level: '正文',
      type: 'base',
      size: '14px',
    },
    {
      level: '小标题',
      type: 'medium',
      size: '16px',
    },
    {
      level: '标题',
      type: 'large',
      size: '18px',
    },
    {
      level: '主标题',
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

## Typography 字体

我们对字体进行统一规范，力求在各个操作系统下都有最佳展示效果。

### 字体

<div class="demo-term-box">
<img src="../../assets/images/term-pingfang.png" alt="">
<img src="../../assets/images/term-hiragino.png" alt="">
<img src="../../assets/images/term-microsoft.png" alt="">
<img src="../../assets/images/term-sf.png" alt="">
<img src="../../assets/images/term-helvetica.png" alt="">
<img src="../../assets/images/term-arial.png" alt="">
</div>

### 字号

<table class="demo-typo-size">
  <tbody>
  <tr
    >
      <td>层级</td>
      <td>字体大小</td>
      <td class="color-dark-light">举例</td>
    </tr>
    <tr v-for="(fontSize, i) in fontSizes" :key="i" :style="`font-size: var(--el-font-size-${fontSize.type})`">
      <td>{{ fontSize.level }}</td>
      <td>{{ fontSize.size + ' ' + formatType(fontSize.type) }}</td>
      <td>用 Element Plus 快速搭建页面</td>
    </tr>
  </tbody>
</table>

### 行高

<div>
<img class="lineH-left" src="~examples/assets/images/typography.png" />
<ul class="lineH-right">
<li>line-height:1 <span>无行高</span></li>
<li>line-height:1.3 <span>紧凑</span></li>
<li>line-height:1.5 <span>常规</span></li>
<li>line-height:1.7 <span>宽松</span></li>
</ul>
</div>

### Font-family 代码

```css
font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
  'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
```
