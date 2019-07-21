import React from 'react';

import {
    separatorStyle
} from '../static/css';

export default (props) => {
    const {
        two
    } = props;

    return (
        <div>
            <div className={two ? 'two' : 'one'} />
            <div className='separator' />
            <style jsx>{separatorStyle}</style>
        </div>
    )
}