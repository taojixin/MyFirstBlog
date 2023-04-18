<template>
  <div class="add-note">
    <el-form
      :model="noteForm"
      :rules="noteRules"
      ref="noteFormRef"
      label-width="100px"
      class="noteForm"
    >
      <!-- 笔记标题 -->
      <el-form-item label="笔记标题" prop="title">
        <el-input v-model="noteForm.title"></el-input>
      </el-form-item>
      <!-- 笔记描述 -->
      <el-form-item label="笔记表述" prop="describe">
        <el-input v-model="noteForm.describe"></el-input>
      </el-form-item>
      <!-- 笔记类型 -->
      <el-form-item label="笔记分类" prop="sort">
        <el-select v-model="noteForm.sort" placeholder="笔记类型">
          <el-option
            v-for="item in sortList"
            :key="item"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>
      <!-- 笔记内容 -->
      <el-form-item label="笔记内容" prop="content">
        <el-input
          v-model="noteForm.content"
          type="textarea"
          rows="18"
          resize="none"
        ></el-input>
      </el-form-item>
      <el-button type="primary" class="note-submit" @click="noteSubmit()"
        >提交</el-button
      >
      <el-button type="info" class="note-reset" @click="noteFormReset()"
        >重置</el-button
      >
    </el-form>
  </div>
</template>

<script>
import { getSortList, uploadNote } from "@/api/index";
import { formatTime } from "@/utils";

export default {
  created() {
    // 获取笔记分类列表
    this.getNoteSortList();
  },
  data() {
    return {
      // 表单内容
      noteForm: {
        title: "",
        describe: "",
        content: "",
        sort: "",
      },
      // 表单验证规则
      noteRules: {
        title: [
          { required: true, message: "请输入笔记标题", trigger: "blur" },
          {
            min: 3,
            max: 20,
            message: "长度在 3 到 20 个字符",
            trigger: "blur",
          },
        ],
        describe: [
          { required: true, message: "请输入笔记描述", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在 3 到 100 个字符",
            trigger: "blur",
          },
        ],
        content: [
          { required: true, message: "请输入笔记内容", trigger: "blur" },
        ],
        sort: [{ required: true, message: "请选择笔记分类", trigger: "blur" }],
      },
      // 请求获取的笔记分类列表
      sortList: [],
    };
  },
  methods: {
    // 获取笔记分类列表
    async getNoteSortList() {
      const { data } = await getSortList();
      this.sortList = data.sortArray;
    },
    // 提交笔记
    noteSubmit() {
      this.$refs.noteFormRef.validate(async (isSuccess) => {
        if (isSuccess) {
          this.noteForm["createtime"] = formatTime();
          const result = await uploadNote(this.noteForm);
          if (result.data == 0) {
            this.$message.success("提交成功");
            this.$refs.noteFormRef.resetFields();
          } else {
            this.$message.error("提交失败：可能内容过长");
          }
        } else {
          this.$message.error("提交失败");
        }
      });
    },
    // 重置表单
    noteFormReset() {
      this.$refs.noteFormRef.resetFields();
    },
  },
};
</script>

<style lang="less">
.noteForm {
  position: relative;

  .el-button {
    position: absolute;
    left: 50%;
  }
  .note-submit {
    transform: translateX(-100%);
  }
  .note-reset {
    transform: translateX(100%);
  }
}
</style>