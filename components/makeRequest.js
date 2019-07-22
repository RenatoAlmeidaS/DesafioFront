import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeRequestStyle } from '../static/css';

import { SectionHeaderTwo, SearchBar, ListProduct, ProgressBar, BackArrow, Product, ProductOptions, Amount, ConfirmFood } from '../components'
import { decrementScreen, incrementScreen, modifySelectedFood, modifyObs, resetOptions } from './../reducers/MakeRequestReducer/MakeRequestActions';


//const add = require('../static/imgs/add.svg')


class MakeRequest extends Component {

    selectFood(food) {
        this.props.modifySelectedFood(food);
        this.props.incrementScreen();
    }

    renderPassOne() {
        return (
            <div id='one' className='container'>
                <SectionHeaderTwo sectionTitle={`Informações para o pedido`} />
                <p>
                    Preencha as informações abaixo para concluir esta venda.
                </p>
                <ProgressBar progress={this.props.step} />
                <p className='bold'>
                    O que você está vendendo?
                </p>
                <SearchBar button={false} name='Procure o pedido aqui...'/>
                <ListProduct func={this.selectFood.bind(this)} data={this.props.foods}/>
                {this.props.request.totalValue !== '' ? <ConfirmFood  value={this.props.request.totalValue} onClick={() => {}}/> : ''}
                <style jsx>{makeRequestStyle}</style>
            </div>
        );
    }

    renderPassTwo() {
        return (
            <div>
            <div id='two' className='container'>
                <BackArrow style='two' onClick={() => { this.props.resetOptions(); this.props.decrementScreen() }} />
                <SectionHeaderTwo sectionTitle={`Detalhes do pedido`} />
                <p>
                    Aproveite para adicionar alguma observação para este pedido, caso queira.
                </p>
                <Product product={this.props.selectedFood} />
                <ProductOptions />
                <p className='obsText'>
                    Observações
                </p>
                <input placeholder='Observações' className='obs' onChange={(e) => { this.props.modifyObs(e.target.value)}}/>
                </div>
                {this.props.option !== '' ? <Amount/> : ''}
                <style jsx>{makeRequestStyle}</style>
            </div>
        );
    }

    renderPassThree() {
        return (
            <div>
                Tela 3
            </div>
        );
    }

    choiceRender() {
        switch (this.props.screen) {
            case 1: 
                return (this.renderPassOne());
            case 2:
                return (this.renderPassTwo());
            case 3:
                return (this.renderPassThree());
            default:
                break;
        }

    }

    render() {
        console.log(this);
        return (
            <div>
                {this.choiceRender()}
            </div>
        );
    }

}

const mapStateToProps = state => ({
    foods: state.MakeRequestReducer.foods,
    step: state.MakeRequestReducer.step,
    screen: state.MakeRequestReducer.screen,
    request: state.MakeRequestReducer.request,
    selectedFood: state.MakeRequestReducer.selectedFood,
    option: state.MakeRequestReducer.option,
    obs: state.MakeRequestReducer.obs,

});

export default connect(mapStateToProps, { incrementScreen, decrementScreen, modifySelectedFood, modifyObs, resetOptions })(MakeRequest);