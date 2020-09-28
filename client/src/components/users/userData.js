import React, { Component } from 'react';
import axios from 'axios';

import StudentFormModal from '../modals/add-student-form';
import StudentModal from '../modals/student-modal';
import EditStudent from '../modals/edit-student-modal';

export default class UserData extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            students: [],
            showModal: false,
            showStudentModal: false,
            showEditStudentModal: false,
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
                students: userInfo.students.length > 0 ? userInfo.students : [{
                    first:'No',
                    middle: 'Students',
                    last: 'Availabe',
                    dob: 'N/A',
                    address: 'N/A',
                    contact: 'N/A',
                    notes: 'N/A'
                }]
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
        return(
            <div>suh dude</div>
        )
    }

    renderStudents = () => {
        return this.state.students.map((student, index) => {
            let rng = Math.random() * 10;
            let { first, middle, last, dob, address, contact, notes } = student;
            // console.log(student)
            return (
                <tr key={rng}>
                    <th>{first.length > 20 ? `${first.slice(0, 20)}...` : first}</th>
                    <th>{middle.length > 20 ? `${middle.slice(0, 20)}...` : middle}</th>
                    <th>{last.length > 20 ? `${last.slice(0, 20)}...` : last}</th>
                    <th>{dob.length > 20 ? `${dob.slice(0, 20)}...` : dob}</th>
                    <th>{address.length > 20 ? `${address.slice(0, 20)}...` : address}</th>
                    <th>{contact.length > 20 ? `${contact.slice(0, 20)}...` : contact}</th>
                    <th>{notes.length > 20 ? `${notes.slice(0, 20)}...` : notes}</th>
                    <th>
                        <button onClick={() => this.toggleModal('showStudentModal', student)}>View</button>
                        <button onClick={() => this.toggleModal('showEditStudentModal', student)}>Edit</button> {/* stopped here*/}
                        <button student='test' onClick={() => this.deleteStudent(index)}>Delete</button>
                    </th>
                </tr>
            );
        });
    }

    toggleModal = (type, student) => {
        console.log(type)
        if(this.state[type] === false) {
            this.setState({ [type]: true });
            if(student) this.setState({ student });
        }
        if(this.state[type] === true) {
            this.setState({ [type]: false });
            if(student) this.setState({ student: undefined });
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
                                <button onClick={() => this.toggleModal('showModal')}>Add Student</button>
                            </th>
                        </tr>
                        {this.renderStudents()}
                    </table>
                    {this.state.showModal ? <StudentFormModal toggleModal={() => this.toggleModal('showModal')} /> : null}
                    {this.state.showStudentModal ? <StudentModal student={this.state.student} toggleModal={() => this.toggleModal('showStudentModal')} /> : null}
                    {this.state.showEditStudentModal ? <EditStudent student={this.state.student} toggleModal={() => this.toggleModal('showEditStudentModal')} /> : null}
                    {/* <StudentModal /> */}
                </div>
            </div>
        )
    }
}