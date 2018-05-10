import React, { Component } from 'react';
import { connect } from 'react-redux';
import { applicationDataSuccess, applicationFormDataUpload } from '../Actions/applicationData';
import { Button, Labels } from '../Styled/index';

class Apply extends Component {

  handleChange = (event) => {
      this.props.appInfo(event.target.name, event.target.value)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.appUpload(this.props.appliedData);
  }

  render() {
    return (
      <div>
        <h1>{this.props.type}</h1>
        <form>
          <Labels>
            Name:
            <input name="Name" type="text" onChange={this.handleChange}/>
          </Labels>
          <Labels>
            Email:
            <input name="Email" type="text" onChange={this.handleChange}/>
          </Labels>
          <Labels>
            Phone:
            <input name="Phone" type="text" onChange={this.handleChange}/>
          </Labels>
          <Labels>
            Street:
            <input name="Street" type="text" onChange={this.handleChange}/>
          </Labels>
          <Labels>
            ZIP:
            <input name="ZIP" type="text" onChange={this.handleChange}/>
          </Labels>
          <Labels>
            City:
            <input name="City" type="text" onChange={this.handleChange}/>
          </Labels>
          <Labels>
            State:
            <input name="State" type="text" onChange={this.handleChange}/>
          </Labels>
          <Labels>
            Country:
            <select name="Country" onChange={this.handleChange}>
              <option>Select a Country...</option>
              <option value="usa">United States</option>
              <option value="ger">Germany</option>
              <option value="mex">Mexico</option>
            </select>
          </Labels>
          <Button onClick={this.handleSubmit}>Submit</Button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    appliedData: state.applicationFormData
  }
};

const mapDispatchToProps = dispatch => {
  return {
    appInfo: (appName, appInfo) => dispatch(applicationDataSuccess(appName, appInfo)),
    appUpload: (data) => dispatch(applicationFormDataUpload(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Apply);
