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
      activities: [],
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
        // let a = {};
        var i;
        for (i in result.data.arrangementList) {
          let a = {};
          a.content = result.data.arrangementList[i].schedule;
          a.timestamp =
            result.data.arrangementList[i].time;
          a.size = "medium";
          a.type = "primary";
          a.icon = "el-icon-more"
          this.activities.push(a);
        }
       this.activities =  this.activities.slice(0,5)
      });
      console.log(this.activities);
  },
};
</script>
<style>

@import "../../css/rArranmgement.css";
</style>