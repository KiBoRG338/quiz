import { QUIZ_RETRY, QUIZ_NEXT_QUESTION, FINISH_QUIZ, QUIZ_SET_STATE, FETCH_QUIZ_SUCCESS, FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR } from "../actions/actionTypes";

const initialState = {
    quizes: [],
    loading: true,
    error: null,
    results: {},
    isFinished: false,
    activeQuestion: 0,
    answerState: null,
    quiz: null
}

export default function quizReducer(state = initialState, action) {

    switch(action.type){
        case FETCH_QUIZES_START:
            return{
                ...state, loading: true
            }
        case FETCH_QUIZES_SUCCESS:
            return{
                ...state, loading: false, quizes: action.quizes
            }
        case FETCH_QUIZES_ERROR:
            return{
                ...state, loading: false, error: action.error
            }
        case FETCH_QUIZ_SUCCESS:
            return{
                ...state, loading: false, quiz: action.quiz
            }
        case QUIZ_SET_STATE:
            return{
                ...state, answerState: action.answerState, results: action.results
            }
        case FINISH_QUIZ: 
            return{
                ...state, inFinished: true
            }
        case QUIZ_NEXT_QUESTION:
            return{
                ...state, answerState: null, activeQuestion: action.number
            }
        case QUIZ_RETRY:
            return{
                ...state, 
                results: {},
                activeQuestion: 0,
                isFinished: false,
                answerState: null       
            }
        default: 
            return state
    }

}