import React from 'react';
import { Link } from 'react-router-dom';

const Topbar = () => {
  return (
    <div className='topbar'>
      <ul className='links'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to=''></Link></li>
        <li><Link to=''></Link></li>
        <li><Link to=''></Link></li>
      </ul>
    </div>
  );
}

export default Topbar;
