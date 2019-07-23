import React, { Component} from 'react';
import { connect } from 'react-redux'


import { incrementAmount, decrementAmount, modifyScreen, resetOptions, modifyRequestFood, alterMakeRequest, clearStore } from './../reducers/MakeRequestReducer/MakeRequestActions';
import { leftSideStyle } from '../static/css';
import { clearMainStore } from './../reducers/MainPageReducer/MainPageActions';
import { BackArrow, SectionHeaderTwo, Photo, Separator, Clients } from '../components'

const ilustrate = require('../static/imgs/Illustration.png')


import { toMoney } from '../general/utils'

class LeftSide extends Component {

    renderClients() {
        return (
            <div>
                <p className='title'>Clientes</p>
                <Clients onlyShow={true} />
                <Separator two={true} three={true} />
                <style jsx>{leftSideStyle}</style>
            </div>
        )
    }

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
                {this.props.screen === 4 ? this.renderClients() : ''}
                <div className='totalVal'>
                    <p className='title'>Total</p>
                    <p>{toMoney(this.props.request.totalValue)}</p>
                </div>
                <style jsx>{leftSideStyle}</style>
            </div>
        );
    }
    renderIlustrate() {
        return (
            <div className='ilustrate'>
                <img src={ilustrate} /> 
                <p>Acompanhe aqui um resumo desta venda.</p>
                <style jsx>{leftSideStyle}</style>
            </div>
        )
    }

    render() {
        return (
            <div className='leftContent'>
                <BackArrow style='two' onClick={() => { this.props.clearStore(); this.props.clearMainStore(); this.props.alterMakeRequest() }} />
                <SectionHeaderTwo sectionTitle={`Novo Pedido`} />
                {this.props.screen < 3 ? this.renderIlustrate() : this.renderResume()}
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

export default connect(mapStateToProps, { modifyScreen, incrementAmount, decrementAmount, resetOptions, modifyRequestFood, alterMakeRequest, clearMainStore, clearStore })(LeftSide);