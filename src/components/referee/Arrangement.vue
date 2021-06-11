<template>
  <div class="whole">
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
   </div>
</template>
<script>
import axios from 'axios'
export default {
  props:['token'],
  data() {
    return {
     
      activities: [
        {
          content: "单人赛",
          timestamp: "2018-04-12 20:46",
          size: "small",
          type: "primary",
          icon: "el-icon-more",
        },
        {
          content: "双人混合贝克赛",
          timestamp: "2018-04-03 20:46",
          color: "#0bbd87",
        },
        {
          content: "三人赛",
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
  created(){
    var instance = axios.create({
      baseURL: "http://hk4top.top:80/flexq/api",
      timeout: 10000,
      headers: {
        token: this.token,
      },
    });
    instance
      .get("http://hk4top.top:80/flexq/api/getarrangement")
      .then((result) => {
        // console.log(result.data.arrangementList);
        var i;
        for (i in result.data.arrangementList) {
          this.activities[i].content = result.data.arrangementList[i].time;
          this.activities[i].timestamp =
            result.data.arrangementList[i].schedule;
          // console.log(result.data.arrangementList[i].time);
          // console.log(result.data.arrangementList[i].schedule);
        }
      });
  },
};
</script>
<style>

@import "../../css/rArranmgement.css";
</style>