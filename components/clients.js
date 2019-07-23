import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    clientsStyle
} from '../static/css'; 

import { Photo } from '../components'
import { alterClients, addClientToRequest, removeClientFromRequest } from './../reducers/MakeRequestReducer/MakeRequestActions';
import { markClient, unmarkClient } from './../reducers/MainPageReducer/MainPageActions';


class Clients extends Component {
    selectClient(client) {
        this.props.clients.map((e) => {
            if(e.id === client.id) {
                if (!e.selected) {
                    this.props.markClient(e.id);
                    this.props.addClientToRequest(client);
                    return ;
                }
                else {
                    this.props.unmarkClient(e.id);
                    this.props.request.clients.map((cli, position) => {
                        if(cli.id === client.id) {
                            this.props.removeClientFromRequest(position);
                            return;
                        }
                    })
                }
            }
        })
    }

    renderSelect() {
        return (
            <div>
                {this.props.clients.map((client) => (
                    <div key={client.id}>
                        <div className='client hover' onClick={() => { this.selectClient(client);}}>
                            <Photo marked={client.selected} url={client.photo} />
                            <p>
                                {client.name}
                            </p>
                        </div>
                        <div className='separator' />
                    </div>
                ))
                }
                <style jsx>{clientsStyle}</style>
            </div>
        )   
    }

    renderShow() {
        return (
            <div>
                {this.props.request.clients.map((client) => (
                    <div key={client.id}>
                        <div className='client'>
                            <Photo marked={false} url={client.photo} />
                            <p>
                                {client.name}
                            </p>
                        </div>
                        <div className='separator' />
                    </div>
                ))
                }
                <style jsx>{clientsStyle}</style>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.onlyShow ? this.renderShow() : this.renderSelect() }
            </div >
        )
    }
}

const mapStateToProps = state => ({
clients: state.MainPageReducer.clients,
request: state.MakeRequestReducer.request
});

export default connect(mapStateToProps, { alterClients, addClientToRequest, removeClientFromRequest, markClient, unmarkClient  })(Clients);