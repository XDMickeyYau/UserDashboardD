<template>
  <div>
    <md-table
      v-model="searched"
      :table-header-color="tableHeaderColor"
      md-sort="name"
      md-sort-order="asc"
      md-fixed-header
    >
      <md-table-toolbar class="">
        <div class="md-toolbar-row">
          <div class="md-toolbar-section-start  md-layout " v-if="show_button">
            <md-button
              class="md-dense md-dufault md-layout-item md-size-19"
              @click="updatetable('all')"
              style="margin:2px"
              >所有</md-button
            >
            <md-button
              class="md-dense md-success md-layout-item md-size-19"
              @click="updatetable('existing')"
              style="margin:2px"
              >现有伙伴</md-button
            >
            <md-button
              class="md-dense md-warning md-layout-item md-size-19"
              @click="updatetable('warning')"
              style="margin:2px"
              >潜在风险伙伴</md-button
            >
            <md-button
              class="md-dense md-info md-layout-item md-size-19"
              @click="updatetable('recommendation')"
              style="margin:2px"
              >推荐伙伴</md-button
            >
            <md-button
              class="md-dense md-primary md-layout-item md-size-19"
              @click="updatetable('invite')"
              style="margin:2px"
              >接受邀请</md-button
            >
          </div>
        </div>
        <div class="md-toolbar-row">
          <md-field md-clearable class="md-toolbar-section-start ">
            <md-input
              placeholder="名称搜索"
              v-model="search"
              @input="searchOnTable"
              class="md-success"
            />
          </md-field>
        </div>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="没有结果"
        :md-description="`找不到 '${search}' `"
      >
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }" class="md-layout">
        <md-table-cell
          class="md-layout-item md-size-30"
          md-sort-by="公司中文简称"
          md-label="公司中文简称"
          ><router-link v-bind:to="'/partner-profile/' + item.id" tag="div">{{
            item.公司中文简称
          }}</router-link></md-table-cell
        >
        <md-table-cell
          class="md-layout-item md-size-30"
          md-label="行业名称"
          md-sort-by="行业名称"
          >{{ item.行业名称 }}</md-table-cell
        >
        <md-table-cell
          class="md-layout-item md-size-20"
          md-label="信用得分"
          md-sort-by="信用得分"
          v-bind:style="{
            color:
              item.信用等级 == '低'
                ? 'red'
                : item.信用等级 == '中'
                ? 'orange'
                : 'green'
          }"
          >{{ item.信用得分 }}</md-table-cell
        >
        <md-table-cell
          class="md-layout-item md-size-15"
          md-label="信用等级"
          md-sort-by="信用等级"
          v-bind:style="{
            color:
              item.信用等级 == '低'
                ? 'red'
                : item.信用等级 == '中'
                ? 'orange'
                : 'green'
          }"
          >{{ item.信用等级 }}</md-table-cell
        >

        <!--<md-table-cell md-label="更多">
          <router-link v-bind:to="'/partner-profile/'+item.id+'/partnerdata'"><md-icon>store</md-icon></router-link >
        </md-table-cell>-->
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => item.公司中文全称.includes(term));
  }

  return items;
};

import totalpartnerdata from "../Data/totalpartnerdata.js";
function filter_warning(partner) {
  return (
    partner.existing == true &&
    (partner.信用等级 == "低" || partner.信用等级 == "中")
  );
}

export default {
  name: "total-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    },
    scope: {
      type: String,
      default: ""
    },
    show_button: {
      type: Boolean,
      default: false
    }
  },

  data() {
    return {
      search: null,
      searched: [],
      selected: [],
      filter: "all",
      users: totalpartnerdata,
      /*((scope=='existing')?totalpartnerdata.filter(partner => partner.existing==true):
      (scope=='warning')?partnerdata.filter(partner => partner.creditsts == "低" || partner.operationsts == "有潜在风险"):
      (scope=='recommnedation')?totalpartnerdata.filter(partner => partner.recommended==true):
      (scope=='invite')?totalpartnerdata.filter(partner => partner.invite==true):
      totalpartnerdata)*/ reigion_list: [
        ...new Set(totalpartnerdata.map(x => x.reigion))
      ],
      type_list: [...new Set(totalpartnerdata.map(x => x.type))],
      creditsts_list: [...new Set(totalpartnerdata.map(x => x.creditsts))],
      operationsts_list: [...new Set(totalpartnerdata.map(x => x.operationsts))]
    };
  },
  methods: {
    newUser() {
      window.alert("Noop");
    },
    searchOnTable() {
      this.searched = searchByName(this.users, this.search);
    },
    updatetable(scope) {
      if (scope == "all") {
        this.searched = this.users;
      } else if (scope == "existing") {
        this.searched = this.users.filter(partner => partner.existing == true);
      } else if (scope == "warning") {
        this.searched = this.users.filter(
          partner => filter_warning(partner) == true
        );
      } else if (scope == "recommendation") {
        this.searched = this.users.filter(
          partner => partner.recommended == true
        );
      } else if (scope == "invite") {
        this.searched = this.users.filter(partner => partner.invite == true);
      }
    }
  },
  created() {
    this.users =
      this.scope == "existing"
        ? totalpartnerdata.filter(partner => partner.existing == true)
        : this.scope == "warning"
        ? totalpartnerdata.filter(partner => filter_warning(partner) == true)
        : this.scope == "recommnedation"
        ? totalpartnerdata.filter(partner => partner.recommended == true)
        : this.scope == "invite"
        ? totalpartnerdata.filter(partner => partner.invite == true)
        : totalpartnerdata;
    this.searched = this.users;
  }
};
</script>
