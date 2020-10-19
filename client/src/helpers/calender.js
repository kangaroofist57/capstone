import React, { Component } from 'react';

export default class Calender extends Component {
    constructor() {
        super()

        this.state = {
            
        };
    }

    getMonths = () => {
        let months = [
            'January',
            'Feburary',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        return months.map((month, index) => (
            <option value={index+1}>{month}</option>
        ))
    }

    getDays = () => {
        let dayEnd = 31;
        let days = [];
        for(let i = 1; i <= dayEnd; i++) {
            days.push(
                <option value={i}>{i}</option>
            );
        }

        return days;
    }

    getYears = () => {
        let yearsEnd = new Date().getFullYear();
        let years = [];
        for(let i = 1900; i <= yearsEnd; i++) {
            years.push(<option value={i}>{i}</option>);
        }

        return years
    }

    render() {
        return(
            <div>
                <select onChange={this.props.dateHandler} name='month'>
                    {this.getMonths()}
                </select>
                <select onChange={this.props.dateHandler} name='day'>
                    {this.getDays()}
                </select>
                <select onChange={this.props.dateHandler} name='year'>
                    {this.getYears()}
                </select>
            </div>
        )
    }
}