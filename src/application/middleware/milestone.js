import { LOAD_MILESTONE, loadmilestoneSuccess } from "../actions/milestone";

const milestoneLoadedFlow = ({ log, api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_MILESTONE) {
        const milestone = await api.milestone.getMilestone();
        dispatch(loadmilestoneSuccess(milestone));
    }
}

const milestone = [
    milestoneLoadedFlow
];

export default milestone