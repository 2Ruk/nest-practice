<template>
  <div class="vh-100 bg-warning d-flex align-items-center justify-content-center">

    <b-form-group class="bg-white h-50 w-50 m-0 p-5 shadow">
      <template #default>
        <!-- 로그인 텍스트 -->
        <b-row class="p-3">
          <b-col cols="12">
            <b-card-title class="m-0" >로그인</b-card-title>
          </b-col>
        </b-row>
        <!-- 로그인 텍스트 -->

        <!-- 아이디 입력  -->
        <b-row class="p-3 justify-content-md-center">
          <b-col cols="6">
            <b-form-group
                label-align="left"
                label-cols="2"
            >
              <template #label>
                <b-form-text>
                  ID
                </b-form-text>
              </template>
              <template #default>
                <b-input-group>
                  <template #default>
                    <b-input type="text" v-model="userInfo.userId" @keyup.enter="focusPw"></b-input>
                  </template>
                </b-input-group>
              </template>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- 아이디 입력  -->

        <!-- 비밀번호 입력 -->
        <b-row class="p-3 justify-content-md-center">
          <b-col cols="6">
            <b-form-group
                label-align="left"
                label-cols="2"
            >
              <template #label>
                <b-form-text>
                  PW
                </b-form-text>
              </template>
              <template #default>
                <b-input-group>
                  <template #default>
                    <b-input type="password" ref="pwInput" @keyup.enter="login" v-model="userInfo.userPw"></b-input>
                  </template>
                </b-input-group>
              </template>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- 비밀번호 입력 -->

        <!-- 로그인 버튼 -->
        <b-row class="p-3 justify-content-md-center">
          <b-col cols="6">
            <b-button class="p-4 w-100" variant="outline-primary" @click="login">
              <p class=" m-0 font-weight-bold">
                L O G I N
              </p>
            </b-button>
          </b-col>
        </b-row>
        <!-- 로그인 버튼 -->

      </template>
    </b-form-group>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {IUser, userInit} from "@/type/user";

@Component({
  components: {},
})
export default class Login extends Vue {
  private userInfo:IUser = userInit();

  $refs!:{
    pwInput:HTMLElement
  }

  constructor() {
    super();
  }



  async created() {
    const isLogin = this.$store.getters.isLogin;
    if (isLogin) this.$router.push('/chart').catch(err => {})
  }

  validate():boolean{
    const idValidate = !!this.userInfo.userId;
    const pwValidate = !!this.userInfo.userPw;

    return !(!idValidate || !pwValidate);
  }

  async login(){

    const isInput = this.validate();

    if(!isInput){
      this.$toast.error('입력하지 않은 부분이 있습니다.');
      return;
    }

    const userInfo = this.userInfo;
    await this.$store.dispatch('login',userInfo)
    await this.$router.push('/chart').catch(err => {})

  }

  async focusPw(){
    this.$refs.pwInput.focus();
  }



  async cancel() {
  }

}
</script>

<style scoped>

</style>
