import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { indexStyle } from '../static/css'

import { SectionHeaderTwo, Button, SideMenu, Photo, RequestButton, SearchBar, Historic, RequestList, MakeRequest, BackArrow, LeftSide } from '../components'

import { modifyRequestFrom, resetRequestFrom, modifyUserData } from './../reducers/MainPageReducer/MainPageActions';
import { alterMakeRequest, clearStore } from './../reducers/MakeRequestReducer/MakeRequestActions';
import { modifyToken } from '../reducers/AutenticationReducer/AutenticationActions';

const ilustrate = require('../static/imgs/Illustration.png')

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: ''
        }
    }
/*    componentDidMount() {
        if(this.props.token === '' && this.state.token === '') {
            Router.push('/login');
        }
        if (this.state.token !== '') {
            this.props.modifyToken(this.state.token);
        }
    }*/

    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.token === '') {
            this.state.token = this.props.token;
        }
        return true;
    }

    componentDidUpdate() {
        document.documentElement.scrollTop = 0;
    }

    prepareUserData(id) {
        let tmp1 = [];
        let name = ''
        this.props.data.map((day) => {
            let tmp2 = [];
            day.requests.map ((request) => {
                if (request.id === id) {
                    tmp2.push(request);
                    name = request.name;
                }
            })
            if (tmp2.length !== 0) {
                tmp1.push({date: day.date, value: day.value});
                tmp1.push(tmp2);
            }
        })
        tmp1.push({name})
        this.props.modifyUserData(tmp1);
    }

    alterSection(val) {
        if (val === ''){
            this.props.resetRequestFrom();
        }
        else {
            this.prepareUserData(val);
            this.props.modifyRequestFrom(val);
        }
    }

    renderLeftRightScreen() {
        return (
            <div className='container'>
                <div className='left'>
                    <LeftSide />
                </div>
                <aside>
                    <MakeRequest />
                </aside>
                <style jsx>{indexStyle}</style>
            </div>
        )
    }

    renderReturnRequestScreen() {
        return (
            <div className='container'>
                <div className='returnContent'>
                    <img src={ilustrate}/>
                    <p>Pedido feito com sucesso!</p>
                    <div>
                        <Button onClick={() => { this.props.clearStore() }} bool={true} secondary={true}  name="VOLTAR PARA LISTA DE PEDIDOS"/>
                        <Button onClick={() => { this.props.clearStore(); this.props.alterMakeRequest(); }} bool={true} name="FAZER NOVO PEDIDO"/>
                    </div>
                </div>
                <style jsx>{indexStyle}</style>
            </div>
        )
    }

    renderMakeReq() {
        return (
            <section id='makeReq'>
                {this.props.screen === 5 ? this.renderReturnRequestScreen() : this.renderLeftRightScreen()}
                <style jsx>{indexStyle}</style>
            </section>
        );
    }

    renderSection() {
        if(!this.props.makeReq) {
            if (this.props.requestFrom===''){
                return (
                <section>
                    <SectionHeaderTwo sectionTitle={`Olá, ${this.props.name}!`} />
                    <RequestButton name='FAZER NOVO PEDIDO' onClick={() => { this.props.alterMakeRequest() }} />
                    <SearchBar button={true} name='Procure o pedido aqui...' onChange={() => { }} onClick={() => { }} />
                    <Historic func={this.alterSection.bind(this)} data={this.props.data} />
                    <style jsx>{indexStyle}</style>
                </section>
                );
            }
            else {
                return (
                    <section>
                        <BackArrow style='one' onClick={() => { this.alterSection('') }} />
                        <SectionHeaderTwo sectionTitle={`Pedidos de ${this.props.userData[this.props.userData.length - 1].name.split(' ')[0]}`} />
                        <RequestList data={this.props.userData}/>
                        <style jsx>{indexStyle}</style>
                    </section>
                );
            }
        }
        else {
            return(this.renderMakeReq())
        }
    }

    render() {
        return (
            <div>
                {console.log(this)}
                <SideMenu onClick={ () => {} }/>
                <Photo perfil={true} url={this.props.photo} />
                {this.renderSection()}
                <style jsx>{ indexStyle }</style>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    token: state.AutenticationReducer.token,
    photo: state.MainPageReducer.photo,
    name: state.MainPageReducer.name,
    data: state.MainPageReducer.data,
    requestFrom: state.MainPageReducer.requestFrom,
    userData: state.MainPageReducer.userData,
    screen: state.MakeRequestReducer.screen,
    makeReq: state.MakeRequestReducer.makeReq
});

export default connect(mapStateToProps, { modifyToken, modifyRequestFrom, resetRequestFrom, modifyUserData, alterMakeRequest, clearStore })(Index);