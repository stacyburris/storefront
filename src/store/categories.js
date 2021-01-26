
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
  activateCategory: ''
};

// actions
export const setCategory = (name) => {
  console.log('SET CATEGORY LINE 22', name);
  return {
    type: 'CATEGORIES',
    payload: name
  }
}

export const filterProduct = (name) => {
  console.log('FILTER PRODUCT LINE 31', name);
  return {
    type: 'FILTER',
    payload: name
  }
}


// switch statement
let newState = (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'CATEGORIES':
      state.activateCategory = action.payload;
      return state;

    case 'FILTER':
      state.filterProduct = action.payload;
      let categoryList = state.categoryList.filter((categories) => categories.category === payload);
      return { ...state, categoryList };
    default:
      return state;
  }
}

export default newState;