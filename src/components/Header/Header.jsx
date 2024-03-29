import React from 'react'
import { useState } from 'react'
import Travel from '../utils/TravelAdvisorApi'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.css'
import { Navbar, Nav} from 'react-bootstrap';



function Header() {
  return (
    <Nav className="navbar nav navbar-expand-lg bg-warning justify-content-center" >
  <div className="container-fluid" >
    <NavLink className="navbar-brand nav-link" href="/home" to='/'><img src={logo} width="100" height="100" alt="2RISM"/></NavLink>
    <div className="nav-tabs " style={{ marginTop: '10px', listStyle: 'none', display: 'flex'}}> 
  <li style={{ marginRight: '10px' }}> 
    <NavLink className="nav-link" activeclassname='active' to='/'>Home</NavLink>
  </li>
  <li style={{ marginRight: '10px' }}> 
    <NavLink className="nav-link" activeclassname='active' to='/map'>Map</NavLink>
  </li>
  <li style={{ marginRight: '10px' }}> 
    <NavLink className="nav-link" activeclassname='active' to='/extra'>Extra</NavLink>
  </li>
</div>
  </div>
</Nav>
  )
}

export default Header