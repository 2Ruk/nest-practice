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
            <b-button @click="insertCat">등록</b-button>
          </b-input-group>
        </b-col>
      </b-row>
      <b-table-simple fixed>
        <b-thead>
          <b-tr>
            <b-th>NO</b-th>
            <b-th>이름</b-th>
            <b-th>나이</b-th>
            <b-th>품종</b-th>
            <b-th>other</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(cat,idx) in catList" :key="`value${cat._id}${idx}`">
            <b-th>
              {{idx+1}}
            </b-th>
            <b-th>
              <b-form-input type="text"  v-model="cat.name"/>
            </b-th>
            <b-th>
              <b-form-input type="text"  v-model="cat.age"/>
            </b-th>
            <b-th>
              <b-form-input type="text"  v-model="cat.breed"/>
            </b-th>
            <b-th class="d-flex justify-content-center">
              <b-button @click="updateCat(cat,$event.target)">수정</b-button>&nbsp;
              <b-button @click="deleteCat(cat)">삭제</b-button>
            </b-th>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {CAT_TYPE , CAT_BACKEND} from "@/type/CAT";

@Component({
  components: {
  },
})
export default class CatPage extends Vue {

  cat:CAT_TYPE
  catList?:CAT_TYPE[];

  constructor() {
    super();
    this.cat ={
      name:'',
      age:0,
      breed:'',
    }
    this.catList = []
  }

  async created(){
    await this.getCatList();
  }

  async getCatList(){

    const {data}:{data:CAT_TYPE[]} = await Vue.axios({
      url: CAT_BACKEND.GET_LIST,
      method: 'GET',
    });
    this.catList = [];
    if(data){
      this.catList = data;
    }else{
      this.catList = [this.cat]
    }

  }
  async insertCat(){
    const sendData = this.cat;
    const { data } = await Vue.axios({
      url: CAT_BACKEND.INSERT_CAT,
      method: 'POST',
      data:sendData
    });
    this.cat ={
      name:'',
      age:0,
      breed:'',
    }
    await this.getCatList();
  }

  async updateCat(cat:CAT_TYPE,eve:any){
    console.log(cat)
    console.log(eve.parentNode.previousSibling);
  }

  async deleteCat(cat:CAT_TYPE){
    const sendData = {
      ...cat
    };

    const { data } = await Vue.axios({
      url: CAT_BACKEND.DELETE_CAT,
      method: 'delete',
      data:sendData
    });
    console.log(data);
    await this.getCatList();
  }


}
</script>
