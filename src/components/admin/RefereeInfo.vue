<template>
  <!-- <div class="bgk"> -->
  <div class="table1">
    <el-table :data="userinfos" style="width: 100%">
      <el-table-column prop="id" label="ID" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="account" label="账号" width="180">
      </el-table-column>
    </el-table>
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      userinfos: [],
    };
  },
  props:['token'],
  created() {
    this.instance1 = axios.create({
      baseURL: "http://hk4top.top:80/flexq/api",
      timeout: 10000,
      headers:{
        token: this.token
      }
    });
    this.instance1
      .get("/getallrefereeinfo")
      .then((result) => {
        this.userinfos = result.data.userinfoList;
        this.total1 = result.data.length;
        // console.log(this.userinfos);
      })
      .catch((err) => {
        console.log("发生错误");
      });
  },
};
</script>