import { ABOUT_US_LOADED, CONTACT_US_LOADED, HOME_LOADED, NEWS_CONTENT_LOADED, NEWS_LOADED, NO_PAGE_LOADED, PRIVACY_STATEMENT_LOADED, SCIENCE_LOADED } from "../actions/ui";
import * as newsActions from '../actions/news';
// import * as milestoneActions from '../actions/milestone';
// import * as missionActions from '../actions/mission';
import * as aboutActions from '../actions/about';
import * as scienceActions from '../actions/science';
import * as contactActions from '../actions/contact';
import * as privacyActions from '../actions/privacy';
import * as homeActions from '../actions/home';

const homeLoadedFlow = ({ log, api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === HOME_LOADED) {
        dispatch(homeActions.loadhome);
        dispatch(newsActions.loadNewsLimit3);
        // dispatch(milestoneActions.loadmilestone);
        // dispatch(missionActions.loadmission);
        // dispatch(aboutActions.loadAboutIntro);
        dispatch(aboutActions.loadAboutAddress);
    } else if (action.type === SCIENCE_LOADED) {
        dispatch(scienceActions.loadscience);
        // dispatch(missionActions.loadmission);
        dispatch(aboutActions.loadAboutAddress);
    } else if (action.type === ABOUT_US_LOADED) {
        dispatch(aboutActions.loadAboutUs);
        dispatch(aboutActions.loadAboutAddress);
    } else if (action.type === NEWS_LOADED) {
        dispatch(newsActions.loadNews(action.payload));
        dispatch(aboutActions.loadAboutAddress);
    } else if (action.type === NEWS_CONTENT_LOADED) {
        dispatch(newsActions.loadNewsDetail(action.payload));
        dispatch(aboutActions.loadAboutAddress);
    } else if (action.type === CONTACT_US_LOADED) {
        dispatch(contactActions.loadcontactUs);
        dispatch(aboutActions.loadAboutAddress);
    } else if (action.type === PRIVACY_STATEMENT_LOADED) {
        dispatch(privacyActions.loadPrivacyStatement);
        dispatch(aboutActions.loadAboutAddress);
    } else if (action.type === NO_PAGE_LOADED) {
        dispatch(aboutActions.loadAboutAddress);
    }
}

const ui = [
    homeLoadedFlow
];

export default ui