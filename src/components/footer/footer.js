import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';





function Footer() {
  return (
    <AppBar position="static" color="primary">
      <Container maxWidth="md">
        <Toolbar>
          <Typography variant="body1">
            <Box textAlign="right">
              ILikeStores@Stores.com
              </Box>
          </Typography>
          <Typography variant="body2">
            <Box textAlign="right">
              © 2021 Stacy Burris
            </Box>
          </Typography>

        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Footer;