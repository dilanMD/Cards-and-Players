const INITIAL_STATE = {
    isLoggedIn: false
};

const authReducer = (state = INITIAL_STATE, { type, action }) => {
    switch (type) {
        default:
            return state;
    };
};

export default authReducer;