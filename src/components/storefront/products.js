import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { filterProduct } from '../../store/categories';


const Products = (props) => {
  //console.log('product props---------', props);
  //console.log('product line 11----', props.activateCategory);
  // only called when active category gets called 
  useEffect(() => {
    props.filterProduct();
  }, [props.activateCategory])


  // console.log(props);
  // console.log('PRODUCT:', props);
  // console.log('PROPS.PRODUCT:', props.products.filterProduct);
  // const clickCategory = (name) => {
  //   console.log('activate category', name);
  //   props.setCategory(name);
  //   //props.displayProduct(name);
  // }

  // const reset = () => props.reset();
  console.log('products line 25', props.products);
  return (

    <>
      <div id="products">
        <h1>Products</h1>
        {/* {props.products
          ?
          props.products.map((products, idx) => (
            <div key={idx}>
              <p>Price: {products.price}</p>
              <p>InStock: {products.inStock}</p>
            </div>
          ))
          : ''} */}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  products: state,
  activateCategory: state.activateCategory
});

const mapDispatchToProps = { filterProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Products);