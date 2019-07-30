<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">推荐公司</h4>
            <p class="category">或许能够帮到你</p>
          </md-card-header>
          <md-card-content>
            <recommendation-table table-header-color="blue"></recommendation-table>
          </md-card-content>
        </md-card>
      </div>
            <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">公司邀请</h4>
            <p class="category">它们想要跟你合作</p>
          </md-card-header>
          <md-card-content>
            <invite-table table-header-color="green"></invite-table>
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
import { RecommendationTable ,InviteTable} from "@/components";

export default {
  components: {
    RecommendationTable,
    InviteTable
  }
};
</script>
