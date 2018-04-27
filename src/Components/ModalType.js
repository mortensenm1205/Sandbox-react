import React from 'react';

const ModalType = props => {
  return (
    <div>
      <h1>{props.type}</h1>
      <div>
        <h2>Type of Form</h2>
        <input type="radio" value="translation" checked={true}/>
        Translation
        <input type="radio" value="interpretation"/>
        Interpretation
      </div>
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

          <input type="text" />
        </label>
      </form>
    </div>
  )
}

export default ModalType;
