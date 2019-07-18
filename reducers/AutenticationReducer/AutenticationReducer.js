const INITIAL_STATE = {
    token: 'abcde',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifyToken':
            return { ...state, token: action.token }
        default:
            break;
    }
    return state;
};
