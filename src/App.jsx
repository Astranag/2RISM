import React, { useState, useEffect } from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import './App.css'
// import Header from './components/Header'
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map'

function App() {
  
  return (
    <>
    <CssBaseline />
     <Header />
     <Grid container space={3} style = {{ width : '100%'}}> 
     <Grid item xs={12} md={4}>
     {/* <Divider orientation="vertical" flexItem style={{ backgroundColor: 'blue' }} /> */}
              <List/>
              
     </Grid>
     
     <Grid item xs={12} md={8}>
        <Map />
      
</Grid>
     </Grid>
    </>
  )
}

export default App
