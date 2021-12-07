<template>
  <div class="about">
    <b-jumbotron>
      <h1>접수처</h1>
    </b-jumbotron>
    <b-container>
      <b-row class="p-2">
        <b-col cols="12">
          <h2>문의사항 접수 처</h2>
        </b-col>
      </b-row>
      <b-row class="mt-5">
        <b-col cols="3">
          <b-button @click="openModal">글 등록</b-button>
        </b-col>
        <b-col cols="5">

        </b-col>
        <b-col cols="4">
          <b-input-group>
            <template #prepend>
              <b-button>검색</b-button>
            </template>
            <b-form-input type="text"></b-form-input>
            <template #append>
              <b-button>조회하기</b-button>
            </template>
          </b-input-group>
        </b-col>
      </b-row>

      <b-table-simple  class="mt-2">
        <b-thead>
          <b-tr>
            <b-th width="10%">NO</b-th>
            <b-th width="40%">TITLE</b-th>
            <b-th width="25%">WRITER</b-th>
<!--            <b-th width="20%">BREED</b-th>-->
            <b-th width="25%">WRITE DATE</b-th>
          </b-tr>
        </b-thead>
        <b-tbody v-if="boardList.length">
          <b-tr v-for="(board,idx) in boardList" :key="`boardList-${idx}`">
            <b-td>{{idx}}</b-td>
            <b-td>{{board.title}}</b-td>
            <b-td>{{board.writer}}</b-td>
<!--            <b-td>{{board.breed}}</b-td>-->
            <b-td>{{board.createDate}}</b-td>
          </b-tr>
        </b-tbody>
        <b-tbody v-else>
          <b-tr>
            <b-td colspan="12">
              <p class="h4">표시할 내용이 없습니다.</p>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-container>
    <Board />
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { BOARD_LIST } from "@/type/BOARD";
import Board from "@/views/modal/Board.vue";

@Component({
  components:{Board},
})
export default class BoardList extends Vue{
  boardList?: BOARD_LIST[];

  constructor() {
    super();
    this.boardList = [];
  }
  async openModal(){
    await this.$bvModal.show('boardModal')
  }
  async writeBoard(){
    console.log('a');
  }

}

</script>
