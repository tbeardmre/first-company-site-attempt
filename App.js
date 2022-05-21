import './App.css';
import React from 'react';
import Navbar from './components/NavbarDesktop';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Home from './components/Home'

const App = ({...props}) => {
    
  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar {...props}>
      </Navbar>
      <Toolbar />
      <Home>
      </Home>
    </React.Fragment>
  )
}

export default App;
