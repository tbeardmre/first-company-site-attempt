import { Box, BoxProps } from '@mui/material';
import React from 'react';

// ----------------------------------------------------------------------

const Logo = React.forwardRef(({ ...other }, ref) => {
  return (
    <Box
      alignSelf="center"
      flex="0 0"
      component="img"
      alt="logo"
      src="images/Logo.png"
      maxHeight={50}
      {...other}
    />
  );
});

export default Logo;