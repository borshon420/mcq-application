import { Button, MenuItem, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Online MCQ</h1>
            <TextField 
            id="outlined-basic" 
            label="Name" 
            variant="outlined"
            sx={{m:4}}
            style={{ width: '50%', display: 'flex', margin: 'auto' }} />
            <TextField
            select
            label="Gender"
            variant="outlined"
            sx={{m:4}}
            style={{ width: '50%', display: 'flex', margin: 'auto' }}
          >
            <MenuItem key="Male" value="Male">
              Male
            </MenuItem>
            <MenuItem key="Female" value="Female">
              Female
            </MenuItem>
          </TextField>
            <TextField
            select
            label="Language"
            variant="outlined"
            sx={{m:4}}
            style={{ width: '50%', display: 'flex', margin: 'auto' }}
          >
            <MenuItem key="English" value="english">
              English
            </MenuItem>
          </TextField>
          <Link to="/question">
          <Button
          style={{width: '50%', display: 'flex', margin: 'auto', padding: '15px' }} 
          variant="contained">Start Quiz</Button>
          </Link>
        </div>
    );
};

export default Home;