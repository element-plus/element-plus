<script setup lang="ts"></script>

<template>
  <div>
    <p>
      从Home切换到对应组件的演示画面，然后再切换回Home，观察内存变化
      (反复多次切换效果更明显)
    </p>
    <p>发现问题:弹窗式组件内存增长过大，并且释放缓慢，或不释放，释放不完全</p>
    <p>
      期望效果:像【原生select】或者【el-input】那样，增长多少内存就能释放多少内存
    </p>
    <p>
      可能出现问题的组件:
      【el-select】，【el-date-picker】，【el-dropdown】，【el-popover】
    </p>
    <br /><br />
    <p>
      When switching from Home to the demo route of the corresponding component
      and then back to Home (repeating this process multiple times makes the
      effect more noticeable), observe the memory changes.
    </p>
    <p>
      Problem: Popover-Type components cause significant memory growth, and the
      memory is released very slowly, not released, or only partially released.
    </p>
    <p>
      Expected behavior: The memory should be fully released, similar to how the
      native select or el-input components work, where the memory growth matches
      the memory release.
    </p>
    <p>
      Potential problematic components: el-select, el-date-picker, el-dropdown,
      el-popover.
    </p>
  </div>
</template>
