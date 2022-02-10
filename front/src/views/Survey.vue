<template>
  <div>
    <TopBar/>
    <b-container>
      <b-jumbotron class="text-left">
        <h4>안녕하십니까, 21년 연말 만족도 조사를 실시하겠습니다.</h4>
        <h4>순서대로 응답해주신다면 감사하겠습니다.</h4>
      </b-jumbotron>
      <b-table-simple fixed>
        <b-thead>
          <b-tr class="DESC text-left">
          </b-tr>
        </b-thead>
        <b-tbody class="text-left">
          <b-tr class="DESC text-left" v-for="(question,idx) in questions" :key="idx">
            <b-td colspan="12">
              <b-row>
                <b-col cols="12" class="p-5 question-desc">
                  <p class="h5">
                    {{question.qName }}. {{question.desc}}
                  </p>
                </b-col>
              </b-row>
              <b-row>
                <b-col cols="12" class="p-3">
                  <b-form-group v-slot="{ ariaDescribedby }">
                    <b-form-radio-group
                        v-model="question.answer"
                        :options="optionsComplete"
                        :aria-describedby="ariaDescribedby"
                        :name="'radio-inline'+idx"
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-td>
          </b-tr>
          <b-tr class="text-center">
            <b-td colspan="12">
              <b-button-group>
                <b-button @click="submit" variant="info">제출</b-button>
                <b-button @click="cancel" variant="danger">취소</b-button>
              </b-button-group>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </b-container>
  </div>
</template>`

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {optionValue, surveyContent, SurveyType} from "@/type/Survey";
import TopBar from "@/components/common/TopBar.vue";

@Component({
  components: {
    TopBar
  },
})
export default class Survey extends Vue {
  questions: SurveyType.QuestionList;
  optionsComplete: SurveyType.options;

  constructor() {
    super();
    this.optionsComplete = [
      ...optionValue
    ];
    this.questions = [...surveyContent]
  }

  async created(){

  }

  async submit(){
    const isCheck =  await this.validate();
    if(isCheck){
      const sendData = {
        Question: this.questions
      }

      const { data } = await Vue.axios({
        url: '/question',
        method: 'POST',
        data: sendData
      });

      console.log(data);
    }else{
      Vue.$toast.open({
        message: '아직 체크를 덜 하였습니다.',
        type: 'error',
        duration: 5000
      });
    }
  }

  async cancel(){

  }


  allCheck(){
    return this.questions.filter(e => e?.answer).length===this.questions.length
  };

  async validate(){
    return this.allCheck();
  };
}
</script>

<style scoped>
.question-desc{
  background-color: #e9ecef;
}
</style>
