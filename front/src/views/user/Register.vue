<template>
  <div class="vh-100 bg-secondary d-flex align-items-center justify-content-center">
    <div class="register-form-defaultSetting register-form-min register-form-max-width">
      <div
          class="bg-white shadow w-100 h-100 p-5"
      >
        <b-row>
          <b-col cols="12" class="mt-set pt-5 pb-4">
            <p class="display-4 m-0">회원가입</p>
          </b-col>
        </b-row>

        <hr class="w-50">
        <!-- 아이디 입력 -->
        <InputUserId :user-prop="userInfo.userId"/>
        <!-- 아이디 입력 -->

        <!-- 비밀번호 입력 -->
        <InputUserPassword :user-prop="userInfo.userPassword"/>
        <!-- 비밀번호 입력 -->

        <!-- 비밀번호 재 입력 -->
        <InputReUserPassword :user-prop="userInfo.userConfirmPassword"/>
        <!-- 비밀번호 재 입력 -->
        <hr class="w-50">


        <b-row
            class="pt-1 mt-4"
            align-v="center">
          <b-col cols="12">
            <b-button size="lg" @click="register" variant="outline-secondary ">회원가입</b-button>
          </b-col>
        </b-row>

        <!-- 비밀번호 재 입력 -->
        <!--        <b-row align-h="center">-->
        <!--          <b-col cols="4">-->
        <!--            <b-input-group>-->
        <!--              <template #prepend>-->
        <!--                <b-input-group-text class="bg-white">-->
        <!--                  <b-icon-lock-fill/>-->
        <!--                </b-input-group-text>-->
        <!--              </template>-->
        <!--              <template #default>-->
        <!--                <b-input type="text" v-model="userInfo.userConfirmPassword" placeholder="비밀번호를 확인해주세요"/>-->
        <!--              </template>-->
        <!--            </b-input-group>-->
        <!--          </b-col>-->
        <!--        </b-row>-->
        <!-- 비밀번호 재 입력 -->


      </div>
    </div>

  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {defaultUserValue, IRegister} from "@/type/user";
import register = defaultUserValue.register;
import InputUserId from "@/components/user/register/InputUserId.vue";
import InputUserPassword from "@/components/user/register/InputUserPassword.vue";
import InputReUserPassword from "@/components/user/register/InputReUserPassword.vue";

@Component({
  components: {InputReUserPassword, InputUserPassword, InputUserId},
})
export default class Register extends Vue {
  private userInfo: IRegister = register();

  constructor() {
    super();
  }

  get getIdState(): boolean | null {
    if (this.userInfo.userId === '') return null;
    //#TODO : 정규식 추가 ( 한글 금지 )
    const isShortId = this.userInfo.userId.length < 4;
    return !isShortId;
  }

  get getIdMessage(): string {
    return '아이디를 4글자 이상 입력하여 주십시오'
  }

  async register(): Promise<void> {


  }

}
</script>

<style scoped>
.register-form-defaultSetting {
  width: 50% !important;
  height: 50% !important;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.register-form-min {
  min-width: 600px !important;
  min-height: 800px !important;
}

.register-form-max-width {
  max-width: 1024px !important;
  max-height: 1000px !important;
}
.mt-set{
  margin-top: 2.3rem !important;
}

</style>
