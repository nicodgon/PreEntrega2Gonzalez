import './App.css';
import ItemListContainer from './Components/ItemListContainer';
import NavBar from './Components/NavBar';
import { Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './Components/ItemDetailContainer';

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer title='Todos los productos'/>} />
        <Route path='/category/:category' element={<ItemListContainer title='Productos por categoría'/>} />
        <Route path='/item/:id' element={<ItemDetailContainer title='Detalles del producto'/>} />
        <Route path='*' element={404} />
      </Routes>
    </>
    );
}

export default App;