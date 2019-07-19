import React from 'react';

import {
    historicStyle
} from '../static/css';

import Photo  from './photo'

import { toMoney } from '../general/utils'

const add = require('../static/imgs/add.svg')

export default (props) => {
    const {
        data
    } = props;

    return (
        <div>
            {data.map((day) => (
                <div className="container" key={day.date}>
                    <p><mark>{day.date}</mark>, Você vendeu <mark>{toMoney(day.value)}</mark></p>
                    {day.requests.map((request) => (
                        <div className='request' key={request.id} onClick={props.onClick}>
                            <Photo perfil={false} url={request.photo} />
                            <div>
                                <p>
                                    <mark>{request.name}</mark>
                                </p>
                                <p>
                                    {request.request}
                                </p>
                            </div>
                            <p className='value'>
                                <mark>{toMoney(request.value)}</mark>
                            </p>

                        </div>
                    ))}
                </div>
            ))}
            <style jsx>{historicStyle}</style>
        </div>
    )
}