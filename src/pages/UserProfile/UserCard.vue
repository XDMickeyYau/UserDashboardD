<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h6 class="category text-gray">{{partnerprofile.name}}</h6>
      <h4 class="card-title">{{partnerprofile.reigion}}</h4>
      <p class="card-description">
        {{partnerprofile.desciption}}
      </p>
      <md-button class="md-round" v-bind:class="(partnerprofile.recommended)?'md-info':'md-success'" v-if="!partnerprofile.existing && !partnerprofile.invite">邀请</md-button>
      <md-button class="md-round md-primary" v-if="!partnerprofile.existing && partnerprofile.invite">接受邀请</md-button>
    </md-card-content>
  </md-card>
</template>
<script>
import partnertotaldata from "../../components/Data/totalpartnerdata";
export default {
  name: "user-card",
  props: {
    cardUserImage: {
      type: String,
      default: require("@/assets/img/faces/marc.jpg")
    }
  },
  data() {
    return {
      id:Number(this.$route.params.id),
      partnerprofile: partnertotaldata.find(x => x.id == this.$route.params.id)
    };
  }
};
</script>
<style></style>
