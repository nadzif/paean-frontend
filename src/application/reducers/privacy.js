import * as actions from '../actions/privacy';

const initialState = {
    error: null,
    privacy: {
        id: 1,
        data: ""
    }
}

const privacy = (state = initialState, action) => {
    switch (action.type) {
        case (actions.LOAD_PRIVACY_STATEMENT_SUCCESS):
            return {
                ...state,
                privacy: {
                    id: action.payload.id,
                    data: action.payload.data
                }, error: null
            };
        default:
            return state;
    }
}

export default privacy