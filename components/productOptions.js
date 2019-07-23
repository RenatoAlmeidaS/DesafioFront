import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    productOptionsStyle
} from '../static/css';

import { Photo, Separator } from '../components'

import { toMoney } from '../general/utils'
import { modifyOption } from './../reducers/MakeRequestReducer/MakeRequestActions';

const unmark = require('../static/imgs/radio_button_off.svg')
const mark = require('../static/imgs/radio_button_on.svg')


class ProductOptions extends Component {
    render(){
        return (
            <div className='container'>
                <p className='title'>
                    Opções
            </p>
                {this.props.selectedFood.options.map((op, count) => {
                    let choice = ''
                    
                    return(
                    <div className='option' key={count}>
                        <p>
                            {op.title}
                        </p>
                        <div>
                            {op.op.map((answer) => (
                                <div className='box' key={answer} onClick={() => { this.props.modifyOption(answer) }}>
                                    <div className='checkbox'>
                                        <img src={this.props.option===answer ? mark : unmark} />
                                    </div>
                                    <p>
                                        {answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                )
                })}
                <Separator/>
                <style jsx>{productOptionsStyle}</style>
            </div>
        )
    } 
}

const mapStateToProps = state => ({
    selectedFood: state.MakeRequestReducer.selectedFood,
    option: state.MakeRequestReducer.option
});

export default connect(mapStateToProps, { modifyOption })(ProductOptions);