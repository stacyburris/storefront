import React from 'react';
import { connect } from 'react-redux';
import { setCategory, filterProduct } from '../../store/categories';

const mapDispatchToProps = { setCategory, filterProduct };


function categories(props) {
  console.log(props);
  console.log('PRODUCT:', props);
  console.log('PROPS.PRODUCT:', props.products.filterProduct);
  // const clickCategory = (name) => {
  //   console.log('activate category', name);
  //   props.setCategory(name);
  //   //props.displayProduct(name);
  // }

  // const reset = () => props.reset();

  return (
    <>
      <div id="products">
        <h1>Products</h1>
        {props.products.activateProducts
          ?
          props.products.activateProducts.map((products, idx) => (
            <div key={idx}>
              <h4>{products.name}</h4>
              <p>{products.description}</p>
              <p>{products.price}</p>
            </div>
          ))
          : ''}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  products: state.activateProducts,
});

export default connect(mapStateToProps, mapDispatchToProps)(categories);