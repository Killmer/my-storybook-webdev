/* eslint-disable */
import React, { Component, Fragment } from 'react';
import Modal from './Modal';
import Button from '../button/Button';

class ModalContainer extends Component {
  state = {
    isOpen: false,
  }

  openModal = () => {
    this.setState({ isOpen: true });
  }

  handleSubmit = () => {
    console.log('Submit function!');
    this.setState({ isOpen: false });
  }

  handleCancel = () => {
    console.log('Cancel function!');
    this.setState({ isOpen: false });
  }

  render() {
    return (
      <Fragment>

        <h2><span>1. Base Dialog (Modal) window:</span></h2>
        <Button onClick={this.openModal}>Show modal</Button>
        <Modal
          title="Test Dialog window"
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        >
        <p>Press 'CMD + Option + J' in order to open Console. Then press Submit button</p>
        </Modal>

      </Fragment>
    );
  }
}

export default ModalContainer;
/* eslint-enable */
