<template>
  <!-- 设置为整个屏幕高度 -->
  <div class="login">
    <!-- 内容显示区域 -->
    <div class="container">
      <!-- 中间的跳转框 -->
      <div class="form-box">
        <!-- 注册 -->
        <div class="register-box hidden">
          <h1>register</h1>
          <input type="text" placeholder="用户名" />
          <input type="email" placeholder="邮箱" />
          <input type="password" placeholder="密码" />
          <input type="password" placeholder="确认密码" />
          <button>注册</button>
        </div>
        <!-- 登录 -->
        <div class="login-box">
          <h1>login</h1>
          <input type="text" placeholder="用户名" />
          <input type="password" placeholder="密码" />
          <button>登录</button>
        </div>
      </div>

      <!-- 左侧 -->
      <div class="con-box left">
        <h2>欢迎来到<span>My blog</span></h2>
        <p>快来<span>了解了解</span>我吧</p>
        <img src="./1.png" />
        <p>已有账号</p>
        <button id="log">去登录</button>
      </div>
      <!-- 右侧 -->
      <div class="con-box right">
        <h2>欢迎来到<span>My blog</span></h2>
        <p>快来<span>了解了解</span>我吧</p>
        <img src="./2.png" />
        <p>没有账号？</p>
        <button id="reg">去注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    // 获取操作到的元素
    let login = document.getElementById("log");
    let register = document.getElementById("reg");
    let form_box = document.getElementsByClassName("form-box")[0];
    let register_box = document.getElementsByClassName("register-box")[0];
    let login_box = document.getElementsByClassName("login-box")[0];
    // 注册点击事件
    register.addEventListener("click", () => {
      form_box.style.transform = "translateX(80%)";
      login_box.classList.add("hidden");
      register_box.classList.remove("hidden");
    });
    // 去登陆按钮点击事件
    login.addEventListener("click", () => {
      form_box.style.transform = "translateX(0%)";
      register_box.classList.add("hidden");
      login_box.classList.remove("hidden");
    });
  },
};
</script>

<style lang="less" scoped>
.login {
  height: 100vh;
  display: flex;
  // 主轴对齐方式
  justify-content: center;
  // 侧轴对齐方式
  align-items: center;
  // 渐变背景
  background: linear-gradient(200deg, #f3e7e9, #e3eeff);

  .container {
    background-color: #fff;
    width: 650px;
    height: 415px;
    border-radius: 5px;
    // 盒子阴影
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
    // 相对定位 用于con-box盒子的绝对定位
    position: relative;
  }
}

.form-box {
  // 调整位置
  position: absolute;
  top: -10%;
  left: 5%;
  background: #d3b7d8;
  width: 320px;
  height: 500px;
  border-radius: 5px;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.1);
  // 控制input等的位置
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  // 动画过度  加速后减速
  transition: 0.5s ease-in-out;

  .register-box,
  .login-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .hidden {
    display: none;
    transition: 0.5s;
  }
  h1 {
    text-align: center;
    margin-bottom: 25px;
    // 大写
    text-transform: uppercase;
    color: #fff;
    // 字距
    letter-spacing: 5px;
  }
  input {
    background-color: transparent;
    width: 70%;
    color: #fff;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    padding: 10px 0;
    text-indent: 10px;
    margin: 8px 0;
    font-size: 14px;
    letter-spacing: 2px;

    &:focus {
      color: #a262ad;
      // 去除焦点时的边框
      outline: none;
      border-bottom: 1px solid #a262ad80;
      // 添加过渡效果，避免焦点时太僵硬
      transition: 0.5s;
    }
  }
  input::placeholder {
    color: #fff;
  }
  input:focus::placeholder {
    // 鼠标点击输入框焦点时隐藏placeholder
    opacity: 0;
  }
  button {
    width: 70%;
    margin-top: 35px;
    background-color: #f6f6f6;
    outline: none;
    border-radius: 8px;
    padding: 13px;
    color: #a262ad;
    letter-spacing: 2px;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #a262ad;
      color: #f6f6f6;
      transition: background-color 0.5s ease;
    }
  }
}

.con-box {
  width: 50%;
  // flex布局
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // 绝对定位
  position: absolute;
  top: 50%;
  transform: translateY(-50%);

  h2 {
    color: #8e9aaf;
    font-size: 25px;
    font-weight: bold; 
    text-align: center;
    margin-bottom: 4px;

    span {
      letter-spacing: 0;
      color: #d3b7d8;
    }
  }
  p {
    font-size: 12px;
    letter-spacing: 2px;
    color: #8e9aaf;
    text-align: center;
  }
  img {
    width: 150px;
    height: 150px;
    opacity: 0.9;
    margin: 40px 0 20px 0;
  }
  button {
    background-color: #fff;
    color: #a262ad;
    border: 1px solid #d3b7d8;
    padding: 6px 10px;
    border-radius: 5px;
    letter-spacing: 1px;
    outline: none;
    cursor: pointer;

    &:hover {
      background-color: #d3b7d8;
      color: #fff;
    }
  }
}
.con-box.left {
  left: -2%;
}
.con-box.right {
  right: -2%;
}
</style>