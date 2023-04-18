<template>
  <div class="modify-introduce">
    <el-form
      :model="personalForm"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
      style="width: 800px"
    >
      <el-form-item label="姓名">
        <el-input
          v-model="personalForm.my_name"
          :placeholder="personalForm.my_name"
        ></el-input>
      </el-form-item>
      <el-form-item label="电话">
        <el-input
          v-model="personalForm.my_phone"
          :placeholder="personalForm.my_phone"
        ></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio-group v-model="personalForm.my_sex">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input
          v-model="personalForm.my_email"
          :placeholder="personalForm.my_email"
        ></el-input>
      </el-form-item>
      <el-form-item label="出生">
        <el-date-picker
          type="date"
          placeholder="选择日期"
          v-model="personalForm.my_birthday"
        ></el-date-picker>
      </el-form-item>
      <el-form-item label="Q Q">
        <el-input
          v-model="personalForm.my_qq"
          :placeholder="personalForm.my_qq"
        ></el-input>
      </el-form-item>
      <el-form-item label="居住">
        <el-input
          v-model="personalForm.my_address"
          :placeholder="personalForm.my_address"
        ></el-input>
      </el-form-item>
      <el-form-item label="户籍">
        <el-input
          v-model="personalForm.my_koseki"
          :placeholder="personalForm.my_koseki"
        ></el-input>
      </el-form-item>
      <el-form-item label="学历">
        <el-radio-group v-model="personalForm.my_education">
          <el-radio label="研究生"></el-radio>
          <el-radio label="本科"></el-radio>
          <el-radio label="专科"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="学校">
        <el-input
          v-model="personalForm.my_school"
          :placeholder="personalForm.my_school"
        ></el-input>
      </el-form-item>
      <el-form-item label="专业">
        <el-input
          v-model="personalForm.my_professional"
          :placeholder="personalForm.my_professional"
        ></el-input>
      </el-form-item>
      <el-form-item label="状态">
        <el-radio-group v-model="personalForm.my_state">
          <el-radio label="学生就读"></el-radio>
          <el-radio label="已就业"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="签名">
        <el-input
          type="textarea"
          v-model="personalForm.my_signature"
          :placeholder="personalForm.my_signature"
        ></el-input>
      </el-form-item>
      <el-form-item label="爱好">
        <el-input
          type="textarea"
          v-model="personalForm.my_hobbyies"
          :placeholder="personalForm.my_hobbyies"
        ></el-input>
      </el-form-item>
      <!-- 按钮 -->
      <el-form-item>
        <el-button type="primary" @click="submitForm()"
          >提交</el-button
        >
        <el-button @click="resetForm()">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {updateAll,getMyIntroduce} from '../../api/index'
export default {
  data() {
    return {
      personalForm: {
      }
    };
  },
  async created() {
    this.personalForm = await getMyIntroduce('all')
  },
  methods: {
    // 提交按钮
    submitForm() {
      updateAll(this.personalForm).then((res) => {
        this.$message.success("修改成功!")
      }).catch(err => {
        this.$message.error("修改失败！")
      })
    },
    // 重置表单
    resetForm() {
      this.$refs.ruleForm.resetFields();
    }
  }
};
</script>

<style lang="less">
.modify-introduce {
  height: 650px;
  overflow-y: scroll;
  overflow-x: hidden;
}
</style>