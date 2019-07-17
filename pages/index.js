import React, { Component } from 'react';

import { indexStyle } from '../assets/css'

export default class Index extends Component {
    render() {
        return (
            <div>
                Teste dev
                <style jsx>{ indexStyle }</style>
            </div>
        )
    }
}