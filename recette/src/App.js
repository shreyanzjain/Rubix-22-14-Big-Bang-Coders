import logo from './logo.svg';
import './App.css';
import './components/FoodList';
import FoodList from './components/FoodList';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <FoodList/>
    </div>
  );
}

export default App;
