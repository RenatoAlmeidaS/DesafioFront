import App, { Container } from 'next/app';
import Head from 'next/head';
import React from 'react';
import Router from 'next/router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from '../reducers';
import '../static/css/calendar.css'

export default class MyApp extends App {

    static async getInitialProps({ Component, router, ctx }) {
        let pageProps = {}
        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }
        return { pageProps }
    }

    render() {
        const { Component, pageProps } = this.props
        return (
            <Container style={{ height: '100%' }}>
                <Head>
                    <title>Appetit</title>
                </Head>
                <Provider store={createStore(reducers)}>
                        <Component {...pageProps} />
                </Provider>
            </Container>
        );
    }
}
