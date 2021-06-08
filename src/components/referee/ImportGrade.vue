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
      <el-button class="getin" type="success">录入</el-button>
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
      <el-button class="getin" type="success">录入</el-button>
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
      <el-button class="getin" type="success">录入</el-button>
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
      <el-button class="getin" type="success">录入</el-button>
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
      <el-button class="getin" type="success">录入</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
        instance1: null,
      radio1: '',
      radio2: '',
      radio3: '',
      radio4: '',
      radio5: '',
      name1:'',
      input1: "",
      input2: "",
      input3: "",
      input4: "",
      input5: "",
      input6: "",
      name2:'',
      input11: "",
      input22: "",
      input33: "",
      input44: "",
      input55: "",
      input66: "",
      name3:'',
      input111: "",
      input222: "",
      input333: "",
      input444: "",
      input555: "",
      input666: "",
      name4:'',
      input1111: "",
      input2222: "",
      input3333: "",
      input4444: "",
      input5555: "",
      input6666: "",
      name5:'',
      input11111: "",
      input22222: "",
      input33333: "",
      input44444: "",
      input55555: "",
      input66666: "",
    };
  },
  methods:{

  },

    mounted: function(){

    },

  created(){
        this.instance1 = axios.created({
            baseUrl: "http://maymyday.top/flexq1/api",
            timeout: 10000,
        });
    }
};
</script>

<style>

@import "../../css/ImportGrade.css";
</style>