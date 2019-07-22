import React from 'react';

import {
    confirmFoodStyle
} from '../static/css';

const next = require('../static/imgs/next.png')

import { toMoney } from '../general/utils'

export default (props) => {
    const {
        value
    } = props;

    return (
        <div>
            <div className='container' onClick={props.onClick}>
            <p className='value'>
                Total: {toMoney(value)}
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