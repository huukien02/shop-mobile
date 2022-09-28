import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/Home/Home';
import DetailProduct from './component/DetailProduct/DetailProduct';
import Cart from './component/Cart/Cart';
import Admin from './component/Admin/Admin';
import Login from './component/Login/Login';
import SignUp from './component/SignUp/SignUp';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/km' element={<div>khuyến mãi</div>} />
          <Route path='/tt' element={<div>tin tức</div>} />
          <Route path='/ht' element={<div>hỗ trợ</div>} />
          <Route path='/lh' element={<div>liên hệ</div>} />


          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/admin' element={<Admin />} />


          <Route path="/mycart" element={<Cart />} />
          <Route path="/detail/product/:id" element={<DetailProduct />} />
          <Route path='*' element={<div> <h4>404 NOT FOUND !!</h4></div>} />
        </Routes>



      </BrowserRouter>
    </div>
  );
}

export default App;
