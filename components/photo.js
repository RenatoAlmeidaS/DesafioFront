import React from 'react';

import {
    photoStyle
} from '../static/css';

export default (props) => {
    const {
        url,
        perfil,
        marked
    } = props;

    return (
        <div>
            <img src={marked ? '../static/imgs/confirmed.png' :url} className={perfil ? 'perfil' : ''}/>
            <style jsx>{photoStyle}</style>
        </div>
    )
}