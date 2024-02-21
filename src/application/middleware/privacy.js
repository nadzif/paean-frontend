import { LOAD_PRIVACY_STATEMENT, loadPrivacyStatementSuccess } from "../actions/privacy";


const privacyLoadedFlow = ({ log, api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_PRIVACY_STATEMENT) {
        const privacy = await api.privacy.getPrivacy();
        dispatch(loadPrivacyStatementSuccess(privacy));
    }
}

const privacy = [
    privacyLoadedFlow
];

export default privacy