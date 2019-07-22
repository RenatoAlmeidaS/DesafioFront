import React, { Component} from 'react';
import { connect } from 'react-redux'


import { incrementAmount, decrementAmount, modifyScreen, resetOptions, modifyRequestFood, alterMakeRequest } from './../reducers/MakeRequestReducer/MakeRequestActions';
import { leftSideStyle } from '../static/css';

import { BackArrow, SectionHeaderTwo, Photo, Separator } from '../components'

const ilustrate = require('../static/imgs/Illustration.png')


import { toMoney } from '../general/utils'

class LeftSide extends Component {

    renderResume(){
        return (
            <div>
                <p className='title'>Produtos</p>
                {this.props.request.foods.map((food) => (
                    <div key={food.food}>
                        <div className='product'>
                            <div>
                                <Photo url={food.photo}/>
                                <p className='foodName'>{food.quantity}x {food.food}</p>
                            </div>
                            <p>{toMoney(food.value)}</p>
                        </div>
                        <p className='obs'>{food.obs}</p>
                    </div>
                ))}
                <Separator two={true} three={true}/>
                <div className='totalVal'>
                    <p className='title'>Total</p>
                    <p>{toMoney(this.props.request.totalValue)}</p>
                </div>
                <style jsx>{leftSideStyle}</style>
            </div>
        );
    }

    render() {
        return (
            <div className='leftContent'>
                <BackArrow style='two' onClick={() => { this.props.alterMakeRequest() }} />
                <SectionHeaderTwo sectionTitle={`Novo Pedido`} />
                {this.props.screen < 3 ? <img className='ilustrate' src={ilustrate} /> : this.renderResume()}
                <style jsx>{leftSideStyle}</style>
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
    option: state.MakeRequestReducer.option,
    screen: state.MakeRequestReducer.screen,
    makeReq: state.MakeRequestReducer.makeReq
});

export default connect(mapStateToProps, { modifyScreen, incrementAmount, decrementAmount, resetOptions, modifyRequestFood, alterMakeRequest })(LeftSide);