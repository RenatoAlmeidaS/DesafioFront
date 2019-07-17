export const modifyEstabilishmentsData = estabilishmentsData => (
    {
    type: 'modifyEstabilishmentsData',
    estabilishmentsData
    }
);

export const modifyCategoriesData = categoriesData => (
    {
        type: 'modifyCategoriesData',
        categoriesData
    }
);


export const modifyBalance = balance => (
    {
        type: 'modifyBalance',
        balance
    }
);

export const modifyEstablishment = establishment => (
    {
        type: 'modifyEstablishment',
        establishment
    }
);

export const setEstablishment = () => (
    {
        type: 'setEstablishment'
    }
);

export const modifyUserLocation = userLocation => (
    {
        type: 'modifyUserLocation',
        userLocation
    }
);

export const modifyPolyline = polyline => (
    {
        type: 'modifyPolyline',
        polyline
    }
);

export const setPolyline = () => (
    {
        type: 'setPolyline'
    }
);

export const setEstablishmentsData = () => (
    {
        type: 'setEstablishmentsData'
    }
);

export const logoutBalance = () => (
    {
        type: 'logoutBalance'
    }
);
