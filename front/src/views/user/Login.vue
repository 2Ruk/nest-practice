<template>
  <div class="vh-100 bg-warning d-flex align-items-center justify-content-center">

    <b-form-group class="bg-white shadow login-form-min-width login-form-defaultSetting login-form-max-width">
      <template #default>
        <!-- 로그인 텍스트 -->
        <b-row class="p-3">
          <b-col cols="12">
            <b-card-title class="m-0">로그인</b-card-title>
          </b-col>
        </b-row>
        <!-- 로그인 텍스트 -->

        <!-- 아이디 입력  -->
        <b-row class="p-3 justify-content-md-center " align-h="center">
          <b-col cols="8">
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
        <b-row class="p-3 justify-content-md-center" align-h="center">
          <b-col cols="8">
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
                    <b-input type="password" ref="pwInput" @keyup.enter="login" v-model="userInfo.userPassword"></b-input>
                  </template>
                </b-input-group>
              </template>
            </b-form-group>
          </b-col>
        </b-row>
        <!-- 비밀번호 입력 -->

        <!-- 로그인 버튼 -->
        <b-row class="p-3 justify-content-center" align-h="center">
          <b-col cols="8">
            <b-button class="p-4 w-100" variant="outline-primary" @click="login">
              <p class=" m-0 font-weight-bold">
                L O G I N
              </p>
            </b-button>
          </b-col>
        </b-row>
        <!-- 로그인 버튼 -->

        <!-- 회원가인  -->
        <b-row class="p-3 justify-content-center" align-h="center">
          <b-col cols="8">
            <b-card-sub-title class="text-left text-secondary font-weight-light">
              <u>
                가입이 필요하신가요?<b-link href="register">회원가입</b-link>
              </u>
            </b-card-sub-title>
          </b-col>
        </b-row>
        <!-- 회원가입 -->

      </template>
    </b-form-group>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {defaultUserValue, IUser} from "@/type/user";
import user = defaultUserValue.user;

@Component({
  components: {},
})
export default class Login extends Vue {
  private userInfo: IUser = user();

  $refs!: {
    pwInput: HTMLElement
  }

  constructor() {
    super();
  }

  async created() {
    const isLogin = this.$store.getters.isLogin;
    if (isLogin) this.$router.push('/chart').catch(err => {
    })
  }

  validate(): boolean {
    const idValidate = !!this.userInfo.userId;
    const pwValidate = !!this.userInfo.userPassword;

    return !(!idValidate || !pwValidate);
  }

  async login() {

    const isInput = this.validate();

    if (!isInput) {
      this.$toast.error('입력하지 않은 부분이 있습니다.');
      return;
    }

    const userInfo = this.userInfo;
    await this.$store.dispatch('login', userInfo)
    await this.$router.push('/chart').catch(err => {
    })

  }

  async focusPw() {
    this.$refs.pwInput.focus();
  }


  async cancel() {
  }

}
</script>

<style scoped>
.login-form-defaultSetting {
  width: 50% !important;
  height: 50% !important;
  margin: 0 auto;
  padding: 3rem !important;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.login-form-min-width {
  min-width: 600px !important;
  min-height: 432px !important;
}

.login-form-max-width {
  max-width: 1024px !important;
  max-height: 600px !important;
}


</style>
