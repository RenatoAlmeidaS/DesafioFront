import React, { Component } from 'react';
import { connect } from 'react-redux';
import Page from './_page';
import Router from 'next/router';

import { indexStyle } from '../static/css'

import { modifyToken } from '../reducers/AutenticationReducer/AutenticationActions';

class Index extends Component {
    componentDidMount() {
        if(this.props.token === '') {
            Router.push('/login');
        }
    }
    render() {
        return (
            <div>
                Token { this.props.token }
                <style jsx>{ indexStyle }</style>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    token: state.AutenticationReducer.token
});

export default Page(connect(mapStateToProps, { modifyToken })(Index));