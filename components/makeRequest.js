import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeRequestStyle } from '../static/css';

import { SectionHeaderTwo, SearchBar, ListProduct, ProgressBar, BackArrow, Product, ProductOptions, Amount, ConfirmFood, Clients, Button } from '../components'
import { modifySelectedFood, modifyObs, resetOptions, incrementStep, modifyScreen } from './../reducers/MakeRequestReducer/MakeRequestActions';


const unmark = require('../static/imgs/radio_button_off.svg')
const mark = require('../static/imgs/radio_button_on.svg')
const calendar = require('../static/imgs/calendar.svg')


class MakeRequest extends Component {

    selectFood(food) {
        this.props.modifySelectedFood(food);
        this.props.modifyScreen(2);
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
                {this.props.request.totalValue !== '' ? <ConfirmFood  value={this.props.request.totalValue} onClick={() => { this.props.incrementStep(); this.props.modifyScreen(3)}}/> : ''}
                <style jsx>{makeRequestStyle}</style>
            </div>
        );
    }

    renderPassTwo() {
        return (
            <div>
            <div id='two' className='container'>
                <BackArrow style='two' onClick={() => { this.props.resetOptions(); this.props.modifyScreen(1) }} />
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

    update() {
        this.forceUpdate();
    }

    renderPassThree() {
        return (
            <div id='two' className='container'>
                <SectionHeaderTwo sectionTitle={`Informações para o pedido`} />                
                <p>
                    Preencha as informações abaixo para concluir esta venda.
                </p>
                <ProgressBar progress={this.props.step} />
                <p className='bold'>
                    Pra quem você está vendendo?
                </p>
                <SearchBar button={false} name='Procure o cliente aqui...' />
                <Clients onlyShow={false} func={this.update.bind(this)}/>
                {this.props.request.clients.length !== 0 ? <ConfirmFood value='' clients={this.props.request.clients.length} onClick={() => { this.props.incrementStep(); this.props.modifyScreen(4) }} /> : ''}
                <style jsx>{makeRequestStyle}</style>
            </div>
        );
    }

    alterCheckboxPayment(val) {
        this.props.request.isPay=val;
        this.forceUpdate();
    }

    renderPassFour() {
        return (
            <div id='four' className='container'>
                <SectionHeaderTwo sectionTitle={`Informações para o pedido`} />
                <p>
                    Preencha as informações abaixo para concluir esta venda.
                </p>
                <ProgressBar progress={this.props.step} />
                <p className='bold'>
                    Qual o status de pagamento?
                </p>
                <div className='checkbox' onClick={() => {this.alterCheckboxPayment('false')}}>
                    <img src={this.props.request.isPay === 'false' ? mark : unmark} />
                    <p>Não está pago</p>
                </div>
                <div className='checkbox' onClick={() => {this.alterCheckboxPayment('true')}}>
                    <img src={this.props.request.isPay === 'true' ? mark : unmark} />
                    <p>Já está pago</p>
                </div>
                <p className='bold'>
                    Em qual data foi realizado?
                </p>
                <div className='calendar'> 
                <p className='placeholder'>Data do pedido</p>
                <input/>
                    <img src={calendar}/>
                </div>
                <div className='button'>
                <Button save={true} name="SALVAR" bool={this.props.request.isPay!== ''} onClick={() => { console.log('terminou') }} />
                </div>
                <style jsx>{makeRequestStyle}</style>
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
            case 4:
                return (this.renderPassFour());
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

export default connect(mapStateToProps, { modifySelectedFood, modifyObs, resetOptions, incrementStep, modifyScreen })(MakeRequest);