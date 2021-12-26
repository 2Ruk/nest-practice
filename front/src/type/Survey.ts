export namespace SurveyType {
    export type questionProp = {
        desc: string,
        description: string,
        answer: string,
    };

    export type optionProp = {
        text: string,
        value: string,
    };

    export type QuestionList  = Partial<questionProp[]>
    export type options = Partial<optionProp[]>;


}

export const surveyContent:SurveyType.QuestionList = [
    {answer: '', desc: '2021년 목표를 설정하였나요?', description: '당신이 설정한 목표를 0~100% 사이로 응답해주세요.'},
    {answer: '', desc: '2021년 목표를 달성하셨나요?',description:'당신이 목표를 달성한 정도를 0~100% 사이로 응답해주세요.'},
    {answer: '', desc: '행복한 2021년 이였나요?',description: '행복의 정도를 0~100% 사이로 응답해주세요'},
    {answer: '', desc: '2022년 계획을 설정하였나요?', description: '당신이 설정한 목표를 0~100% 사이로 응답해주세요.'},
]

export const optionValue: SurveyType.options =  [
    { text: '0%', value: '1' },
    { text: '25%', value: '2' },
    { text: '50%', value: '3' },
    { text: '75%', value: '4' },
    { text: '100%', value: '5' },
];