import { LOAD_ABOUT_ADDRESS, LOAD_ABOUT_INTRO, LOAD_ABOUT_US, loadAboutAddressSuccess, loadAboutIntroSuccess, loadAboutUsSuccess } from "../actions/about";

const aboutLoadedFlow = ({ log, api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_ABOUT_INTRO) {
        const intro = await api.about.getIntro();
        dispatch(loadAboutIntroSuccess(intro));
    } else if (action.type === LOAD_ABOUT_ADDRESS) {
        const address = await api.about.getAddress();
        dispatch(loadAboutAddressSuccess(address));
    } else if (action.type === LOAD_ABOUT_US) {
        // setTimeout(async () => {
        //     const aboutUs = await api.about.getAboutUs();
        //     dispatch(loadAboutUsSuccess(aboutUs));
        // }, 9000);
        const aboutUs = await api.about.getAboutUs();
        dispatch(loadAboutUsSuccess(aboutUs));
    }
}

const about = [
    aboutLoadedFlow
];

export default about