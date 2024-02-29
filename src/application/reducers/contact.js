import * as actions from '../actions/contact';

const initialState = {
    error: null,
    contact: {
        sections: []
    }
}

const contact = (state = initialState, action) => {
    switch (action.type) {
        case (actions.LOAD_CONTACT_US_SUCCESS):
            return {...state, contact: action.payload, error: null};
        default:
            return state;
    }
}

export default contact