import './Navbar.css';
import logo from '../../assets/2.png';
import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`container navbar ${sticky ? 'scrolled' : ''}`}>
      <img src={logo} alt="Logo" className="logo" />
    </nav>
  );
};

export default Navbar;
