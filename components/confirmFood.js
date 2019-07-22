import React from 'react';

import {
    confirmFoodStyle
} from '../static/css';

const next = require('../static/imgs/next.png')

import { toMoney } from '../general/utils'

export default (props) => {
    const {
        value,
        clients
    } = props;

    return (
        <div>
            <div className='container' onClick={props.onClick}>
            <p className='value'>
                    {value !== '' ? `Total: ${ toMoney(value) }` : (clients===1 ? `1 cliente selecionado` : `${clients} clientes selecionados`) }
            </p>
            <p>
                Avançar
                <img src={next}/>
            </p>
            </div>
            <style jsx>{confirmFoodStyle}</style>
        </div>
    )
}