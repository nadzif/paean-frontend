import { LOAD_SCIENCE, loadscienceSuccess } from "../actions/science";

const scienceLoadedFlow = ({ log, api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_SCIENCE) {
        const science = await api.science.getScience();
        dispatch(loadscienceSuccess(science));
    }
}

const science = [
    scienceLoadedFlow
];

export default science