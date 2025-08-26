---
title: Color
lang: en-US
---

# Color

Element Plus uses a specific set of palettes to specify colors to provide a consistent look and feel for the products you build.

<style lang="scss">
.demo-color-box {
  position: relative;
  border-radius: 4px;
  padding: 20px;
  margin: 8px 0;
  height: 112px;
  box-sizing: border-box;
  color: var(--el-color-white);
  font-size: 14px;

  .bg-color-sub {
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    position: absolute;

    .bg-blue-sub-item {
      height: 100%;
      display: inline-block;

      &:first-child {
        border-radius: 0 0 0 var(--el-border-radius-base);
      }
    }

    .bg-secondary-sub-item {
      height: 100%;
      display: inline-block;
      &:first-child {
        border-radius: 0 0 0 var(--el-border-radius-base);
      }
    }
  }

  .value {
    margin-top: 2px;
  }
}

.demo-color-box-lite {
  color: var(--el-text-color-primary);
}
</style>

## Main Color

The main color of Element Plus is bright and friendly blue.

<!-- Do not touch -->
<ClientOnly>
  <MainColor />
</ClientOnly>

## Secondary Color

Besides the main color, you need to use different scene colors in different scenarios (for example, dangerous color indicates dangerous operation)

<!-- Do not touch -->
<ClientOnly>
  <SecondaryColors />
</ClientOnly>

## Neutral Color

Neutral colors are for text, background and border colors. You can use different neutral colors to represent the hierarchical structure.

<!-- Do not touch -->
<ClientOnly>
  <NeutralColor />
</ClientOnly>
