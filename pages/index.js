import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { indexStyle } from '../static/css'

import { SectionHeaderTwo, Button, SideMenu, Photo, RequestButton, SearchBar, Historic } from '../components'

import { modifyToken } from '../reducers/AutenticationReducer/AutenticationActions';
import { modifyRequestFrom } from './../reducers/MainPageReducer/MainPageActions';

class Index extends Component {
/*    componentDidMount() {
        if(this.props.token === '') {
            Router.push('/login');
        }
    }*/
    openRequestPerfil(val) {
        console.log('pagina alterada');
        this.props.modifyRequestFrom(val);
    }

    renderSection() {
        if (this.props.requestFrom===''){
            return (
            <section style={{ display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'flexStart', margin: '4.5rem 2.5rem 0 23.5rem'}}>
                <SectionHeaderTwo sectionTitle={`Olá, ${this.props.name}!`} />
                <RequestButton name='FAZER NOVO PEDIDO' onClick={() => { }} />
                <SearchBar name='Procure o pedido aqui...' onChange={() => { }} onClick={() => { }} />
                <Historic func={this.openRequestPerfil.bind(this)} data={this.props.data} />
            </section>);
        }
        else {
            return (
                'TESTE'
            );
        }
    }

    render() {
        return (
            <div>
                {console.log(this.props)}
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
    requestFrom: state.MainPageReducer.requestFrom
});

export default connect(mapStateToProps, { modifyToken, modifyRequestFrom })(Index);