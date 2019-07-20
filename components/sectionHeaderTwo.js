import React from 'react';

import {
    sectionHeaderStyle
} from '../static/css';

export default (props) => {
    const {
        sectionTitle
    } = props;

    return (
        <div>
            <h1 className='two' id='title'>{sectionTitle}</h1>
            <div/>
            <style jsx>{sectionHeaderStyle}</style>
        </div>
    )
}