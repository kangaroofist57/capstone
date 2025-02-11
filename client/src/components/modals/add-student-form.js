import React, { Component } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';

import { secretRoute } from '../../configs/adminID.json';
import Calender from '../../helpers/calender';

ReactModal.setAppElement("#root");

export default class StudentFormModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            month: 1,
            day: 1,
            year: 1900
        }
    }

    componentDidMount = () => {
        axios.get(`/api/${secretRoute}`).then(response => {
            let userInfo = response.data.find(user => user._id === JSON.parse(localStorage.getItem('userInfo'))._id)
            this.setState({
                students: userInfo.students
            });
        });
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    addStudent = () => {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        axios.post('/api/addStudent', {
            userInfo,
            students: this.state.students,
            info: {
                first: this.state.firstName || '',
                middle: this.state.middleName || '',
                last: this.state.lastName || '',
                gender: this.state.gender || '',
                dob: this.state.dob || '',
                address: this.state.address || '',
                contact: this.state.contact || '',
                notes: this.state.notes || '',
            }
        });
    }

    dateHandler = async(event) => {
        let name = event.target.name;
        let value = parseInt(event.target.value) ;
        await this.setState({
            [name]: value,
        });
        await this.setState({
            dob: `${this.state.month}/${this.state.day}/${this.state.year}`
        });
        
    }
    
    render() {
        return(
            <ReactModal on style={{
                content: {
                    backgroundColor: '#063852',
                    top: this.props.dim.width > 700 ? '25%' : '10%',
                    left: this.props.dim.width > 700 ? '25%' : '0%',
                    bottom: this.props.dim.width > 700 ? '25%' : '10%',
                    right: this.props.dim.width > 700 ? '25%' : '0%',
                    borderRadius: '5px',
                }
            }} isOpen={true}>
                <button className="student-form-close" onClick={this.props.toggleModal}>close</button>
                <form className='student-form'>

                    <label>first Name</label>
                    <input
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        onChange={this.changeHandler}
                    />

                    <label>Middle Name</label>
                    <input
                        type='text'
                        name='middleName'
                        placeholder='Middle Name'
                        onChange={this.changeHandler}
                    />

                    <label>Last Name</label>
                    <input
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        onChange={this.changeHandler}
                    />

                    <label>gender</label>
                    <input
                        type='text'
                        name='gender'
                        placeholder='Gender'
                        onChange={this.changeHandler}
                    />

                    <label>Date of Birth</label>
                    <Calender dateHandler={this.dateHandler} />

                    <label>Address</label>
                    <input
                        type='text'
                        name='address'
                        placeholder='Address'
                        onChange={this.changeHandler}
                    />

                    <label>Contact</label>
                    <input
                        type='text'
                        name='contact'
                        placeholder='Contact'
                        onChange={this.changeHandler}
                    />

                    <label>Notes</label>
                    <textarea
                        type='text'
                        name='notes'
                        placeholder='Notes'
                        onChange={this.changeHandler}
                    />

                    <button onClick={this.addStudent}>Save</button>

                </form>
            </ReactModal>
        )
    }
}