export const modifyRequestFrom = requestFrom => (
    {
        type: 'modifyRequestFrom',
        requestFrom
    }
);

export const modifySelectedFood = selectedFood => (
    {
        type: 'modifySelectedFood',
        selectedFood
    }
);

export const modifyScreen = screen => (
    {
        type: 'modifyScreen',
        screen 
    }
);

export const modifyOption = option => (
    {
        type: 'modifyOption',
        option
    }
);

export const modifyObs = obs => (
    {
        type: 'modifyObs',
        obs
    }
);

export const incrementAmount = () => (
    {
        type: 'incrementAmount'
    }
);

export const decrementAmount = () => (
    {
        type: 'decrementAmount'
    }
);

export const modifyRequestFood = (foods) => ({
    type: 'modifyRequestFood',
    foods
});

export const resetOptions = () => (
    {
        type: 'resetOptions'
    }
);


export const incrementStep = () => (
    {
        type: 'incrementStep'
    }
);

export const decrementStep = () => (
    {
        type: 'decrementStep'
    }
);


export const alterMakeRequest = () => (
    {
        type: 'alterMakeRequest'
    }
);
