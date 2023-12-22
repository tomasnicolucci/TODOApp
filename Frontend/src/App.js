import './App.css';
import Item from './components/Item/Item';
import itemsJson from './items.json';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  let items = itemsJson;
  return (
    <div>
        <h1 className="titulo">TODO APP</h1>

        <h3>Agregar item nuevo</h3> <br/>
        <input type='text' placeholder='nombre'></input>
        <button>Agregar</button>
        <p>
          {items.map(item =>
              <Item title={item.title}></Item>  
          )}
        </p>
    </div>
  );
}

export default App;
