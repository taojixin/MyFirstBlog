<template>
  <div class="drop-down">
    <div
      ref="btn"
      class="dropdown-button"
      :class="{ 'open-botton': isOpen }"
      @click="show()"
    >
      <i class="iconfont icon-fenlei dropdown-icon"> </i>
      <span class="dropdown-title">{{ option }}</span>
      <!-- 上箭头 -->
      <i
        v-show="!isOpen"
        :class="{ 'open-icon': isOpen }"
        class="iconfont icon-shangjiantou dropdown-arrow"
      ></i>
      <!-- 下箭头 -->
      <i
        :class="{ 'open-icon': isOpen }"
        v-show="isOpen"
        class="iconfont icon-xiajiantou dropdown-arrow"
      ></i>
    </div>
    <div :class="{ 'open-list': isOpen }" ref="list" class="dropdown-list">
      <ul>
        <!-- 各个选项 -->
        <li v-for="item in options" :key="item" @click="select(item)">
          {{ item }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {getNoteSort} from '@/api/index'
export default {
  mounted() {
    this.getNoteSort()
  },
  data() {
    return {
      // 下拉框的显示与隐藏
      isOpen: false,
      // 下拉框选项
      options: [],
      // 下拉框的选项
      option: "默认",
    };
  },
  methods: {
    // 下拉框的显示与隐藏
    show() {
      this.isOpen = !this.isOpen;
      this.$refs.list.opacity = 1;
    },
    // 选择分类
    select(option) {
      this.option = option;
      this.isOpen = false;
      // 子向父组件传值，第一个参数getSort为自定义的事件名，父组件中调用这个事件获取值
      this.$emit("getSort", this.option)
    },
    // 获取笔记分类
    async getNoteSort() {
      const result = await getNoteSort()
      if (result.meta.status == 200) {
        this.options = result.data.sortArray
        this.options.push('全部')
      }
    },
  },
};
</script>

<style lang='less'>
.drop-down {
  position: absolute;
  left: 420px;
  width: 400px;
  border-radius: 10px;
  border: 1px solid rgb(130, 155, 208);
  display: flex;
  flex-direction: column;
  // 下拉选择框
  .dropdown-button {
    position: relative;
    height: 40px;
    border: none;
    cursor: pointer;
    outline: none;
    transition: all 0.5s;
    color: rgb(41, 82, 99);

    .dropdown-icon,
    .dropdown-title,
    .dropdown-arrow {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
    .dropdown-icon {
      left: 15px;
      font-size: 25px;
    }
    .dropdown-title {
      left: 50px;
      font-size: 20px;
    }
    .dropdown-arrow {
      right: 25px;
      font-size: 30px;
    }
  }
  // 下拉选择框内容
  .dropdown-list {
    position: absolute;
    top: 50px;
    width: 400px;
    border-radius: 10px;
    background-color: rgb(152, 152, 185);
    // overflow: hidden;
    opacity: 0;
    // z-index: 1;
    transition: all 0.5s;
    ul {
      margin: 0;
      padding: 10px;
      li {
        padding: 5px 50px 5px;
        &:hover {
          background-color: rgb(169, 169, 186);
          cursor: pointer;
          border-radius: 5px;
        }
      }
    }
  }

  // 下拉框的显示与隐藏特效
  .open-botton {
    background-color: rgb(152, 152, 185);
    color: white;
    border-radius: 10px;
  }
  .open-list {
    opacity: 1;
    color: white;
    z-index: 1;
  }
}
</style>