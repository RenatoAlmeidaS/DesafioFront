import React from 'react';

import {
    searchBarStyle
} from '../static/css';

const search = require('../static/imgs/search.svg');
const path = require('../static/imgs/path.svg');

export default (props) => {
    const {
        name
    } = props;

    return (
        <div>
            <div name='searchBar' className='bar'>
                <img className='lupa' src={search}/>
                <input placeholder={name} onChange={props.onChange}/>
                <img src={path} onClick={props.onClick}/>
            </div>
            <style jsx>{searchBarStyle}</style>
        </div>
    )
}