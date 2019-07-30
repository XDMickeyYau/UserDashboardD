<template>
    <md-card>
      <md-card-header :data-background-color="dataBackgroundColor">
        <h4 class="title">{{partnerprofile.name}}</h4>
      </md-card-header>

      <md-card-content>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-100 md-size-33">
                <h4>名称:</h4>
                {{partnerprofile.name}}
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
                <h4>地区:</h4>
                {{partnerprofile.reigion}}
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
                <h4>类型:</h4>
                {{partnerprofile.type}}
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
                <h4>信用评级:</h4>
                {{partnerprofile.creditsts}}
          </div>
          <div class="md-layout-item md-small-size-100 md-size-50">
                <h4>运营状况:</h4>
                {{partnerprofile.operationsts}}
          </div>
          <!--
          <div class="md-layout-item md-small-size-100 md-size-100">
            <md-field>
              <label>Adress</label>
              <md-input v-model="address" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>City</label>
              <md-input v-model="city" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Country</label>
              <md-input v-model="country" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-100 md-size-33">
            <md-field>
              <label>Postal Code</label>
              <md-input v-model="code" type="number"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100">
            <md-field maxlength="5">
              <label>About Me</label>
              <md-textarea v-model="aboutme"></md-textarea>
            </md-field>
          </div>
          <div class="md-layout-item md-size-100 text-right">
            <md-button class="md-raised md-success">Update Profile</md-button>
          </div>
          -->
        </div>
      </md-card-content>
    </md-card>
</template>
<script>

import partnertotaldata from "../../components/Data/totalpartnerdata";

export default {

  name: "partner-profile-card",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    },
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
      id:Number(this.$route.params.id),
      partnerprofile: partnertotaldata.find(x => x.id == this.$route.params.id)
  }}
};
</script>
<style></style>
