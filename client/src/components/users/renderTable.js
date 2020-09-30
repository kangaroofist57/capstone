import React,  { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class RenderTable extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return(
            <table className="student-table">
            <tr className="heading">
                <th>#</th>
                <th>First</th>
                <th>Middle</th>
                <th>Last</th>
                <th>Date of Birth</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Notes</th>
                <th>
                <button className='plus' onClick={() => this.props.toggleModal('showModal')}>{<FontAwesomeIcon icon={faPlus} />}</button>
                </th>
            </tr>
            {this.props.renderStudents()}
        </table>
        )
    }
}