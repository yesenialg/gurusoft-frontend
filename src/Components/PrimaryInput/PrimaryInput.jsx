import React from 'react';
import './PrimaryInput.css';
import { TextField } from '@mui/material';

const PrimaryInput = (props) => {

  return (
    <TextField 
        id="outlined-basic" 
        className="estiloInput"
        label={props.text}
        variant="outlined"
        margin="normal" 
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        />   
  );
};

export default PrimaryInput;