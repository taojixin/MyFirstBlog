<template>
  <div class="modify-note">
    <!-- 表格 -->
    <el-table
      :data="tableNoteData"
      ref="tableNoteRef"
      style="width: 100%"
      border
    >
      <!-- 序号 -->
      <el-table-column type="index" label="#" width="50"></el-table-column>
      <el-table-column
        prop="note_title"
        label="标题"
        width="127"
      ></el-table-column>
      <el-table-column
        prop="note_createtime"
        label="时间"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="note_sort"
        label="分类"
        width="100"
      ></el-table-column>
      <el-table-column
        prop="note_describe"
        label="描述"
        width="400"
      ></el-table-column>
      <el-table-column label="操作" width="180">
        <template slot-scope="scoped">
          <!-- 查看笔记按钮 -->
          <el-button
            size="mini"
            type="primary"
            icon="el-icon-search"
            @click="checkTheNote(scoped.row.id)"
          ></el-button>
          <!-- 修改笔记信息按钮 -->
          <el-button size="mini" type="info" icon="el-icon-edit" @click="modifyTheNote(scoped.row.id)"></el-button>
          <!-- 删除笔记按钮 -->
          <el-button
            size="mini"
            type="danger"
            icon="el-icon-delete"
            @click="deleteNote(scoped.row.id)"
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      @current-change="pageChange"
      :current-page="currentPage"
      :total="allTotal"
    >
    </el-pagination>
    <!-- 查看对话框 -->
    <el-dialog title="笔记内容" :visible.sync="noteDiaVisible" width="60%">
      <span v-html="oneNote.note_content"></span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="noteDiaVisible = false">取 消</el-button>
        <el-button type="primary" @click="noteDiaVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 修改对话框 -->
    <el-dialog title="笔记内容" :visible.sync="modifyNoteDiaVisible" width="60%">
      <el-form
        ref="ontnoteform"
        :rules="ontNoteRules"
        :model="oneNote"
        label-width="80px"
      >
        <el-form-item label="标题" prop="note_title">
          <el-input v-model="oneNote.note_title"></el-input>
        </el-form-item>
        <el-form-item label="分类" prop="note_sort">
          <el-input v-model="oneNote.note_sort"></el-input>
        </el-form-item>
        <el-form-item label="描述" prop="note_describe">
          <el-input v-model="oneNote.note_describe"></el-input>
        </el-form-item>
        <el-form-item label="内容" prop="note_content">
          <el-input
            type="textarea"
            rows="10"
            resize="none"
            v-model="oneNote.note_content"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modifyNoteDiaVisible = false">取 消</el-button>
        <el-button type="primary" @click="modifyTheNotes()"
          >修 改</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { getAllNote, deleteNote, getSomeNote, getOneNote,modifyTheNote } from "@/api/index";
export default {
  created() {
    this.getSomeNote(this.pageSizes, this.currentPage);
  },
  data() {
    return {
      // 所有笔记信息
      tableNoteData: [],
      // 笔记总数
      allTotal: 0,
      // 当前处于第几页
      currentPage: 1,
      // 当前页显示数
      pageSizes: 10,
      // 查看对话框的显示与隐藏
      noteDiaVisible: false,
      // 修改对话框的显示与隐藏
      modifyNoteDiaVisible: false,
      // 单个笔记信息
      oneNote: {},
      // 修改验证规则
      ontNoteRules: {
        note_title: [
          { required: true, message: "请输入笔记标题", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在 3 到 100 个字符",
            trigger: "blur",
          },
        ],
        note_sort: [
          { required: true, message: "请输入笔记分类", trigger: "blur" },
        ],
        note_describe: [
          { required: true, message: "请输入笔记描述", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在 3 到 100 个字符",
            trigger: "blur",
          },
        ],
        note_content: [
          { required: true, message: "请输入笔记描述", trigger: "blur" },
        ]
      },
    };
  },
  methods: {
    // 根据页数条数查询笔记
    async getSomeNote(num, page) {
      const result = await getSomeNote(num, page);
      // 对时间尽心截取(去掉时分秒)
      result.forEach((item) => {
        item.note_createtime = item.note_createtime.substr(0, 10);
      });
      this.tableNoteData = result;
      const resultAll = await getAllNote();
      this.allTotal = resultAll.length;
    },
    // 删除笔记按钮
    async deleteNote(id) {
      this.$confirm("此操作将永久删除该笔记, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          // 如何获取要删除的那一行的id(tableNoteData.id)：通过作用域插槽的slot-scope="scoped"，scoped是一个对象，存储了这个子组件的所有属性，再通过scoped.row.id获取id
          deleteNote(id)
            .then((resolve) => {
              this.$message.success("删除成功！");
              this.getSomeNote(this.pageSizes, this.currentPage);
            })
            .catch((error) => {
              this.$message.success("删除失败！");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 当前页数改表时触发
    pageChange(newPage) {
      this.currentPage = newPage;
      this.getSomeNote(10, newPage);
    },
    // 查看笔记按钮
    async checkTheNote(id) {
      const data = await getOneNote(id);
      this.oneNote = data;
      this.noteDiaVisible = true;
    },
    // 修改笔记按钮
    async modifyTheNote(id) {
      this.modifyNoteDiaVisible = true
      this.oneNote = await getOneNote(id);
    },
    // 对话框里的修改按钮
    modifyTheNotes() {
      console.log(this.oneNote);
      modifyTheNote(this.oneNote.id,this.oneNote.note_title,this.oneNote.note_describe, this.oneNote.note_content, this.oneNote.note_sort).then(resolve => {
        this.$message.success("修改成功！")
        this.getSomeNote(this.pageSizes, this.currentPage);
        this.modifyNoteDiaVisible = false
      }).catch(error => {
        this.$message.error("修改失败！")
      })
    }
  },
};
</script>

<style lang="less">
.el-table-column {
  font-size: 13px;
}
.modify-note {
  position: relative;

  .el-pagination {
    position: absolute;
    left: 50%;
    transform: translateX(-60%);
  }
}
</style>