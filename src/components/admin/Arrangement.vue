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
          :picker-options="pickerOptions"
        >
        </el-date-picker>
      </div>
    </div>
    <div class="arm">
      <div class="arm-title">赛程设置</div>
      <el-select class="arop" v-model="value" clearable placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
    <el-button class="setb" type="success">设置</el-button>
    <el-button type="success" class="mysubmit" >提交赛程</el-button>
    </div>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "单人赛",
        },
        {
          value: "选项2",
          label: "双人赛",
        },
        {
          value: "选项3",
          label: "三人赛",
        },
        {
          value: "选项4",
          label: "五人赛",
        },
        {
          value: "选项5",
          label: "精英赛",
        },
        {
          value: "选项5",
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
      value1: "",
      value2: "",
      value3: "",
      activities: [
        {
          content: "单人赛",
          timestamp: "2018-04-12 20:46",
          size: "small",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "双人赛",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "五人赛",
          timestamp: "2018-04-03 20:46",
          size: "large",
        },
        {
          content: "全能赛",
          timestamp: "2018-04-03 20:46",
        },
      ],
    };
  },
};
</script>

<style>
@import "../../css/Arrangement.css";
</style>