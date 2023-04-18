<template>
  <div class="modify-mes">
    <el-table :data="commentsData" border style="width: 100%" stripe>
      <el-table-column
        type="index"
        label="#"
        width="50"
        height="50px"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="com_name"
        label="昵称"
        width="150"
        align="center"
      ></el-table-column>
      <el-table-column
        prop="create_time"
        label="日期"
        width="150"
        align="center"
      ></el-table-column>
      <el-table-column prop="good_number" label="点赞数" width="100">
        <template slot-scope="scoped">
          <el-tag size="mini" type="warning">{{ scoped.row.good_number }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="com_content"
        label="内容"
        width="300"
      ></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scoped">
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="deleteMes(scoped.row.id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      class="pagination-mes"
      background
      layout="prev, pager, next"
      :total="commentsTotal"
      @current-change="pageChange"
      :current-page="page"
    >
    </el-pagination>
  </div>
</template>

<script>
import { getSomeComments, getCommentTotal, deleteMes } from "../../api/index";
export default {
  created() {
    this.getCommentMessage();
  },
  data() {
    return {
      // 当前页评论信息
      commentsData: [],
      // 评论总数
      commentsTotal: 0,
      // 当前第几页
      page: 1,
      // 显示数
      num: 10,
    };
  },
  methods: {
    // 获取评论数据及总数
    async getCommentMessage() {
      const data = await getSomeComments(this.page, this.num);
      const newData = data.map((value) => {
        value.create_time = value.create_time.slice(0, 16).replace("T", " ");
        return value;
      });
      this.commentsData = newData;
      const comTotal = await getCommentTotal();
      this.commentsTotal = comTotal[0].total;
    },
    // 当前页数改表时触发
    async pageChange(newPage) {
      this.page = newPage;
      this.getCommentMessage();
    },
    // 删除某条评论
    deleteMes(id) {
      deleteMes(id)
        .then((resolve) => {
          this.$message.success("删除成功！");
          this.getCommentMessage();
        })
        .catch((error) => {
          this.$message.error("删除失败！");
        });
    },
  },
};
</script>

<style lang="less">
.modify-mes {
  position: relative;
  .pagination-mes {
    position: absolute;
    bottom: -80px;
    left: 50%;
    transform: translateX(-60%);
  }
}
</style>