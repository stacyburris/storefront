import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { removeFromCart } from '../../store/cart'
import { increaseCart } from '../../store/categories'


function SimpleCart(props) {

  const handleClick = item => {
    props.removeFromCart(item.name)
    props.increaseCart(item.name);
  }

  return (
    <>
      <div id="cart-content">
        {props.cart.length >= 1 ? props.cart.map((item, idx) => (
          <div key={idx}>
            <Card className="cart-content">
              <CardActionArea>
                <CardMedia
                  className="cartStuff"
                  title='Remove Items'
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {item.description}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Price ${item.price}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button id={idx + 'button'} size="small" color="primary" onClick={() => handleClick(item)}>
                  Remove from Cart
          </Button>
              </CardActions>
            </Card>

          </div>
        ))
          : ''}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.cart,
});
const mapDispatchToProps = { removeFromCart, increaseCart };


export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);

