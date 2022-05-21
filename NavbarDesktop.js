import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import React, {useState} from 'react';
import { Grid, Button } from '@mui/material';
import Logo from './Logo';

function ElevationScroll(props) {
    const { children, window } = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};

const Navbar = ({ ...props }) => {

    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar sx={{}}>
                    <Grid container sx={{p:2, flexDirection:'row', justifyContent:'space-between', flexWrap:'nowrap', backgroundColor:'#1f1f1f', alignItems:'center', top:0, left:0, bottom:0, paddingLeft: '60px', paddingRight: '60px'}}>
                        <Grid>
                            <Logo></Logo>   
                        </Grid>
                        <Grid item sx={{}}>
                            <Grid container sx={{}}>
                                <Grid item>
                                    <Button sx={{color:'#ededed', borderRadius:'40px'}}>Services</Button>
                                </Grid>
                                <Grid item sx={{mx:5}}>
                                    <Button sx={{color:'#ededed', borderRadius:'40px'}}>Work</Button>
                                </Grid>
                                <Grid item>
                                    <Button sx={{color:'#ededed', borderRadius:'40px'}}>About</Button>
                                </Grid>
                                <Button sx={{color:'#1f1f1f', backgroundColor:'#ededed', borderRadius:'40px', marginLeft:'30px', marginRight:'10px', paddingLeft:'1em', paddingRight:'1em'}}>Contact</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </AppBar>
            </ElevationScroll>
            <Toolbar />
        </React.Fragment>
    );
}

export default Navbar