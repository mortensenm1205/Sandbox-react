import React from 'react';
import FileUpload from './FileUpload';
import { Button } from 'react-bootstrap';

const ModalType = props => {
  const modal = props.type === 'Quote' ?
    <Quote type={props.type} />
    :
    <Apply type={props.type} />
  return (
    <div>
      {modal}
    </div>
  )
}

const Quote = props => {
  return (
    <div>
      <h1>{props.type}</h1>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Email:
          <input type="text" />
        </label>
        <br />
        <label>
          # of Source Languages:
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </label>
        <br />
        <label>
          # of Target Languages:
          <select>
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

const Apply = props => {
  return (
    <div>
      <h1>{props.type}</h1>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Email:
          <input type="text" />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" />
        </label>
        <br />
        <label>
          Street:
          <input type="text" />
        </label>
        <label>
          ZIP:
          <input type="text" />
        </label>
        <label>
          City:
          <input type="text" />
        </label>
        <label>
          State:
          <input type="text" />
        </label>
        <label>
          Country:
          <select>
            <option value="usa">United States</option>
            <option value="ger">Germany</option>
            <option value="mex">Mexico</option>
          </select>
        </label>
        <Button>Submit</Button>
      </form>
    </div>
  )
}

export default ModalType;
