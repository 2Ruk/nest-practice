<template>
  <b-row align-h="center mt-1">
    <b-col cols="6">
      <b-form-group
          :state="getState"
          :invalid-feedback="getMessage"
          :label="label"
          label-cols="2"
          label-size="sm"
          label-align="left"
          :label-for="inputId"
          description="비밀번호를 입력해주십시오(4글자 이상)">
        <template #default>
          <b-input size="sm" id='user-id' type="text" v-model="userProp" placeholder="비밀번호를 입력해주세요"/>
        </template>
      </b-form-group>
    </b-col>
  </b-row>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import {defaultUserValue, IRegister} from "@/type/user";
import register = defaultUserValue.register;

@Component({
  components: {},
})
export default class InputUserPassword extends Vue {
  @Prop() userProp: string = '';
  private label: string = 'PW'
  private inputId: string = 'userPw'
  constructor() {
    super();
  }

  get getState(): boolean | null {
    if (this.userProp === '') return null;
    //#TODO : 정규식 추가 ( 한글 금지 )
    const isShortId = this.userProp.length < 4;
    return !isShortId;
  }

  get getMessage(): string {
    return '아이디를 4글자 이상 입력하여 주십시오'
  }


}
</script>

<style scoped>
</style>
