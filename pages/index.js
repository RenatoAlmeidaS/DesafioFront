import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { indexStyle } from '../static/css'

import { SectionHeaderTwo, Button, SideMenu, Photo, RequestButton, SearchBar, Historic } from '../components'

import { modifyToken } from '../reducers/AutenticationReducer/AutenticationActions';

class Index extends Component {
/*    componentDidMount() {
        if(this.props.token === '') {
            Router.push('/login');
        }
    }*/
    render() {
        return (
            <div>
                {console.log(this.props)}
                <SideMenu onClick={ () => {} }/>
                <Photo perfil={true} url={this.props.photo} />
                <section>
                    <SectionHeaderTwo sectionTitle={`Olá, ${this.props.name}!`}/>
                    <RequestButton name='FAZER NOVO PEDIDO' onClick= {() => {}}/>
                    <SearchBar name='Procure o pedido aqui...' onChange={() =>{}} onClick={() => {}} />
                    <Historic data={this.props.data} onClick={(e) => {console.log('clicou'); console.log(e) }} />
                </section>
                <style jsx>{ indexStyle }</style>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    token: state.AutenticationReducer.token,
    photo: state.MainPageReducer.photo,
    name: state.MainPageReducer.name,
    data: state.MainPageReducer.data
});

export default connect(mapStateToProps, { modifyToken })(Index);