<template>

<div class="table1">
  <el-table
      :data="userinfos"
      style="width: 100%">
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="180">
      </el-table-column>
      <el-table-column
        prop="school"
        label="学校"
        width="180">
      </el-table-column>
      <el-table-column
        prop="coach"
        label="教练"
        width="180">
      </el-table-column>
      <el-table-column
        prop="guardian"
        label="监护人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="rela"
        label="关系"
        width="180">
      </el-table-column>
      <el-table-column
        prop="contact"
        label="联系方式"
        width="180">
      </el-table-column>
      <el-table-column
        prop="contact"
        label="修改"
        width="180">
      <el-button type="success">修改</el-button>
      </el-table-column>
    </el-table>
    <!-- <el-button type="success">成功按钮</el-button> -->
</div>

</template>

<script>
import axios from "axios";
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
  data() {
    return {
      userinfos: [],
    };
  },
  methods: {
    getData: function () {},
  },
  created() {
    this.instance1 = axios.create({
      baseURL: "http://hk4top.top/flexq/api",
      timeout: 10000,
    });
    this.instance1
      .get("/getallplayerinfo")
      .then((result) => {
        this.userinfos = result.data;
        this.total1 = result.data.length;
        console.log(result);
      })
      .catch((err) => {
        console.log("发生错误");
      });
  },
};
</script>

<style>
@import "../../css/PlayInfo.css";

</style>