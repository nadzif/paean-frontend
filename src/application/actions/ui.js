export const HOME_LOADED = '[home] page loaded';
export const SCIENCE_LOADED = '[science] page loaded';
export const ABOUT_US_LOADED = '[about us] page loaded';
export const NEWS_LOADED = '[news] page loaded';
export const NEWS_CONTENT_LOADED = '[news content] page loaded';
export const CONTACT_US_LOADED = '[contact us] page loaded';
export const PRIVACY_STATEMENT_LOADED = '[privacy statement] page loaded';
export const NO_PAGE_LOADED = '[no page] page loaded';
export const SET_LOADING_ON = '[ui] set loading on';
export const SET_LOADING_OFF = '[ui] set loading off';

export const homeLoaded = {
    type: HOME_LOADED
};

export const scienceLoaded = {
    type: SCIENCE_LOADED
};

export const aboutUsLoaded = {
    type: ABOUT_US_LOADED
};

export const newsLoaded = news => ({
    type: NEWS_LOADED,
    payload: news,
});

export const newsContentLoaded = news => ({
    type: NEWS_CONTENT_LOADED,
    payload: news,
});

export const contactUsLoaded = {
    type: CONTACT_US_LOADED
};

export const privacyStatementLoaded = {
    type: PRIVACY_STATEMENT_LOADED
};

export const noPageLoaded = {
    type: NO_PAGE_LOADED
};

export const setLoading = isLoading => ({
    type: isLoading ? SET_LOADING_ON : SET_LOADING_OFF,
    payload: isLoading,
});