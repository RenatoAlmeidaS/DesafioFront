import React from 'react';

import {
    requestListStyle
} from '../static/css';

import Photo  from './photo'

import { toMoney } from '../general/utils'


export default (props) => {
    const {
        data
    } = props;
    const size = data.length-1;

    return (
        <div>
            {
                data.map((day,count) => {
                    if(!(count & 1) && count < size) { //passa os pares
                        return (
                            <div className='bold' key={count}>
                                {day.date}
                            </div>
                        );
                    }
                    if ((count & 1) && count < size) { //passa os impares
                       return (
                           
                        day.map((req) => (
                            <div className='request' key={count}>
                                <Photo url={req.food}/>
                               <div>
                                    <p className='bold'>
                                        {req.request}
                                    </p>
                                    <p>
                                        {toMoney(req.value)}
                                    </p>
                               </div>
                            </div>
                        )))
                    }
                })}
            <style jsx>{requestListStyle}</style>
        </div>
    )
}