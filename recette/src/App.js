import logo from './logo.svg';
import './App.css';
import './components/FoodList';
import FoodList from './components/FoodList';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import { Navbar } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <FoodList/>
    </div>
  );
}

export default App;
