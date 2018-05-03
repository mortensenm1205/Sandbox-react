import React, { Component } from 'react';
import { Button, ModalDiv } from '../Styled/index';
import { Modal } from 'react-bootstrap';
import ModalType from './ModalType';

class BaseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({ show: false })
  }

  handleShow() {
    this.setState({ show: true })
  }

  render() {
    return (
      <ModalDiv>
        <Button full onClick={this.handleShow}>
          {this.props.type}
        </Button>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalType type={this.props.type}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>
        </Modal>
      </ModalDiv>
    );
  }
}

export default BaseModal;
