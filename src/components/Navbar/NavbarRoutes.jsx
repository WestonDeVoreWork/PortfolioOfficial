import {
    Route,
    Link,
    Routes
} from 'react-router-dom';

import "./Navbar.css"

import About from "../About/About"
import MainPage from "../MainPage/MainPage"
import Projects from "../Projects/Projects"
import ContactMe from '../contactMe/ContactMe';


const NavbarRoutes = () => {
    
    return (
        <div className="mainDiv">
            {/* <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Me</Link></li>
                    <li><Link to="/projects">My Projects</Link></li>
                </ul>
            </div> */}
            <div>
            <Routes>
                <Route path='/MainPage' element={<MainPage />}></Route>
                <Route path='/' element={<MainPage />}></Route>
                <Route path='/about' element={<About />}></Route>
                <Route path='/projects' element={<Projects />}></Route>
                <Route path='/contact' element={<ContactMe />}></Route>

            </Routes>
            </div>
        </div>
    )
}

export default NavbarRoutes;