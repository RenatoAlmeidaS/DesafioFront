import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
    clientsStyle
} from '../static/css'; 

import { Photo } from '../components'
import { alterClients } from './../reducers/MakeRequestReducer/MakeRequestActions';


class Clients extends Component {
    selectClient(client) {
        this.props.clients.map((e) => {
            if(e.id === client.id) {
                e.selected = !e.selected;
                if(e.selected === true) {
                    this.props.request.clients.push(client);
                    return ;
                }
                else {
                    this.props.request.clients.map((cli, position) => {
                        if(cli.id === client.id) {
                            this.props.request.clients.splice(position, 1);
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
                        <div className='client hover' onClick={() => { this.selectClient(client); this.props.func() }}>
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

export default connect(mapStateToProps, { alterClients })(Clients);