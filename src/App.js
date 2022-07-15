import Home from './components/pages/Home'
import FullProducts from './components/pages/FullProducts';
import Product from './components/Product';
import {Route, Routes } from 'react-router-dom'
import Stats from './components/pages/Stats';
import Track from './components/pages/Track';
import History from './components/pages/History';

function App() {

  return (

        <>
        <Routes>
            {/* <Route path='/' element={<Index/>} />
            <Route path='/newuser' element={<Register/>} /> */}
            <Route path='/' element={<Home/>} />
            <Route path='/products' element={<FullProducts/>} />
            <Route path='/products/:id' element={<Product/>}/>
            <Route path='/stats' element={<Stats/>}/>
            <Route path='/track' element={<Track/>}/>
            <Route path='/history' element={<History/>}/>
        </Routes>
        </>

  );
}

export default App;
