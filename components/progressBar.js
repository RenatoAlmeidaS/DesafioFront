import React from 'react';

import {
    progressBarStyle
} from '../static/css';

export default (props) => {
    const {
        progress
    } = props;

    return (
        <div className='container'>
            <p>
                Passo {progress} de 3
            </p>
            <div className='bar'>
                <div className='inside' style={progress === 1 ? { width: '33%' } : (progress === 2 ? { width: '67%'} : {width: '100%'})}/>
            </div>
            <style jsx>{progressBarStyle}</style>
        </div>
    )
}