import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
//import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CssBaseline from '@material-ui/core/CssBaseline';
import { connect } from 'react-redux';
import SimpleCart from '../cart/simplecart';
//import cart from '../../store/cart';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import { CardContent } from '@material-ui/core';

/* <Button color="inherit" onClick={() => clickCart()}>Cart</Button> */

function Header(props) {
  // const clickCart = (cart) => {
  //   props.cart.length(cart)
  // }

  return (
    <div className="Header">
      <CssBaseline />
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            OUR STORE
          </Typography>
          <div id="cart">
            <p>Cart ({props.cart.cart.length})</p>
          </div>
        </Toolbar>

      </AppBar>
      <SimpleCart />
    </div >
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default connect(mapStateToProps)(Header);

