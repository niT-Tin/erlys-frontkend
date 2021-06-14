<template>
  <div class="bgk">
    <div class="hd">
        <el-carousel :interval="4000" type="card">
        <el-carousel-item class="itemss" v-for="item in pics" :key="item.id">
          <h3 class="medium">
            <img
              class="images"
              :src="item.idview"
              style="display: inline-block; width: 100%"
              alt=""
            />
          </h3>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="upd">
      <el-upload
        class="upload-demo"
        drag
        ref="upload"
        action="http://47.102.220.227:80/flexq/api/signs"
        :file-list="fileList"
        :on-exceed="toMuch"
        :on-success="myRes"
      >
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将报名表拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">
          只能上传excel文件，且不超过500kb
        </div>
      </el-upload>
      <el-button class="signb" @click="sign" type="primary">报名</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    fileList: [],
      preFilename: '',
      postFilename: '',
      pics: [
        { id: 0, idview: "../../static/headers/1.jpg" },
        { id: 1, idview: "../../static/headers/2.jpg" },
        { id: 2, idview: "../../static/headers/3.jpg" },
        { id: 3, idview: "../../static/headers/4.jpg" },
      ],
    };
  },
  methods:{
    toMuch: function(files, fileList){
      const h = this.$createElement;
          this.$notify({
            title: "上传失败",
            message: h("i", { style: "color: teal" }, "文件数量必须为1"),
            position: "top-left",
            type: "warning",
          });
    },
      sign: function(){
          // console.log("注册");
          // console.log(this.fileList);
          if(this.preFilename == this.postFilename){
              const h = this.$createElement;
          this.$notify({
            title: "上传成功",
            message: h("i", { style: "color: teal" }, ""),
            position: "top-left",
            type: "success",
          });
          }else{
            const h = this.$createElement;
          this.$notify({
            title: "上传失败",
            message: h("i", { style: "color: teal" }, ""),
            position: "top-left",
            type: "warning",
          });
          }
          // this.$refs.upload.submit();
      },
      myRes: function(res, file, fileList){
          console.log(res.message);
          console.log(file);
          console.log(fileList);
          this.postFilename = res.message;
          this.preFilename = file.name;
      }
  },
};
</script>
<style>
@import "../css/SignUp.css";
</style>