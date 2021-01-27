import Header from './components/header/header';
import Footer from './components/footer/footer';
import Contact from './components/contact/contact';
import StoreFront from './components/storefront/storefront';

function App() {
  return (
    <div className="App">
      <Header />
      <StoreFront />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
