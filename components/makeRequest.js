import React, { Component } from 'react';
import { connect } from 'react-redux';
import { makeRequestStyle } from '../static/css';

import { SectionHeaderTwo, SearchBar, ListProduct, ProgressBar } from '../components'


//const add = require('../static/imgs/add.svg')


class MakeRequest extends Component {

    selectFood(name) {
        console.log(name);
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
                <style jsx>{makeRequestStyle}</style>
            </div>
        );
    }

    choiceRender() {
        switch (this.props.pass) {
            case 1: 
                return (this.renderPassOne());
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
    pass: state.MakeRequestReducer.screen,
    request: state.MakeRequestReducer.request,

});

export default connect(mapStateToProps, {  })(MakeRequest);