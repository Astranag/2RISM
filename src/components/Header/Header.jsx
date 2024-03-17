// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


import useStyles from './styles.js';


// function Header() {
  const Header = ()  => {
  // const Header = ({ onPlaceChanged, onLoad }) => {

  const classes = useStyles();


  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Typography variant="h5" className={classes.title}>
        Travel Planner
        </Typography>


        
        <Box display="flex">
          <Typography variant="h6" className={classes.title}>
          {/* <div className="container-fluid">
    <a className="navbar-brand" href="#">Travel planner</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">TBC</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">TBC</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">TBC</a>
        </li>
        
        
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div> */}
          </Typography>
          {/* <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}> */}
       
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />
            </div>
          
          {/* </Autocomplete> */}
        </Box>
        </Toolbar>
  {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
  
</nav> */}
 </AppBar>
 );
};

export default Header;