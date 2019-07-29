<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="名称">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="地区">{{ item.reigion }}</md-table-cell>
        <md-table-cell md-label="类型">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="信用等级">{{ item.creditsts }}</md-table-cell>
        <md-table-cell md-label="运营情况">{{
          item.operationsts
        }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import partnerdata from "./partnerdata.js";
var example = [
  {
    name: "公司1",
    reigion: "深圳",
    type: "金融科技",
    creditsts: "高",
    operationsts: "正常"
  },
  {
    name: "公司2",
    reigion: "广州",
    type: "网贷平台",
    creditsts: "中",
    operationsts: "正常"
  },
  {
    name: "公司2",
    reigion: "广州",
    type: "网贷平台",
    creditsts: "中",
    operationsts: "正常"
  }
];

export default {
  name: "simple-table1",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      selected: [],
      users: partnerdata
    };
  }
};
</script>
