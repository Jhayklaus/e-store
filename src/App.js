import Header from './components/Header'
import Home from './components/pages/Home'
import FullProducts from './components/pages/FullProducts';
import Product from './components/Product';
import {Route, Routes } from 'react-router-dom'
import Index from './components/pages/Index';
import Register from './components/pages/Register';
 
function App() {

  return (

        <>
        <Routes>
            {/* <Route path='/' element={<Index/>} />
            <Route path='/newuser' element={<Register/>} /> */}
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<FullProducts/>} />
            <Route path='/products/:id' element={<Product/>}/>
        </Routes>
        </>

  );
}

export default App;
