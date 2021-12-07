<template>
  <b-modal scrollable  size="xl" id="boardModal">
    <template #modal-header="{ close }">
      <h5>게시판 등록</h5>
    </template>
    <template #default="{ cancel }">
      <b-table-simple bordered fixed>
        <b-tbody class="text-center">
          <b-tr>
            <b-th colspan="3">제목</b-th>
            <b-td colspan="9">
              <b-input type="text"></b-input>
            </b-td>
          </b-tr>
          <b-tr>
            <b-th colspan="3">작성자</b-th>
            <b-td colspan="3">
              <b-input type="text"></b-input>
            </b-td>
          </b-tr>
          <b-tr>
            <b-th colspan="12">내용</b-th>
          </b-tr>
          <b-tr>
            <b-form-textarea>

            </b-form-textarea>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </template>


    <template #modal-footer="{ ok , cancel, hide }">
<!--      <b>작성 완료</b>-->
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="success" @click="writeBoard(ok)">
        작성 완료
      </b-button>
    </template>
  </b-modal>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components:{},
})
export default class Board extends Vue{



  async writeBoard(okBtn:any){
    // console.log(this)
    //backend 처리 ~~

    okBtn();
    // refs
  }
}

</script>
