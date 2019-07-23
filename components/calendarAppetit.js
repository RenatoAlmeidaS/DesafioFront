import React, { Component } from 'react';
import { connect } from 'react-redux';
import Calendar from 'react-calendar/dist/entry.nostyle';
import moment from 'moment'; 
import { modifyDate } from '../reducers/MakeRequestReducer/MakeRequestActions'

import {
    calendarAppetitStyle
} from '../static/css';

const calendar = require('../static/imgs/calendar.svg')

class CalendarAppetit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            calendar: false,
            calenVal: ''
        }
    }
    componentWillMount() {
        const momentDate = moment();
        this.props.request.date = momentDate;
    }
    render() {
        return (
            <div>
                <div className='calendar' onClick={() => { this.setState({ calendar: !this.state.calendar }) }}>
                    <p className='placeholder'>Data do pedido</p>
                    <p>{this.props.request.date.format('DD/MM/YYYY')}</p>
                    <img src={calendar} />
                </div>
                <div className={this.state.calendar ? 'calendarAppetit' : 'hidden'}>
                    <div className='data'>
                        <p>
                            {this.props.request.date.year()}
                        </p>
                        <p>
                            {`${this.props.request.date.format('D')} de ${this.props.request.date.locale('pt').format('MMMM')}`}
                        </p>
                    </div>
                    <Calendar
                        locale={'pt-BR'}
                        onChange={(e) => {this.state.calenVal=e}}
                        value={new Date()}

                    />
                    <div className='choices'>
                        <div onClick={() => { this.setState({ calendar: false }) }}>
                        CANCELAR
                    </div>
                        <div onClick={() => { if(this.state.calenVal !== '') {this.props.request.date = moment(this.state.calenVal)} this.setState({calendar: false})}}>
                        ESCOLHER
                    </div>
                    </div>
                </div>
                <style jsx>{calendarAppetitStyle}</style>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    request: state.MakeRequestReducer.request,

});

export default connect(mapStateToProps, { modifyDate })(CalendarAppetit);