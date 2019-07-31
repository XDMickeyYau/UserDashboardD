<template>
  <md-card>
    <md-card-header
      :data-background-color="
        partnerprofile.invite
          ? 'purple'
          : partnerprofile.recommended
          ? 'blue'
          : !partnerprofile.existing
          ? 'grey'
          : filter_warning(partnerprofile)
          ? 'orange'
          : 'green'
      "
      v-on:acceptinvite="acceptinvite"
    >
      <h4 class="title">{{ partnerprofile.公司中文全称 }}</h4>
      <h4>{{ partnerprofile.公司英文全称 }}</h4>
    </md-card-header>

    <md-card-content>
      <md-table
        :table-header-color="
          partnerprofile.invite
            ? 'purple'
            : partnerprofile.recommended
            ? 'blue'
            : filter_warning(partnerprofile)
            ? 'orange'
            : 'green'
        "
      >
        <md-table-row
          v-for="(value, name) in partnerprofile"
          v-bind:key="name"
          class="md-layout"
        >
          <md-table-cell
            class="md-layout-item md-size-30"
            v-if="
              name != 'existing' &&
                name != 'recommended' &&
                name != 'invite' &&
                name != 'id'
            "
            >{{ name }}</md-table-cell
          >
          <md-table-cell
            class="md-layout-item md-size-70"
            v-if="
              name != 'existing' &&
                name != 'recommended' &&
                name != 'invite' &&
                name != 'id'
            "
            >{{ value }}</md-table-cell
          >
        </md-table-row>
      </md-table>
    </md-card-content>
  </md-card>
</template>
<script>
import partnertotaldata from "../../components/Data/totalpartnerdata";
function filter_warning(partner) {
  return (
    partner.existing == true &&
    (partner.信用等级 == "低" || partner.信用等级 == "中")
  );
}
export default {
  name: "partner-profile-card",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
    /* methods: {
    updateMessage: function () {
      partnerprofile=partnerdata[id];
      console.log(this.$el.textContent) // => 'not updated'
      this.$nextTick(function () {
        console.log(this.$el.textContent) // => 'updated'
      })
    }},*/
  },

  data() {
    return {
      id: Number(this.$route.params.id),
      partnerprofile: partnertotaldata.find(x => x.id == this.$route.params.id)
    };
  },
  methods: {
    filter_warning: function(partner) {
      return (
        partner.existing == true &&
        (partner.信用等级 == "低" || partner.信用等级 == "中")
      );
    },
    acceptinvite: function() {
      partner.existing = true;
    }
  }
};
</script>
<style></style>
