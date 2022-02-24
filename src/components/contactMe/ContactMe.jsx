const ContactMe = () => {
    <div>
        <p>Contact ME!</p>

        <div class="contactMe" id="contact">

        <div className="emailForm">
        <form id="FormIdemailForm" name="simple-contact-form" action="https://formspree.io/f/xvodyoga" method="post">
            <fieldset id="emailForm">

            <label for="full-name" class="form-label">Full Name</label>
            <input type="text" name="name" id="full-name" placeholder="First and Last" required="" />

            <label for="emailAddress" class="form-label">Email Address</label>
            <input type="email" name="_replyto" id="emailAddress" placeholder="email@domain.tld" required="" />

            <label for="message" class="form-label">Message</label>
            <textarea rows="1" name="message" id="message" placeholder="Your Message." required="" />
            
            </fieldset>
        
            <input type="submit" value="Submit" />
        </form>
        </div>
        </div>
    </div>   
}

export default ContactMe;