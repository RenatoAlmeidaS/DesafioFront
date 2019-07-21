import React from 'react';

import {
    backArrowStyle
} from '../static/css';

const back = require('../static/imgs/back.svg')

export default (props) => {
    const {
        style
    } = props;

    return (
        <div className={`back ${style}`} onClick={props.onClick}>
            <img src={back} />
            <style jsx>{backArrowStyle}</style>
        </div>
    )
}