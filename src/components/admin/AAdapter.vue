 <template>
  <div class="top1">
    <div class="rol">
      <el-carousel :interval="4000"  type="card">
        <el-carousel-item  class="itemss" v-for="item in pics" :key="item.id">
          <h3 class="medium"><img class="images" :src="item.idview" style="display: inline-block; width:100%;" alt=""></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  <div class="bgk">
    <div class="title-div">
      <div class="title-line">{{name}} 你好</div>
      <div class="title-b">
        <div class="title">{{title1}}<br/>{{address}}</div>
        <img class="title-img" src="../../../static/u43.png" alt=""> 
      </div>
    </div>
    <div class="navbar">
      <el-tabs type="border-card">
        <el-tab-pane  label="队员信息">
          <PlayerInfo :token="token"/>
        </el-tab-pane>
        <el-tab-pane label="赛程安排" >
          <Arrangement :token="token"/>
        </el-tab-pane>
        <el-tab-pane label="裁判信息">
           <RefereeInfo :token="token"/>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";
import Arrangement from './Arrangement'
import PlayerInfo from './PlayerInfo'
import RefereeInfo from './RefereeInfo'
import Msg from '../msg'

export default {
  components: {Arrangement, PlayerInfo, RefereeInfo},
    data(){
      return {
        token: '',
         pics: [
        {id:0, idview: '../../../static/headers/1.jpg'},
        {id:1, idview: '../../../static/headers/2.jpg'},
        {id:2, idview: '../../../static/headers/3.jpg'},
        {id:3, idview: '../../../static/headers/4.jpg'},
      ]
      ,
          name: "管理员",
          title1: "江西 2021年南昌市保龄球大赛",
          address: "江西南昌市爱运动保龄球馆"
      }
    },
    methods: {

    },
    created(){
        this.token = this.$route.query.token;
    },
    mounted: function(){
        
    }
}
</script>

<style>
    @import '../../css/AAdapter.css';
</style>