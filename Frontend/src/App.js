import React, {Fragment, useEffect, useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemList from './components/ItemList';
import {getItems} from './Services/Items/index.js';

function App() {

  const [items, setItems] = useState([])

  useEffect(() => {
    const obtenerItems = async () => {
      try{
          const itemsData = await getItems();
          setItems(itemsData);
      } catch(error) {
          console.log(error);
      }
  };
    obtenerItems();
  }, [])

  return (
    <>
    <Fragment>
      <Navbar brand='Todo App'/>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h2 style={{textAlign: 'center'}}>Tareas</h2>
            <ItemList items={items}/>
          </div>
          <div className='col-6'>
            <h2 style={{textAlign: 'center'}}>Agregar nueva tarea</h2>
            <input type='text' placeholder='nombre'></input>
            <button>Agregar</button>
          </div>
        </div>
      </div>
    </Fragment>
    {/* <div>
        <h1 className="titulo">TODO APP</h1>

        <h3>Agregar item nuevo</h3> <br/>
        <input type='text' placeholder='nombre'></input>
        <button>Agregar</button>
        <p>
         
          <Item></Item>
        </p>
    </div> */}
    </>
  );
}

export default App;
