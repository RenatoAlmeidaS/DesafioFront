import React from 'react';

import {
    listProductStyle
} from '../static/css';

import Photo from './photo'

import { toMoney } from '../general/utils'

export default (props) => {
    const {
        data
    } = props;

    return (
        <div className='container'>
            {data.map((food,count) => (
                <div className= 'category'>
                    <div key={count}>
                        <p>
                            {food.name}
                        </p>
                        {food.foods.map((e, position) => (
                            <div>
                            <div className='product' key={e.food}>
                                <div>
                                    <Photo perfil={false} url={e.photo} />
                                    <p>
                                        {e.food}
                                    </p>
                                </div>
                                <aside>
                                    {toMoney(e.value)}
                                </aside>
                            </div>
                                {position !== food.foods.length-1 ? <div className='separator' /> : ''}
                            </div>
                        ))}
                    </div>
                    <div className='separatorCategory' />
                </div>
            ))}
        <style jsx>{listProductStyle}</style>
        </div>
    )
}