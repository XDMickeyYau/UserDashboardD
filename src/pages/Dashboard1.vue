<template>
  <div class="content">
    <div class="md-layout">
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"
      >
        <chart-card
          :chart-data="numberPartnerChart.data"
          :chart-options="numberPartnerChart.options"
          :chart-responsive-options="numberPartnerChart.responsiveOptions"
          :chart-type="'Bar'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">伙伴数量</h4>
            <!--<p class="category">
              多少个伙伴
            </p>-->
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              12个月之内
            </div>
          </template>
        </chart-card>
      </div>
      <!--
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dailyPartnerChart.data"
          :chart-options="dailyPartnerChart.options"
          :chart-type="'Line'"
          data-background-color="blue"
        >
          <template slot="content">
            <h4 class="title">Partner</h4>
            <p class="category">
              <span class="text-success"
                ><i class="fas fa-long-arrow-alt-up"></i> 55%
              </span>
              increase in today sales.
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              updated 4 minutes ago
            </div>
          </template>
        </chart-card>
      </div>
      -->
      <!--
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-33"
      >
        <chart-card
          :chart-data="dataCompletedTasksChart.data"
          :chart-options="dataCompletedTasksChart.options"
          :chart-type="'Line'"
          data-background-color="green"
        >
          <template slot="content">
            <h4 class="title">Completed Tasks</h4>
            <p class="category">
              Last Campaign Performance
            </p>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon>access_time</md-icon>
              campaign sent 26 minutes ago
            </div>
          </template>
        </chart-card>
      </div>
      -->
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="green">
          <template slot="header">
            <md-icon>store</md-icon>
          </template>

          <template slot="content">
            <p class="category">伙伴数量</p>
            <h3 class="title">{{ partnersinfo.number }}<small>个</small></h3>
          </template>

          <template slot="footer">
            <!--<div class="stats">
              <md-icon>date_range</md-icon>
              This month
            </div>-->
          </template>
        </stats-card>
      </div>
      <!--
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>content_copy</md-icon>
          </template>

          <template slot="content">
            <p class="category">有风险伙伴</p>
            <h3 class="title">
              {{ partnersinfo.number_risk }}/{{ partnersinfo.number }}
              <small>个</small>
            </h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <a href="#pablo">需要处理</a>
            </div>
          </template>
        </stats-card>
      </div>
      -->
      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="orange">
          <template slot="header">
            <md-icon>info_outline</md-icon>
          </template>

          <template slot="content">
            <p class="category">有风险伙伴</p>
            <h3 class="title">{{ partnersinfo.number_risk }}
              <small>个</small></h3>
          </template>

          <template slot="footer">
            <div class="stats">
              <md-icon class="text-danger">warning</md-icon>
              <router-link to="/table1">需要处理</router-link >
            </div>
          </template>
        </stats-card>
      </div>

      <div
        class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25"
      >
        <stats-card data-background-color="blue">
          <template slot="header">
            <i class="fas fa-thumbs-up"></i>
          </template>

          <template slot="content">
            <p class="category">推荐伙伴</p>
            <h3 class="title">{{ partnersinfo.number_recommended }}
              <small>个</small></h3>
          </template>

          <template slot="footer">
            <!--<div class="stats">
              <md-icon>update</md-icon>
              Just Updated
            </div>-->
          </template>
        </stats-card>
      </div>
      <div class="md-layout-item md-medium-size-50 md-xsmall-size-100 md-size-25">
        <stats-card data-background-color="purple">
          <template slot="header">
            <i class="fas fa-star"></i>
          </template>

          <template slot="content">
            <p class="category">伙伴邀请</p>
            <h3 class="title">{{ partnersinfo.number_invited }}
              <small>个</small></h3>
          </template>

          <template slot="footer">
            <!--<div class="stats">
              <md-icon>update</md-icon>
              Just Updated
            </div>-->
          </template>
        </stats-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="green">
            <h4 class="title">伙伴状况</h4>
            <p class="category">你现在有{{partnersinfo.number}}个伙伴</p>
          </md-card-header>
          <md-card-content>
            <simple-table1 table-header-color="green"></simple-table1>
          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="orange">
            <h4 class="title">需要注意的伙伴</h4>
            <p class="category">有{{partnersinfo.number_risk}}个伙伴需要注意</p>
          </md-card-header>
          <md-card-content>
            <warning-table table-header-color="orange"></warning-table>
          </md-card-content>
        </md-card>
      </div>

      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="blue">
            <h4 class="title">伙伴推荐</h4>
            <p class="category">有{{partnersinfo.number_recommended}}个伙伴推荐</p>
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
          <md-card-header data-background-color="purple">
            <h4 class="title">伙伴邀请</h4>
            <p class="category">有{{partnersinfo.number_invited}}个伙伴推荐</p>
          </md-card-header>
          <md-card-content>
            <invite-table table-header-color="purple"></invite-table>
          </md-card-content>
        </md-card>
      </div>
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <md-card>
          <md-card-header data-background-color="purple">
            <h4 class="title">伙伴邀请</h4>
            <p class="category">有{{partnersinfo.number_invited}}个伙伴推荐</p>
          </md-card-header>
          <md-card-content>
            <total-table  table-header-color="purple"></total-table>
          </md-card-content>
        </md-card>
      </div>
      <!--
      <div
        class="md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-50"
      >
        <nav-tabs-card>
          <template slot="content">
            <span class="md-nav-tabs-title">Tasks:</span>
            <md-tabs class="md-success" md-alignment="left">
              <md-tab id="tab-home" md-label="Bugs" md-icon="bug_report">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-pages" md-label="Website" md-icon="code">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>

              <md-tab id="tab-posts" md-label="server" md-icon="cloud">
                <nav-tabs-table></nav-tabs-table>
              </md-tab>
            </md-tabs>
          </template>
        </nav-tabs-card>
      </div>
      -->
    </div>
  </div>
</template>

<script>
import {
  StatsCard,
  ChartCard,
  NavTabsCard,
  NavTabsTable,
  OrderedTable,
  SimpleTable1,
  WarningTable,
  RecommendationTable,
  InviteTable,
  TotalTable,
  partnerdata,
  partnerrecommnedationdata,
  partnerwarningdata,
  partnerinvitedata,
  totalpartnerdata
} from "@/components";

export default {
  components: {
    StatsCard,
    ChartCard,
    NavTabsCard,
    NavTabsTable,
    OrderedTable,
    SimpleTable1,
    WarningTable,
    RecommendationTable,
    InviteTable,
    TotalTable,
  partnerdata,
  partnerrecommnedationdata,
  partnerwarningdata,
  totalpartnerdata
  },
  data() {
    return {
      partnersinfo: {
        number: partnerdata.length,
        number_risk: partnerwarningdata.length,
        number_recommended: partnerrecommnedationdata.length,
        number_invited: partnerinvitedata.length
      },
      dailyPartnerChart: {
        data: {
          labels: ["M", "T", "W", "T", "F", "S", "S"],
          series: [[12, 17, 7, 17, 23, 18, 38]]
        },
        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 50, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      dataCompletedTasksChart: {
        data: {
          labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
          series: [[230, 750, 450, 300, 280, 240, 200, 190]]
        },

        options: {
          lineSmooth: this.$Chartist.Interpolation.cardinal({
            tension: 0
          }),
          low: 0,
          high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
          chartPadding: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }
      },
      numberPartnerChart: {
        data: {
          labels: [
            "Aug\n18",
            "Sep\n18",
            "Oct\n18",
            "Nov\n18",
            "Dec\n18",
            "Jan\n19",
            "Feb\n19",
            "Mar\n19",
            "Apr\n19",
            "May\n19",
            "Jun\n19",
            "Jul\n19"
          ],
          series: [[3, 3, 4, 3, 4, 3, 4, 5, 5, 5, 5, 5]]
        },
        options: {
          axisX: {
            showGrid: false
          },
          low: 0,
          high: 10,
          chartPadding: {
            top: 0,
            right: 5,
            bottom: 0,
            left: 0
          }
        },
        responsiveOptions: [
          [
            "screen and (max-width: 640px)",
            {
              seriesBarDistance: 5,
              axisX: {
                labelInterpolationFnc: function(value) {
                  return value[0];
                }
              }
            }
          ]
        ]
      }
    };
  }
};
</script>
