import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='nav'>
      <div className="nav-container">
        <Link className='link' to='/' style={{ border: 'none', fontSize: '1.3rem' }}><i className="fa-solid fa-mountain-sun"></i>E-commerce</Link>
        <div className="links">
          <Link to='/login' className='link'>Login</Link>
          <Link to='/purchases' className='link'>Purchases</Link>
          <Link to='/' className='link'><i className="fa-solid fa-cart-shopping"></i></Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;