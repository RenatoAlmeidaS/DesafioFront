import React from 'react';

import {
    buttonStyle
} from '../static/css';

export default (props) => {
    const {
        name,
        bool
    } = props;

    return (
        <div>
            <input id={bool ? '' : 'block'} disabled={bool ? false : true} type='submit' placeholder="Nome" name='name' value={name} className='button' onClick= {props.onClick} />
            <style jsx>{buttonStyle}</style>
        </div>
    )
}