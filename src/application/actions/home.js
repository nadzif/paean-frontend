export const LOAD_HOME = '[home] load';
export const LOAD_HOME_SUCCESS = '[home] load success';

export const loadhome = {
    type: LOAD_HOME,
};

export const loadhomeSuccess = home => ({
    type: LOAD_HOME_SUCCESS,
    payload: home,
});