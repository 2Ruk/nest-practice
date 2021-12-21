<template>
  <div>
    <b-button @click="paramTest">파람 테스트</b-button>
    <b-button @click="paramTest2">파람 테스트</b-button>
    chart
    {{$route.params}}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {
  },
})
export default class Chart extends Vue {

  constructor() {
    super();
  }

  async created(){
  }
  async paramTest(){
    await this.$router.push({path:'/chart/'+1})
  }

  async paramTest2(){
    await this.$router.push({path:'/chart/'+2})
  }

}
</script>

<style scoped>

</style>
