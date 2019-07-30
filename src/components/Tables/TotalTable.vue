<template>
  <div>
    <md-table v-model="searched"  :table-header-color="tableHeaderColor" md-sort="name" md-sort-order="asc" >
      <md-table-toolbar>
        <div class="md-toolbar-section-start" v-if="show_button">
            <md-button  class="md-dense md-success" @click="updatetable('all')" style="margin:10px" >所有</md-button> 
            <md-button  class="md-dense md-success" @click="updatetable('existing')" style="margin:10px">现有伙伴</md-button> 
            <md-button  class="md-dense md-warning" @click="updatetable('warning')" style="margin:10px">风险伙伴</md-button> 
            <md-button  class="md-dense md-info" @click="updatetable('recommendation')" style="margin:10px">推荐伙伴</md-button> 
            <md-button  class="md-dense md-primary" @click="updatetable('invite')" style="margin:10px">接受邀请</md-button> 
        </div>
        <md-field md-clearable class="md-toolbar-section-end ">
          <md-input placeholder="名称搜索" v-model="search" @input="searchOnTable" class="md-success" />
        </md-field>

      </md-table-toolbar>
      
      <md-table-empty-state
        md-label="No users found"
        :md-description="`找不到 '${search}' `">
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }" >
        <md-table-cell md-sort-by="name" md-label="名称" >{{ item.name }}</md-table-cell>
        <md-table-cell md-sort-by="reigion" md-label="地区" >{{ item.reigion }}</md-table-cell>
        <md-table-cell md-label="类型" md-sort-by="type">{{ item.type }}</md-table-cell>
        <md-table-cell md-label="信用等级" md-sort-by="creditsts" v-bind:style="{ color:((item.creditsts<550)?'red':(item.creditsts<650)?'orange':'green')}">{{item.creditsts}}
        </md-table-cell>
        <md-table-cell md-label="运营情况" md-sort-by="operationsts" v-bind:style="{ color:((item.operationsts<55)?'red':(item.operationsts<75)?'orange':'green')}">{{item.operationsts
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


import totalpartnerdata from "../Data/totalpartnerdata.js";

export default {
  name: "total-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    },
    scope:{
      type: String,
      default: ""
    },
    show_button:{
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      search: null,
      searched: [],
      selected: [],
      filter:'all',
      users: totalpartnerdata
      /*((scope=='existing')?totalpartnerdata.filter(partner => partner.existing==true):
      (scope=='warning')?partnerdata.filter(partner => partner.creditsts == "低" || partner.operationsts == "有潜在风险"):
      (scope=='recommnedation')?totalpartnerdata.filter(partner => partner.recommended==true):
      (scope=='invite')?totalpartnerdata.filter(partner => partner.invite==true):
      totalpartnerdata)*/,



      reigion_list: [...new Set (totalpartnerdata.map(x =>x.reigion))],
      type_list: [...new Set (totalpartnerdata.map(x =>x.type))],
      creditsts_list: [...new Set (totalpartnerdata.map(x =>x.creditsts))],
      operationsts_list: [...new Set (totalpartnerdata.map(x =>x.operationsts))]

    };
  },
      methods: {
      newUser () {
        window.alert('Noop')
      },
      searchOnTable () {
        this.searched = searchByName(this.users, this.search)
      },
    updatetable(scope){
        if (scope=='all') {this.searched=this.users}
        else if (scope=='existing'){this.searched=this.users.filter(partner => partner.existing==true)}
        else if (scope=='warning') {this.searched=this.users.filter(partner => partner.creditsts<650 || partner.operationsts <75)}
        else if (scope=='recommendation') {this.searched=this.users.filter(partner => partner.recommended==true)}
        else if (scope=='invite') {this.searched=this.users.filter(partner => partner.invite==true)}
    }


    },
    created () {
      this.users=((this.scope=='existing')?totalpartnerdata.filter(partner => partner.existing==true):
      (this.scope=='warning')?totalpartnerdata.filter(partner => partner.creditsts<650 || partner.operationsts <75):
      (this.scope=='recommnedation')?totalpartnerdata.filter(partner => partner.recommended==true):
      (this.scope=='invite')?totalpartnerdata.filter(partner => partner.invite==true):
      totalpartnerdata);
      this.searched = this.users;
    }
};
</script>
