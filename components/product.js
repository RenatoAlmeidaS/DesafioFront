import React from 'react';

import {
    productStyle
} from '../static/css';
import { Photo } from '../components'

import { toMoney } from '../general/utils'

export default (props) => {
    const {
        product
    } = props;

    return (
        <div className='product'>
            <Photo url={product.photo} />
            <div>
                <p className='name'>
                    {product.food}
                </p>
                <p>
                    {toMoney(product.value)}
                </p>
            </div>
            <style jsx>{productStyle}</style>
        </div>
    )
}