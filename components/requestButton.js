import React from 'react';

import {
    requestButtonStyle
} from '../static/css';

const add = require('../static/imgs/add.svg')

export default (props) => {
    const {
        name
    } = props;

    return (
        <div>
            <div name='requestButton' className='button' onClick= {props.onClick}>
                <img src={add}/>
                {name}
            </div>
            <style jsx>{requestButtonStyle}</style>
        </div>
    )
}