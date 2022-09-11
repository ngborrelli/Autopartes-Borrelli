import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

import NavBar from './components/NavBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer title="Nicolás"/>
      <ItemDetailContainer />

    </div>
  );
}

export default App;
