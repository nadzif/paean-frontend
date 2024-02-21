import * as actions from '../actions/milestone';

const initialState = {
    error: null,
    milestone: []
}

const milestone = (state = initialState, action) => {
    switch (action.type) {
        case (actions.LOAD_MILESTONE_SUCCESS):
            return { ...state, milestone: action.payload, error: null };
        default:
            return state;
    }
}

export default milestone