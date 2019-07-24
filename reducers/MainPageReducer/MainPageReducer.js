const INITIAL_STATE = {
photo: '../static/imgs/perfil.png',
name: 'Renato',
data: [{
    date: '13/05/2019',
    value: '4580',
    requests: [
        {
            name: 'Marcel Batista',
            value: '350',
            request: 'cuscuz com calabresa, suco de laranja.',
            photo: '../static/imgs/f1.png',
            food: '../static/imgs/food1.png',
            id: '1',

        },
        {
            name: 'Fernanda Siqueira',
            value: '790',
            request: 'Iogurte desnatado com maçã.',
            photo: '../static/imgs/f2.png',
            food: '../static/imgs/food1.png',
            id: '2',
        }, 
        {
            name: 'Luiz Oliveira',
            value: '450',
            request: '2x bolo frito, café c/ leite.',
            photo: '../static/imgs/f3.png',
            food: '../static/imgs/food1.png',
            id: '3',
        }]
    },
    {
        date: '09/05/2019',
        value: '12350',
        requests: [
            {
                name: 'Ana Virlania',
                value: '500',
                request: '2x sanduíche de pão de arroz, vitamina de goiaba.',
                photo: '../static/imgs/f4.png',
                food: '../static/imgs/food2.png',
                id: '4',
            },
            {
                name: 'Marcel Baptista',
                value: '790',
                request: 'cuscuz com calabrasa, suco de maracujá',
                photo: '../static/imgs/f5.png',
                food: '../static/imgs/food3.png',
                id: '1',
            },
            {
                name: 'Fernanda Siqueira',
                value: '690',
                request: '3x bolo frito, café c/ leite.',
                photo: '../static/imgs/f2.png',
                food: '../static/imgs/food4.png',
                id: '2',
            }]
    },

],
requestFrom: '',
userData: [],
clients: [
    {
        name: 'Justine Marshall',
        photo: '../static/imgs/client1.png',
        id: '1',
        selected: false
    }, 
    {
        name: 'Bairam Frootan',
        photo: '../static/imgs/client2.png',
        id: '2',
        selected: false
    },
    {
        name: 'Tua Manuera',
        photo: '../static/imgs/client3.png',
        id: '3',
        selected: false
    },
    {
        name: 'Justine Marshall',
        photo: '../static/imgs/client1.png',
        id: '4',
        selected: false
    },
    {
        name: 'Bairam Frootan',
        photo: '../static/imgs/client2.png',
        id: '5',
        selected: false
    },

]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifyRequestFrom':
            return { ...state, requestFrom: action.requestFrom }
        case 'resetRequestFrom':
            return { ...state, requestFrom: '' }
        case 'modifyUserData':
            return { ...state, userData: action.userData }
        case 'clearMainStore': 
            return {...state, ...INITIAL_STATE }
        case 'markClient': 
            return { ...state, clients: state.clients.map((client, index) => { if (action.index === client.id) { return { ...client, selected:true } } return client; }) }
        case 'unmarkClient':
            return { ...state, clients: state.clients.map((client, index) => { if (action.index === client.id) { return { ...client, selected:false } } return client; }) }
        case 'addRequestToHistoric':
            return { ...state, data: state.data.map((day,count) => { if (day.date === action.data.date) { return {...data, requests: [...state.data.requests, action.data], value : action.data.value*1 + day.value*1 } } }) }
        case 'addRequestToHistoricExistent':
            return { ...state, data: [...state.data, action.data ] }
        default:
            break;
    }
    return state;
};
