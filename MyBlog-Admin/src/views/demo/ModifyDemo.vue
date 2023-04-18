<template>
  <div class="modify-demo">
    <!-- demo信息表格 -->
    <el-table :data="demoData" border style="width: 100%">
      <el-table-column type="index" label="#" width="60"> </el-table-column>
      <el-table-column prop="demo_describe" label="描述" width="200">
      </el-table-column>
      <el-table-column prop="demo_knowkedge" label="知识点" width="200">
      </el-table-column>
      <el-table-column prop="path" label="路径" width="100">
      </el-table-column>
      <el-table-column prop="demo_createtime" label="时间" width="150">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scoped">
          <!-- 查看demo按钮 -->
          <el-tooltip
            effect="dark"
            :enterable="false"
            content="查看"
            placement="top"
          >
            <el-button
              size="mini"
              type="primary"
              icon="el-icon-search"
              @click="checkDemo(scoped.row.id)"
            ></el-button>
          </el-tooltip>
          <!-- 添加图片按钮 -->
          <el-tooltip
            effect="dark"
            :enterable="false"
            content="图片"
            placement="top"
          >
            <el-button
              size="mini"
              type="success"
              icon="el-icon-picture-outline"
              @click="imageDemo(scoped.row.id)"
            ></el-button>
          </el-tooltip>
          <!-- 修改demo信息按钮 -->
          <el-tooltip
            effect="dark"
            :enterable="false"
            content="修改"
            placement="top"
          >
            <el-button
              size="mini"
              type="info"
              icon="el-icon-edit"
              @click="modifyDemo(scoped.row.id)"
            ></el-button>
          </el-tooltip>
          <!-- 删除demo按钮 -->
          <el-tooltip
            effect="dark"
            :enterable="false"
            content="删除"
            placement="top"
          >
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="deleteDemo(scoped.row.id)"
            ></el-button>
          </el-tooltip>
        </template>
      </el-table-column>
    </el-table>

    <!-- 查看对话框 -->
    <el-dialog title="代码" :visible.sync="checkDiaVisible" width="80%">
      <span v-html="someData.demo_code"></span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="checkDiaVisible = false">取 消</el-button>
        <el-button type="primary" @click="checkDiaVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
    <!-- 修改对话框 -->
    <el-dialog title="修改" :visible.sync="modifykDiaVisible" width="60%">
      <el-form
        ref="demoform"
        :rules="demoRules"
        :model="someData"
        label-width="80px"
      >
        <el-form-item label="描述" prop="demo_describe">
          <el-input v-model="someData.demo_describe"></el-input>
        </el-form-item>
        <el-form-item label="知识点" prop="demo_knowkedge">
          <el-input v-model="someData.demo_knowkedge"></el-input>
        </el-form-item>
        <el-form-item label="路径" prop="path">
          <el-input v-model="someData.path"></el-input>
        </el-form-item>
        <el-form-item label="代码" prop="demo_code">
          <el-input
            type="textarea"
            rows="10"
            resize="none"
            v-model="someData.demo_code"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="modifykDiaVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit">修 改</el-button>
      </span>
    </el-dialog>
    <!-- 图片对话框 -->
    <el-dialog
      class="dialogimg"
      title="图片"
      :visible.sync="imageDiaVisible"
      width="60%"
    >
      <div class="dialogbox">
        <span class="message-img">展示图片：</span>
        <!-- <img src="../../assets/Headportrait.jpg" alt="" /> -->
        <img :src="demoImgUrl" alt="" />
        <span class="upload-img">上传图片：</span>
        <el-upload
          class="upload-demoimg"
          action="/admin/demoimg"
          :data="uploadData"
          :multiple="false"
          name="avatar"
          :on-success="uploadSuccess"
        >
          <el-button size="small" type="primary">点击上传</el-button>
        </el-upload>
        <span slot="footer" class="dialog-img">
          <el-button @click="imageDiaVisible = false">取 消</el-button>
          <el-button type="primary" @click="isOk">确 定</el-button>
        </span>
      </div>
    </el-dialog>
  </div>
</template>

<script>
const {
  getDemoAll,
  deleteDemo,
  getDemoSome,
  modifyDemo,
} = require("@/api/index");
export default {
  data() {
    return {
      // 所有demo信息
      demoData: [],
      // 查看某个demo的信息
      someData: {},
      // 查看 对话框的显示与隐藏
      checkDiaVisible: false,
      // 修改 对话框的显示与隐藏
      modifykDiaVisible: false,
      // 图片对话框的显示与隐藏
      imageDiaVisible: false,
      // 表单验证规则
      demoRules: {
        demo_describe: [
          { required: true, message: "请输入demo描述", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在 3 到 100 个字符",
            trigger: "blur",
          },
        ],
        demo_knowkedge: [
          { required: true, message: "请输入知识点", trigger: "blur" },
          {
            min: 3,
            max: 100,
            message: "长度在 3 到 100 个字符",
            trigger: "blur",
          },
        ],
        demo_code: [{ required: true, message: "请输入代码", trigger: "blur" }],
        path: [
          { required: true, message: "请输入路径", trigger: "blur" },
          {
            min: 3,
            max: 50,
            message: "长度在 3 到 50 个字符",
            trigger: "blur",
          },
        ]
      },
      // 上传图片携带的参数
      uploadData: {
        demo_id: null,
      },
      // 图片路径
      demoImgUrl: "",
    };
  },
  created() {
    this.getAllDemo()
  },
  methods: {
    // 获取demo全部信息
    async getAllDemo() {
      const data = await getDemoAll();
    const newData = data.map((value) => {
      value.demo_createtime = value.demo_createtime
        .slice(0, 16)
        .replace("T", " ");
      return value;
    });
    this.demoData = newData;
    },
    // 查看demo按钮
    async checkDemo(id) {
      const data = await getDemoSome(id);
      this.someData = data[0];
      this.checkDiaVisible = true;
    },
    // 修改demo按钮
    async modifyDemo(id) {
      const data = await getDemoSome(id);
      this.someData = data[0];
      this.modifykDiaVisible = true;
    },
    // 删除demo按钮
    deleteDemo(id) {
      this.$confirm("此操作将永久删除该demo, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        showCancelButton: true,
      })
        .then(() => {
          deleteDemo(id)
            .then(async (res) => {
              this.$message.success("删除成功！");
              this.demoData = await getDemoAll();
            })
            .catch((err) => {
              this.$message.error("删除失败！");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 对话框中的修改按钮
    submit() {
      this.$refs.demoform.validate(async (valid) => {
        if (valid) {
          modifyDemo(
            this.someData.id,
            this.someData.demo_describe,
            this.someData.demo_knowkedge,
            this.someData.demo_code,
            this.someData.path
          )
            .then((resolve) => {
              this.modifykDiaVisible = false;
              this.getAllDemo()
              this.$message.success("修改成功！");
            })
            .catch((error) => {
              console.log(error);
              this.$message.error("修改失败！");
            });
        } else {
          this.$message.error("信息填写不正确！");
        }
      });
    },
    // 查看上传图片按钮
    imageDemo(id) {
      this.imageDiaVisible = true;
      this.uploadData.demo_id = id;
      this.demoImgUrl = `/admin/getdemoimg?demo_id=${id}`;
    },
    // 图片上传成功时
    uploadSuccess() {
      this.$message.success("图片上传成功！刷新后在查看");
    },
    // 图片上传对话框的确定按钮
    isOk() {
      this.imageDiaVisible = false;
      this.$router.go(0);
    },
  },
};
</script>

<style lang="less">
.dialogimg {
  min-width: 680px;
  .dialogbox {
    min-width: 680px;
    position: relative;
    height: 300px;

    .message-img {
      position: absolute;
      font-size: 20px;
      top: 40%;
      transform: translateY(-50%);
      color: #409eff;
    }
    img {
      position: absolute;
      left: 100px;
      top: 40%;
      transform: translateY(-50%);
      width: 100px;
      height: 100px;
    }
    .upload-img {
      position: absolute;
      font-size: 20px;
      top: 40%;
      transform: translateY(-50%);
      color: #409eff;
      left: 40%;
    }
    .upload-demoimg {
      position: absolute;
      left: 55%;
      top: 40%;
      transform: translateY(-50%);
    }

    .dialog-img {
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>