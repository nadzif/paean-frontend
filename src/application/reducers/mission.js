import * as actions from '../actions/mission';

const initialState = {
    error: null,
    mission: {
        desc: "",
        list: []
    }
}

const mission = (state = initialState, action) => {
    switch (action.type) {
        case (actions.LOAD_MISSION_SUCCESS):
            return {
                ...state,
                mission: {
                    desc: action.payload.desc,
                    list: action.payload.list
                }, error: null
            };
        default:
            return state;
    }
}

export default mission