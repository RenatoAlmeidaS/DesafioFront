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
        foods: [],
        totalValue:'',
        clients: [],
        isPay: '',
        date:''

    },
    selectedFood: '',
    option: '',
    obs: '',
    amount: 1,
    makeReq: false,
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
            return { ...state, request: { ...state.request, foods: action.foods} }
        case 'resetOptions':
            return { ...state, obs: '', option: '', amount: 1 }        
        case 'clearStore':
            return { ...state, ...INITIAL_STATE }
        case 'incrementStep':
            return { ...state, step: state.step + 1 }
        case 'decrementStep':
            return { ...state, step: state.step - 1 }
        case 'alterMakeRequest':
            return { ...state, makeReq: !state.makeReq }
        case 'alterClients': 
            return { ...state, request: { ...state.request, clients: action.clients } }
        case 'modifyTotalValue':
            return { ...state, request: { ...state.request, totalValue: action.totalValue } }
        case 'addFoodToRequest':
            return { ...state, request: { ...state.request, foods: [...state.request.foods, action.food] } }
        case 'addClientToRequest':
            return { ...state, request: { ...state.request, clients: [...state.request.clients, action.client] } }
        case 'removeClientFromRequest':
            return { ...state, request: { ...state.request, clients: state.request.clients.filter((client, index) => {if(action.index===index){ return false} return true}) } }
        case 'alterPayment':
            return { ...state, request: { ...state.request, isPay: action.value } }
        case 'markFood':
            return { ...state, foods: state.foods.map((food) => { return { ...food, foods: food.foods.map((e, index) => {if (action.name === e.food) { return { ...e, selected: true } } return e }) }}) }
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