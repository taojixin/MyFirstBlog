<template>
  <div class="add-demo">
    <el-form
      :model="demoForm"
      :rules="demoRules"
      ref="demoRef"
      class="demo-ruleForm"
      style="margin: 20px"
    >
      <el-form-item label="描述" prop="describe">
        <el-input v-model="demoForm.describe" style="width: 800px"></el-input>
      </el-form-item>
      <el-form-item label="知识" prop="knowledge">
        <el-input v-model="demoForm.knowledge" style="width: 800px"></el-input>
      </el-form-item>
      <el-form-item label="路径" prop="path">
        <el-input v-model="demoForm.path" style="width: 800px"></el-input>
      </el-form-item>
      <el-form-item label="代码" prop="code">
        <el-input
          type="textarea"
          v-model="demoForm.code"
          rows="15"
          style="width: 800px"
        ></el-input>
      </el-form-item>
      <el-button class="submit-demo" type="primary" @click="submitForm()"
        >提交</el-button
      >
      <el-button class="reset-demo" @click="resetForm()">重置</el-button>
    </el-form>
  </div>
</template>

<script>
import { addDemo } from "../../api/index";
import { formatTime } from "../../utils/index";
export default {
  data() {
    return {
      demoForm: {
        describe: "",
        knowledge: "",
        code: "",
        path: "",
      },
      // 表单验证规则
      demoRules: {
        describe: [
          { required: true, message: "请输入demo描述", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在 3 到 100 个字符",
            trigger: "blur",
          },
        ],
        knowledge: [
          { required: true, message: "请输入知识点", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在 3 到 100 个字符",
            trigger: "blur",
          }
        ],
        code: [{ required: true, message: "请输入代码", trigger: "blur" }],
        path: [
          { required: true, message: "请输入路径", trigger: "blur" },
          {
            min: 3,
            max: 50,
            message: "长度在 3 到 50 个字符",
            trigger: "blur",
          }
        ]
      },
    };
  },
  methods: {
    // 重置表单
    resetForm() {
      this.$refs.demoRef.resetFields();
    },
    // 提交表单
    submitForm() {
      this.$refs.demoRef.validate((valid) => {
        if (valid) {
          const message = { ...this.demoForm };
          message.id = 1;
          message.time = formatTime();
          addDemo(message)
            .then((res) => {
              this.$message.success("提交成功！");
              this.$refs.demoRef.resetFields();
            })
            .catch((err) => {
              this.$message.error("提交失败！");
            });
        } else {
          this.$message.error("信息填写不正确！");
        }
      });
    },
  },
};
</script>

<style lang="less">
.add-demo {
  position: relative;
  .submit-demo {
    position: absolute;
    left: 350px;
  }
  .reset-demo {
    position: absolute;
    left: 450px;
  }
}
</style>