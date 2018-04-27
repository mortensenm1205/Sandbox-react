import React from 'react';
import Quote from './Quote';
import Apply from './Apply';

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


export default ModalType;
