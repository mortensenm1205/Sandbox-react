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
        {this.props.type === "Quote" ? (
            <Button full onClick={this.handleShow}>
              Click for a Quote today!
            </Button>
          ) : (
            <Button full onClick={this.handleShow}>
              Apply for Translation!
            </Button>
          )
        }

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal Heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalType type={this.props.type}/>
          </Modal.Body>
        </Modal>
      </ModalDiv>
    );
  }
}

export default BaseModal;
