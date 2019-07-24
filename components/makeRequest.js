import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeRequestStyle } from '../static/css';

import { SectionHeaderTwo, SearchBar, ListProduct, ProgressBar, BackArrow, Product, ProductOptions, Amount, ConfirmFood, Clients, Button, CalendarAppetit } from '../components'
import { modifySelectedFood, modifyObs, resetOptions, incrementStep, modifyScreen, alterPayment, clearStore, alterMakeRequest } from './../reducers/MakeRequestReducer/MakeRequestActions';
import { clearMainStore, addRequestToHistoricExistent, addRequestToHistoric } from './../reducers/MainPageReducer/MainPageActions';


const unmark = require('../static/imgs/radio_button_off.svg')
const mark = require('../static/imgs/radio_button_on.svg')


class MakeRequest extends Component {

    selectFood(food) {
        this.props.modifySelectedFood(food);
        this.props.modifyScreen(2);
    }

    renderPassOne() {
        return (
            <div id='one' className='container'>
                <BackArrow style='one' onClick={() => { this.props.clearStore(); this.props.clearMainStore();}} />
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

    

    renderPassThree() {
        return (
            <div id='two' className='container'>
                <BackArrow style='one' onClick={() => { this.props.clearStore(); this.props.clearMainStore(); }} />
                <SectionHeaderTwo sectionTitle={`Informações para o pedido`} />                
                <p>
                    Preencha as informações abaixo para concluir esta venda.
                </p>
                <ProgressBar progress={this.props.step} />
                <p className='bold'>
                    Pra quem você está vendendo?
                </p>
                <SearchBar button={false} name='Procure o cliente aqui...' />
                <Clients onlyShow={false}/>
                {this.props.request.clients.length !== 0 ? <ConfirmFood value='' clients={this.props.request.clients.length} onClick={() => { this.props.incrementStep(); this.props.modifyScreen(4) }} /> : ''}
                <style jsx>{makeRequestStyle}</style>
            </div>
        );
    }
    
/*    saveRequest() {
        let date = this.props.request.date.format('DD/MM/YYYY');
        let exist = false;
        data.map((day)=> {
            if (day.date===date) {
                exist = true;
            }
        })
        if (existing){
            const data = {
                name: this.props.request.name,
                value: this.props.request.value,
                request: 
                photo: this.props.request.foods[0].photo,
                food: '../static/imgs/food1.png',
                id: '1',

            }
        }
    }*/

    renderPassFour() {
        return (
            <div id='four' className='container'>
                <BackArrow style='one' onClick={() => { this.props.clearStore(); this.props.clearMainStore(); }} />
                <SectionHeaderTwo sectionTitle={`Informações para o pedido`} />
                <p>
                    Preencha as informações abaixo para concluir esta venda.
                </p>
                <ProgressBar progress={this.props.step} />
                <p className='bold'>
                    Qual o status de pagamento?
                </p>
                <div className='checkbox' onClick={() => {this.props.alterPayment('false')}}>
                    <img src={this.props.request.isPay === 'false' ? mark : unmark} />
                    <p>Não está pago</p>
                </div>
                <div className='checkbox' onClick={() => {this.props.alterPayment('true')}}>
                    <img src={this.props.request.isPay === 'true' ? mark : unmark} />
                    <p>Já está pago</p>
                </div>
                <p className='bold'>
                    Em qual data foi realizado?
                </p>
                <CalendarAppetit/>
                <div className='button'>
                    <Button save={true} name="SALVAR" bool={this.props.request.isPay !== ''} onClick={() => { console.log('requisição'); console.log(this.props.request); this.props.modifyScreen(5); }} />
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
    data: state.MainPageReducer.data

});

export default connect(mapStateToProps, { modifySelectedFood, modifyObs, resetOptions, incrementStep, modifyScreen, alterPayment, alterMakeRequest, clearStore, clearMainStore, addRequestToHistoric, addRequestToHistoricExistent })(MakeRequest);