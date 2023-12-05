import React from "react";
import { Fragment } from "react/cjs/react.production.min";

import Card from "../UI/Card";
import classes from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <Fragment>
      <Card className={classes.joinInformation}>
        <h1>It's EASY to become a Dynamic Lion!</h1>
        
        <div className={classes.information}>
        <p>Thank you for your interest in joining us!</p>
          <p>Please come join us at our weekly meetings!</p>
          <div className={classes.mainInfo}>
            <div className={classes.address}>
              <h2>Address</h2>
              <h3>Golden Corral</h3>
              <h3>4387 W Houston Harte Expy</h3>
              <h3>San Angelo, TX 76903</h3>
            </div>
            <div className={classes.date}>
              <h2>Date & Time</h2>
              <h3>Every Thursday</h3>
              <h3>@ Noon</h3>
            </div>
          </div>
          
          <p>
          We believe in changing the world by serving the needs of our local communities. More than 1.4 million Lions around the world are responding to local and global challenges with kindness and care. Come volunteer with us. You'll be well on your way towards becoming a Dynamic
            Downtown Lion!
          </p>
          <h2 className={classes.motto}>We Serve.</h2>
        </div>
      </Card>
      {/* <Card className={classes.ContactForm}>
        <h1>Questions? Comments? Contact us!</h1>
        <form
          action="contact_form_handler.php"
          id="contact-form"
          method="POST"
          onsubmit="return confirm('Do you really want to submit the form?');"
        >
          <label for="first-name">First name</label>
          <input type="text" id="first-name" required />
          <label for="last-name">Last name</label>
          <input type="text" id="last-name" required />

          <label for="email">E-Mail</label>
          <input type="email" id="email" required />

          <label for="message">Message</label>
          <textarea
            type="text"
            id="message"
            rows="4"
            cols="50"
            // placeholder="Type message here"
            required
          />
          <button type="submit" value="Submit" >Submit</button>
        </form>
      </Card> */}

   {/*    <Card className={classes.ContactForm}>
        <h1>Questions? Comments? Contact us!</h1>
        <div>
          <p>Email: example@gmail.com</p>
          <p>Phone: 555-555-5555</p>
        </div>
      </Card> */}
    </Fragment>
  );
};

export default ContactForm;
