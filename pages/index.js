import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { indexStyle } from '../static/css'

import { SectionHeaderTwo, Button, SideMenu, Photo, RequestButton } from '../components'

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
                <Photo url={this.props.photo} />
                <section>
                    <SectionHeaderTwo sectionTitle={`Olá, ${this.props.name}!`}/>
                    <RequestButton name='FAZER NOVO PEDIDO'/>
                </section>
                <style jsx>{ indexStyle }</style>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    token: state.AutenticationReducer.token,
    photo: state.MainPageReducer.photo,
    name: state.MainPageReducer.name
});

export default connect(mapStateToProps, { modifyToken })(Index);