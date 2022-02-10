<template>
  <div id="nav">
    <router-link to="/CatPage">Home </router-link> |
    <router-link to="/BoardList">BoardList </router-link> |
    <router-link to="/Survey">Survey </router-link>|
    <router-link to="/chart">Chart </router-link>|
    <!--    <router-link to="/">Login </router-link>-->
  </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";

@Component({
})
export default class TopBar extends Vue{

}
</script>

<style scoped>

</style>
