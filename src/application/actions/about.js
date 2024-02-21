export const LOAD_ABOUT_INTRO = '[about intro] load';
export const LOAD_ABOUT_INTRO_SUCCESS = '[about intro] load success';
export const LOAD_ABOUT_ADDRESS = '[about address] load';
export const LOAD_ABOUT_ADDRESS_SUCCESS = '[about address] load success';
export const LOAD_ABOUT_US = '[about us] load';
export const LOAD_ABOUT_US_SUCCESS = '[about us] load success';

export const loadAboutIntro = {
    type: LOAD_ABOUT_INTRO,
};

export const loadAboutAddress = {
    type: LOAD_ABOUT_ADDRESS,
};

export const loadAboutUs = {
    type: LOAD_ABOUT_US,
};

export const loadAboutIntroSuccess = intro => ({
    type: LOAD_ABOUT_INTRO_SUCCESS,
    payload: intro,
});

export const loadAboutAddressSuccess = address => ({
    type: LOAD_ABOUT_ADDRESS_SUCCESS,
    payload: address,
});

export const loadAboutUsSuccess = aboutus => ({
    type: LOAD_ABOUT_US_SUCCESS,
    payload: aboutus,
});