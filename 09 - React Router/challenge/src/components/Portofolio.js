import React from 'react';
import { Link } from 'react-router-dom';

const Portofolio = () => (
  <div>
    My Projects:
    <ul>
      <li><Link to='/portofolio/1'>Item One</Link></li>
      <li><Link to='/portofolio/2'>Item Two</Link></li>
    </ul>
  </div>
);

export default Portofolio;