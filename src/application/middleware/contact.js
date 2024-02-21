import { LOAD_CONTACT_US, loadcontactUsSuccess } from "../actions/contact";

const contactLoadedFlow = ({ log, api }) => ({ dispatch }) => next => async (action) => {
    next(action);

    if (action.type === LOAD_CONTACT_US) {
        const contact = await api.contact.getContact();
        dispatch(loadcontactUsSuccess(contact));
    }
}

const contact = [
    contactLoadedFlow
];

export default contact