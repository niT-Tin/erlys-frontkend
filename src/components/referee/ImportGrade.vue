<template>
  <div class="cls">
    <div class="demo-input-size">
      <div class="radiobs">
        <el-radio-group v-model="radio1">
          <el-radio-button label="单人赛"></el-radio-button>
          <el-radio-button label="双人赛"></el-radio-button>
          <el-radio-button label="三人赛"></el-radio-button>
          <el-radio-button label="五人赛"></el-radio-button>
          <el-radio-button label="全能赛"></el-radio-button>
          <el-radio-button label="精英赛"></el-radio-button>
        </el-radio-group>
      </div>
      <el-input
        placeholder="请输入姓名"
        suffix-icon="el-icon-user"
        v-model="name1"
      >
      </el-input>
      <el-input
        placeholder="请输入第一局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input1"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第二局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input2"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第三局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input3"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第四局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input4"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第五局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input5"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第六局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input6"
      >
      </el-input>
      <el-button class="getin" @click="get1" type="success">录入</el-button>
    </div>
    <div class="demo-input-size">
      <div class="radiobs">
        <el-radio-group v-model="radio2">
          <el-radio-button label="单人赛"></el-radio-button>
          <el-radio-button label="双人赛"></el-radio-button>
          <el-radio-button label="三人赛"></el-radio-button>
          <el-radio-button label="五人赛"></el-radio-button>
          <el-radio-button label="全能赛"></el-radio-button>
          <el-radio-button label="精英赛"></el-radio-button>
        </el-radio-group>
      </div>
      <el-input
        placeholder="请输入姓名"
        suffix-icon="el-icon-user"
        v-model="name2"
      >
      </el-input>
      <el-input
        placeholder="请输入第一局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input11"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第二局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input22"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第三局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input33"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第四局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input44"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第五局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input55"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第六局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input66"
      >
      </el-input>
      <el-button class="getin" @click="get2" type="success">录入</el-button>
    </div>
    <div class="demo-input-size">
      <div class="radiobs">
        <el-radio-group v-model="radio3">
          <el-radio-button label="单人赛"></el-radio-button>
          <el-radio-button label="双人赛"></el-radio-button>
          <el-radio-button label="三人赛"></el-radio-button>
          <el-radio-button label="五人赛"></el-radio-button>
          <el-radio-button label="全能赛"></el-radio-button>
          <el-radio-button label="精英赛"></el-radio-button>
        </el-radio-group>
      </div>
      <el-input
        placeholder="请输入姓名"
        suffix-icon="el-icon-user"
        v-model="name3"
      >
      </el-input>
      <el-input
        placeholder="请输入第一局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input111"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第二局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input222"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第三局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input333"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第四局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input444"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第五局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input555"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第六局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input666"
      >
      </el-input>
      <el-button class="getin" @click="get3" type="success">录入</el-button>
    </div>
    <div class="demo-input-size">
      <div class="radiobs">
        <el-radio-group v-model="radio4">
          <el-radio-button label="单人赛"></el-radio-button>
          <el-radio-button label="双人赛"></el-radio-button>
          <el-radio-button label="三人赛"></el-radio-button>
          <el-radio-button label="五人赛"></el-radio-button>
          <el-radio-button label="全能赛"></el-radio-button>
          <el-radio-button label="精英赛"></el-radio-button>
        </el-radio-group>
      </div>
      <el-input
        placeholder="请输入姓名"
        suffix-icon="el-icon-user"
        v-model="name4"
      >
      </el-input>
      <el-input
        placeholder="请输入第一局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input1111"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第二局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input2222"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第三局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input3333"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第四局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input4444"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第五局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input5555"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第六局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input6666"
      >
      </el-input>
      <el-button class="getin" @click="get4" type="success">录入</el-button>
    </div>
    <div class="demo-input-size">
      <div class="radiobs">
        <el-radio-group v-model="radio5">
          <el-radio-button label="单人赛"></el-radio-button>
          <el-radio-button label="双人赛"></el-radio-button>
          <el-radio-button label="三人赛"></el-radio-button>
          <el-radio-button label="五人赛"></el-radio-button>
          <el-radio-button label="全能赛"></el-radio-button>
          <el-radio-button label="精英赛"></el-radio-button>
        </el-radio-group>
      </div>
      <el-input
        placeholder="请输入姓名"
        suffix-icon="el-icon-user"
        v-model="name5"
      >
      </el-input>
      <el-input
        placeholder="请输入第一局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input11111"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第二局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input22222"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第三局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input33333"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第四局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input44444"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第五局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input55555"
      >
      </el-input>
      <el-input
        size="medium"
        placeholder="请输入第六局成绩"
        suffix-icon="el-icon-s-data"
        v-model="input66666"
      >
      </el-input>
      <el-button class="getin" @click="get5" type="success">录入</el-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";
export default {
  props: ["token"],
  data() {
    return {
      RqObject: {
        scores: [],
        sc: 0,
        name: "",
      },
      instance1: null,
      radio1: "",
      radio2: "",
      radio3: "",
      radio4: "",
      radio5: "",
      name1: "",
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      name2: "",
      input11: "",
      input22: "",
      input33: "",
      input44: "",
      input55: "",
      input66: "",
      name3: "",
      input111: "",
      input222: "",
      input333: "",
      input444: "",
      input555: "",
      input666: "",
      name4: "",
      input1111: "",
      input2222: "",
      input3333: "",
      input4444: "",
      input5555: "",
      input6666: "",
      name5: "",
      input11111: "",
      input22222: "",
      input33333: "",
      input44444: "",
      input55555: "",
      input66666: "",
    };
  },
  methods: {
    get1: function () {
      var instance = axios.create({
        baseURL: "http://localhost:80/flexq/api",
        timeout: 10000,
        headers: {
          token: this.token,
        },
      });
      let sc;
      switch (this.radio1) {
        case "单人赛":
          sc = 2;
          break;
        case "双人赛":
          sc = 2;
          break;
        case "三人赛":
          sc = 3;
          break;
        case "五人赛":
          sc = 5;
          break;
        case "全能赛":
          sc = 6;
          break;
        case "精英赛":
          sc = 7;
          break;
      }
      if(this.name1 == '' || this.name1 == null){
        const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "名字不能为空"),
                position: "top-left",
                type: "warning",
              });
              return;
      }
      if(this.input1 == '' || this.input2 == '' || this.input3 =='',
      this.input4 == '' || this.input5 == '' || this.input6 == ''){
        const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "成绩框不能有空"),
                position: "top-left",
                type: "warning",
              });
              return;
      }
      instance.post("/foneuserinfobyname", this.name1).then((res) => {
        console.log(res.data);
        if (res.data.userInfo.name != "" || res.data.userInfo.name != null) {
          this.RqObject.scores.push(Number(this.input1));
          this.RqObject.scores.push(Number(this.input2));
          this.RqObject.scores.push(Number(this.input3));
          this.RqObject.scores.push(Number(this.input4));
          this.RqObject.scores.push(Number(this.input5));
          this.RqObject.scores.push(Number(this.input6));
          this.RqObject.sc = sc;
          this.RqObject.name = this.name1;
          console.log(this.RqObject);
          instance.post("/insertm", this.RqObject).then((res) => {
            if (res.data.status == 200) {
              const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "录入成功"),
                position: "top-left",
                type: "success",
              });
            } else {
              const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "录入失败"),
                position: "top-left",
                type: "warning",
              });
            }
            console.log(res);
          });
        }else{
          const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "查无此人"),
                position: "top-left",
                type: "warning",
              });
        }
      });
    },
    get2: function () {
      var instance = axios.create({
        baseURL: "http://localhost:80/flexq/api",
        timeout: 10000,
        headers: {
          token: this.token,
        },
      });
      let sc;
      switch (this.radio2) {
        case "单人赛":
          sc = 2;
          break;
        case "双人赛":
          sc = 2;
          break;
        case "三人赛":
          sc = 3;
          break;
        case "五人赛":
          sc = 5;
          break;
        case "全能赛":
          sc = 6;
          break;
        case "精英赛":
          sc = 7;
          break;
      }
      if(this.name2 == '' || this.name2 == null){
        const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "名字不能为空"),
                position: "top-left",
                type: "warning",
              });
              return;
      }
      if(this.input11 == '' || this.input22 == '' || this.input33 =='',
      this.input44 == '' || this.input55 == '' || this.input66 == ''){
        const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "成绩框不能有空"),
                position: "top-left",
                type: "warning",
              });
              return;
      }
      instance.post("/foneuserinfobyname", this.name2).then((res) => {
        console.log(res.data);
        if (res.data.userInfo.name != "" || res.data.userInfo.name != null) {
          this.RqObject.scores.push(Number(this.input11));
          this.RqObject.scores.push(Number(this.input22));
          this.RqObject.scores.push(Number(this.input33));
          this.RqObject.scores.push(Number(this.input44));
          this.RqObject.scores.push(Number(this.input55));
          this.RqObject.scores.push(Number(this.input66));
          this.RqObject.sc = sc;
          this.RqObject.name = this.name2;
          console.log(this.RqObject);
          instance.post("/insertm", this.RqObject).then((res) => {
             if (res.data.status == 200) {
              const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "录入成功"),
                position: "top-left",
                type: "success",
              });
            } else {
              const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "录入失败"),
                position: "top-left",
                type: "warning",
              });
            }
            console.log(res);
          });
        }else{
          const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "查无此人"),
                position: "top-left",
                type: "warning",
              });
        }
      });
    },
    get3: function () {
      var instance = axios.create({
        baseURL: "http://localhost:80/flexq/api",
        timeout: 10000,
        headers: {
          token: this.token,
        },
      });
      let sc;
      switch (this.radio3) {
        case "单人赛":
          sc = 2;
          break;
        case "双人赛":
          sc = 2;
          break;
        case "三人赛":
          sc = 3;
          break;
        case "五人赛":
          sc = 5;
          break;
        case "全能赛":
          sc = 6;
          break;
        case "精英赛":
          sc = 7;
          break;
      }
      if(this.name3 == '' || this.name3 == null){
        const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "名字不能为空"),
                position: "top-left",
                type: "warning",
              });
              return;
      }
      if(this.input111 == '' || this.input222== '' || this.input333 =='',
      this.input444 == '' || this.input555 == '' || this.input666 == ''){
        const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "成绩框不能有空"),
                position: "top-left",
                type: "warning",
              });
              return;
      }
      instance.post("/foneuserinfobyname", this.name3).then((res) => {
        console.log(res.data);
        if (res.data.userInfo.name != "" || res.data.userInfo.name != null) {
          this.RqObject.scores.push(Number(this.input111));
          this.RqObject.scores.push(Number(this.input222));
          this.RqObject.scores.push(Number(this.input333));
          this.RqObject.scores.push(Number(this.input444));
          this.RqObject.scores.push(Number(this.input555));
          this.RqObject.scores.push(Number(this.input666));
          this.RqObject.sc = sc;
          this.RqObject.name = this.name3;
          console.log(this.RqObject);
          instance.post("/insertm", this.RqObject).then((res) => {
             if (res.data.status == 200) {
              const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "录入成功"),
                position: "top-left",
                type: "success",
              });
            } else {
              const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "录入失败"),
                position: "top-left",
                type: "warning",
              });
            }
            console.log(res);
          });
        }else{
          const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "查无此人"),
                position: "top-left",
                type: "warning",
              });
        }
      });
    },
    get4: function () {
      var instance = axios.create({
        baseURL: "http://localhost:80/flexq/api",
        timeout: 10000,
        headers: {
          token: this.token,
        },
      });
      let sc;
      switch (this.radio4) {
        case "单人赛":
          sc = 2;
          break;
        case "双人赛":
          sc = 2;
          break;
        case "三人赛":
          sc = 3;
          break;
        case "五人赛":
          sc = 5;
          break;
        case "全能赛":
          sc = 6;
          break;
        case "精英赛":
          sc = 7;
          break;
      }
      if(this.name4 == '' || this.name4 == null){
        const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "名字不能为空"),
                position: "top-left",
                type: "warning",
              });
              return;
      }
      if(this.input1111 == '' || this.input2222 == '' || this.input3333 =='',
      this.input4444 == '' || this.input5555 == '' || this.input6666 == ''){
        const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "成绩框不能有空"),
                position: "top-left",
                type: "warning",
              });
              return;
      }
      instance.post("/foneuserinfobyname", this.name4).then((res) => {
        console.log(res.data);
        if (res.data.userInfo.name != "" || res.data.userInfo.name != null) {
          this.RqObject.scores.push(Number(this.input1111));
          this.RqObject.scores.push(Number(this.input2222));
          this.RqObject.scores.push(Number(this.input3333));
          this.RqObject.scores.push(Number(this.input4444));
          this.RqObject.scores.push(Number(this.input5555));
          this.RqObject.scores.push(Number(this.input6666));
          this.RqObject.sc = sc;
          this.RqObject.name = this.name4;
          console.log(this.RqObject);
          instance.post("/insertm", this.RqObject).then((res) => {
             if (res.data.status == 200) {
              const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "录入成功"),
                position: "top-left",
                type: "success",
              });
            } else {
              const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "录入失败"),
                position: "top-left",
                type: "warning",
              });
            }
            console.log(res);
          });
        }else{
          const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "查无此人"),
                position: "top-left",
                type: "warning",
              });
        }
      });
    },
    get5: function () {
      var instance = axios.create({
        baseURL: "http://localhost:80/flexq/api",
        timeout: 10000,
        headers: {
          token: this.token,
        },
      });
      let sc;
      switch (this.radio5) {
        case "单人赛":
          sc = 2;
          break;
        case "双人赛":
          sc = 2;
          break;
        case "三人赛":
          sc = 3;
          break;
        case "五人赛":
          sc = 5;
          break;
        case "全能赛":
          sc = 6;
          break;
        case "精英赛":
          sc = 7;
          break;
      }
      if(this.name5 == '' || this.name5 == null){
        const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "名字不能为空"),
                position: "top-left",
                type: "warning",
              });
              return;
      }
      if(this.input11111 == '' || this.input22222 == '' || this.input33333 =='',
      this.input44444 == '' || this.input55555 == '' || this.input66666 == ''){
        const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "成绩框不能有空"),
                position: "top-left",
                type: "warning",
              });
              return;
      }
      instance.post("/foneuserinfobyname", this.name5).then((res) => {
        console.log(res.data);
        if (res.data.userInfo.name != "" || res.data.userInfo.name != null) {
          this.RqObject.scores.push(Number(this.input11111));
          this.RqObject.scores.push(Number(this.input22222));
          this.RqObject.scores.push(Number(this.input33333));
          this.RqObject.scores.push(Number(this.input44444));
          this.RqObject.scores.push(Number(this.input55555));
          this.RqObject.scores.push(Number(this.input66666));
          this.RqObject.sc = sc;
          this.RqObject.name = this.name5;
          console.log(this.RqObject);
          instance.post("/insertm", this.RqObject).then((res) => {
             if (res.data.status == 200) {
              const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "录入成功"),
                position: "top-left",
                type: "success",
              });
            } else {
              const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "录入失败"),
                position: "top-left",
                type: "warning",
              });
            }
            console.log(res);
          });
        }else{
          const h = this.$createElement;
              this.$notify({
                title: "录入",
                message: h("i", { style: "color: teal" }, "查无此人"),
                position: "top-left",
                type: "warning",
              });
        }
      });
    },
  },

  mounted() {},

  created() {
    // this.instance1 = axios.created({
    //     baseUrl: "http://hk4top.top:80/flexq1/api",
    //     timeout: 10000,
    // });
  },
};
</script>

<style>
@import "../../css/ImportGrade.css";
</style>