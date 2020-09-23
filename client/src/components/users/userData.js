import React, { Component } from 'react';
import axios from 'axios';
import StudentFormModal from '../modals/add-student-form';

export default class UserData extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            students: [],
            showModal: false,
            first: '',
            middle: '',
            last: '',
            dob: '',
            address: '',
            contact: '',
            notes: '',
        }
    }

    componentDidMount = () => {
        axios.get('/api/creds').then(response => {
            let userInfo = response.data.find(element => element._id === JSON.parse(localStorage.getItem('userInfo'))._id);
            // console.log(userInfo)
            this.setState({
                // students: userInfo.students
                students: userInfo.students.length > 0 ? userInfo.students : [{ first: 'No', middle: 'Students', last: 'Availabe' }]
            });
        });
    }

    deleteStudent = (index) => {
        let newList = this.state.students;
        newList.splice(index, 1);
        // return console.log(arr);
        let userInfo =  JSON.parse(localStorage.getItem('userInfo'));
        axios.patch('/api/deleteStudent', {
            userInfo,
            newList
        }).then(data => {
            
        });
        window.location.reload({ forcedReload: false });
    }

    test = () => {
        console.log('test');
    }

    renderStudents = () => {
        let counter = 0;
        return this.state.students.map(student => {
            let rng = Math.random() * 10;
            counter = counter + 1;
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
                        <button student='test' onClick={() => this.deleteStudent(this.state.students.indexOf(student))}>Delete</button>
                    </th>
                </tr>
            );
        });
    }

    toggleModal = () => {
        if(this.state.showModal === false) {
            this.setState({ showModal: true });
        }
        if(this.state.showModal === true) {
            this.setState({ showModal: false });
        }
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
                                <button onClick={this.toggleModal}>Add Student</button>
                            </th>
                        </tr>
                        {this.renderStudents()}
                    </table>
                    {this.state.showModal ? <StudentFormModal toggleModal={this.toggleModal} /> : null}
                </div>
            </div>
        )
    }
}