import React from 'react'
import { useState } from 'react'
import Travel from '../utils/TravelAdvisorApi'
import {NavLink, Link} from 'react-router-dom'
import logo from '../../assets/logo.png'
import './header.css'



function Header() {



  return (
    <nav className="navbar nav navbar-expand-lg bg-warning">
  <div className="container-fluid" >
    <a className="navbar-brand" href="#"><img src={logo} width="100" height="100" alt="2RISM"/></a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
    </button> */}
    <div className="ms-auto nav-tabs" style={{ marginTop: '10px', listStyle: 'none', display: 'flex'}}> 
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

    {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" activeClassName='active' exact to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='active' exact to='/map'>Map</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" activeClassName='active' exact to='/extra'>Extra</NavLink>
        </li>
      </ul> */}
    {/* </div> */}
  </div>
</nav>
  )
}

export default Header