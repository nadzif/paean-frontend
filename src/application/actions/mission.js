export const LOAD_MISSION = '[mission] load';
export const LOAD_MISSION_SUCCESS = '[mission] load success';

export const loadmission = {
    type: LOAD_MISSION,
};

export const loadmissionSuccess = mission => ({
    type: LOAD_MISSION_SUCCESS,
    payload: mission,
});