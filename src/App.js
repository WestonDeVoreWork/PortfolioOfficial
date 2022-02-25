import {BrowserRouter as Router} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './components/MainPage/MainPage';
import Navbar from './components/Navbar/Navbar';
import MySkillset from './components/MySkillset/MySkillset';
import NavbarRoutes from './components/Navbar/NavbarRoutes';
import TempCode from './components/Navbar/TempCode';

//

function App() {
  return (
    <div className="App">
    
    {/* <Router>
      <Navbar/>
    </Router> */}
    <Router>
    <NavbarRoutes/>
    </Router>

    {/* <Router>
      <MainPage />
    </Router> */}

    {/* <MySkillset /> */}

    {/* <TempCode /> */}

    </div>
  );
}

export default App;
