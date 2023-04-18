<template>
  <div class="login">
    <div class="login-box">
      <h1 class="login-title">Admin</h1>
      <!-- <p class="welcome">Welcome back</p> -->
      <!-- 表单 -->
      <el-form
        :model="loginForm"
        :rules="loginRules"
        ref="loginFormRef"
        label-width="100px"
        class="login-form"
      >
        <!-- 用户名称 -->
        <el-form-item label="用户名称" prop="name">
          <el-input v-model="loginForm.name"></el-input>
        </el-form-item>
        <!-- 用户密码 -->
        <el-form-item label="用户密码" prop="password">
          <el-input v-model="loginForm.password" type="password"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="login()" class="login-btn"
        >登录</el-button
      >
      <el-button type="info" @click="resetForm()" class="reset-btn"
        >重置</el-button
      >
    </div>
  </div>
</template>

<script>
import { loginAdmin } from "../api/index";
export default {
  created() {},
  data() {
    return {
      // 表单内容
      loginForm: {
        // name: "admin",
        // password: "t18581766104",
        name: "",
        password: "",
      },
      loginRules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 15,
            message: "长度在 3 到 15 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          {
            min: 6,
            max: 15,
            message: "长度在 6 到 15 个字符",
            trigger: "blur",
          },
        ],
      },
    };
  },
  methods: {
    // 重置表单按钮
    resetForm() {
      // resetFields时element ui提供的方法,用于对整个表单进行重置，将所有字段值重置为初始值并移除校验结果(需要获取表单的实例)
      this.$refs.loginFormRef.resetFields();
    },
    // 登录按钮
    login() {
      // 表单登录前的预验证,通过表单引用对象调用validate函数(第一个参数是一个布尔值,从而知道表单验证是否通过了)
      this.$refs.loginFormRef.validate(async (isSuccess, field) => {
        // 校验不通过
        if (!isSuccess) {
          return this.$message.error("信息填写不正确!"); // 第二个参数为 未通过校验的字段
        }
        const { name, password } = this.loginForm;
        // 校验通过 发送请求
        const { data } = await loginAdmin(name, password);
        // 保存token到localStorage中
        localStorage.setItem("adminToken", data.token);
        if (data.code === 0) {
          this.$message.success("登录成功！");
          // 通过路由导航挑战到后台页面
          this.$router.push("/home");
          return;
        }
        return this.$message.error("密码错误！");
      });
    },
  },
};
</script>

<style lang="less">
.login {
  position: relative;
  height: 100%;

  .login-box {
    width: 550px;
    height: 350px;
    background-color: #a8bbe2;
    border-radius: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    .login-title {
      position: absolute;
      top: -100px;
      left: 50%;
      color: #587cc4;
      text-shadow: 3px 3px 2px #7a9ee6;
      letter-spacing: 5px;
      font-size: 50px;
      transform: translateX(-50%);
    }

    .login-form {
      width: 500px;
      position: absolute;
      top: 60px;
      left: 20px;

      .el-form-item {
        margin-bottom: 50px;
      }
    }
    .login-btn,
    .reset-btn {
      position: absolute;
      bottom: 60px;
      width: 100px;
    }
    .login-btn {
      left: 150px;
    }
    .reset-btn {
      right: 150px;
    }
  }
}
</style>