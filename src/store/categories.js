import products from "../components/storefront/products";

let initialState = {
  categoryList: [
    {
      name: 'plants',
      displayName: 'PLANTS',
      //description: 'Multicellular organisms in the kingdom Plantae that use photosynthesis to make their own food.'
    },
    {
      name: 'flowers',
      displayName: 'FLOWERS',
      // description: 'A flower is the reproductive part of flowering plants. Flowers are also called the bloom or blossom of a plant. Flowers have petals'
    },
  ],
  products: [
    {
      name: 'Aloe',
      category: 'plants',
      description: 'Stemless or very short-stemmed plant',
      price: 20.00,
      inStock: 2
    },
    {
      name: 'Peace Lily',
      category: 'plants',
      description: 'Attractive indoor foliage plants that also produce showy white flowers',
      price: 35.99,
      inStock: 10
    },
    {
      name: 'Jade Plant',
      category: 'plants',
      description: 'A branched, succulent shrub commonly grown indoors',
      price: 12.49,
      inStock: 3
    },
    {
      name: 'Weeping Fig',
      category: 'plants',
      description: 'Elegant plant with slender branches that arch gracefully from a light gray trunk, with dense, glossy dark leaves that may shed when the plant is stressed.',
      price: .99,
      inStock: 20
    },
    {
      name: 'Marigold',
      category: 'flowers',
      description: 'They have cheery blooms that showcase a spectrum of yellow, orange and red shades',
      price: .89,
      inStock: 600
    },
    {
      name: 'Buttercup',
      category: 'flowers',
      description: 'It has yellow, shiny petals, and grows wild in many places. It is poisonous to eat for humans and cattle, but when dry the poison is not active',
      price: 50.99,
      inStock: 80
    },
    {
      name: 'Dahlia',
      category: 'flowers',
      description: ' They are tuberous perennials, and most have simple leaves that are segmented and toothed or cut. The compound flowers may be white, yellow, red, or purple in colour.',
      price: 19.95,
      inStock: 23
    },
    {
      name: 'Sunflower',
      category: 'flowers',
      description: 'Tall, yellow and bright, but this classic sunflower imagery simply doesn’t do the plant justice. Sunflowers are dynamic because they grow in various shapes, sizes and colors. ',
      price: 2.89,
      inStock: 5
    },
  ],
  activeCategory: null,
  filteredProductsArray: []   /// will send back to products page 
};
// actions
export const setCategory = (name) => {
  return {
    type: 'SWITCH',
    payload: name
  };
};
export const filterProduct = (name) => {
  //console.log(`here is the payload: ${name}`)
  return {
    type: 'FILTER',
    payload: name
  };
};

export const reduceCart = (name) => {
  console.log('here is the payload:', name);
  return {
    type: 'REDUCE',
    payload: name,
  };
};

export const increaseCart = (name) => {
  console.log('here is the payload:', products);
  return {
    type: 'INCREASE',
    payload: name,
  };
};


// switch statement // reducer listening for all action types
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case 'SWITCH':
      state.activeCategory = payload
      return state;
    case 'FILTER':
      let productList = state.products.filter((item) =>
        item.category === payload
      );
      return { ...state, productList };
    //break;
    case 'REDUCE':
      let isCount = state.products.map((item) => {
        if (item.name === payload) {
          item.inStock--;
          console.log(`${item.name} now has ${item.inStock} in stock`);

        }
        return item
      })
      return { ...state, isCount }
    //break;
    case 'INCREASE':
      let increaseCount = state.products.map((item) => {
        if (item.name === payload) {
          item.inStock++;
          console.log(`${item.name} now has ${item.inStock} in stock`);

        }
        return item;
      })
      return { ...state, increaseCount };
    //break;
    default:
      return state;
  }
}

