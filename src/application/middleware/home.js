import { LOAD_HOME, loadhomeSuccess } from "../actions/home";

const homeLoadedFlow = ({ log, api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_HOME) {
        const home = await api.home.getHome();
        dispatch(loadhomeSuccess(home));
    }
}

const home = [
    homeLoadedFlow
];

export default home