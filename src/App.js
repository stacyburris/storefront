import Header from './components/header/header';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import Categories from './components/storefront/categories';
//import Products from './components/storefront/products';

function App() {
  return (
    <div className="App">
      <Header />
      <Categories />
      {/* <Products /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
