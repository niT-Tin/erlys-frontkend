<template>
  <div>
    <div class="table1">
      <el-table
        :data="userinfos"
        border
        style="width: 100%"
        @row-dblclick="tableDbEdit"
      >
        <el-table-column prop="name" label="姓名" width="180">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.name"
              placeholder="请输入内容"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="address" label="地址" width="180">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.address"
              placeholder="请输入内容"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="school" label="学校" width="180">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.school"
              placeholder="请输入内容"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="coach" label="教练" width="180">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.coach"
              placeholder="请输入内容"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="guardian" label="监护人" width="180">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.guardian"
              placeholder="请输入内容"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="rela" label="关系" width="180">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.rela"
              placeholder="请输入内容"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column prop="contact" label="联系方式" width="180">
          <template slot-scope="scope">
            <el-input
              v-model="scope.row.contact"
              placeholder="请输入内容"
            ></el-input>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="100">
          <template slot-scope="scope">
            <el-button
              class="btn21"
              @click="get1(scope.row)"
              type="primary"
              size="mini"
              >提交修改</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Msg from "../msg";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";
// import func from '../../../vue-temp/vue-editor-bridge';
export default {
  data() {
    return {
      RqObject: {
        userInfo: {},
        token: '',
        userinfoList:[],
        arrangementList:[],
        arrangement: {},
      },
      userinfos: [],
    };
  },
  props: ["token"],
  methods: {
    tableDbEdit(row, column, cell, event) {
      console.log(row, column, cell, event);
      if (column.label != "顺序") {
        event.target.innerHTML = "";
        let cellInput = document.createElement("input");
        cellInput.value = "";
        cellInput.setAttribute("type", "text");
        cellInput.style.width = "80%";
        cell.appendChild(cellInput);
        cellInput.onblur = function () {
          cell.removeChild(cellInput);
          event.target.innerHTML = cellInput.value;
        };
      }
    },
    get1: function (row) {
      this.handleClick(row);
      var instance = axios.create({
        baseURL: "http://localhost:80/flexq/api",
        timeout: 10000,
        headers: {
          token: this.token,
        },
      });
      var _this = this;
      
      _this.RqObject.userInfo = row;
      _this.RqObject.token = this.token;
      console.log(_this.RqObject);
      instance.post('/updateplayerinfo', _this.RqObject).then((res)=>{
        console.log(res.data)
      })
      // this.open(row);
    },
    get2: function (row) {
      this.changeData(row);
    },
    get3: function (row, column, event) {
      console.log(row.isSet);
    },
    handleClick(row) {
      console.log(row);
      console.log(row.name);
    },
    getData: function () {},
    changeData: function (row) {
      console.log(row);
      console.log("获取数据");
    },
  },
  created() {
    // var _this = this;
    this.instance1 = axios.create({
      baseURL: "http://hk4top.top:80/flexq/api",
      timeout: 10000,
      headers: {
        token: this.token,
      },
    });
    console.log(this.token);
    this.instance1
      .get("/getallplayerinfo")
      .then((result) => {
        this.userinfos = result.data.userinfoList;
        this.total1 = result.data.length;
        console.log(result.data);
      })
      .catch((err) => {
        console.log("发生错误");
      });
  },
  mounted: function () {
    // location.reload();
    // console.log("发生肾莫石了")
    // console.log(this.token + "shenmegui???");
  },
};
</script>
    
<style>
@import "../../css/PlayInfo.css";
</style>