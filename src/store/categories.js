
let initialState = {
  categoryList: [
    { name: 'plants', displayName: 'PLANTS', description: 'Multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food.' },
    { name: 'flowers', displayName: 'FLOWERS', description: 'A flower is the reproductive part of flowering plants. Flowers are also called the bloom or blossom of a plant. Flowers have petals' },
  ],
  products: [
    { name: 'Aloe', category: 'plants', price: 20.00, inStock: 2 },
    { name: 'Peace Lily', category: 'plants', price: 35.99, inStock: 10 },
    { name: 'Jade Plant', category: 'plants', price: 12.49, inStock: 3 },
    { name: 'Weeping Fig', category: 'plants', price: .99, inStock: 20 },
    { name: 'Lavender', category: 'flowers', price: .89, inStock: 600 },
    { name: 'Buttercup', category: 'flowers', price: 50.99, inStock: 80 },
    { name: 'Dahlia', category: 'flowers', price: 19.95, inStock: 23 },
    { name: 'Sunflower', category: 'flowers', price: 2.89, inStock: 5 },
  ],
  activateCategory: '',
  filteredProductsArray: []   /// will send back to products page 
};

// actions
export const setCategory = (name) => {
  console.log('SET CATEGORY LINE 22', name);
  return {
    type: 'CATEGORIES',
    payload: name
  }
}

export const filterProduct = () => {
  return {
    type: 'FILTER'
  }
}
// switch statement // reducer listening for all action types
let newState = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'CATEGORIES':
      state.activateCategory = action.payload
      return state;
    // activateCategory: payload


    case 'FILTER':
      let productList = state.products.filter((item) =>
        item.category === payload
      )
      console.log('line 49 inside filter', productList);
      return { productList };
    // return {
    //   ...state,
    //   filteredProductsArray: state.products.filter((categories) =>
    //     categories.category === state.activateCategory)
    //  console.log('Line 46-------', state.filteredProductsArray)

    // return { ...state, filteredProductsArray };
    default:
      return state;
  }
}


export default newState;