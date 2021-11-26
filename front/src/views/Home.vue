<template>
  <div class="home">
    <b-jumbotron>
        <p class="h2">
          TEST
        </p>
    </b-jumbotron>
    <div class="container">
      <b-table-simple>
        <b-thead>
          <b-tr>
            <b-th>1</b-th>
            <b-th>2</b-th>
            <b-th>3</b-th>
            <b-th>3</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(cat,idx) in catList" :key="`value${cat._id}${idx}`">
            <b-th>{{idx+1}}</b-th>
            <b-th>{{cat.name}}</b-th>
            <b-th>{{cat.age}}</b-th>
            <b-th>{{cat.bread}}</b-th>
          </b-tr>
        </b-tbody>
      </b-table-simple>
      {{cat}}
      {{catList}}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface CAT_TYPE {
  _id?:string;
  name: string;
  age: number;
  bread: string;
  __v?:number;
}

@Component({
  components: {
  },
})
export default class Home extends Vue {

  cat:CAT_TYPE
  catList:CAT_TYPE[];

  constructor() {
    super();
    this.cat ={
      name:'D',
      age:0,
      bread:'',
    }
    this.catList = [this.cat]
  }

  async created(){

    const {data}:{data:CAT_TYPE[]} = await Vue.axios({
      url: '/cat',
      method: 'GET',
    });
    if(data){
      this.catList = data;
    }
  }

}
</script>
