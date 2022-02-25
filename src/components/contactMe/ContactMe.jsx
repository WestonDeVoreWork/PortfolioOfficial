import React from 'react';
import "./contactMe.css"

const ContactMe = () => {
    
    return (
        <div className='mainDivContactMe'>
        
        <div className="contactMe" id="contact">

        <div className="emailForm">
        <form id="FormIdemailForm" name="simple-contact-form" action="https://formspree.io/f/xvodyoga" method="post">
            <fieldset id="emailForm">
            <br />
            <h4>Contact Me!</h4>
            {/* <label for="full-name" className="form-label">Full Name</label> */}
            <input type="text" class="form-control-lg" name="name" id="full-name" placeholder="First and Last" required="" />
            <br />
            {/* <label for="emailAddress" className="form-label">Email Address</label> */}
            <input type="email" name="_replyto" id="emailAddress" class="form-control-lg" placeholder="email@domain.tld" required="" />
            <br />
            {/* <label for="message" className="form-label">Message</label> */}
            <textarea rows="1" name="message" id="message" class="form-control-lg" placeholder="Your Message." required="" />
            
            </fieldset>
        
            <input type="submit" class="btn btn-primary" value="Submit" />
        </form>
        </div>
        </div>

    </div>   
    )
    
}

export default ContactMe;