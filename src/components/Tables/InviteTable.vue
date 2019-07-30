<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }" >
        <md-table-cell md-label="名称" >{{ item.name }}</md-table-cell>
        <md-table-cell md-label="地区">{{ item.reigion }}</md-table-cell>
        <md-table-cell md-label="类型">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="信用等级" 
          v-bind:style="{ color:((item.creditsts=='低')?'red':(item.creditsts=='中')?'orange':'green')}"
        >{{ item.creditsts }}</md-table-cell>
        <md-table-cell md-label="运营情况" v-bind:style="{ color:((item.operationsts=='有潜在风险')?'red':'green')}">{{
          item.operationsts
        }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import partnerinvitedata from "../Data/partnerinvitedata.js";
import changecolor from "./Changecolor.js"
var example = [
  {
    name: "公司A",
    reigion: "深圳",
    type: "物流",
    creditsts: "高",
    operationsts: "良好"
  },
  {
    name: "公司B",
    reigion: "深圳",
    type: "大数据",
    creditsts: "高",
    operationsts: "良好"
  }
];

export default {
  name: "invite-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      selected: [],
      users: partnerinvitedata
    };
  }
};
</script>
