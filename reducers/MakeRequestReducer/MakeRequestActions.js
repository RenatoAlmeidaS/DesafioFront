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

export const alterClients = clients => (
    {
        type: 'alterClients',
        clients
    }
)

export const clearStore = () => (
    {
        type: 'clearStore'
    }
)
export const modifyTotalValue = totalValue => (
    {
        type: 'modifyTotalValue',
        totalValue
    }
)
export const addFoodToRequest = food => (
    {
        type: 'addFoodToRequest',
        food
    }
)

export const addClientToRequest = client => (
    {
        type: 'addClientToRequest',
        client
    }
)

export const removeClientFromRequest = index => (
    {
        type: 'removeClientFromRequest',
        index
    }
)
export const alterPayment = value => (
    {
        type: 'alterPayment',
        value
    }
)
export const markFood = name => (
    {
        type: 'markFood',
        name
    }
)