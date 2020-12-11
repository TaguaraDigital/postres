import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalStyle } from './globalStyles';
import { productData, productDataTwo } from './components/Products/data';

import Hero from './components/Hero'
import Products from './components/Products'
import Feature from './components/Feature'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Hero />
      <Products heading='Delicias de Chocolate' data={productData} />
      <Feature />
      <Products heading='Delicias Criollas' data={productDataTwo} />
      <Footer />
    </Router>
  );
}

export default App;
