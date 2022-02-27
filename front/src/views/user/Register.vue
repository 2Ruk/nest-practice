<template>
  <div class="vh-100 bg-secondary d-flex align-items-center justify-content-center">
    <b-form-group class="bg-white shadow register-form-defaultSetting register-form-min register-form-max-width">
      <template #default>

        <!-- 아이디 입력 -->
        <b-row align-h="center">
          <b-col cols="4">
            <b-input-group>
              <template #prepend>
                <b-input-group-text class="bg-white">
                  <b-icon-people-fill/>
                </b-input-group-text>
              </template>
              <template #default>
                <b-input type="text" v-model="userInfo.userId" placeholder="아이디를 입력해주세요"/>
              </template>
            </b-input-group>
          </b-col>
        </b-row>
        <!-- 아이디 입력 -->

        <!-- 비밀번호 입력 -->
        <b-row align-h="center">
          <b-col cols="4">
            <b-input-group>
              <template #prepend>
                <b-input-group-text class="bg-white">
                  <b-icon-lock-fill/>
                </b-input-group-text>
              </template>
              <template #default>
                <b-input type="text" v-model="userInfo.userPassword" placeholder="비밀번호를 입력해주세요"/>
              </template>
            </b-input-group>
          </b-col>
        </b-row>
        <!-- 비밀번호 입력 -->

        <!-- 비밀번호 재 입력 -->
        <b-row align-h="center">
          <b-col cols="4">
            <b-input-group>
              <template #prepend>
                <b-input-group-text class="bg-white">
                  <b-icon-lock-fill/>
                </b-input-group-text>
              </template>
              <template #default>
                <b-input type="text" v-model="userInfo.userConfirmPassword" placeholder="비밀번호를 확인해주세요"/>
              </template>
            </b-input-group>
          </b-col>
        </b-row>
        <!-- 비밀번호 재 입력 -->




      </template>
    </b-form-group>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import {defaultUserValue, IRegister} from "@/type/user";
import register =  defaultUserValue.register;

@Component({
  components: {},
})
export default class Register extends Vue {
  private userInfo: IRegister = register();

  constructor() {
    super();
  }


}
</script>

<style scoped>
.register-form-defaultSetting {
  width: 50% !important;
  height: 50% !important;
  margin: 0 auto;
  padding: 3rem !important;
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


</style>
