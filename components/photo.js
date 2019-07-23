import React from 'react';

import {
    photoStyle
} from '../static/css';

export default (props) => {
    const {
        url,
        perfil,
        marked,
        onReq
    } = props;

    return (
        <div className={perfil ? (onReq ? 'perfil onreq' : 'perfil') : ''}>
            <img src={marked ? '../static/imgs/confirmed.png' :url} />
            <style jsx>{photoStyle}</style>
        </div>
    )
}