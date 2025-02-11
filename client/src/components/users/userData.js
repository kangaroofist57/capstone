import React, { Component } from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit, faEye, faCommentDots } from '@fortawesome/free-solid-svg-icons';

import { secretRoute } from '../../configs/adminID.json';
import StudentFormModal from '../modals/add-student-form';
import StudentModal from '../modals/student-modal';
import EditStudent from '../modals/edit-student-modal';
import RenderTable from './renderTable';
import RenderMobileData from './renderMobileData';

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
            gender: '',
            dob: '',
            address: '',
            contact: '',
            notes: '',
            width: 0,
            height: 0
        }
    }

    componentDidMount = () => {

        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);

        axios.get(`/api/${secretRoute}`).then(response => {
            let userInfo = response.data.find(element => element._id === JSON.parse(localStorage.getItem('userInfo'))._id);
            this.setState({
                students: userInfo.students.length > 0 ? userInfo.students : [{
                    first:'No',
                    middle: 'Students',
                    last: 'Availabe',
                    gender: 'N/A',
                    dob: 'N/A',
                    address: 'N/A',
                    contact: 'N/A',
                    notes: 'N/A'
                }]
            });
        });
    }

    updateWindowDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
      }

    deleteStudent = (index) => {
        let newList = this.state.students;
        newList.splice(index, 1);
        let userInfo =  JSON.parse(localStorage.getItem('userInfo'));
        axios.post('/api/deleteStudent', {
            userInfo,
            newList
        }).then(data => {
            
        });
        window.location.reload({ forcedReload: false });
    }

    renderStudents = () => {
        return this.state.students.map((student, index) => {
            let rng = Math.random() * 10;
            let { first, middle, last, gender, dob, address, contact, notes } = student;
            return (
                <tr key={rng}>
                    <th>{index + 1}</th>
                    <th>{first.length > 20 ? <div>{`${first.slice(0, 20)} `}{<FontAwesomeIcon icon={faCommentDots} />}</div> : first}</th>
                    <th>{middle.length > 20 ? <div>{`${middle.slice(0, 20)} `}{<FontAwesomeIcon icon={faCommentDots} />}</div> : middle}</th>
                    <th>{last.length > 20 ? <div>{`${last.slice(0, 20)} `}{<FontAwesomeIcon icon={faCommentDots} />}</div> : last}</th>
                    <th>{last.gender > 20 ? <div>{`${last.slice(0, 20)} `}{<FontAwesomeIcon icon={faCommentDots} />}</div> : gender}</th>
                    <th>{dob.length > 20 ? <div>{`${dob.slice(0, 20)} `}{<FontAwesomeIcon icon={faCommentDots} />}</div> : dob}</th>
                    <th>{address.length > 20 ? <div>{`${address.slice(0, 20)} `}{<FontAwesomeIcon icon={faCommentDots} />}</div> : address}</th>
                    <th>{contact.length > 20 ? <div>{`${contact.slice(0, 20)} `}{<FontAwesomeIcon icon={faCommentDots} />}</div> : contact}</th>
                    <th>{notes.length > 20 ? <div>{`${notes.slice(0, 20)} `}{<FontAwesomeIcon icon={faCommentDots} />}</div> : notes}</th>
                    <th>
                        <button className='view' onClick={() => this.toggleModal('showStudentModal', student)}>{<FontAwesomeIcon icon={faEye} />}</button>
                        <button className='edit' onClick={() => this.toggleModal('showEditStudentModal', student, index)}>{<FontAwesomeIcon icon={faEdit} />}</button>
                        <button className='delete' student='test' onClick={() => this.deleteStudent(index)}>{<FontAwesomeIcon icon={faTrash} />}</button>
                    </th>
                </tr>
            );
        });
    }

    toggleModal = (type, student, index) => {
        if(this.state[type] === false) {
            this.setState({ [type]: true });
            if(student) this.setState({ student, index });
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
                    {this.state.width > 800 ? <RenderTable toggleModal={this.toggleModal} renderStudents={this.renderStudents} /> : <RenderMobileData toggleModal={this.toggleModal} renderStudents={this.renderStudents} />}
                    {this.state.showModal ? <StudentFormModal dim={{ width: this.state.width, height: this.state.height}} toggleModal={() => this.toggleModal('showModal')} /> : null}
                    {this.state.showStudentModal ? <StudentModal dim={{ width: this.state.width, height: this.state.height}} student={this.state.student} toggleModal={() => this.toggleModal('showStudentModal')} /> : null}
                    {this.state.showEditStudentModal ? <EditStudent dim={{ width: this.state.width, height: this.state.height}} index={this.state.index} student={this.state.student} toggleModal={() => this.toggleModal('showEditStudentModal')} /> : null}
                </div>
            </div>
        )
    }
}