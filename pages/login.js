import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { loginStyle } from '../static/css'

import { SectionHeader, Button } from '../components'

import { modifyToken } from '../reducers/AutenticationReducer/AutenticationActions';


const logo = require('../static/imgs/Appetit_Logo.svg')

class Login extends Component {

    constructor(props) {
        super(props);
        this.inputs = {
            name: '',
            pass: ''
        }
        this.state = {
            bool:false
        }
        this.updateName = this.updateName.bind(this);
        this.updatePass = this.updatePass.bind(this);
    } 
    
    updateName(event) {
        this.inputs.name = event.target.value;
        this.updateButton();
    }

    updatePass(event) {
        this.inputs.pass = event.target.value; 
        this.updateButton();
    }

    updateButton() {
        if(this.inputs.name !== '' && this.inputs.pass !== '' && !this.state.bool) {
            this.setState({bool: true});
        }
        if (this.inputs.name === '' || this.inputs.pass === '' && this.state.bool) {
            this.setState({ bool: false });
        }
    }

    setToken(token) {
        this.props.modifyToken(token);
        Router.push('/');
    }
    render() {
        return (
            <div className="container">
                    {console.log(this.props)}
                    <img className="logo" src={logo} /> 
                    <SectionHeader sectionTitle="Seja bem-vindo!"/>
                    <p>Nós sabemos a importância de estar sempre de barriga cheia e o quanto isso pode ajudar no seu dia.</p>
                    <input required placeholder="Email" type="email" onChange={(input) => this.updateName(input)}></input>
                    <input required placeholder="Senha" type="password" onChange={(input) => this.updatePass(input)}></input>
                    <a href="#">RECUPERAR MINHA SENHA {this.props.token}</a>
                    <Button name="ENTRAR" bool={this.state.bool} onClick={ () => {this.setToken(this.inputs.name)}}/>
                    <p className="footer">Infoway Gestão em Saúde ©, 2019.</p>
                    <style jsx>{ loginStyle }</style>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    token: state.AutenticationReducer.token
});

export default connect(mapStateToProps, { modifyToken })(Login);