<template>
  <div class="sort-part">
    <div class="sort-tag">
      <el-tag 
        :key="tag" 
        v-for="tag in sortTags" 
        closable 
        effect="plain" 
        @close="handleClose(tag)"
      >
        {{ tag }}
      </el-tag>
      <el-input 
        class="input-new-tag" 
        v-if="inputVisible" 
        v-model="inputValue"
        ref="saveTagInput"
        size="small"
        @keyup.enter.native="handleInputConfirm"
        @blur="handleInputConfirm"
      >
      </el-input>
      <el-button v-else class="button-new-tag" size="small" @click="showInput">+ New Tag</el-button>
    </div>
    <div class="search-part">
      <el-input
        placeholder="请输入内容"
        prefix-icon="el-icon-search"
        v-model="searchIput">
        <el-button slot="append" icon="el-icon-search" style="outline: none" @click="searchBlog()"></el-button>
      </el-input>
    </div>
    <div class="search-result">
      <el-table
      v-loading="loading"
        :data="tableData"
        style="width: 100%">
        <el-table-column
          prop="createtime"
          label="日期"
          width="180"
          align="center">
        </el-table-column>
        <el-table-column
          prop="readNum"
          label="阅读量"
          width="100"
          align="center">
        </el-table-column>
        <el-table-column
          prop="author"
          label="作者"
          width="140"
          align="center">
        </el-table-column>
        <el-table-column
          prop="title"
          label="标题"
          align="center">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="60"
          align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">阅读</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SortPart',
    data() {
    return {
      sortTags: [],
      inputVisible: false,
      inputValue: '',
      searchIput: '',
      tableData: [],
      blogId: 0,
      keyword: '',
      loading: true
    }
  },
  methods: {
    searchBlog() {
      this.keyword = this.sortTags.join('').concat(this.searchIput);
      axios.get('/api/blog/list?keyword=' + this.keyword).then(function(res) {
        if (res.data.isSuccess) {
          this.tableData = res.data.data;
        }
      }.bind(this)).catch(err => {
        console.log(err);
      })
    },
    handleClose(tag) {
      this.sortTags.splice(this.sortTags.indexOf(tag), 1);
    },
    showInput() {
      this.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },
    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.sortTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = '';
    },
    handleClick(row) {
      this.blogId = row.id;
      this.$store.commit('updateBlogIdState', {
        blogId: this.blogId
      })
      this.$router.push('/read-blog');
    },
    getBlog() {
      axios.get('/api/blog/list').then(function(res) {
        if (res.data.isSuccess) {
          return this.tableData = res.data.data;
        }
        return;
      }.bind(this)).catch(err => {
        console.log(err);
      })
    }
  },
  mounted() {
    this.getBlog();
    this.loading = false;
  }
}
</script>

<style scoped>
.sort-part {
  flex: 1;
  margin: 0 10px;
  background-color: transparent;
  border-radius: 5px;
  padding-bottom: 10px;
}

.sort-tag {
  padding: 20px 30px;
  background-color: white;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

.el-tag {
  margin-right: 10px;
}

.button-new-tag {
  margin-top: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}

.input-new-tag {
  margin-top: 10px;
  width: 90px;
  vertical-align: bottom;
}

.search-part {
  padding: 0 30px 20px 30px;
  background-color: white;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.search-result {
  margin-top: 10px;
  border-radius: 5px;
  background-color: white;
}

.el-table {
  border-radius: 5px;
}

.el-pagination {
  display: flex;
  justify-content: center;
}

@media (max-width: 468px) {
  .sort-part {
    flex: unset;
    width: calc(100vw - 20px);
  }

  .sort-tag {
    padding: 10px 10px;
    background-color: white;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .el-tag {
    margin-right: 10px;
  }

  .button-new-tag {
    margin-top: 10px;
    height: 32px;
    line-height: 30px;
    padding-top: 0;
    padding-bottom: 0;
  }

  .input-new-tag {
    margin-top: 10px;
    width: 90px;
    vertical-align: bottom;
  }

  .search-part {
    padding: 0 10px 10px 10px;
    background-color: white;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
}
</style>