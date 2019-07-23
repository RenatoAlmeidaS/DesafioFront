import React, { Component} from 'react';
import { connect } from 'react-redux'


import { incrementAmount, decrementAmount, modifyScreen, resetOptions, modifyRequestFood, modifyTotalValue, addFoodToRequest } from './../reducers/MakeRequestReducer/MakeRequestActions';
import { amountStyle } from '../static/css';
import { markFood } from './../reducers/MakeRequestReducer/MakeRequestActions';

const more = require('../static/imgs/more.png')
const less = require('../static/imgs/less.png')

import { toMoney } from '../general/utils'

class Amount extends Component {
    markFood() {
        const data = {
            food: this.props.selectedFood.food,
            options: [
                this.props.option,
            ],
            observation: this.props.obs,
            quantity: this.props.amount,
            photo: this.props.selectedFood.photo,
            value: this.props.selectedFood.value
        }
        this.props.modifyTotalValue(this.props.request.totalValue*1 + (this.props.amount*this.props.selectedFood.value));
        this.props.addFoodToRequest(data);
        this.props.foods.map((category) => {
            category.foods.map((food) => {
                if (food.food === this.props.selectedFood.food) {
                    this.props.markFood(food.food);
                }
            })
        })
        this.props.resetOptions();
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <div className='content'>
                        <div>
                            <div className='img' onClick={() => { if(this.props.amount > 1) {this.props.decrementAmount()} }}>
                                <img src={less} />
                            </div>
                            <p>
                                {this.props.amount}
                            </p>
                            <div className='img' onClick={() => { this.props.incrementAmount() }}>
                                <img src={more} />
                            </div>
                        </div>
                        <div className='button' onClick={() => { this.markFood(); this.props.modifyScreen(1)}}>
                            <p>
                                Adicionar
                    </p>
                            <p>
                                {toMoney(this.props.selectedFood.value*this.props.amount)}
                            </p>
                        </div>
                    </div>
                    <style jsx>{amountStyle}</style>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    request: state.MakeRequestReducer.request,
    foods: state.MakeRequestReducer.foods,
    selectedFood: state.MakeRequestReducer.selectedFood,
    amount: state.MakeRequestReducer.amount,
    obs: state.MakeRequestReducer.obs,
    option: state.MakeRequestReducer.option

});

export default connect(mapStateToProps, { modifyScreen, incrementAmount, decrementAmount, resetOptions, modifyRequestFood, modifyTotalValue, addFoodToRequest,markFood })(Amount);