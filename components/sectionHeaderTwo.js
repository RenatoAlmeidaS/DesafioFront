import React from 'react';

import {
    sectionHeaderStyle
} from '../static/css';

export default (props) => {
    const {
        sectionTitle,
        bool
    } = props;

    return (
        <div>
            <h1 className={bool ? 'two big' : 'two'} id='title'>{sectionTitle}</h1>
            <style jsx>{sectionHeaderStyle}</style>
        </div>
    )
}