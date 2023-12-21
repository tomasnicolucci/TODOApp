
import './App.css';
import Item from './Item';
import itemsJson from './items.json';

function App() {
  let items = itemsJson;
  return (
    <div className="App">
      <header className="App-header">
        {items.map(item =>
          <Item title={item.title}></Item>  
        )}
      </header>
    </div>
  );
}

export default App;
