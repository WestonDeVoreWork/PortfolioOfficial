import {
    Link,
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import "./MainPage.css"


const MainPage = () => {
    
    return (
        <div className="mainDivMainPage">
            <Link to="/projects">
                <h1 className='MainPageH1'>WESTON DEVORE</h1>
                <h4 className='MainPageH4'>WEB DEVELOPER</h4>
            </Link>
        </div>
    )
}

export default MainPage;