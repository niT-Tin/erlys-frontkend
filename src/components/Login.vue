<template>
  <div class="bgk">
      <transition name="el-zoom-in-center">
    <div v-show="show2" class="transition-box" >
      <div class="header">
        <img class="titlepic" src="static\bowl.png" alt="" />
        <div class="title">保龄球比赛登录</div>
      </div>
      <div class="loginmode">
        <div class="loginform">
          <img class="acpic" src="static\u31.png" alt="" />
          <img class="pdpic" src="static\u32.png" alt="" />
          <el-input
            class="ac"
            placeholder="请输入账号"
            v-model="users1.account"
            clearable
          >
          </el-input>
          <el-input
            class="pd"
            placeholder="请输入密码"
            v-model="users1.password"
            show-password
          ></el-input>
          <el-button type="warning" class="lgbtn" @click="toData" >登录</el-button>
          <el-dialog
            title="提示"
            :visible.sync="dialogVisible"
            width="30%"
            :before-close="handleClose"
          >
            <span>(账号或密码不能为空)<br/>账号或者密码错误</span>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogVisible = false"
                >确 定</el-button
              >
            </span>
          </el-dialog>
        </div>
        <!-- 等下放个登录按钮 -->
      </div>
    </div>
      </transition>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import Msg from "./msg";
export default {
  data() {
    return {
      count: 0,
      dialogVisible: false,
      show2: false,
      users1: {
        account: "",
        password: "",
      },
      instance1: null,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    toData: function () {
      let roless = ["admin", "referee"];
      let users = qs.stringify({
        account: this.users1.account,
        password: this.users1.password,
      });
      this.instance1
        .post("/login", users)
        .then((result) => {
          if (result.data.status != 401) {
              //TODO 页面跳转
              // console.log(result.data.token)
              if (result.data.userInfo.roles == roless[0]){
                // Msg.$emit("token",result.data.token);
                this.$router.push({query:{token:result.data.token}, name: "AAdapter"});
              }else if (result.data.userInfo.roles == roless[1]){
                // Msg.$emit("token",result.data.token);
                this.$router.push({query:{token:result.data.token},name: "Radapter"});
              }
              // console.log("成功")
          } else {
              this.dialogVisible = true;
          }
        })
        .catch((err) => {});
    },
  },
  mounted: function(){
      this.show2 = !this.show2;
      this.ct = this.$route.query.ct;
  }
  ,
  created() {
    
    //   this.show2 = !this.show2
    this.instance1 = axios.create({
      baseURL: "http://hk4top.top:80/flexq/api",
      timeout: 10000,
    });
  },
};
</script>

<style>
@import "../css/login.css";
</style>