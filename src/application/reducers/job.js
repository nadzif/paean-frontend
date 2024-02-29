import * as uiActions from '../actions/job';

const initialState = {
    error: null,
    job: [],
    jobLimit: [],
    detail: {
        id: 0,
        image: "",
        source: "",
        title: "",
        content: "",
        dateTime: ""
    },
}

const job = (state = initialState, action) => {
    switch (action.type) {
        case (uiActions.LOAD_JOB_SUCCESS):
            return { ...state, job: action.payload, error: null };
        case (uiActions.LOAD_JOB_LIMIT_3_SUCCESS):
            return { ...state, jobLimit: action.payload, error: null };
        case (uiActions.LOAD_JOB_DETAIL_SUCCESS):
            return { ...state, detail: action.payload, error: null };
        default:
            return state;
    }
}

export default job