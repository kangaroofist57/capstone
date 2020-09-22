import React, { Component } from 'react';
import axios from 'axios';

export default class UserData extends Component {
    constructor() {
        super();
        
        this.state = {
            students: []
        }
    }

    componentDidMount = () => {
        axios.get('/api/creds').then(response => {
            let userInfo = response.data.find(element => element._id === JSON.parse(localStorage.getItem('userInfo'))._id);
            this.setState({
                // students: userInfo.students
                students: userInfo.students.length > 0 ? userInfo.students : [{ first: 'No', middle: 'Students', last: 'Availabe' }]
            });
        });
    }

    renderStudents = () => {
        return this.state.students.map(student => {
            let rng = Math.random() * 10;
            return (
                <tr key={rng}>
                    <th>{student.first}</th>
                    <th>{student.middle}</th>
                    <th>{student.last}</th>
                    <th>{student.dob}</th>
                    <th>{student.address}</th>
                    <th>{student.contact}</th>
                    <th>{student.notes}</th>
                    <th>
                        <button>Edit</button>
                        <button>Delete</button>
                    </th>
                </tr>
            )
        });
    }

    render() {
        return(
            <div className="data-body">
                <div className="student-chart">
                    <table className="student-table">
                        <tr className="heading">
                            <th>First</th>
                            <th>Middle</th>
                            <th>Last</th>
                            <th>Date of Birth</th>
                            <th>Address</th>
                            <th>Contact</th>
                            <th>Notes</th>
                            <th>
                                <button>Add Student</button>
                            </th>
                        </tr>
                        {this.renderStudents()}
                    </table>
                </div>
            </div>
        )
    }
}