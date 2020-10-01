import React, { Component } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement("#root");

export default class userModal extends Component {
    constructor() {
        super();

        this.state = {

        }
    }
    render() {
        return(
            <ReactModal isOpen={true} on style={{
                content: {
                    backgroundColor: '#063852',
                    top: this.props.dim.width > 700 ? '25%' : '10%',
                    left: this.props.dim.width > 700 ? '25%' : '0%',
                    bottom: this.props.dim.width > 700 ? '25%' : '10%',
                    right: this.props.dim.width > 700 ? '25%' : '0%',
                    borderRadius: '5px',
                }
            }}>
                <button className="student-form-close" onClick={this.props.toggleUserModal}>close</button>
                <textarea
                    className='user-text-area'
                    value={JSON.stringify(this.props.user, null, 4)}
                    readOnly
                />
            </ReactModal>
        )
    }
}