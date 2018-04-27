import React from 'react';
import FileUpload from './FileUpload';

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

export default Quote;
