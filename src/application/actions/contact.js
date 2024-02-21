export const LOAD_CONTACT_US = '[contact us] load';
export const LOAD_CONTACT_US_SUCCESS = '[contact us] load success';

export const loadcontactUs = {
    type: LOAD_CONTACT_US,
};

export const loadcontactUsSuccess = contact => ({
    type: LOAD_CONTACT_US_SUCCESS,
    payload: contact,
});