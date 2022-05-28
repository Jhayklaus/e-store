import Header from './components/Header'
import Home from './components/pages/Home'
import FullProducts from './components/pages/FullProducts';
import Product from './components/Product';
import {Route, Routes} from 'react-router-dom'
 
function App() {

  return (

        <>
        <Header />
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<FullProducts/>} />
            <Route path='/products/:id' element={<Product/>}/>
        </Routes>
        </>

  );
}

export default App;
