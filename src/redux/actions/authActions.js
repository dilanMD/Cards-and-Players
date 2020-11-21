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
            console.log(res);
            dispatch(registerSuccess(res));
        })
        .catch((e) => {
            // console.error(e);
            dispatch(registerFailed(e));
        });
}

/********
 * LOGIN
 ********/


/**********
* SIGN OUT
***********/