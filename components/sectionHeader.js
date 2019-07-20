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
            <h1 id='title'>{sectionTitle}</h1>
            <style jsx>{sectionHeaderStyle}</style>
        </div>
    )
}