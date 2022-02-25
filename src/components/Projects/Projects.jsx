import {BrowserRouter as Router} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./projects.css"
import Navbar from '../Navbar/Navbar';

const Projects = () => {
    
    return (
        <div className="mainDivProjects">
            <Navbar />

            <section className="p-5">
          <div className="container">
            <h1 className="text-center pb-3" id="TextPreviousWorks">PREVIOUS WORKS</h1>
            <div className="row">
                <div className="col">
                    
                    <div className="card" style={{"width": "18rem"}}>
                        <a href='https://gwtd.herokuapp.com/' target={"_blank"}>
                            <img src="https://i.ibb.co/gSLzT34/Lemon-Lot-Screen-Shot.jpg" alt="Lemon-Lot-Screen-Shot" className="card-img-top" />
                            <div className="card-body">
                            <h5 className="card-title">Lemon Lot</h5>
                            <p className="card-text">Lemon Lot is an app designed for Veterans who are being stationed overseas and need to sell their car quickly, or for those who are getting back and need a car to get back to normal life.</p>
                            </div>
                        </a>
                      </div>

                </div>

                <div className="col">

                    <div className="card" style={{"width": "18rem"}}>
                    <a href='https://dj-react-click-n-cook.herokuapp.com/login' target={"_blank"}>
                        <img src="https://i.ibb.co/BcwPycw/Click-NCook.jpg" alt="Click-NCook" className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title">Click N Cook!</h5>
                          <p className="card-text">This was a site my team and I designed within the span of about 2 weeks.</p>
                        </div>
                        </a>
                      </div>

                </div>



                <div className="col">

                    <div className="card" style={{"width": "18rem"}}>
                    <a href='https://westondevorework.github.io/APIChallenge/' target={"_blank"}>
                        <img src="https://i.ibb.co/M6bFG8X/First-Api-Challenge.jpg" alt="First-Api-Challenge" className="card-img-top" />
                        <div className="card-body">
                          <h5 className="card-title">Cat Facts API</h5>
                          <p className="card-text">This was the first ever API I built out.</p>
                        </div>
                    </a>
                      </div>
                </div>

                
                
            </div> 
          </div>
      </section>

            


        </div>
    )
}

export default Projects;