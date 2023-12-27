import React, {Fragment, useEffect, useState} from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navbar from './components/Navbar/Navbar.jsx';
import ItemList from './components/ItemList';
import Form from './components/Form.jsx';
import {getItems} from './Services/Items/index.js';

function App() {

  const [item, setItem] = useState({
    title: ''
  })

  const [items, setItems] = useState([])

  const [update, setUpdate] = useState(false)

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
    setUpdate(false);
  }, [update])

  return (
    <>
    <Fragment>
      <Navbar brand='Todo App'/>
      <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <h2 style={{textAlign: 'center'}}>Tareas</h2>
            <ItemList item={item} setItem={setItem} items={items} setUpdate={setUpdate}/>
          </div>
          <div className='col-6'>
            <h2 style={{textAlign: 'center'}}>Agregar nueva tarea</h2>
            <Form item={item} setItem={setItem}/>
          </div>
        </div>
      </div>
    </Fragment>
    
    </>
  );
}

export default App;
