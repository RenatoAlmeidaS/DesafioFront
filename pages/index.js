import React, { Component } from 'react';
import { connect } from 'react-redux';
import Router from 'next/router';

import { indexStyle } from '../static/css'

import { SectionHeader, Button, SideMenu } from '../components'

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
                <style jsx>{ indexStyle }</style>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    token: state.AutenticationReducer.token
});

export default connect(mapStateToProps, { modifyToken })(Index);