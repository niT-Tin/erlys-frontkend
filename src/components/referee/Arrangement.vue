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
export default {
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
};
</script>
<style>

@import "../../css/rArranmgement.css";
</style>