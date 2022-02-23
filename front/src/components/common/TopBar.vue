<template>
  <div id="nav">
    <b-row>
      <b-col cols="8">
        <router-link to="/CatPage">Home </router-link> |
        <router-link to="/BoardList">BoardList </router-link> |
        <router-link to="/Survey">Survey </router-link>|
        <router-link to="/chart">Chart </router-link>|
      </b-col>
      <b-col cols="4">
        <b-input-group class="justify-content-end">
          <template #prepend>
            <b-input-group-text>{{ userName }}</b-input-group-text>
          </template>
          <template #default>
            <b-button @click="logout">로그아웃</b-button>
          </template>
        </b-input-group>

      </b-col>
    </b-row>
    <!--    <router-link to="/">Login </router-link>-->
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
})
export default class TopBar extends Vue{
  private userName: string = this.$store.getters.userName

  logout(){
    this.$store.dispatch('logout')
    this.$router.push('/')
  }
}
</script>

<style scoped>

</style>
