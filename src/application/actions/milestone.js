export const LOAD_MILESTONE = '[milestone] load';
export const LOAD_MILESTONE_SUCCESS = '[milestone] load success';

export const loadmilestone = {
    type: LOAD_MILESTONE,
};

export const loadmilestoneSuccess = milestone => ({
    type: LOAD_MILESTONE_SUCCESS,
    payload: milestone,
});