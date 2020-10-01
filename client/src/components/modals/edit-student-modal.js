import React, { Component } from 'react';
import ReactModal from 'react-modal';
import axios from 'axios';

ReactModal.setAppElement("#root");

export default class EditStudent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    componentDidMount = () => {
        this.setState({
            first: this.props.student.first,
            middle: this.props.student.middle,
            last: this.props.student.last,
            gender: this.props.student.gender,
            dob: this.props.student.dob,
            address: this.props.student.address,
            contact: this.props.student.contact,
            notes: this.props.student.notes,
        });
    }

    changeHandler = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({ [name]: value });
    }

    editStudent = () => {
        // let index = this.props.index;
        let oldList = JSON.parse(localStorage.getItem('userInfo')).students;
        // let changedStudent = oldList[index] = this.state;
        // return console.log(oldList);
        axios.patch('/api/editStudent', {
            userInfo: JSON.parse(localStorage.getItem('userInfo')),
            oldList
        }).catch(err => {
            console.log('axios err', err);
        });
        window.location.reload({ forcedReload: false });
    }

    render() {

        // let student = this.props.student;
        
        return(
            <ReactModal isOpen={true} on style={{
                content: {
                    backgroundColor: '#063852',
                    top: this.props.dim.width > 700 ? "20%" : '10%',
                    left: this.props.dim.width > 700 ? "25%" : '0%',
                    bottom: this.props.dim.width > 700 ? "20%" : '10%',
                    right: this.props.dim.width > 700 ? "25%" : '0%',
                    borderRadius: '5px',
                }
            }}>
                <button className="student-form-close" onClick={this.props.toggleModal}>close</button>
                <form className='student-form'>

                    <label>first Name</label>
                    <input
                        value={this.state.first || ''}
                        type='text'
                        name='first'
                        placeholder='First Name'
                        onChange={this.changeHandler}
                    />

                    <label>Middle Name</label>
                    <input
                        value={this.state.middle || ''}
                        type='text'
                        name='middle'
                        placeholder='Middle Name'
                        onChange={this.changeHandler}
                    />

                    <label>Last Name</label>
                    <input
                        value={this.state.last || ''}
                        type='text'
                        name='last'
                        placeholder='Last Name'
                        onChange={this.changeHandler}
                    />

                    <label>Gender</label>
                    <input
                        value={this.state.gender || ''}
                        type='text'
                        name='gender'
                        placeholder='Gender'
                        onChange={this.changeHandler}
                    />

                    <label>Date of Birth</label>
                    <input
                        value={this.state.dob || ''}
                        type='text'
                        name='dob'
                        placeholder='MM-DD-YYY'
                        onChange={this.changeHandler}
                    />

                    <label>Address</label>
                    <input
                        value={this.state.address || ''}
                        type='text'
                        name='address'
                        placeholder='Address'
                        onChange={this.changeHandler}
                    />

                    <label>Contact</label>
                    <input
                        value={this.state.contact || ''}
                        type='text'
                        name='contact'
                        placeholder='Contact'
                        onChange={this.changeHandler}
                    />

                    <label>Notes</label>
                    <textarea
                        value={this.state.notes || ''}
                        type='text'
                        name='notes'
                        placeholder='Notes'
                        onChange={this.changeHandler}
                    />

                    <button onClick={this.editStudent}>Save</button>  {/* stopped here */}

                </form>


            </ReactModal>
        )
    }
}