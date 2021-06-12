<template>
    <div class="bgk">
        <!-- <audio src="../../static/audio/Giao.aac" autoplay></audio> -->
        <img src="../../static/error.jpg" alt="错误页面">
        <el-button class="btn1" @click="toLogin" type="primary">点我登录</el-button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        
    },
    methods: {
        toLogin(){
            this.$router.push({query:{ct:'from_err'}, name: "Login"});
        }
    }
}
</script>

<style>
    @import '../css/Error.css';
</style>