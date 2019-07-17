const INITIAL_STATE = {
    estabilishmentsData: [{
        discount: '',
        name: '',
        latlng: {
            latitude: 0,
            longitude: 0,
            },
    }],
    balance: '',
    establishment: {
        discounts: [
            {
                description: '',
                value: '0'
            },
        ],
        _id: '',
        name: '',
        category: {
            name: '',
            color: 'white'
        },
        location: {
            type: '',
            coordinates: [
                0,
                0
            ]
        }
    },
    categoriesData: [],
    userLocation: {
        lat: 0,
        longt: 0,
        idCat: ''
    },
    polyline: ''

};

const est = {
    discounts: [
        {
            description: '',
            value: '0'
        },
    ],
    _id: '',
    name: '',
    category: {
        name: '',
        color: 'white'
    },
    location: {
        type: '',
        coordinates: [
            0,
            0
        ]
    },
};

const estData = [{
    discount: '',
    name: '',
    latlng: {
        latitude: 0,
        longitude: 0,
    },
}];

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifyEstabilishmentsData':
            return { ...state, estabilishmentsData: action.estabilishmentsData }
        case 'modifyPhotoUrl':
            return { ...state, photoUrl: action.photoUrl }
        case 'modifyBalance':
            return { ...state, balance: action.balance }
        case 'modifyEstablishment':
            return { ...state, establishment: action.establishment }
        case 'setEstablishment':
            return { ...state, establishment: est }
        case 'modifyCategoriesData':
            return { ...state, categoriesData: action.categoriesData }
        case 'modifyUserLocation':
            return { ...state, userLocation: action.userLocation }
        case 'modifyPolyline':
            return { ...state, polyline: action.polyline }
        case 'setPolyline':
            return { ...state, polyline: '' }
        case 'setEstablishmentsData':
            return { ...state, estabilishmentsData: estData }
        case 'logoutBalance':
            return { ...state, balance: '' }
        default:
            break;
    }
    return state;
};
