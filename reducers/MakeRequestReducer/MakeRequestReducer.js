const INITIAL_STATE = {
    foods: [{
        name: 'Cuscuz',
        foods: [{
            food: 'Cuscuz simples',
            options: {
                title: 'Escolha dentre as opções de massas abaixo.',
                op: [
                    'Milho', 'Arroz'
                ]
            },
            value: '225'
        },
        {
            food: 'Cuscuz completo',
            options: {
                title: 'Escolha dentre as opções de massas abaixo.',
                op: [
                    'Milho', 'Arroz'
                ]
            },
            value: '325'
        }]
    },
    {
        name: 'Pães',
        foods: [{
            food: 'Pão caseiro',
            options: {
                title: 'Escolha entre pão normal e integral.',
                op: [
                    'Normal', 'Integral'
                ]
            },
            value: '225'
        },
        {
            food: 'Pão caseiro completo',
            options: {
                title: 'Escolha entre pão normal e integral.',
                op: [
                    'Normal', 'Integral'
                ]
            },
            value: '255'
        }
        ]
    }
    ],
    step: 1,
    screen: 1,
    request: {
        foods: [{
            food: '',
            options: {
                observation: '',
                op: '',
                quantity:''
            },
            value: ''
        }],
        totalValue:'',
        clients: [{
            id:'',
            photo:'',
            name:''
        }],
        isPay:false,
        date:''

    },
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'modifyRequestFrom':
            return { ...state, requestFrom: action.requestFrom }
        default:
            break;
    }
    return state;
};
