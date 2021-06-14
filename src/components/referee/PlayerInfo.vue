<template>
  <div class="table1">
    <el-button class="exportBtn" @click="getGrade" type="primary"
      >取得成绩表</el-button
    >
    <el-table
      :data="userinfos"
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      element-loading-background="rgba(0, 0, 0, 0.8)"
      style="width: 100%"
    >
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址" width="180">
      </el-table-column>
      <el-table-column prop="school" label="学校" width="180">
      </el-table-column>
      <el-table-column prop="coach" label="教练" width="180"> </el-table-column>
      <el-table-column prop="guardian" label="监护人" width="180">
      </el-table-column>
      <el-table-column prop="rela" label="关系" width="180"> </el-table-column>
      <el-table-column prop="contact" label="联系方式" width="180">
      </el-table-column>
    </el-table>
    
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: ["token"],
  data() {
    return {
      loading: false,
      userinfos: [],
    };
  },
  created() {
    this.instance1 = axios.create({
      baseURL: "http://hk4top.top:80/flexq/api",
      timeout: 10000,
      headers: {
        token: this.token,
      },
    });
    this.instance1
      .get("/getallplayerinfo")
      .then((result) => {
        this.userinfos = result.data.userinfoList;
        this.total1 = result.data.length;
        console.log(this.userinfos);
      })
      .catch((err) => {
        console.log("发生错误");
      });
  },
  methods: {
    getGrade: function () {
      this.instance1 = axios.create({
        baseURL: "http://hk4top.top:80/flexq/api",
        timeout: 10000,
        headers: {
          token: this.token,
        },
      });
      this.loading = true;
      this.instance1.post("/exportg").then((res) => {
        console.log(res);
        // this.open(res.data.message);
        open(res.data.message)
        this.loading = false;
      });
    },
    open(msg) {
        this.$alert('成绩表地址：'+msg, '请复制下载地址', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `取消`
            });
          }
        });
      }
  },
};
</script>

<style>
@import "../../css/PlayInfo.css";
</style>