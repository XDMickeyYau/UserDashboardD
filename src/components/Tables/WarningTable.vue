<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="名称">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="地区">{{ item.reigion }}</md-table-cell>
        <md-table-cell md-label="类型">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="信用等级" v-bind:style="{ color:((item.creditsts=='低')?'red':(item.creditsts=='中')?'orange':'green')}">{{ item.creditsts }}</md-table-cell>
        <md-table-cell md-label="运营情况" v-bind:style="{ color:((item.operationsts=='有潜在风险')?'red':'green')}">{{
          item.operationsts
        }}</md-table-cell>
        <md-table-cell md-label="更多">
          <router-link v-bind:to="'/partner-profile/'+item.id+'/partnerdata'"><md-icon>store</md-icon></router-link >
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import partnerwarningdata from "../Data/partnerwarningdata.js";
console.log(partnerwarningdata);
var example = [
  {
    name: "公司23",
    reigion: "深圳",
    type: "金融科技",
    creditsts: "低",
    operationsts: "有潜在风险"
  },
  {
    name: "公司24",
    reigion: "广州",
    type: "网贷平台",
    creditsts: "中",
    operationsts: "有潜在风险"
  }
];

export default {
  name: "warning-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      selected: [],
      users: partnerwarningdata
    };
  }
};
</script>
