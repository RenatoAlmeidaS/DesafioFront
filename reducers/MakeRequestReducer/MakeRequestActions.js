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

export const incrementScreen = () => (
    {
        type: 'incrementScreen'
    }
);

export const decrementScreen = () => (
    {
        type: 'decrementScreen'
    }
);
