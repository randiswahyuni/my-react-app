import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductList from "./components/ProductList";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
 
function App() {
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Router>
            <Routes>
              <Route exact path="/" element={<ProductList/>}/>
              <Route exact path="/add" element={<AddProduct/>}/>
              <Route exact path="/edit/:id" element={<EditProduct/>}/>

            </Routes>
          </Router>
        </div>
      </div>
    </div>
  );
}
 
export default App;