import React, { Component } from 'react';
import ReactModal from 'react-modal';
import moment from 'moment';

ReactModal.setAppElement("#root");

export default class StudentModal extends Component {

    constructor(props) {
        super(props)
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
                <div className='student-container'>
                    <div className="name-container">
                        <div>{student.first}</div>
                        <div>{student.middle}</div>
                        <div>{student.last}</div>
                    </div>
                    <div>{student.dob}{isNaN(moment().diff(student.dob, 'years')) ? null : ` Age: ${moment().diff(student.dob, 'years')}`}</div>
                    <div>{student.address}</div>
                    <div>{student.contact}</div>
                    <textarea
                        className="student-modal-notes"
                        readOnly
                        value={student.notes}
                    />
                </div>
            </ReactModal>
        )
    }
}