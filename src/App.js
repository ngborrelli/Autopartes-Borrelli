import AppRouter from './app/AppRouter';
import './App.css';
import Provider, { CartContext } from './app/CartContext';

function App() {
  return (
    <Provider>
      <div className="App">
        <AppRouter />
      </div>
    </Provider>
  );
}

export default App;
