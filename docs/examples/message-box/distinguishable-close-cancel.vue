<template>
  <el-dialog v-model:visible="dialogVisiblet" title="编辑学员信息">
    <el-form :model="formData" label-width="80px">
      <el-form-item label="姓名" prop="name">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="班级" prop="className">
        <el-input v-model="formData.className" />
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="formData.gender" placeholder="请选择">
          <el-option label="男" value="男" />
          <el-option label="女" value="女" />
        </el-select>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-input v-model="formData.status" />
      </el-form-item>
      <el-form-item label="任课老师" prop="teacher">
        <el-input v-model="formData.teacher" />
      </el-form-item>
      <el-form-item label="专业" prop="major">
        <el-input v-model="formData.major" />
      </el-form-item>
      <el-form-item label="宿舍号" prop="dormitory">
        <el-input v-model="formData.dormitory" />
      </el-form-item>
      <el-form-item label="原学校" prop="previousSchool">
        <el-input v-model="formData.previousSchool" />
      </el-form-item>
      <el-form-item label="班主任" prop="classTeacher">
        <el-input v-model="formData.classTeacher" />
      </el-form-item>
      <el-form-item label="招生老师" prop="admissionTeacher">
        <el-input v-model="formData.admissionTeacher" />
      </el-form-item>
      <el-form-item label="手机号" prop="phoneNumber">
        <el-input v-model="formData.phoneNumber" />
      </el-form-item>
    </el-form>
    <template #footer>
      <el-button @click="dialogVisiblet = false">取消</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </template>
  </el-dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface FormData {
  name: string;
  className: string;
  gender: string;
  status: string;
  teacher: string;
  major: string;
  dormitory: string;
  previousSchool: string;
  classTeacher: string;
  admissionTeacher: string;
  phoneNumber: string;
}

const dialogVisiblet = ref(false);
const formData: FormData = {
  name: '',
  className: '',
  gender: '',
  status: '',
  teacher: '',
  major: '',
  dormitory: '',
  previousSchool: '',
  classTeacher: '',
  admissionTeacher: '',
  phoneNumber: ''
};

const save = () => {
  // 在这里触发保存事件，将数据传递给父组件
  console.log('Saving data:', formData);
  dialogVisiblet.value = false;
};
</script>
