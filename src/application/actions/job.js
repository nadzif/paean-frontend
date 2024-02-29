export const LOAD_JOB = '[job] load';
export const LOAD_JOB_SUCCESS = '[job] load success';
export const LOAD_JOB_LIMIT_3 = '[job limit 3] load';
export const LOAD_JOB_LIMIT_3_SUCCESS = '[job limit 3] load success';
export const LOAD_JOB_DETAIL = '[job detail] load';
export const LOAD_JOB_DETAIL_SUCCESS = '[job detail] load success';

export const loadJob = job => ({
    type: LOAD_JOB,
    payload: job,
});

export const loadJobLimit3 = {
    type: LOAD_JOB_LIMIT_3,
};

export const loadJobDetail = job => ({
    type: LOAD_JOB_DETAIL,
    payload: job,
});

export const loadJobDetailSuccess = job => ({
    type: LOAD_JOB_DETAIL_SUCCESS,
    payload: job,
});

export const loadJobSuccess = job => ({
    type: LOAD_JOB_SUCCESS,
    payload: job,
});

export const loadJobLimit3Success = job => ({
    type: LOAD_JOB_LIMIT_3_SUCCESS,
    payload: job,
});