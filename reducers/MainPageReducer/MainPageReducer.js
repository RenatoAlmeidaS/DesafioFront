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
            id: '1'

        },
        {
            name: 'Fernanda Siqueira',
            value: '790',
            request: 'Iogurte desnatado com maçã.',
            photo: '../static/imgs/f2.png',
            id: '2'
        }, 
        {
            name: 'Luiz Oliveira',
            value: '450',
            request: '2x bolo frito, café c/ leite.',
            photo: '../static/imgs/f3.png',
            id: '3'
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
                id: '4'
            },
            {
                name: 'Marcel Baptista',
                value: '790',
                request: 'cuscuz com calabrasa, suco de maracujá',
                photo: '../static/imgs/f5.png',
                id: '5'
            },
            {
                name: 'Fernanda Siqueira',
                value: '690',
                request: '3x bolo frito, café c/ leite.',
                photo: '../static/imgs/f2.png',
                id: '6'
            }]
    },

]
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            break;
    }
    return state;
};
