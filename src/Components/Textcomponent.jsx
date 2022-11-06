import './Textcomponent.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Textcomponent() {
  return (
    <section className='textcomp'>

    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      id="box"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="outlined-required" label="Required" defaultValue="Labeled Outline" required />
      <TextField id="outlined" label="Labeled" placeholder="Labeled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </Box>
    </section>
  );
}
