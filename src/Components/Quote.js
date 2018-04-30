import React, { Component } from 'react';
import { connect } from 'react-redux';
import FileUpload from './FileUpload';
import { quoteFormDataSuccess, quoteFormUploader } from '../Actions/quoteData';
import { Button } from 'react-bootstrap';


class Quote extends Component {

  handleChange = event => {
    this.props.quoteData(event.target.name, event.target.value);
  }

  handleSubmit = () => {
    this.props.quoteUploader('some string', this.props.quotedData, this.props.selectedFile)
    // console.log(this.props.quotedData);
  }

  render() {
    return (
      <div>
        <h1>{this.props.type}</h1>
        <form>
          <label>
            Name:
            <input type="text" name="Name" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Email:
            <input type="text" name="Email" onChange={this.handleChange} />
          </label>
          <br />
          <label>
            Age:
            <input type="text" name="Age" onChange={this.handleChange} />
          </label>
          <FileUpload />
          <Button onClick={this.handleSubmit}>Submit</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    selectedFile: state.selectedFile,
    quotedData: state.quoteFormData
  }
};

const mapDispatchToProps = dispatch => {
  return {
    quoteData: (quoteName, quoteInfo) => dispatch(quoteFormDataSuccess(quoteName, quoteInfo)),
    quoteUploader: (url, quoteData, sourceDoc) => dispatch(quoteFormUploader(url, quoteData, sourceDoc))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Quote);
