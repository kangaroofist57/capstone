import React, { Component } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export default class RenderMobileData extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    renderSmallerData = () => {
        return this.props.renderStudents().map(trElement => {
            let smaller = trElement.props.children.filter((element, index) =>  index < 4 || index > 8);
            return (
            <tr>{smaller}</tr>
            );
        })
    }

    render() {
        return(
            <table className="student-table">
                <tr>
                    <th colSpan='5'>Student Chart</th>
                </tr>
                <tr className="heading">
                    <th>#</th>
                    <th>First</th>
                    <th>Middle</th>
                    <th>Last</th>
                    <th>
                    <button className='plus' onClick={() => this.props.toggleModal('showModal')}>{<FontAwesomeIcon icon={faPlus} />}</button>
                    </th>
                </tr>
                {this.renderSmallerData()}
        </table>
        )
    }
}