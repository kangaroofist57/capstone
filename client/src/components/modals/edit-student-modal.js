import React, { Component } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement("#root");

export default class EditStudent extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount = () => {
        this.setState({
            firstName: this.props.student.first,
            middleName: this.props.student.middle,
            lastName: this.props.student.last,
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

    render() {

        let student = this.props.student;
        
        return(
            <ReactModal isOpen={true} on style={{
                content: {
                    backgroundColor: '#063852',
                    top: "25%",
                    left: '25%',
                    bottom: '25%',
                    right: '25%',
                    borderRadius: '5px',
                }
            }}>
                <button className="student-form-close" onClick={this.props.toggleModal}>close</button>
                <form className='student-form'>

                    <label>first Name</label>
                    <input
                        value={this.state.firstName}
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        onChange={this.changeHandler}
                    />

                    <label>Middle Name</label>
                    <input
                        value={this.state.middleName}
                        type='text'
                        name='middleName'
                        placeholder='Middle Name'
                        onChange={this.changeHandler}
                    />

                    <label>Last Name</label>
                    <input
                        value={this.state.lastName}
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        onChange={this.changeHandler}
                    />

                    <label>Date of Birth</label>
                    <input
                        value={this.state.dob}
                        type='text'
                        name='dob'
                        placeholder='MM-DD-YYY'
                        onChange={this.changeHandler}
                    />

                    <label>Address</label>
                    <input
                        value={this.state.address}
                        type='text'
                        name='address'
                        placeholder='Address'
                        onChange={this.changeHandler}
                    />

                    <label>Contact</label>
                    <input
                        value={this.state.contact}
                        type='text'
                        name='contact'
                        placeholder='Contact'
                        onChange={this.changeHandler}
                    />

                    <label>Notes</label>
                    <textarea
                        value={this.state.notes}
                        type='text'
                        name='notes'
                        placeholder='Notes'
                        onChange={this.changeHandler}
                    />

                    <button onClick={this.addStudent}>Save</button>  {/* stopped here */}

                </form>
            </ReactModal>
        )
    }
}