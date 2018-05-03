import React from 'react';

const PortofolioId = (props) => (
  <div>
    <h1>Project</h1>
    <p>{props.match.params.id}</p>
  </div>
);

export default PortofolioId;