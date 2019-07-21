import React from 'react';

import {
    listProductStyle
} from '../static/css';

import { Photo, Separator } from '../components'

import { toMoney } from '../general/utils'

export default (props) => {
    const {
        data,
        func
    } = props;

    return (
        <div className='container'>
            {data.map((food,count) => (
                <div className='category' key={count}>
                    <div>
                        <p>
                            {food.name}
                        </p>
                        {food.foods.map((e, position) => (
                            <div key={e.food} >
                                <div className='product'onClick={() => { func(e) }}>
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
                    <Separator two={true}/>
                </div>
            ))}
        <style jsx>{listProductStyle}</style>
        </div>
    )
}