export const modifyRequestFrom = requestFrom => (
    {
        type: 'modifyRequestFrom',
        requestFrom
    }
);

export const resetRequestFrom = () => (
    {
        type: 'resetRequestFrom'
    }
);

export const modifyUserData = userData => (
    {
        type: 'modifyUserData',
        userData
    }
);