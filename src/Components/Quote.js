import React, { Component } from 'react';
import FileUpload from './FileUpload';

class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteInfo: []
    }
  }

  handleChange = event => {
    this.setState({
      quoteInfo: this.state.quoteInfo.concat({ [event.target.name]: event.target.value })
    })
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
            # of Source Languages:
            <select name="Source_Langs" onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <br />
          <label>
            # of Target Languages:
            <select name="Target_Langs" onChange={this.handleChange}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </label>
          <FileUpload />
        </form>
      </div>
    )
  }
}

export default Quote;
