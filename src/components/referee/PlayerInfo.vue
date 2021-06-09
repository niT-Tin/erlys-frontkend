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
    </el-table>
</div>
</template>

<script>
import axios from 'axios'
export default {
    data (){

      return{
        userinfos:'',
      }
    },
    created(){
      this.instance1 = axios.create({
      baseURL: "http://hk4top.top/flexq/api",
      timeout: 10000,
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
    }
}
</script>

<style>


@import '../../css/PlayInfo.css';

</style>