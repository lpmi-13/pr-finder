import React from 'react';

// show the raw text diff
const DiffModal = ({ diff, onClickModal }) => {
      return (
      <div className="diffModal" onClick={onClickModal}>{diff}</div>
      )
}

export default DiffModal;