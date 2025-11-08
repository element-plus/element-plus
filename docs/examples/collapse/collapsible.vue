<template>
  <el-collapse>
    <el-collapse-item
      title="This panel can be collapsed by clicking text or icon"
      name="0"
      collapsible="header"
    >
      <div>
        Consistent with real life: in line with the process and logic of real
        life, and comply with languages and habits that the users are used to;
      </div>
    </el-collapse-item>
  </el-collapse>

  <el-collapse>
    <el-collapse-item
      title="This panel can only be collapsed by clicking icon"
      name="1"
      collapsible="icon"
    >
      <div>
        Operation feedback: enable the users to clearly perceive their
        operations by style updates and interactive effects;
      </div>
    </el-collapse-item>
  </el-collapse>

  <el-collapse>
    <el-collapse-item
      title="This panel can't be collapsed"
      name="2"
      collapsible="disabled"
    >
      <div>
        Simplify the process: keep operating process simple and intuitive;
      </div>
    </el-collapse-item>
  </el-collapse>
</template>
