import * as uiActions from '../actions/blog';

const initialState = {
    error: null,
    blog: [],
    blogLimit: [],
    detail: {
        id: 0,
        image: "",
        source: "",
        title: "",
        content: "",
        dateTime: ""
    },
}

const blog = (state = initialState, action) => {
    switch (action.type) {
        case (uiActions.LOAD_BLOG_SUCCESS):
            return { ...state, blog: action.payload, error: null };
        case (uiActions.LOAD_BLOG_LIMIT_3_SUCCESS):
            return { ...state, blogLimit: action.payload, error: null };
        case (uiActions.LOAD_BLOG_DETAIL_SUCCESS):
            return { ...state, detail: action.payload, error: null };
        default:
            return state;
    }
}

export default blog