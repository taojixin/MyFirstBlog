<template>
  <div class="note">
    <!-- 面包屑 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/About' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>留言</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 留言区域 -->
    <!-- <form class="panel" id="form_note" name="myForm" method="post" action="http://localhost:8881/api/comment/create"> -->
    <div class="panel">
      <h2><span>欢迎留言</span></h2>
      <label for="name" class="label_name">请输入昵称：</label>
      <input
        type="text"
        placeholder="请输入昵称"
        id="name"
        autocomplete="off"
        v-model="name"
      />
      <label for="note" class="label_note">留言：</label>
      <textarea
        class="textarea"
        id="note"
        placeholder="你的留言"
        v-model="note"
      ></textarea>
      <button id="submit" @click="submit">提 交</button>
      <!-- <input type="submit" id="submit" value="提   交" /> -->
    </div>
    <!-- 留言展示区域 -->
    <div class="note-message" v-for="item in comments" :key="item.id">
      <h5>{{ item.com_name }}：</h5>
      <i class="date iconfont icon-24gl-calendar"> {{ item.create_time }}</i>
      <p>{{ item.com_content }}</p>
      <i
        data-id="false"
        class="good iconfont icon-icon1"
        @click="giveALike($event, item.id)"
      ></i>
      <span class="count">({{ item.good_number }})</span>
    </div>

    <!-- 提交弹出层 -->
    <div class="popout" v-show="ifHidden">
      <div class="box">
        <h4>{{ notice }}</h4>
        <button @click="popoutHidde">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
import requests from "@/api/request";
import { formatTime } from "@/utils";
export default {
  created() {
    this.getAllComments();
  },
  mounted() {},
  data() {
    return {
      comments: [], // 留言列表
      name: "", // 名字输入框内容
      note: "", // 留言输入框内容
      notice: "", // 弹框提示信息
      ifHidden: false, // popout弹框的显示与隐藏
    };
  },
  methods: {
    // 获取评论信息（按时间排序的最近的前十条）
    async getAllComments() {
      const result = await requests.get("/comment/getcomments");
      this.comments = result.data;
    },
    // 点赞按钮  注：这里的点赞与取消点赞写的有点复杂，后面有时间会想其他方法优化
    async giveALike(event, id) {
      // 获取点击事件的当前元素节点
      const nodeGood = event.target;
      // 获取自定义属性的值，默认值为false，这里通过nodeGood.dataset.id获得的是"false"字符串，而不是布尔型
      let message = nodeGood.dataset.id;
      // 将自定义属性的值转换为布尔值
      let isStyle;
      if (message === "false") {
        isStyle = false;
      } else {
        isStyle = true;
      }
      if (isStyle) {
        nodeGood.style.color = "black";
        nodeGood.style.fontSize = "30px";
        nodeGood.dataset.id = false;
        const { meta } = await requests.post("/comment/givelike", {
          ifTrue: false,
          commentId: id,
        });
        if (meta.status === 200) {
          this.getAllComments();
        }
      } else {
        nodeGood.style.color = "#2387f2";
        nodeGood.style.fontSize = "40px";
        nodeGood.dataset.id = true;
        const { meta } = await requests.post("/comment/givelike", {
          ifTrue: true,
          commentId: id,
        });
        if (meta.status === 200) {
          this.getAllComments();
        }
      }
    },
    // 提交按钮
    async submit() {
      // 获取系统当前时间
      const nowTime = formatTime();
      // 判断内容和姓名受否为空，不为空则弹窗提示
      if (this.name === "" || this.note === "") {
        this.notice = "不能为空！";
      } else {
        this.notice = ""; // 消除上一次弹窗提示信息
        const { meta } = await requests.post("/comment/create", {
          name: this.name,
          createTime: nowTime,
          note: this.note,
        });
        if (meta.status === 200) {
          this.notice = "留言成功！";
          // 所以重新加载评论列表放在这里，当评论成功后重新属性评论列表
          this.getAllComments();
        } else {
          this.notice = "留言失败";
        }
      }

      // 清空输入框
      this.name = "";
      this.note = "";
      // 重新加载评论列表 不能写在这里，写在这里不能即使刷新，因为请求为异步评球有延迟，提交评论请求还没结束这里的函数就结束了，所以不能及时刷新
      // this.getAllComments()
      // 显示弹框
      this.ifHidden = true;
    },
    // 点击隐藏弹框
    popoutHidde() {
      this.ifHidden = false;
    },
  },
};
</script>
<style lang="less">
.note {
  // 超出部分 滚动
  overflow: scroll;
  max-height: 700px;
  position: relative;
}
// 留言区域
.panel {
  // border: 1px solid black;
  position: relative;
  height: 420px;
  padding: 20px 50px 0 50px;
  margin-top: 20px;
  box-sizing: border-box;
  border-top: 1px solid rgb(184, 184, 237);
  border-left: 1px solid rgb(184, 184, 237);

  h2 {
    margin: 0;
    padding-left: 30px;
    color: #2387f2;
    text-shadow: 2px 2px 4px rgb(150, 150, 165);
    letter-spacing: 6px;
  }

  label,
  input,
  button,
  textarea {
    position: absolute;
  }
  .label_name,
  .label_note,
  #submit {
    font-weight: 700;
    font-size: 20px;
    text-shadow: 3px 3px 3px #a3bcd5;
    color: #6b9bce;
  }
  .label_name {
    top: 70px;
  }
  .label_note {
    top: 170px;
  }
  #name,
  #note {
    border-radius: 10px;
    border: 3px solid rgb(128, 128, 189);
    box-shadow: 2px 3px 4px rgb(144, 144, 183);

    &:focus {
      // 取消聚焦时的默认效果
      outline: none;
    }
  }
  #name {
    top: 110px;
    left: 80px;
    width: 180px;
    height: 40px;
    padding-left: 10px;
    color: rgb(75, 161, 195);
    font-weight: 700;
    font-size: 16px;
    text-align: center;
  }
  #note {
    top: 200px;
    left: 80px;
    width: 500px;
    height: 150px;
    padding: 10px;
    font-size: 18px;
    color: rgb(26, 90, 115);
    font-weight: 700;
    // 禁止textarea文本框拖拽改变大小
    resize: none;
  }
  #submit {
    top: 275px;
    left: 700px;
    width: 100px;
    height: 50px;
    font-size: 18px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    transition: all 0.5s;
    color: #6b9bce;
    font-weight: 700;
    &:hover {
      background-color: #c2d0e2;
    }
  }
}
// 留言展示区域
.note-message {
  margin-top: 10px;
  border: 2px solid transparent;
  position: relative;
  padding: 10px;
  box-sizing: border-box;
  transition: border 0.5s;
  &:hover {
    border: 2px dashed #2387f2;
    cursor: pointer;
  }
  h5 {
    margin: 0;
  }
  .date {
    font-size: 10px;
    color: grey;
  }
  p {
    margin: 10px 0 0 0;
    text-indent: 2em;
    font-size: 14px;
    color: grey;
  }
  .good {
    position: absolute;
    top: 10px;
    right: 40px;
    font-size: 30px;
    transition: all 0.4;
    &:hover {
      // font-size: 40px;
      font-weight: bold;
      color: #2387f2;
    }
  }
  .count {
    position: absolute;
    top: 15px;
    right: 8px;
    font-size: 18px;
    color: gray;
  }
}
// 弹框区域
.popout {
  position: absolute;
  // position: fixed;
  width: 300px;
  height: 200px;
  // 隐藏
  // display: none;
  // background-image: linear-gradient(to top, #a8d2e4 0%, #acc6ee 99%, #d0d4d9 100%);
  background-color: rgba(95, 150, 190, 0.5);
  // opacity: .9;
  border-radius: 5px;
  top: 50%;
  left: 35%;
  transform: translateX(-50%) translateY(-50%);

  transition: all 0.3s;
  &:hover {
    width: 320px;
    height: 210px;
  }
  .box {
    position: relative;
    h4,
    button {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    h4 {
      margin: 0;
      top: 50px;
      font-size: 20px;
      letter-spacing: 10px;
      color: #305483;
    }
    button {
      width: 80px;
      height: 40px;
      top: 130px;
      border-radius: 5px;
      background-color: #c9d6e7;
      border: 1px solid #8080bd;
      transition: all 0.5s;
      &:hover {
        cursor: pointer;
        background-color: #a1bbdd;
      }
    }
  }
}
</style>