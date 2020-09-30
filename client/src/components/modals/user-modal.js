import React, { Component } from 'react';
import ReactModal from 'react-modal';

ReactModal.setAppElement("#root");

export default class userModal extends Component {
    render() {
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
                <button className="student-form-close" onClick={this.props.toggleUserModal}>close</button>
            </ReactModal>
        )
    }
}