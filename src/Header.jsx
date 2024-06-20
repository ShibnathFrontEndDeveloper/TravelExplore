import './Header.css';
// import {Link, NavLink} from 'react-router-dom';
// import { FaAlignJustify } from "react-icons/fa";
// import { useRef } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

import { useEffect } from 'react';
import Logo from '../public/images/newwebsolvelogo.png'



function Header() {
  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
        window.removeEventListener('scroll', isSticky);
    };
});

       
/* Method that will fix header after a specific scrollable */
       const isSticky = (e) => {
            const header = document.querySelector('.header');
            const scrollTop = window.scrollY;
            scrollTop >= 150 ? header.classList.add('is-sticky') : header.classList.remove('is-sticky');
        };
  // const navRef = useRef();
  // const showNavbar =()=>{
  //   navRef.current.classList.toggle('responsive_nav');
  // }
  return (
    <header className="header">
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home"><img src={Logo} alt="" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto flex-end">
              <NavLink to={'/'}>Home</NavLink>
              <NavLink to={'/About/'}>About</NavLink>
              <NavLink to={'/Contact/'}>Contact</NavLink>
              <NavLink to={'/Gallery/'}>Gallery</NavLink>
              <NavLink to={'/Login/'}>Login</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header