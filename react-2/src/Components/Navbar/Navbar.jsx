import React,{useEffect, useState} from 'react';
import './Navbar.css' 
import logo from '../../assets/logo.png'
import menu_icon from '../../assets/menu-icon.png'

const Navbar = () => {
  const [sticky, setSticky]=useState(false);
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50? setSticky(true):setSticky(false)
    })
  },[]);
  const [mobileMenu, setmobileMenu]=useState(false)
  const toggleMenu=()=>{
    mobileMenu?setmobileMenu(false):setmobileMenu(true)
  }
  return (
   
    <nav className={`container ${sticky? 'dark-nav':""}`}>
        <img src={logo} alt=""  className='logo '/>
        <ul className={mobileMenu?'': 'hide-mobile-menu'}>
            <li>Home </li>
            <li>Programs</li>
            <li>About US</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
        <img src={menu_icon} alt=""  className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar