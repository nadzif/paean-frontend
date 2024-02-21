import * as actions from '../actions/home';

const initialState = {
    error: null,
    home: {
        sections:[]
    }
}

const home = (state = initialState, action) => {
    switch (action.type) {
        case (actions.LOAD_HOME_SUCCESS):
            // console.log({ ...state, home: action.payload, error: null });
            return { ...state, home: action.payload, error: null };
        default:
            return state;
    }
}

export default home
