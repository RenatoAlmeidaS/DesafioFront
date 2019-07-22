const INITIAL_STATE = {
    foods: [{
        name: 'Cuscuz',
        foods: [{
            food: 'Cuscuz simples',
            options: [{
                title: 'Escolha dentre as opções de massas abaixo.',
                op: [
                    'Milho', 'Arroz'
                ]
            }],
            value: '225',
            photo: '../static/imgs/food1.png',
            selected: false
        },
        {
            food: 'Cuscuz completo',
            options: [{
                title: 'Escolha dentre as opções de massas abaixo.',
                op: [
                    'Milho', 'Arroz'
                ]
            }],
            value: '325',
            photo: '../static/imgs/food2.png',
            selected: false
        }]
    },
    {
        name: 'Pães',
        foods: [{
            food: 'Pão caseiro',
            options: [{
                title: 'Escolha entre pão normal e integral.',
                op: [
                    'Normal', 'Integral'
                ]
            }],
            value: '225',
            photo: '../static/imgs/food3.png',
            selected: false
        },
        {
            food: 'Pão caseiro completo',
            options: [{
                title: 'Escolha entre pão normal e integral.',
                op: [
                    'Normal', 'Integral'
                ]
            }],
            value: '255',
            photo: '../static/imgs/food4.png',
            selected: false
        }
        ]
    }
    ],
    step: 1,
    screen: 1,
    request: {
        foods: [{
            food: 'picanha na brasa',
            options: ['gorda'],
            quantity: '10',
            obs: 'no ponto',
            value: '3000',
            photo: '../static/imgs/food2.png',
        }],
        totalValue:'30000',
        clients: [],
        isPay:false,
        date:''

    },
    selectedFood: '',
    option: '',
    obs: '',
    amount: 1,
    makeReq: true,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifyRequestFrom':
            return { ...state, requestFrom: action.requestFrom }
        case 'modifySelectedFood':
            return { ...state, selectedFood: action.selectedFood }
        case 'modifyScreen':
            return { ...state, screen: action.screen }    
        case 'modifyOption':
            return { ...state, option: action.option }
        case 'modifyObs':
            return { ...state, obs: action.obs }
        case 'incrementAmount':
            return { ...state, amount: state.amount + 1 }
        case 'decrementAmount':
            return { ...state, amount: state.amount - 1 }
        case 'modifyRequestFood':
            return { ...state, request: { ...state.request, foods: action.foods} };
        case 'resetOptions':
            return { ...state, obs: '', option: '', amount: 1 }        
        case 'incrementStep':
            return { ...state, step: state.step + 1 }
        case 'decrementStep':
            return { ...state, step: state.step - 1 }
        case 'alterMakeRequest':
            return { ...state, makeReq: !state.makeReq }
        case 'alterClients': 
            return { ...state, request: { ...state.request, clients: action.clients } }
        default:
            break;
    }
    return state;
};


/*{
            food: '',
            options: [{
                observation: '',
                op: '',
                quantity:'',
            }],
            value: ''
        }

        {
            id:'',
            photo:'',
            name:''
        }

        {
            food: 'picanha na brasa',
            options: ['gorda'],
            quantity: '10',
            obs: 'no ponto',
            value: '3000',
            photo: '../static/imgs/food2.png',
        }
        */