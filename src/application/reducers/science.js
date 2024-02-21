import * as actions from '../actions/science';

const initialState = {
    error: null,
    science: {
        sections:[]
    }
}

const science = (state = initialState, action) => {
    switch (action.type) {
        case (actions.LOAD_SCIENCE_SUCCESS):
            return { ...state, science: action.payload, error: null };
        default:
            return state;
    }
}

export default science