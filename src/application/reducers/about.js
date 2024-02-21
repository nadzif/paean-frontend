import * as actions from '../actions/about';

const initialState = {
    error: null,
    intro: {},
    address: {},
    aboutUs: {
        sections:[]
        // header: {
        //     title: "",
        //     subtitle: "",
        //     youtubeLink: "https://www.youtube.com/watch?v=OOpYY3999GY"
        // },
        // leadership: [],
        // medical: [],
        // european: []
    }
}

const about = (state = initialState, action) => {
    switch (action.type) {
        case (actions.LOAD_ABOUT_INTRO_SUCCESS):
            return { ...state, intro: action.payload, error: null };
        case (actions.LOAD_ABOUT_ADDRESS_SUCCESS):
            return { ...state, address: action.payload, error: null };
        case (actions.LOAD_ABOUT_US_SUCCESS):
            return { ...state, aboutUs: action.payload, error: null };
        default:
            return state;
    }
}

export default about