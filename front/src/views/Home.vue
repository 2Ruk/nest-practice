<template>
  <div class="home">
    <b-jumbotron>
        <p class="h2">
          LIST PAGE
        </p>
    </b-jumbotron>
    <div class="container">
      <b-row class="p-3 mb-2">
        <b-col cols="3">
          <b-input-group>
            <template  #prepend>
              <b-button disabled variant="primary">이름</b-button>
            </template>
            <b-form-input type="text" v-model="cat.name"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="3">
          <b-input-group>
            <template  #prepend>
              <b-button disabled variant="info">
                나이
              </b-button>
            </template>
            <b-form-input type="number"  v-model="cat.age"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="3">
          <b-input-group>
            <template  #prepend>
              <b-button disabled variant="success">품종</b-button>
            </template>
            <b-form-input type="text" v-model="cat.breed"></b-form-input>
          </b-input-group>
        </b-col>
        <b-col cols="3">
          <b-input-group>
            <b-button>제출</b-button>
          </b-input-group>
        </b-col>
      </b-row>
      <b-table-simple>
        <b-thead>
          <b-tr>
            <b-th>NO</b-th>
            <b-th>이름</b-th>
            <b-th>나이</b-th>
            <b-th>품종</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(cat,idx) in catList" :key="`value${cat._id}${idx}`">
            <b-th>{{idx+1}}</b-th>
            <b-th>{{cat.name}}</b-th>
            <b-th>{{cat.age}}</b-th>
            <b-th>{{cat.breed}}</b-th>
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
  breed: string;
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
      name:'',
      age:0,
      breed:'',
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
