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
                    <div className="data-container">
                        <div className='data-title'>Full Name:</div>
                        <div>{student.first}</div>
                        <div>{student.middle}</div>
                        <div>{student.last}</div>
                    </div>
                    <div className='data-container'>
                        <div className='data-title'>Date Of Birth:</div>
                        <div>{student.dob}</div>
                    </div>
                    <div className='data-container'>
                        <div className='data-title'>Age:</div>
                        <div>
                            {isNaN(moment().diff(student.dob, 'years'))
                            ?
                            null
                            :
                            <div>{moment().diff(student.dob, 'years')}</div>}
                        </div>
                    </div>
                    <div className='data-container'>
                        <div className='data-title'>Address:</div>
                        <div>{student.address}</div>
                    </div>
                    <div className='data-container'>
                        <div className='data-title'>Contact:</div>
                        <div>{student.contact}</div>
                    </div>
                    <div className='data-title'>Notes:</div>
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