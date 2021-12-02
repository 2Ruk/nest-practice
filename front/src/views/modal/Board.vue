<template>
  <b-modal id="boardModal">
    <template #modal-header="{ close }">
      <!-- Emulate built in modal header close button action -->
<!--      <b-button size="sm" variant="outline-danger" @click="close()">-->
<!--        Close Modal-->
<!--      </b-button>-->
      <h5>게시판 등록</h5>
    </template>

    <template #default="{ hide }">
      <p>Modal Body with button</p>
<!--      <b-button @click="hide()">Hide Modal</b-button>-->
    </template>

    <template #modal-footer="{ ok , cancel, hide }">
      <b>Custom Footer</b>
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="success" @click="writeBoard(ok)">
        OK
      </b-button>
<!--      <b-button size="sm" variant="danger" @click="cancel()">-->
<!--        Cancel-->
<!--      </b-button>-->

      <!-- Button with custom close trigger value -->
<!--      <b-button size="sm" variant="outline-secondary" @click="hide('forget')">-->
<!--        Forget it-->
<!--      </b-button>-->

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
