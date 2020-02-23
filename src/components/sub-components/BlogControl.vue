<template>
  <div class="blog-control">
    <div class="overlay">
      <div class="blog-search">
        <span>搜索博客：</span>
        <el-input
          placeholder="请输入关键字"
          suffix-icon="el-icon-edit"
          v-model="blog.keyword">
        </el-input> 
        <button @click="searchBlog">搜索</button>
      </div>
      <div class="table-content">
        <el-table
            :data="tableData"
            max-height="500"
           >
            <el-table-column
            prop="id"
            label="id"
            width="60"
            align="center">
            </el-table-column>
            <el-table-column 
              prop="author"
              label="昵称"
              width="200"
              align="center">
            </el-table-column>
            <el-table-column
              prop="createtime"
              label="发布日期"
              width="150"
              align="center">
            </el-table-column>
            <el-table-column
              prop="readNum"
              label="浏览量"
              width="100"
              align="center">
            </el-table-column>
             <el-table-column
              prop="title"
              label="标题"
              align="center">
            </el-table-column>
            <el-table-column
              prop="state"
              label="状态"
              align="center"
              width="60">
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="160"
              align="center">
              <template slot-scope="scope">
                <el-button @click="deleteBlog(scope.row)" type="text" size="small">删除</el-button>
                <el-button @click="recoverBlog(scope.row)" type="text" size="small">恢复</el-button>
              </template>
            </el-table-column>
          </el-table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'BlogControl',
  data() {
    return {
      blog: {
        keyword:''
      },
      tableData: []
    }
  },
  methods: {
    searchBlog() {
      axios.get('/api/blog/list-role?keyword=' + this.blog.keyword).then(function(res) {
        if (res.data.isSuccess) {
          this.tableData = res.data.data;
          return;
        }
        return;
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    getBlog() {
      axios.get('/api/blog/list-role').then(function(res) {
        if (res.data.isSuccess) {
          this.tableData = res.data.data;
        }
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    deleteBlog(row) {
      if (row.state === '删除') return this.handleWarn();
      axios.post('/api/blog/delete', row).then(function(res) {
        if (res.data.isSuccess) {
          this.getBlog();
          return this.handleSucc();
        }
        return this.handleFail();
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    recoverBlog(row) {
      if (row.state === '正常') return this.handleWarn();
      axios.post('/api/blog/recover', row).then(function(res) {
        if (res.data.isSuccess) {
          this.getBlog();
          return this.handleSucc();
        }
        return this.handleFail();
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    handleSucc() {
      this.$notify({
        title: '操作成功',
        type: 'success',
        duration: 1800,
        showClose: false
      })
    },
    handleFail() {
      this.$notify({
        title: '操作失败',
        type: 'error',
        duration: 1800,
        showClose: false
      })
    },
    handleWarn() {
      this.$notify({
        title: '操作无效',
        type: 'warning',
        duration: 1800,
        showClose: false
      })
    }
  },
  mounted() {
    this.getBlog();
  }
}
</script>

<style scoped>
.blog-control {
  height: calc(100vh - 150px);
  width: calc(100vw - 200px);
  margin-left: 200px;
  background-image: url(../../assets/images/back-bg.jpg);
  background-size: cover;
}

.overlay {
  width: 100%;
  height: 100%;
  padding: 10px 0px;
  background-color: rgba(42, 42, 42, 0.60);
}

.el-input {
  width: 300px;
}

.blog-search {
  color: #dfe6e9;
  margin-left: 20px;
  padding-top: 20px;
}

.blog-search button {
  display: inline-block;
  height: 40px;
  width: 50px;
  border: 1px solid #dfe6e9;
  border-radius: 4px;
  background-color: transparent;
  color: #dfe6e9;
  cursor: pointer;
  outline: none;
  font-size: 14px;
}

.blog-search button:hover {
  border-color: #a29bfe;
  color: #a29bfe;
}

.table-content {
  padding: 20px;
}

.el-table {
  border-radius: 5px;
}

@media (max-width: 468px) {
  .blog-control {
    height: calc(100vh - 130px);
    width: 100vw;
    margin-left: 0;
  }

  .el-input {
    width: 200px;
  }

  .blog-search button {
    display: inline-block;
    height: 30px;
    width: 40px;
    font-size: 12px;
  }
}
</style>