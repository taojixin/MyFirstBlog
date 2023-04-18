<template>
  <div class="show-introduce">
    <el-descriptions
      class="margin-top"
      :column="1"
      size="medium"
      border
    >
      <!-- 姓名 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-user"></i>
          姓名
        </template>
        {{ personal.my_name }}
      </el-descriptions-item>
      <!-- 电话 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-mobile-phone"></i>
          电话
        </template>
        {{ personal.my_phone }}
      </el-descriptions-item>
      <!-- 性别 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-male"></i>
          性别
        </template>
        <el-tag>{{ personal.my_sex }}</el-tag>
      </el-descriptions-item>
      <!-- 邮箱 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-message"></i>
          邮箱
        </template>
        {{ personal.my_email }}
      </el-descriptions-item>
      <!-- 出生 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-date"></i>
          出生
        </template>
        {{ personal.my_birthday }}
      </el-descriptions-item>
      <!-- qq -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-office-building"></i>
          Q Q
        </template>
        {{ personal.my_qq }}
      </el-descriptions-item>
      <!-- 居住 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-location-information"></i>
          居住
        </template>
        {{ personal.my_address }}
      </el-descriptions-item>
      <!-- 户籍 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-house"></i>
          户籍
        </template>
        {{ personal.my_koseki }}
      </el-descriptions-item>
      <!-- 学历 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-medal-1"></i>
          学历
        </template>
        <el-tag>{{ personal.my_education }}</el-tag>
      </el-descriptions-item>
      <!-- 学校 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-school"></i>
          学校
        </template>
        <el-tag>{{ personal.my_school }}</el-tag>
      </el-descriptions-item>
      <!-- 专业 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-discount"></i>
          专业
        </template>
        <el-tag>{{ personal.my_professional }}</el-tag>
      </el-descriptions-item>
      <!-- 状态 -->
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-turn-off"></i>
          状态
        </template>
        <el-tag type="success">{{ personal.my_state }}</el-tag>
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-turn-off"></i>
          个性签名
        </template>
        {{ personal.my_signature }}
      </el-descriptions-item>
      <el-descriptions-item>
        <template slot="label">
          <i class="el-icon-turn-off"></i>
          兴趣爱好
        </template>
        {{ personal.my_hobbyies }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script>
import {getMyIntroduce} from '../../api/index'
export default {
  data() {
    return {
      personal: {
        // my_name: "陶继鑫",
        // my_phone: "18581766104",
        // my_sex: "男",
        // my_email: "491675919@qq.com",
        // my_birthday: "2001.07.24",
        // my_qq: "491675919",
        // my_address: "四川省资阳市",
        // my_koseki: "四川省资阳市", // 户籍
        // my_education: "本科",
        // my_school: "四川工商学院",
        // my_professional: "软件工程",
        // my_state: "学生就读",
        // my_signature:
        //   "如果debugging是一种消灭bug的过程，那编程就一定是把bug放进去的过程。",
        // my_hobbyies: "吃饭睡觉打豆豆！",
      },
    };
  },
  async created() {
    this.personal = await getMyIntroduce('all')
  }
};
</script>

<style lang="less">
</style>