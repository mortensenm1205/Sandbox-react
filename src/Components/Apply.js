import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Apply extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appInfo: []
    }
  }

  handleChange = (event) => {
    this.setState({
      appInfo: this.state.appInfo.concat({ [event.target.name]: event.target.value })
    })
  }

  handleClick = () => {
    console.log(this.state.appInfo);
  }

  render() {
    return (
      <div>
        <h1>{this.props.type}</h1>
        <form>
          <label>
            Name:
            <input name="Name" type="text" onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Email:
            <input name="Email" type="text" onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Phone:
            <input name="Phone" type="text" onChange={this.handleChange}/>
          </label>
          <br />
          <label>
            Street:
            <input name="Street" type="text" onChange={this.handleChange}/>
          </label>
          <label>
            ZIP:
            <input name="ZIP" type="text" onChange={this.handleChange}/>
          </label>
          <label>
            City:
            <input name="City" type="text" onChange={this.handleChange}/>
          </label>
          <label>
            State:
            <input name="State" type="text" onChange={this.handleChange}/>
          </label>
          <label>
            Country:
            <select>
              <option value="usa">United States</option>
              <option value="ger">Germany</option>
              <option value="mex">Mexico</option>
            </select>
          </label>
          <Button onClick={this.handleClick}>Submit</Button>
        </form>
      </div>
    )
  }
}

export default Apply;
