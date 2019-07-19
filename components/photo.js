import React from 'react';

import {
    photoStyle
} from '../static/css';

export default (props) => {
    const {
        url,
        perfil
    } = props;

    return (
        <div>
            <img src={url} className={perfil ? 'perfil' : ''}/>
            <style jsx>{photoStyle}</style>
        </div>
    )
}