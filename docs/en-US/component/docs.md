---
title: Document style upgrade
lang: en-US
---

# Document style upgrade

## Column

### Name

- 取消代码块,使用纯文本展示

`size` => size

- tag 标签使用

  目前内置内`版本`/ `遗弃` / `a11y`这三种 tag 组件，标签和文本中间需要加空格

| Name               |
| ------------------ |
| size ^(a11y)       |
| size ^(2.2.1)      |
| size ^(deprecated) |

### Description

需要将对应字段描述同步到对应的 props，为后续自动化生成文档做准备，如果实在没有更好的属性解释可以 cv 文档的描述
e.g

- `input.md`

| Name | Description                                        |
| ---- | -------------------------------------------------- |
| size | size of Input, works when `type` is not 'textarea' |

- `input.ts`

```ts
export const inputProps = buildProps({
  // ....

  /**
   * @description size of Input, works when `type` is not 'textarea'
   */
  size: useSizeProp,

  // ...
})
```

### Type

- 基础类型

  \`string\` => \^[string]

  \`number\` => \^[number]

  \`boolean\` => \^[boolean]

- 枚举(用于指定值选项的，例如 `size`)

  \^[enum]\`'large' \\| 'default' \\| 'small'\`

- 引用类型(目前统一用 object 表示)

  \^[object]\`number[] \\| string[] \\| CSSProperties\`

- 多类型

  \^[string] / \^[number]

  \^[boolean] / \^[enum]\`'large' \\| 'default' \\| 'small'\`

- 方法

  \`(e: FocusEvent)\` => \^[Function]\`(e: FocusEvent)=>void`

### Accepted Values

将取消该列，并入到 Type
e.g

| Type   | Accepted Values                                                                                                                       |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| string | text, textarea and other [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) |
| string | large / default / small                                                                                                               |

| Type                                                                                                                                                |
| --------------------------------------------------------------------------------------------------------------------------------------------------- |
| ^[string]`'text' \| 'textarea' \| ...` [native input types](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) |
| ^[enum]`'large' \| 'default' \| 'small'`                                                                                                            |

### Default

默认值取消代码块标记，文本展示即可，也不需要加上类型标记，例如 'primary',直接 primary

### Parameters

改为 Type, 内容写法参考方法

### Subtags

e.g [container.md](./container.html#container-slots)

| Subtags                                    |
| ------------------------------------------ |
| Container / Header / Aside / Main / Footer |

## Methods

改为 Exposes, 除了方法将 defineExpose 中的属性补齐到文档，同样需要和 props 补齐 description 注释

## Api Title

- 如果当前组件分类只有一个组件可以直接写,保持这个顺序(目前是根据使用频率定的顺序)

  ## API

  ### Attributes

  ### Events

  ### Slots

  ### Exposes

- 如果有多个组件，例如 button 分类(命名采用大驼峰)

  ## Button API

  ### Button Attributes

  ### Button Events

  ### Button Slots

  ### Button Exposes

  ## ButtonGroup API

  ### ButtonGroup Attributes

  ### ButtonGroup Events

  ### ButtonGroup Slots

  ### ButtonGroup Exposes

## Class optimization in code

含有变量判断的抽成计算属性赋值给 xxxKls 后在写入到 template，保证 template 的整洁

```html
// input.vue
<template>
  <div
    v-show="type !== 'hidden'"
    v-bind="containerAttrs"
    :class="[
      type === 'textarea' ? nsTextarea.b() : nsInput.b(),
      nsInput.m(inputSize),
      nsInput.is('disabled', inputDisabled),
      nsInput.is('exceed', inputExceed),
      {
        [nsInput.b('group')]: $slots.prepend || $slots.append,
        [nsInput.bm('group', 'append')]: $slots.append,
        [nsInput.bm('group', 'prepend')]: $slots.prepend,
        [nsInput.m('prefix')]: $slots.prefix || prefixIcon,
        [nsInput.m('suffix')]:
          $slots.suffix || suffixIcon || clearable || showPassword,
        [nsInput.bm('suffix', 'password-clear')]: showClear && showPwdVisible,
      },
      $attrs.class,
    ]"
    :style="containerStyle"
    :role="containerRole"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    // ....
  </div>
</template>
```

```html
<template>
  <div
    v-show="type !== 'hidden'"
    v-bind="containerAttrs"
    :class="containerKls"
    :style="containerStyle"
    :role="containerRole"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
  >
    // ....
  </div>
</template>
<script lang="ts" setup>
  const containerKls = computed(() => [
    props.type === 'textarea' ? nsTextarea.b() : nsInput.b(),
    nsInput.m(inputSize.value),
    nsInput.is('disabled', inputDisabled.value),
    nsInput.is('exceed', inputExceed.value),
    {
      [nsInput.b('group')]: slots.prepend || slots.append,
      [nsInput.bm('group', 'append')]: slots.append,
      [nsInput.bm('group', 'prepend')]: slots.prepend,
      [nsInput.m('prefix')]: slots.prefix || props.prefixIcon,
      [nsInput.m('suffix')]:
        slots.suffix ||
        props.suffixIcon ||
        props.clearable ||
        props.showPassword,
      [nsInput.bm('suffix', 'password-clear')]:
        showClear.value && showPwdVisible.value,
    },
    rawAttrs.class,
  ])
</script>
```

## Ref Rename

统一使用 xxxRef 命名

## Style Props

统一使用 StyleValue 作为类型，文档参考 [input.md](./input.html#attributes) 中的 inputStyle
