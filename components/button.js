import React from 'react';

import {
    buttonStyle
} from '../static/css';

export default (props) => {
    const {
        name,
        bool,
        save,
        secondary
    } = props;

    return (
        <div>
            <input id={bool ? '' : 'block'} disabled={bool ? false : true} type='submit' placeholder="Nome" name='name' value={name} className={secondary ? 'secondary' : (save ? 'button' : '')} onClick= {props.onClick} />
            <style jsx>{buttonStyle}</style>
        </div>
    )
}