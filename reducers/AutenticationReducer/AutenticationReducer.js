const INITIAL_STATE = {
    token: '',
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifyToken':
            console.log(`modificando token ${action.token}`)
            return { ...state, token: action.token }
        default:
            break;
    }
    return state;
};
