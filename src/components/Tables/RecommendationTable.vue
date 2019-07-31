<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="名称"
          ><router-link
            v-bind:to="
              '/partner-profile/' + item.id + '/partnerrecommendationdata'
            "
            >{{ item.name }}</router-link
          ></md-table-cell
        >
        <md-table-cell md-label="地区">{{ item.reigion }}</md-table-cell>
        <md-table-cell md-label="类型">{{ item.type }}</md-table-cell>
        <md-table-cell
          md-label="信用等级"
          v-bind:style="{
            color:
              item.creditsts == '低'
                ? 'red'
                : item.creditsts == '中'
                ? 'orange'
                : 'green'
          }"
          >{{ item.creditsts }}</md-table-cell
        >
        <md-table-cell
          md-label="运营情况"
          v-bind:style="{
            color: item.operationsts == '有潜在风险' ? 'red' : 'green'
          }"
          >{{ item.operationsts }}</md-table-cell
        >
        <md-table-cell md-label="更多">
          <md-icon>store</md-icon>
        </md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>

<script>
import partnerrecommnedationdata from "../Data/partnerrecommendationdata.js";

export default {
  name: "recommendation-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      selected: [],
      users: partnerrecommnedationdata
    };
  }
};
</script>
