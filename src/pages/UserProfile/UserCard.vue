<template>
  <md-card class="md-card-profile">
    <div class="md-card-avatar">
      <img class="img" :src="cardUserImage" />
    </div>

    <md-card-content>
      <h3 class="card-title">{{partnerprofile.公司中文简称}}</h3>
      <h4 class="category text-gray">{{partnerprofile.行业名称}}</h4>
      <p class="card-description">
        {{partnerprofile.主营业务}}
      </p>
      <h3 class="title" v-bind:style="{ color:((partnerprofile.信用等级=='低')?'red':(partnerprofile.信用等级=='中')?'orange':'green')}">{{partnerprofile.信用得分}}
          <small>分</small></h3>
      <h4 class="category" v-bind:style="{ color:((partnerprofile.信用等级=='低')?'red':(partnerprofile.信用等级=='中')?'orange':'green')}">信用等级{{partnerprofile.信用等级}}</h4>
      <md-button @click="notifyVue('invite')" class="md-round" v-bind:class="(partnerprofile.recommended)?'md-info':(partnerprofile.信用等级=='低'||partnerprofile.信用等级=='中')?'md-warning':'md-success'" v-if="!partnerprofile.existing && !partnerprofile.invite">邀请</md-button>
      <md-button @click="notifyVue('accept')" class="md-round md-primary" v-if="!partnerprofile.existing && partnerprofile.invite">接受邀请</md-button>
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
  },
    methods: {
    notifyVue(type) {
      if (type=='accept')this.partnerprofile.existing=true;
      this.$notify({
        message:
          (type=='invite')?"已发出邀请":"已接受邀请",
        icon: (type=='invite')?"add_alert":"thumb_up",
        horizontalAlign: 'left',
        verticalAlign: 'top',
        type: 'success'
      });
    }
  },
};
</script>
<style></style>
