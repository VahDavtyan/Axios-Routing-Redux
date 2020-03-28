import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav> 
      <Link className="navLinks" to="/"><img src='https://image.flaticon.com/icons/svg/2702/2702602.svg'/> </Link>
      <div>
        <Link className="navLinks" to="/about">About</Link>
        <Link className="navLinks" to="/posts">Posts</Link>
      </div>
    </nav>
  );
};

export default Nav;
