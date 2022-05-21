import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import React, {useState} from 'react';
import { Grid, Button } from '@mui/material';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';



const Home = ({ ...props }) => {

    return (
        <React.Fragment>
            <CssBaseline />
            <Grid container sx={{width:'100%',height:'100%', flexDirection:'column'}}>
                <Grid item sx={{}}>
                    <Typography variant="h1" component="h1" sx={{fontWeight:'bold', color:'red'}}>Let's create something together.</Typography>
                </Grid>
                <Grid>
                    <Button>New Project</Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Home