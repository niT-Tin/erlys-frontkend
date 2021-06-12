<template>
  <div class="bgk">
    <audio src="../../static/audio/Giao.aac" autoplay></audio>
    <img class="er" src="../../static/2.jpg" alt="错误页面" />
    <div class="fnt">没密码还想看数据？？？</div>

    <el-button class="btn1" @click="toLogin" type="primary">点我登录</el-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {},
  created() {
    var audio = new Audio("../../static/audio/Giao.aac");
    audio.play();
  },
  methods: {
    toLogin() {
      this.$router.push({ query: { ct: "from_err" }, name: "Login" });
    },
  },
};
</script>

<style>
@import "../css/Error.css";
</style>