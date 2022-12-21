import './App.css';
import NavBar from './componentes/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <ItemListContainer/>
    </div>
  );
}

export default App;
