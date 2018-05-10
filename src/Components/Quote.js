import React, { Component } from 'react';
import { connect } from 'react-redux';
import { quoteFormDataSuccess, quoteFormUploader } from '../Actions/quoteData';
import { Button, Labels } from '../Styled/index';

class Quote extends Component {

  handleChange = event => {
    this.props.quoteData(event.target.name, event.target.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.quoteUploader(this.props.quotedData);
  }

  render() {
    return (
      <div>
        <h1>{this.props.type}</h1>
        <form>
          <Labels>
            Name:
            <input type="text" name="Name" onChange={this.handleChange} />
          </Labels>
          <Labels>
            Email:
            <input type="text" name="Email" onChange={this.handleChange} />
          </Labels>
          <Labels>
            # of Source Languages:
            <select name="Source_Lang" onChange={this.handleChange}>
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </Labels>
          <Labels>
            # of Target Languages:
            <select name="Target_Lang" onChange={this.handleChange}>
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
            </select>
          </Labels>
          <Labels>
            Upload your Source Document:
            <input type="file" name="Source_doc" onChange={this.handleChange}/>
          </Labels>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    quotedData: state.quoteFormData
  }
};

const mapDispatchToProps = dispatch => {
  return {
    quoteData: (quoteName, quoteInfo) => dispatch(quoteFormDataSuccess(quoteName, quoteInfo)),
    quoteUploader: (quoteData) => dispatch(quoteFormUploader(quoteData))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Quote);
