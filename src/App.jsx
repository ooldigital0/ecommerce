import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes } from 'react-router-dom';

function App() {
    return (
      <div className='App'>
        <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemDetailContainer />}/>
          <Route path='/category/:categoryId' element={<ItemDetailContainer />}/>
          <Route path='/item/:itemId' element={ <ItemDetailContainer />}/>
          <Route path='*' element={<h1>404 NOT FOUND</h1>}/>
        </Routes>
        </BrowserRouter>
        </div>
    );
}
        //<ItemListContainer greeting={'Bienvenidos'}/>
        //<ItemDetailContainer/>
        //<ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada', quantity)}/>
      //</div>
 // )
//}

export default App
