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

export const clearMainStore = () => (
    {
        type: 'clearMainStore'
    }
);

export const markClient = (index) => (
    {
        type: 'markClient',
        index
    }
);

export const unmarkClient = (index) => (
    {
        type: 'unmarkClient',
        index
    }
);

