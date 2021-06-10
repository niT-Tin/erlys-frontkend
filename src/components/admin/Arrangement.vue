<template>
  <div class="bk">
    <div class="block">
      <el-timeline>
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </el-timeline>
    </div>
    <div class="getarrangement">
      <div class="datesetor">
        <div class="block">
          <span class="demonstration">赛程时间设置</span>
          <el-date-picker
            class="tp"
            v-model="value2"
            type="datetime"
            placeholder="选择日期时间"
            align="right"
            value-format="yyyy-MM-dd HH:mm:ss"
            :picker-options="pickerOptions"
          >
          </el-date-picker>
        </div>
      </div>
      <div class="arm">
        <div class="arm-title">赛程设置</div>
        <el-select
          class="arop"
          v-model="value"
          clearable
          placeholder="请选择"
          @change="getThing"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </div>
      <el-button class="setb" type="success" @click="gets">设置</el-button>
      <el-button type="success" class="mysubmit" @click="cmit"
        >提交赛程</el-button
      >
      <el-button type="primary" class="reset" @click="clear">重置</el-button>
    </div>
  </div>
</template>
<script>
import axios from "axios";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.headers.get["Content-Type"] = "application/json";
import qs from "qs";
export default {
  props: ["token"],
  data() {
    return {
      RqObject: {
        arrangementList: [],
        token: "",
        message: "",
        userinfo: {},
      },
      instance1: null,
      options: [
        {
          value: "单人赛",
          label: "单人赛",
        },
        {
          value: "双人赛",
          label: "双人赛",
        },
        {
          value: "三人赛",
          label: "三人赛",
        },
        {
          value: "五人赛",
          label: "五人赛",
        },
        {
          value: "全能赛",
          label: "全能赛",
        },
      ],
      value: "",
      pickerOptions: {
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            },
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            },
          },
        ],
      },
      count: 0,
      count1: 0,
      value1: "",
      value2: "",
      value3: "",
      activities: [
        {
          content: "待设置",
          timestamp: "2018-04-12 20:46",
          size: "small",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "待设置",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "待设置",
          timestamp: "2018-04-03 20:46",
          size: "large",
        },
        {
          content: "待设置",
          timestamp: "2018-04-03 20:46",
        },
      ],
    };
  },
  created() {
    var instance = axios.create({
      baseURL: "http://localhost:80/flexq/api",
      timeout: 10000,
      headers: {
        token: this.token,
      },
    });
    instance
      .get("http://localhost:80/flexq/api/getarrangement")
      .then((result) => {
        console.log(result.data.arrangementList);
        var i;
        for (i in result.data.arrangementList) {
          this.activities[i].content = result.data.arrangementList[i].time;
          this.activities[i].timestamp =
            result.data.arrangementList[i].schedule;
          console.log(result.data.arrangementList[i].time);
          console.log(result.data.arrangementList[i].schedule);
        }
      });
  },
  mounted: function () {},
  methods: {
    clear: function () {
      this.thing = "";
      this.count = 0;
      this.count1 = 0;
      this.RqObject.arrangementList = [];

      var ite;
      for (ite in this.activities) {
        this.activities[ite].content = "待设置";
        this.activities[ite].timestamp = "1949-10-1 15:00";
      }

      const h = this.$createElement;
      this.$notify({
        title: "重置",
        message: h("i", { style: "color: teal" }, "重置成功"),
        position: "top-left",
      });
    },
    getThing: function (value) {
      this.thing = value;
    },
    gets: function (selVal) {
      if (
        this.value2 == "" ||
        this.value2 == undefined ||
        this.thing == "" ||
        this.thing == undefined
      ) {
        const h = this.$createElement;
        this.$notify({
          title: "设置错误",
          message: h("i", { style: "color: teal" }, "赛程内容或时间不能为空"),
          position: "top-left",
        });
        this.thing = "";
        this.RqObject.arrangementList = [];
        this.count1 = 0;
        return;
      }
      let Arrangement = {};
      var _this = this;
      Arrangement.time = this.value2 + "";
      Arrangement.schedule = this.thing;
      _this.RqObject.arrangementList[this.count] = Arrangement;
      _this.count++;
      const h = this.$createElement;
      this.$notify({
        title: "设置成功",
        message: h("i", { style: "color: teal" }, "设置赛程成功"),
        position: "top-left",
      });
      this.activities[this.count1].content = this.thing;
      this.activities[this.count1].timestamp = this.value2 + "";
      this.count1++;
    },
    cmit: function () {
      var _this = this;
      _this.instance1 = axios.create({
        baseURL: "http://localhost:80/flexq/api",
        timeout: 10000,
        contentType: "application/json",
        dataType: "json",
        headers: {
          token: this.token,
          "Content-Type": "application/json;charset=UTF-8",
        },
      });
      console.log(this.count);
      _this.count = 0;
      _this.RqObject.token = this.token;
      if (_this.RqObject.arrangementList.length < 1) {
        const h = this.$createElement;
        this.$notify({
          title: "提交失败",
          message: h("i", { style: "color: teal" }, "提交赛程不能为空"),
          position: "top-left",
        });
        return;
      }
      console.log(_this.RqObject);
      _this.instance1
        .post("/setarrangement", _this.RqObject)
        .then((result) => {
          const h = this.$createElement;
          this.$notify({
            title: "提交成功",
            message: h("i", { style: "color: teal" }, "提交赛程成功"),
            position: "top-left",
          });

          console.log(result.data);
        })
        .catch((err) => {
          console.log("发生错误");
        });
      console.log(this.token);
      _this.RqObject.arrangementList = [];
    },
    forMateDate: function (dates) {
      var dates1 =
        this.value2.substring(0, 10) +
        " " +
        this.value2.substring(11, 13) +
        ":" +
        this.value2.substring(14, 16);
      return dates1;
    },
  },
};
</script>

<style>
@import "../../css/Arrangement.css";
</style>