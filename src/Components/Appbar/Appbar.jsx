import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import "./Appbar.css"

const Appbar = () => {
  return (
    <AppBar position="static">
      <Toolbar className='estiloAppbar'>
        <h1>NUMEROS PRIMOS</h1>
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;