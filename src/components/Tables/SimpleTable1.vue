<template>
  <div>
    <md-table v-model="searched" :table-header-color="tableHeaderColor" md-sort="name"
    md-sort-order="asc" md-fixed-header>
      <md-table-toolbar>
        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="名称搜索" v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>
      
      <md-table-empty-state
        md-label="No users found"
        :md-description="`找不到 '${search}' `">
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }" >
        <md-table-cell md-sort-by="name" md-label="名称" >{{ item.name }}</md-table-cell>
        <md-table-cell md-label="地区" md-sort-by="reigion">{{ item.reigion }}</md-table-cell>
        <md-table-cell md-label="类型" md-sort-by="type">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="信用等级" md-sort-by="creditsts" v-bind:style="{ color:((item.creditsts=='低')?'red':(item.creditsts=='中')?'orange':'green')}">{{ item.creditsts }}</md-table-cell>
        <md-table-cell md-label="运营情况" md-sort-by="operationsts" v-bind:style="{ color:((item.operationsts=='有潜在风险')?'red':'green')}">{{
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

  const searchByName = (items, term) => {
    if (term) {
      return items.filter(item => item.name.includes(term))
    }

    return items
  }


import partnerdata from "../Data/partnerdata.js";
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
      search: null,
      searched: [],
      selected: [],
      users: partnerdata,
      reigion_list: [...new Set (partnerdata.map(x =>x.reigion))],
      type_list: [...new Set (partnerdata.map(x =>x.type))],
      creditsts_list: [...new Set (partnerdata.map(x =>x.creditsts))],
      operationsts_list: [...new Set (partnerdata.map(x =>x.operationsts))]

    };
  },
      methods: {
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.users, this.search)
      }
    },
    created () {
      this.searched = this.users
    }
};
</script>
