import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { indexStyle } from '../static/css'

import { SectionHeaderTwo, Button, SideMenu, Photo, RequestButton, SearchBar, Historic, RequestList } from '../components'

import { modifyToken } from '../reducers/AutenticationReducer/AutenticationActions';
import { modifyRequestFrom, resetRequestFrom, modifyUserData } from './../reducers/MainPageReducer/MainPageActions';

const back = require('../static/imgs/back.svg')
const ilustrate = require('../static/imgs/Illustration.png')

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            makeReq: true
        }
    }
/*    componentDidMount() {
        if(this.props.token === '') {
            Router.push('/login');
        }
    }*/
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

    renderMakeReq() {
        return (
            <section id='makeReq'>
            <div className='containerReq'>
                <div className='left'>
                    <div className='back' onClick={() => { this.setState({makeReq: false}) }}>
                        <img src={back} />
                    </div>
                    <SectionHeaderTwo sectionTitle={`Novo Pedido`} />
                    <img className='ilustrate' src={ilustrate}/>
                </div>
                <aside>

                </aside>
            </div>
                <style jsx>{indexStyle}</style>
            </section>
        );
    }

    renderSection() {
        if(!this.state.makeReq) {
            if (this.props.requestFrom===''){
                return (
                <section >
                    <SectionHeaderTwo sectionTitle={`Olá, ${this.props.name}!`} />
                    <RequestButton name='FAZER NOVO PEDIDO' onClick={() => { this.setState({makeReq: true})}} />
                    <SearchBar name='Procure o pedido aqui...' onChange={() => { }} onClick={() => { }} />
                    <Historic func={this.alterSection.bind(this)} data={this.props.data} />
                    <style jsx>{indexStyle}</style>
                </section>
                );
            }
            else {
                return (
                    <section>
                        <div className='back' onClick={() => { this.alterSection('') }}>
                            <img src={back}/>
                        </div>
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
    userData: state.MainPageReducer.userData
});

export default connect(mapStateToProps, { modifyToken, modifyRequestFrom, resetRequestFrom, modifyUserData })(Index);