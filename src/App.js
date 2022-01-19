import './App.css';
import './components/FoodList';
import FoodList from './components/FoodList';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import NavFooter from './components/NavFooter';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <FoodList/>
      <NavFooter/>
    </div>
  );
}

export default App;
