import React from 'react';

import {
    separatorStyle
} from '../static/css';

export default (props) => {
    const {
        two,
        three
    } = props;

    return (
        <div className={two ? 'two' : 'one'} >
            <div className={three ? 'three' : 'separator'} />
            <style jsx>{separatorStyle}</style>
        </div>
    )
}