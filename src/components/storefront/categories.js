import React from 'react';
import { connect } from 'react-redux';
import { setCategory, filterProduct, newState } from '../../store/categories';


function Categories(props) {
  console.log('WHAT ARE MY PROPS-----', props)
  // console.log(props.categoryType);
  const clickCategory = (name) => {
    console.log('CLICK CATEGORY:', name);
    props.setCategory(name);
    // props.filterProduct(name);
  }
  // const reset = () => props.reset();
  //;        
  // : props.categoryType.categoryList.filterProduct((selection) => {
  //   <div>
  //     <p>Price: {selection.price}</p>
  //     <p>In Stock: {selection.inStock}</p>
  //   </div>
  // })}
  // </div>
  /* {(!props.categoryType.categoryList.activateCategory) ?  */
  return (
    <>
      <h1>Categories</h1>
      <div id="category-list">

        {props.categoryType.categoryList.map((category, idx) => (
          <div key={idx}>
            <p>{category.name}</p>
            <p>Description: {category.description}</p>
            <button onClick={() => clickCategory(category.name)}>Pick Category</button>
          </div>
        ))}
      </div>
    </>
  )
}
const mapStateToProps = state => ({
  categoryType: state.category
})

const mapDispatchToProps = { setCategory, filterProduct };

export default connect(mapStateToProps, mapDispatchToProps)(Categories)


