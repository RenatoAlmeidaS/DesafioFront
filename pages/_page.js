import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';

const page = (Page) => {
    return (
        class PageWrapper extends React.Component {
            render() {
                return (
                    <Provider store={createStore(reducers)}>
                        <Page />
                    </Provider>
                )
            }
        }
    )
}
export default page;