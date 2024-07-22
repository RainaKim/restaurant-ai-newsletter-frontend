import './Navbar.css'
import logo from '../../assets/2.png'
import menu_icon from '../../assets/menu-icon.png'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll';


const navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', ()=>{
            window.scrollY > 100 ? setSticky(true) : setSticky(false);
        })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = () => {
        mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }
  return (
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
        <img src={logo} alt="" className='logo' />
        {/* <ul className={`nav-bar ${mobileMenu ? '' : 'hide-mobile-menu'}`}>
            <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='program' smooth={true} offset={-230} duration={500}>Program</Link></li>
            <li><Link to='about' smooth={true} offset={-142} duration={500}>About us</Link></li>
            <li><Link to='campus' smooth={true} offset={-220} duration={500}>Campus</Link></li>
            <li><Link to='testimonials' smooth={true} offset={-240} duration={500}>Testimonials</Link></li>
            <li><Link to='contact' smooth={true} offset={-190} duration={500} className='btn'>Contact us</Link></li>
        </ul> */}
        <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default navbar