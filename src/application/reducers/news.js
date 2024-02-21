import * as uiActions from '../actions/news';

const initialState = {
    error: null,
    news: [],
    newsLimit: [],
    detail: {
        id: 0,
        image: "",
        source: "",
        title: "",
        content: "",
        dateTime: ""
    },
}

const news = (state = initialState, action) => {
    switch (action.type) {
        case (uiActions.LOAD_NEWS_SUCCESS):
            return { ...state, news: action.payload, error: null };
        case (uiActions.LOAD_NEWS_LIMIT_3_SUCCESS):
            return { ...state, newsLimit: action.payload, error: null };
        case (uiActions.LOAD_NEWS_DETAIL_SUCCESS):
            return { ...state, detail: action.payload, error: null };
        default:
            return state;
    }
}

export default news