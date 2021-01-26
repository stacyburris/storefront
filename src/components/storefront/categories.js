import React from 'react';
import { connect } from 'react-redux';
import { setCategory, filterProduct, newState } from '../../store/categories';

const mapDispatchToProps = { setCategory, filterProduct };


function categories(props) {
  console.log(props)
  console.log(props.categoryType);

  const clickCategory = (name) => {

    console.log('CLICK CATEGORY:', name);
    props.setCategory(name);
    props.filterProduct(name);
  }

  // const reset = () => props.reset();

  return (
    <>
      <h1>Categories</h1>
      <div id="category-list">
        {(!props.categoryType.categoryList.activateCategory) ? props.categoryType.categoryList.map((category, idx) => (
          <div key={idx}>
            <p>{category.name}</p>
            <p>Description: {category.description}</p>
            <button onClick={() => clickCategory(category.name)}>Pick Category</button>
          </div>
        ))
          : props.categoryType.categoryList.filterProduct((selection) => {
            <div>
              <p>Price: {selection.price}</p>
              <p>In Stock: {selection.inStock}</p>
            </div>
          })}
      </div>
    </>
  )
}

const mapStateToProps = state => ({
  categoryType: state.activateCategory,
})

export default connect(mapStateToProps, mapDispatchToProps)(categories);