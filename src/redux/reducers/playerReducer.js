const INITIAL_STATE = {
    test: "Test String"
};

const playerReducer = (state = INITIAL_STATE, { type, action }) => {
    switch (type) {
        default:
            return state;
    };
};

export default playerReducer;