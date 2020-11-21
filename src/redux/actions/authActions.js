import { firebaseRegister, firebaseLogin, firebaseSignout } from "../../helpers/firebase/FirebaseAuth";
import { AUTH_TYPE } from '../types/authTypes';

/**************
 * REGISTRATION
 **************/

const registerRequest = () => ({ type: AUTH_TYPE.REGISTER_REQUEST });
const registerSuccess = (user) => ({ type: AUTH_TYPE.REGISTER_SUCCESS, payload: user });
const registerFailed = (error) => ({ type: AUTH_TYPE.REGISTER_FAILED, payload: error });

export const register = (email, password) => (dispatch) => {
    dispatch(registerRequest());
    firebaseRegister(email, password)
        .then((res) => {
            dispatch(registerSuccess(res));
        })
        .catch((e) => {
            dispatch(registerFailed(e));
        });
}

/********
 * LOGIN
 ********/

const loginRequest = () => ({ type: AUTH_TYPE.LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: AUTH_TYPE.LOGIN_SUCCESS, payload: user });
const loginFailed = (error) => ({ type: AUTH_TYPE.LOGIN_FAILED, payload: error });

export const login = (email, password) => (dispatch) => {
    dispatch(loginRequest());
    firebaseLogin(email, password)
        .then((res) => {
            dispatch(loginSuccess(res));
        })
        .catch((e) => {
            dispatch(loginFailed(e));
        });
}

/**********
* SIGN OUT
***********/