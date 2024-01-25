
import Nav from './component/Nav';
import Product from './component/Products'
import './App.css';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import PrivateComponent from './component/PrivateComponent';
import SignUp from './component/SignUp';
import LogIn from './component/LogIn';
import ProductList from './component/ProductList';

function App() {
  return (
    <BrowserRouter>
    <Nav></Nav>
 <Routes>
    <Route element={<PrivateComponent/>}>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/add" element={<Product/>}/>
      <Route path="/update" element={<h1>product updating</h1>}/>
      <Route path="/logout" element={<h1>logout</h1>}/>
      <Route path="/profile" element={<h1>Profile</h1>}/>
      </Route>
      <Route path="/SignUp" element={<SignUp/>}/>
      <Route path="/LogIn" element={<LogIn/>}/>
      
     
      </Routes>
    </BrowserRouter>


  )
}

export default App;
