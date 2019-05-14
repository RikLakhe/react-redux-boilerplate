import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

// import httpErrorsReducer from './httpErrorsReducer';
// import passwordPoliciesReducer from './passwordPoliciesReducer';
// import countriesReducer from './countriesReducer';
// import customersReducer from './customersReducer';
// import partnerCountriesReducer from './partnerCountriesReducer';

const appReducer = history =>
    combineReducers({
        router: connectRouter(history),
    });

const rootReducer = (state, action) => {
    if (action === 'LOG_OUT_SUCCESS') {
        state = undefined;
    }
    return appReducer(state, action);
};

export default rootReducer;
