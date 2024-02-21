export const LOAD_PRIVACY_STATEMENT = '[PrivacyStatement] load';
export const LOAD_PRIVACY_STATEMENT_SUCCESS = '[PrivacyStatement] load success';

export const loadPrivacyStatement = {
    type: LOAD_PRIVACY_STATEMENT,
};

export const loadPrivacyStatementSuccess = PrivacyStatement => ({
    type: LOAD_PRIVACY_STATEMENT_SUCCESS,
    payload: PrivacyStatement,
});