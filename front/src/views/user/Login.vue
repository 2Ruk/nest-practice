<template>
  <div class="vh-100 bg-primary d-flex align-items-center justify-content-center">
    <b-form-group class="bg-white h-50 w-50 m-0 p-5 shadow">
      <template #default>
        <!-- 로그인 텍스트 -->
        <b-row class="p-3">
          <b-col cols="12">
            <b-card-title class="m-0">로그인</b-card-title>
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
                    <b-input type="text"></b-input>
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
                    <b-input type="text"></b-input>
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
            <b-button class="p-4 w-100" variant="outline-primary">
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


@Component({
  components: {},
})
export default class Login extends Vue {


  constructor() {
    super();
  }

  async created() {

  }


  async cancel() {

  }

}
</script>

<style scoped>

</style>
