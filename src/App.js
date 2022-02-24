import {BrowserRouter as Router} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar/Navbar';
import NavbarRoutes from './components/Navbar/NavbarRoutes';

//

function App() {
  return (
    <div className="App">
    
    <Router>
      <Navbar/>
    </Router>

    {/* <Router>
      <NavbarRoutes />
    </Router> */}
    </div>
  );
}

export default App;
