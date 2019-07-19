import React from 'react';

import {
    sideMenuStyle
} from '../static/css';


const logoWhite = require('../static/imgs/Appetit_Logo_White.svg')
const list = require('../static/imgs/list.svg')
const user = require('../static/imgs/user.svg')

export default (props) => {

    return (
        <div className='container'>
            <img className='logo' src={logoWhite} /> 
            <div className='menu'>
                <nav className='selected category'>
                    <img src={list} /> 
                    PEDIDOS
                </nav>
                <div className='subcategory subselected'>
                    EM ABERTOS
                </div>
                <div className='subcategory'>
                    ENCERRADOS
                </div>
                <nav className='category'>
                <img src={user} /> 
                CLIENTES
                </nav>
            </div>
            <p>Infoway Gestão em Saúde ©, 2019.</p>
            <style jsx>{sideMenuStyle}</style>
        </div>
    )
}