<template>
  <div>
    <b-container>
      <canvas ref="myChart" width="400" height="400"></canvas>
      <b-button @click="draw">생성</b-button>
    </b-container>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {Chart, ChartConfiguration, registerables} from 'chart.js';

Chart.register(...registerables);

@Component({
  components: {
  },
})
export default class ChartPage extends Vue {
  $refs!: {
    myChart: HTMLCanvasElement
  }
  constructor() {
    super();
  }


  async draw() {
    const ctx = this.$refs.myChart.getContext('2d') as unknown as HTMLCanvasElement;

    const options: ChartConfiguration = {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive:false,
      }
    }
    // new Chart(ctx,options)
    await this.drawChart(ctx,options);

  }

  async drawChart(canvas: HTMLCanvasElement,options: ChartConfiguration){
    const chart = await new Chart(canvas,options)
  }

}
</script>

<style scoped>

</style>
