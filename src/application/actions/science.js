export const LOAD_SCIENCE = '[science] load';
export const LOAD_SCIENCE_SUCCESS = '[science] load success';

export const loadscience = {
    type: LOAD_SCIENCE,
};

export const loadscienceSuccess = science => ({
    type: LOAD_SCIENCE_SUCCESS,
    payload: science,
});