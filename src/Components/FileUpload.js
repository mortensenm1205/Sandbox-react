import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fileSelectedSuccess } from '../Actions/quoteData';

class FileUpload extends Component {

  render() {
    return (
      <div>
        <label>
          Upload your Source Document:
          <input type="file" onChange={(event) => {this.props.fileSelected(event.target.files[0])}}/>
        </label>
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
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(FileUpload);
