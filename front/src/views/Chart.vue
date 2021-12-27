<template>
  <div>
    <b-container>
      <canvas id="myChart" ref="myChart" width="400" height="400"></canvas>
      <b-button @click="create">생성</b-button>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';


@Component({
  components: {
  },
})
export default class ChartPage extends Vue {
  $refs!:{
    myChart: HTMLCanvasElement
  }


  constructor() {
    super();


  }


  create() {
    // const ctx = this.$refs.myChart.getContext('2d') as unknown as CanvasRenderingContext2D;
    // const options = {
    //   type: 'bar',
    //   data: {
    //     labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    //     datasets: [{
    //       label: '# of Votes',
    //       data: [12, 19, 3, 5, 2, 3],
    //       backgroundColor: [
    //         'rgba(255, 99, 132, 0.2)',
    //         'rgba(54, 162, 235, 0.2)',
    //         'rgba(255, 206, 86, 0.2)',
    //         'rgba(75, 192, 192, 0.2)',
    //         'rgba(153, 102, 255, 0.2)',
    //         'rgba(255, 159, 64, 0.2)'
    //       ],
    //       borderColor: [
    //         'rgba(255, 99, 132, 1)',
    //         'rgba(54, 162, 235, 1)',
    //         'rgba(255, 206, 86, 1)',
    //         'rgba(75, 192, 192, 1)',
    //         'rgba(153, 102, 255, 1)',
    //         'rgba(255, 159, 64, 1)'
    //       ],
    //       borderWidth: 1
    //     }]
    //   },
    //   options: {
    //     scales: {
    //       yAxes: [{
    //         ticks: {
    //           beginAtZero: true
    //         }
    //       }]
    //     }
    //   }
    // }
    // new Chart(ctx,options)

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
