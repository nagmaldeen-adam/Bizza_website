import './App.css';
import Product from './Component/product/index.js';
import Feture from './Component/feture/index.js';
import Footer from './Component/footer/index.js';
import {productData,productDatatow} from './Component/product/data.js'
import {BrowserRouter as Router} from 'react-router-dom';
import Cont from './Component/Cont/index.js'
function App() {
  return (
    <Router>
    <div className="App">
       <Cont />
          <Product heading='choose your best' data={productData}  />
          <Feture />
          <Product heading='sweet treats for you' data={productDatatow}  />
          <Footer />
    </div>
    </Router>
  );
}

export default App;
