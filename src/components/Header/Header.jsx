import React from 'react'
import { useState } from 'react'
import Travel from '../utils/TravelAdvisorApi'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.css'



function Header() {



  return (

    <nav className="navbar nav navbar-expand-lg bg-warning " >
  <div className="container-fluid" >
    <NavLink className="navbar-brand nav-link" href="/home" exact to='/'><img src={logo} width="100" height="100" alt="2RISM"/></NavLink>
    <div className="ms-auto nav-tabs " style={{ marginTop: '10px', listStyle: 'none', display: 'flex'}}> 
  <li style={{ marginRight: '10px' }}> 
    <NavLink className="nav-link" activeClassName='active' exact to='/'>Home</NavLink>
  </li>
  <li style={{ marginRight: '10px' }}> 
    <NavLink className="nav-link" activeClassName='active' exact to='/map'>Map</NavLink>
  </li>
  <li style={{ marginRight: '10px' }}> 
    <NavLink className="nav-link" activeClassName='active' exact to='/extra'>Extra</NavLink>
  </li>
</div>
  </div>
</nav>
  )
}

export default Header