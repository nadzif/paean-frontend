import { LOAD_MISSION, loadmissionSuccess } from "../actions/mission";

const missionLoadedFlow = ({ log, api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_MISSION) {
        const mission = await api.mission.getMission();
        dispatch(loadmissionSuccess(mission));
    }
}

const mission = [
    missionLoadedFlow
];

export default mission