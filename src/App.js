
import './App.css';
import ProductLis from './components/ProductLis';
import {products}from './data'
function App() {
  return (
    <div className="App">
     <ProductLis list={products} hi="hello"/>
    </div>
  );
}

export default App;
