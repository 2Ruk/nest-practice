<template>
  <div>
    <b-jumbotron bg-variant="light">
      <template #header>
        <p>REPORT PAGE</p>
      </template>
      <template #lead>
        <b-container class="border p-5">
          <b-row>
            <b-col cols="7">
              <b-table-simple fixed bordered small>
                <b-thead>
                  <b-tr>
                    <b-th width="15%">문항명</b-th>
                    <b-th width="60%">상세</b-th>
                    <b-th width="25%">응답 평균치</b-th>
                  </b-tr>
                </b-thead>
                <b-tbody v-if="!isPending">
                  <b-tr v-for="(val,idx) in tableData" :key="val.description+idx">
                    <b-td>{{val.qName}}</b-td>
                    <b-td>{{val.description}}</b-td>
                    <b-td>{{val.questionAvg}}%</b-td>
                  </b-tr>
                </b-tbody>
                <b-tbody v-else>
                  <b-tr v-for="i in 4" :key="`skeleton_${i}`">
                    <b-td><b-skeleton/></b-td>
                    <b-td><b-skeleton/></b-td>
                    <b-td><b-skeleton/></b-td>
                  </b-tr>
                </b-tbody>
              </b-table-simple>
            </b-col>
            <b-col cols="5">
              <canvas v-if="!isPending" class="text-center" ref="myChart" width="400" height="400"></canvas>
              <b-skeleton-img v-else width="400" height="400"></b-skeleton-img>
            </b-col>
          </b-row>
        </b-container>
      </template>
    </b-jumbotron>
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
  chartData: number[];
  chartLabel: string[];
  chartQuestionDescription: string[];
  tableData: {qName:string, description:string, questionAvg:number}[];
  isPending: boolean;

  constructor() {
    super();
    this.chartData = [];
    this.chartLabel = [];
    this.chartQuestionDescription = ['2021년 목표를 설정하였나요?','2021년 목표를 달성하셨나요?','행복한 2021년 이였나요?','2022년 계획을 설정하였나요?'];;
    this.tableData = [];
    this.isPending = true;
  }
  async created(){
    await this.getChartData();
    await this.draw();
    await this.tableDataSet();
  }
  async tableDataSet(){
    this.chartLabel.forEach((value,idx)=>{
      const chartData:{qName:string, description:string, questionAvg:number} = {
        qName: value,
        description: this.chartQuestionDescription[idx],
        questionAvg: +this.chartData[idx].toFixed(2),
      }
      this.tableData.push(chartData)
    })
  }
  async getChartData(){
    const { data } = await Vue.axios({
      url: 'question',
      method: 'get',
    });
    const {_id, ...chartData} = data.chartData;
    for(const questionAVG of Object.keys(chartData)){
      this.chartLabel.push(questionAVG);
      this.chartData.push(chartData[questionAVG]);
    }
    this.isPending = false;
  }

  async draw() {
    const ctx = this.$refs.myChart.getContext('2d') as unknown as HTMLCanvasElement;

    const options: ChartConfiguration = {
      type: 'bar',
      data: {
        labels:this.chartLabel,
        datasets: [{
          label: '# of Votes',
          data: this.chartData,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
        }]
      },
      options: {
        responsive:false,
      }
    }
    await this.drawChart(ctx,options);
  }

  async drawChart(canvas: HTMLCanvasElement,options: ChartConfiguration){
    const chart = await new Chart(canvas,options)
  }

}
</script>

<style scoped>

</style>
