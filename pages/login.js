import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './_page';

import { modifyToken } from '../reducers/AutenticationReducer/AutenticationActions';

class Login extends Component {
    render() {
        return (
            <div>
                Pagina de Login
                <p>
                    token : { this.props.token }
                </p>
                <style jsx>{`div {background-color: blue;}`}</style>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    token: state.AutenticationReducer.token
});

export default Page(connect(mapStateToProps, { modifyToken })(Login));