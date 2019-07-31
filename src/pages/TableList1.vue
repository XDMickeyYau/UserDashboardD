<template>
  <div class="content">
    <div class="md-layout">
      <!--<div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">需要注意</h4>
            <p class="category">需要留意</p>
          </md-card-header>
          <md-card-content>
            <total-table :scope="'warning'" table-header-color="orange"></total-table>
          </md-card-content>
        </md-card>
      </div>-->
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">公司总汇</h4>
            <!--<p class="category">它们做了怎么样</p>-->
          </md-card-header>
          <md-card-content>
            <total-table
              :scope="''"
              :show_button="true"
              table-header-color="green"
            ></total-table>
          </md-card-content>
        </md-card>
      </div>

      <!--
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <md-card class="md-card-plain">
          <md-card-header data-background-color="green">
            <h4 class="title">Table on Plain Background</h4>
            <p class="category">Here is a subtitle for this table</p>
          </md-card-header>
          <md-card-content>
            <ordered-table></ordered-table>
          </md-card-content>
        </md-card>
      </div>
      -->
    </div>
  </div>
</template>

<script>
import {
  SimpleTable1,
  OrderedTable,
  WarningTable,
  TotalTable
} from "@/components";

export default {
  components: {
    OrderedTable,
    SimpleTable1,
    WarningTable,
    TotalTable
  }
};
</script>
