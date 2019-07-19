import React from 'react';

import {
    photoStyle
} from '../static/css';

export default (props) => {
    const {
        url
    } = props;

    return (
        <div>
            <img src={url}/>
            <style jsx>{photoStyle}</style>
        </div>
    )
}