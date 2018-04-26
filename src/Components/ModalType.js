import React from 'react';

const ModalType = props => {
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
          Age: 
          <input type="text" />
        </label>
      </form>
    </div>
  )
}

export default ModalType;
