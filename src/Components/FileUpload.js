import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fileSelectedSuccess, fileUploader } from '../Actions/fileUpload';
import { Button } from 'react-bootstrap';

class FileUpload extends Component {

  handleSubmit = () => {
    this.props.fileUploader('Some string', this.props.selectedFile);
  }

  render() {
    return (
      <div>
        <label>
          Upload your Source Document:
          <input type="file" onChange={(event) => {this.props.fileSelected(event.target.files[0])}}/>
        </label>
        <Button onClick={this.handleSubmit}>Submit</Button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedFile: state.selectedFile
  }
};

const mapDispatchToProps = dispatch => {
  return {
    fileSelected: (file) => dispatch(fileSelectedSuccess(file)),
    fileUploader: (url, file) => dispatch(fileUploader(url, file))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
