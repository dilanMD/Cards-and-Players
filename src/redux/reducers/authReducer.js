import { AUTH_TYPE } from '../types/authTypes';

const INITIAL_STATE = {
    isLoading: false,
    isLoggedIn: false,
    user: null,
    error: null
};

const authReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch (type) {
        case AUTH_TYPE.REGISTER_REQUEST:
            return { ...state, isLoading: true }
        case AUTH_TYPE.REGISTER_SUCCESS:
            return { ...state, isLoading: false, isLoggedIn: true, user: payload }
        case AUTH_TYPE.REGISTER_FAILED:
            return { ...state, isLoading: false, error: payload }
        case AUTH_TYPE.LOGIN_REQUEST:
            return { ...state, isLoading: true }
        case AUTH_TYPE.LOGIN_SUCCESS:
            return { ...state, isLoading: false, isLoggedIn: true, user: payload }
        case AUTH_TYPE.LOGIN_FAILED:
            return { ...state, isLoading: false, error: payload }
        default:
            return state;
    };
};

export default authReducer;