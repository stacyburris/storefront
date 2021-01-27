import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import { reduceCart } from '../../store/categories';
import { addToCart } from '../../store/cart';


function Products(props) {
  console.log('products line 9', props);
  const clickProduct = (products) => {
    console.log('You clicked on product', products.name);
    props.addToCart(products);

  }

  return (
    <>
      <div>
        <h1>Products</h1>
        {props.products.category.productList
          ? props.products.category.productList.map((products, idx) => (
            <div key={idx}>
              <Card className="products">
                <CardActionArea>
                  <CardMedia
                    className="products"
                    image={products.image}
                    title={products.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {products.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {products.description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Price ${products.price}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {products.inStock} In stock!
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button id={idx + 'button'} size="small" color="primary" onClick={() => clickProduct(products)}>
                    Add to Cart!
          </Button>
                  <Button id={idx + 'button2'} size="small" color="primary" onClick={() => clickProduct(products)}>
                    View Details
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
//filterProduct, 
const mapStateToProps = state => ({
  products: state,
  activeCategory: state.activeCategory,
  cart: state,
});
const mapDispatchToProps = { addToCart };

export default connect(mapStateToProps, mapDispatchToProps)(Products);