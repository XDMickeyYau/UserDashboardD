<template>
  <div class="content">
    <div class="md-layout">
      <div class="md-layout-item md-medium-size-100 md-size-66">
        <partner-profile-card data-background-color="green">
        </partner-profile-card>
      </div>
      <div class="md-layout-item md-medium-size-100 md-size-33">
        <user-card> </user-card>
      </div>
    </div>
  </div>
</template>

<script>
import { EditProfileForm, UserCard, PartnerProfileCard } from "@/pages";
/*import partnerdata from "../components/Data/partnerdata"
console.log(this);
var id=0;
var partnerprofile=partnerdata[id];
console.log(partnerprofile);*/

export default {
  /*    created() {
    console.log(this.$route.params.id);
    id= Number(this.$route.params.id);
    partnerprofile=partnerdata[id];
  },*/
  components: {
    EditProfileForm,
    UserCard,
    PartnerProfileCard
  },
  data() {
    return {
      user: {
        //partnerprofile:partnerprofile
      }
    };
  }
  //test
  /*beforeRouteUpdate(to, from, next) {
    console.log(`Updating slug from ${from} to ${to}`)
    next() //make sure you always call next()
  }*/
};
</script>
